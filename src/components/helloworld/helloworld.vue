<template>
  <div class="helloworld">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class HelloWorld extends Vue {
  private msg = "我是helloworld组件的数据";
  private created(): void {
    console.log("helloworld created");
  }
  private mounted(): void {
    console.log("helloworld mounted");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.helloworld {
}
</style>