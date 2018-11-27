<template>
  <div class="wrap">

    <van-tabs v-model="active" @click="onClick" sticky v-if="type==='2'">
      <van-tab title="服务">
        <p class="notCollect" v-if="serverList.length===0">暂无收藏</p>
        <server-card v-else :Data='item' v-for="item in serverList" :key="item.id" :collect="true" @refresh='request'
                     v-on:click.native="goDetails(item.id)"></server-card>
      </van-tab>
      <van-tab title="美师">
        <p class="notCollect" v-if="staffList.length===0">暂无收藏</p>
        <staff-card v-else :Data='item' v-for="item in staffList" :collect="true" @refresh='request'
                    :key="item.id"></staff-card>
      </van-tab>
    </van-tabs>
    <div v-if="type=='1'">
    <p class="notCollect" v-if="productList.length===0">暂无收藏</p>
    <product-card v-else :Data="item" v-for="item in productList" :collect="true" @refresh='request' :key="item.id"
                  ></product-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "meCollect",
    data() {
      return {
        type: this.$route.params.type,  // 1 商品 2 服务
        active: undefined,
        productList: [],
        staffList: [],
        serverList: []
      }
    },
    mounted() {
      this.request()
    },
    methods: {
      goDetails(id) {
        this.$router.push({name: 'detail', params: {type: '2', id: id}})
      },
      request() {
        console.log(this.type)
        let status
        if (this.type == '1') {//商品
          status = 1
        } else if (this.active === 0) {//服务
          status = 2
        } else {//美师
          status = 3
        }
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=87&uk=TWPBNNP9ZBVI9VOPE0&act=collectionlist',
          type: 'get',
          data: {
            type: status
          }
        }).then((res) => {
          if (res.code === 100) {
            switch (status) {
              case 1:
                this.productList = res.data.list;
                break
              case 2:
                this.serverList = res.data.list;
                break;
              case 3:
                this.staffList = res.data.list;
                break;
            }
          }
        })
      },
      onClick(index, title) {
        this.request()
      }
    }
  }
</script>

<style class="scss" scoped>
  .wrap {
    width: 100%;
    height: 100%;
    background-color: white;
  }

  .notCollect {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin-top: 90px;
  }
</style>
