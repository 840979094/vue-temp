<template>
  <div class="user">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class HelloWorld extends Vue {
  private msg = "我是user组件的数据";
  private created(): void {
    console.log("user created");
  }
  private mounted(): void {
    console.log("user mounted");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.user {
}
</style>