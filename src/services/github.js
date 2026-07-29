/* eslint-disable */
import request from "../helpers/request";
import { fetchDownloadsCount } from "./sourceforge";
import { humanDate, humanSize } from "../helpers/utils";

const baseURL = "https://raw.githubusercontent.com/ProjectSakura";

// Current OTA branch (matches the branch name in ProjectSakura/OTA, NOT the
// "16.3"-style branches used in device/vendor/manifest repos — OTA only has
// 11, 14, 16, so keep this in sync with that repo specifically).
const OTA_BRANCH = "16";

const fetchDevices = async () => {
  try {
    const res = await request(`${baseURL}/OTA/${OTA_BRANCH}/devices.json`);
    const brands = [];
    const devices = [];

    res.forEach(
      device => !brands.includes(device.brand) && brands.push(device.brand),
    );

    brands.forEach(brand => devices.push({
      name: brand,
      devices: res.filter(device => device.brand === brand),
    }));

    return devices;
  } catch (e) {
    console.log("devices fetch failed");
  }
};

const fetchBuilds = async (codename) => {
  try {
    const res = await request(`${baseURL}/OTA/${OTA_BRANCH}/website/${codename}.json`);
    const promises = res.response
      .map(async (build) => {
        const downloads = await fetchDownloadsCount(build.filename, codename);
        const changelog = await fetchChangelog(build.filename, codename);

        return {
          ...build,
          android: Number(OTA_BRANCH),
          size: humanSize(build.size),
          datetime: humanDate(build.datetime),
          md5: build.id,
          downloads,
          changelog,
        };
      })
      .reverse();
    
    try {
      const res2 = await request(`${baseURL}/OTA/11/${codename}.json`);
      console.log(res2);
      const promises1 = res2.response
        .map(async (build) => {
          const downloads = await fetchDownloadsCount(build.filename, codename);
          const changelog = await fetchChangelog10(build.filename, codename);

          return {
            ...build,
            android: 11,
            size: humanSize(build.size),
            datetime: humanDate(build.datetime),
            md5: build.id,
            downloads,
            changelog,
          };
        })
        .reverse();
      const newarr = promises.concat(promises1);

      console.log(promises);
      return await Promise.all(newarr);
    } catch (e) {
      console.log(e.message);
    }

    return await Promise.all(promises);
  } catch (e) {
    return [];
  }
};

const fetchChangelog = async (filename, codename) => {
  try {
    const res = await request(
      `${baseURL}/OTA/${OTA_BRANCH}/changelog/changelog_${codename}.txt`,
      false,
    );

    return res.includes("404") ? "Changelog data no found" : res;
  } catch (err) {
    return "Changelog data no found";
  }
};

const fetchChangelog10 = async (filename, codename) => {
  try {
    const res = await request(
      `${baseURL}/OTA/11/changelog/changelog_${codename}.txt`,
      false,
    );

    return res.includes("404") ? "Changelog data no found" : res;
  } catch (err) {
    return "Changelog data no found";
  }
};
const fetchROMChangelog = async () => {
  const res = await request(
    `https://raw.githubusercontent.com/ProjectSakura/OTA/${OTA_BRANCH}/changelog/rom_changelog.txt`,
    false,
  );
  return res;
};

export { fetchDevices, fetchBuilds, fetchROMChangelog };
