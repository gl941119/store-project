<template>
  <ul class="list">
    <li v-for="item,index in listData" :key="index" class="list-li">
      <cell :Data="item"></cell>
      <div class="fill"></div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "com-list",
    props: ['listData'],
    data() {
      return {}
    },
    methods: {
      clickHandle(url) {
        console.log(123)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list {
    background: rgba(255, 255, 255, 1);
    &-li {
      padding: 0 15px;
      .fill {
        width: 100%;
        height: 1px;
        background: rgba(216, 216, 216, 1);
      }
    }
  }



</style>
