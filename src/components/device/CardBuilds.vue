<template>
  <div>
    <div class="row center">
      <div class="col s12 m12">
        <ul class="collapsible collapsible-builds">
          <li
            v-for="build in deviceBuilds"
            :key="build.id"
            @click="setBuild(build.filename)"
            class="buildcoll"
          >
            <div>Android {{ build.android }}</div>
            <div class="collapsible-header white-text cardColor">
              <i class="material-icons">system_update</i>
              <span style="width: 100%">{{ build.filename }}</span>
              <i class="material-icons">arrow_drop_down</i>
            </div>

            <div class="collapsible-body">
              <p class="label">details</p>
              <div class="buildinfo">
                <div class="deviceprop">
                  <p>Filename: {{ build.filename }}</p>
                </div>
                <div class="deviceprop">
                  <p>Date: {{ build.datetime }}</p>
                </div>
                <div class="deviceprop">
                  <p>Size: {{ build.size }}</p>
                </div>
                <div class="deviceprop">
                  <p>MD5: {{ build.md5 }}</p>
                </div>
                <div class="deviceprop">
                  <p>Version: {{ build.version }}</p>
                </div>
                <div class="deviceprop">
                  <p>Downloads: {{ build.downloads }}</p>
                </div>
              </div>

              <div class="buildChangelog">
                <p class="label">Device Changelog</p>
                <pre>{{ build.changelog }}</pre>
              </div>
              <div class="buildbuttons">
                <a
                  href="https://projectsakura.me/blog/#/donation"
                  target="_blank"
                  class="btn"
                  >Donate To ROM</a
                >
                <a
                  v-on:click="download(build.filename, device.codename)"
                  download
                  target="_blank"
                  class="btn"
                  >Download</a
                >
              </div>
            </div>
          </li>
        </ul>
        <Loading v-if="$store.state.buildLoader" />
      </div>
    </div>
  </div>
</template>
<script>
import Loading from "../common/Loading.vue";
import { generateDownloadURL } from "../../services/sourceforge";

export default {
  name: "CardBuilds",
  components: {
    Loading,
  },
  updated() {
    if (this.$route.params.filename) {
      this.$store.dispatch(
        "getIndexOfExpandedBuild",
        this.$route.params.filename,
      );
      document.title = this.$route.params.filename
        || `Download ProjectSakura for ${this.$route.params.codename}`;
    }
    this.openBuild(this.$store.state.expandedBuild);
    this.$store.dispatch("getIndexOfExpandedBuild", "");
  },
  methods: {
    setBuild(obj) {
      const elems = document.querySelector(".collapsible-builds");
      const instances = M.Collapsible.init(elems);

      instances.options.onOpenEnd = () => this.$router.push({ name: "filename", params: { filename: obj } });

      instances.options.onCloseEnd = () => this.$router.replace({ name: "filename", params: { filename: null } });
    },
    openBuild(index) {
      if (!isNaN(index) && index !== -1) {
        const elems = document.querySelector(".collapsible-builds");
        const instances = M.Collapsible.init(elems);
        instances.open(index);
      }
    },
    download(file, codename) {
      M.toast({ html: "Starting Download... Please Wait..." });
      location.href = generateDownloadURL(file, codename);
    },
  },
  computed: {
    deviceBuilds() {
      return this.$store.state.builds;
    },
    device() {
      return this.$store.state.device;
    },
  },
};
</script>
