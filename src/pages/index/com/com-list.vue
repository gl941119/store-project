<template>
  <ul class="list">
    <li v-for="(item,index) in data"
        :key="item.id"
        @click="handleClick(item.id)"
        class="list-li">
      <img :src="item.thumb" alt="" class="list-li-img">
      <p class="list-li-name">{{item.name}}</p>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "com-list",
    props: ['data'],
    methods: {
      handleClick(id) {
        this.$router.push({name: 'list', params: {id: id}})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list {
    height: 180px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: space-around;
    flex-wrap: wrap;
    background-color: #ffffff;
    &-li {
      width: 25%;
      height: 90px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &-img {
        width: 45px;
        height: 45px;
      }
      &-name {
        margin-top: 6px;
        font-size: 12px;
        color: rgba(102, 102, 102, 1);
        line-height: 17px;
      }
    }
  }

</style>
