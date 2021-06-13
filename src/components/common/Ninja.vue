<template>
  <div>
    <a
      href="https://www.codingninjas.com/courses/online-android-Development-kotlin?utm_source=projectsakura&utm_medium=mediabuy&utm_campaign=android-development
"
      target="_blank"
    >
      <div class="mobile_view">
        <img :src="require('../../mobilead.png')" :width="width" alt="logo" />
      </div>
      <div class="pc_view">
        <img :src="require('../../pcad.png')" :width="width" alt="logo" />
      </div>
    </a>
  </div>
</template>
<script>
export default {
  props: ["width"],
  name: "Ninja",
};
</script>
<style>
.mobile_view {
  display: none;
}

@media (max-width: 468px) {
  .pc_view {
    display: none;
  }

  .mobile_view {
    display: block;
  }
}
</style>
