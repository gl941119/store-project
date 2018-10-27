<template>
  <ul class="selectBar">
    <li @click="clickHandle('1')">综合</li>
    <li @click="clickHandle('2')">销量</li>
    <li @click="clickHandle('3')">价格</li>
  </ul>
</template>

<script>
  export default {
    name: "selectBar",
    methods: {
      clickHandle(val) {
        this.$emit('emitSort', val);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .selectBar {
    padding: 0 7px;
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
    li:hover {
      color: #E4393B;

      background:url("../assets/image/selectBar.png") no-repeat;
      background-position: 75px center;
      background-size: 8px 5px;

    }
  }
</style>
