<template>
  <div class="wrap">
    <dl v-for="item,index in goodslist" :key="index">
      <dt>{{item.name}}</dt>
      <dd>
        <div v-for="val in item.list" :key="val.id" v-on:click="goDetail(val.id)">
          <img :src="val.img" alt="">
          <p>{{val.name}}</p>
        </div>
      </dd>
    </dl>

  </div>
</template>

<script>
  export default {
    name: "series",
    data() {
      return {
        goodslist: null,
      }
    },
    updated(){
      this.$store.commit('setClassify_hover',this.cate)//更改hover颜色
    },
    mounted() {
      this.request()
    },
    computed: {
      cate: function () {
        return this.$store.state.ClassifyId
      }
    },
    watch: {
      cate: function (val) {
        this.request()
      }
    },
    methods: {
      request() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=85&act=category',
          type: 'get',
          data: {
            type: 3,
            cate: this.cate
          }
        }).then(res => {
          this.goodslist = res.data.goodslist
        })
      },
      goDetail(id){
        this.$router.push({name:'detail',params:{type:'1',id:id}})
      }

    }
  }
</script>

<style lang="scss" scoped>


  .wrap {

    > dl {
      margin-top: 15px;
      width: 100%;

      > dt {
        margin-left: 15px;
        height: 21px;
        font-size: 15px;
        font-family: PingFangSC-Regular;
        color: rgba(60, 60, 60, 1);
        line-height: 21px;
      }
      > dd {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        align-content: flex-start;
        > div {
          margin-top: 7px;
          margin-left: 15px;
          width: 78px;
          height: 94px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;

          > img {
            width: 78px;
            height: 69px;
          }
          > p {
            width: 100px;
            height: 17px;
            font-size: 12px;
            font-family: PingFangSC-Regular;
            color: rgba(60, 60, 60, 1);
            display: block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: center;
          }

        }
      }
    }
  }

</style>
