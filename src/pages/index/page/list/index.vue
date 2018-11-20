<template>
  <div>

    <select-bar @emitSort="setSort"></select-bar>
    <div class="main" >
    <product-card v-for="item in Data" :key="Data.id" :Data="item" ></product-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "list",
    data() {
      return {
        Data: null,
        sort:1,
        catename:undefined
      }
    },
    mounted() {
      this.request()
    },
    methods: {
      request() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=85&act=catelist',
          type: 'get',
          data: {
            cate: this.$route.params.id,
            sort: this.sort,
          }
        }).then((res) => {
          this.Data = res.data.goodslist
          this.catename = res.data.catename
        })
      },

      setSort(val) {
        this.sort =  val
        this.request()
      }
    }

  }
</script>

<style lang="scss" scoped>
  .main{
    margin-top: 52px;
  }
</style>
