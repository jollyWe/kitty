<template>
  <div>
    Index
    <svg-icon name="bussiness-man"></svg-icon>
  </div>
</template>

<script>
export default {
  computed: {},
  created() {
    this.$api.requseLogin.login(2).then(res => {
      console.log(res);
    });
  },
  methods: {}
};
</script>

<style scoped></style>
