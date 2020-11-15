<template>
  <div class="home">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class HelloWorld extends Vue {
  private msg = "我是home组件的数据";
  private created(): void {
    console.log("home created");
  }
  private mounted(): void {
    console.log("home mounted");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.home {
}
</style>