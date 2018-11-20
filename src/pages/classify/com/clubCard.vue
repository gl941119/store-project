<template>
  <div class="wrap">
    <div class="wrap-li" v-for="item in cards" :key="item.id" v-on:click="goclubCardDetail(item.id)">
      <img :src="item.imgurl" alt="">
      <p>{{item.name}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        cards: null
      }
    },
    mounted() {
      this.$store.commit('setClassify_hover', '0')
      this.request()
    },
    methods: {
      request() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=85&act=category',
          type: 'get',
          data: {
            type: 1
          },
        }).then((res) => {
          this.cards = res.data.cards
        })
      },
      goclubCardDetail(id) {
        this.$router.push({name: 'clubCardDetail', params: {id: id}})
      }

    }
  }
</script>

<style lang="scss" scoped>
  .wrap {
    width: 295px;
    padding: 16px 15px 0 16px;
    overflow: hidden;
    &-li {
      float: left;
      margin-left: 15px;
      margin-top: 10px;
      width: 70px;
      height: 93px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      > img {
        width: 75px;
        height: 69px;
      }
      > p {
        text-align: center;
        width: 80px;
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 12px;
        color: rgba(60, 60, 60, 1);
        line-height: 17px;
      }
    }

  }
</style>
