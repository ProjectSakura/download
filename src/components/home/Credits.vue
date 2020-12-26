<template>
  <div>
    <div v-for="credit in credits" :key="credit.value" class="credits">
      {{credit.title}}
      <a :href="credit.url">{{credit.value}}</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Credits',
  data() {
    return {
      credits: [
        {
          title: 'Project maintained by',
          value: 'LordShenron and Arun Teltia',
          url: 'https://github.com/LordShenron',
        },
        {
          title: 'Website Originally developed by',
          value: 'andersonmendess',
          url: 'https://github.com/andersonmendess',
        },
      ],
    };
  },
};
</script>
