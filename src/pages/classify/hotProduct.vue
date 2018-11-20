<template>
  <div>
    <navbar :name="'热门商品'"></navbar>
    <div>
      <ul class="navbar">
        <li>综合</li>
        <li>销量</li>
        <li>价格</li>
      </ul>
      <div class="fill"></div>
      <product-card class="product-card"></product-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "hotProduct"
  }
</script>

<style lang="scss" scoped>
  .navbar {
    padding: 0 7px;
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
    }
  }
  .fill {
    width: 375px;
    height: 1px;
    background: rgba(216, 216, 216, 1);
  }
  .product-card {
    margin-top: 15px !important;
  }
</style>
