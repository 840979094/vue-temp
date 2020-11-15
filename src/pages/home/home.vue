<template>
  <div class="home">
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  props: {},
  data() {
    return {
      message: "Hello home",
    };
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {},
};
</script>

<style scoped>
.home {
}
</style>