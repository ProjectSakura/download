<template>
  <div>
    <div class="mobile_view">
      <img :src="require('../../mobilead.png')" :width="width" alt="logo" />
    </div>
    <div class="pc_view">
      <img :src="require('../../pcad.png')" :width="width" alt="logo" />
    </div>
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