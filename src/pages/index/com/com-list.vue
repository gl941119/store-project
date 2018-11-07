<template>
  <ul class="list">
    <li v-for="(item,index) in data"
        :key="item.id"
        @click="handleClick(item.id)"
        class="list-li">
      <div class="list-li-circle">
        <img :src="item.thumb" alt="">
      </div>
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
      justify-content: space-around;
      align-items: center;
      &-circle {
        width: 45px;
        height: 45px;
        background: rgba(247, 247, 247, 1);
        border-radius: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
        > img {
          min-width: 19px;
          max-width: 40px;
          min-height: 25px;
          max-height: 50px;
          height: 45px;
          line-height: 83px;
        }
      }
      &-name {
        font-size: 12px;
        color: rgba(102, 102, 102, 1);
        line-height: 17px;
      }
    }
  }

</style>
