<template>
  <img :src="flag" width="30px" alt="logo" />
</template>
<script>
export default {
  props: ["width", "country"],
  name: "Flag",
  computed: {
    flag: function() {
      const flags = {
        BR:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-brazil_1f1e7-1f1f7.png",
        IND:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-india_1f1ee-1f1f3.png",
        US:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-united-states_1f1fa-1f1f8.png",
        UKR:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-ukraine_1f1fa-1f1e6.png",
        SL:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-sri-lanka_1f1f1-1f1f0.png",
        RUS:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-russia_1f1f7-1f1fa.png"
      };

      if (flags[this.country]) {
        return flags[this.country];
      } else {
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Noflag.PNG/120px-Noflag.PNG";
      }
    }
  }
};
</script>
<style>
img {
  padding-left: 5px;
  padding-top: 5px;
}
</style>
