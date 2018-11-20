<template>

  <ul class="selectBar">
    <li @click="clickHandle('1')" v-bind:class="{li_hover: hover=== '1' }">综合</li>
    <li @click="clickHandle('2')" v-bind:class="{li_hover: hover=== '2' }">销量</li>
    <li @click="clickHandle('3')" v-bind:class="{li_hover: hover=== '3' }">价格</li>
  </ul>
</template>

<script>
  export default {
    name: "selectBar",
    data(){
      return{
        hover:'1'
      }
    },
    methods: {
      clickHandle(val) {
        this.hover = val
        this.$emit('emitSort', val);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .selectBar {
    width: 100%;
    background-color: white;
    position: fixed;

    top: 0;
    z-index: 100;
    padding: 0 7px;
    border-top: 1px solid #D8D8D8;
    border-bottom: 1px solid #D8D8D8;
    display: flex;
    justify-content: space-around;
    > li {
      text-align: center;
      font-weight: 500;
      width: 115px;
      height: 40px;
      font-size: 16px;
      color: #333333;
      line-height: 40px;

    }
    .li_hover {
      color: #E4393B;
      background:url("../assets/image/selectBar.png") no-repeat;
      background-position: 75px center;
      background-size: 8px 5px;

    }
  }
</style>
