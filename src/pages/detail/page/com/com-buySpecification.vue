<template>
  <div class="Specification">
    <div class="product">
      <img :src="goods.thumb" alt="" class="product-left">
      <div class="product-right">
        <span class="my-price">${{goods.marketprice}}</span>
        <span class="my-subPrice">{{goods.productprice}}</span>
        <div class="product-right-content">
          <span class="product-right-content-left">已选</span>
          <span class="product-right-content-right">{{goods.title}}</span>
        </div>
      </div>
    </div>
    <div class="select" ref="outer">
      <div>
        <button :class="{Btn:true,Btn_not:!one.stock,Btn_hover:one.id===oneSel}" v-for="one in goods_spec"
                :key='one.id'
                v-on:click="onclick(one,2)">{{one.title}}
        </button>
      </div>
      <div>
        <button :class="{Btn:true,Btn_not:!two.stock,Btn_hover:two.id===twoSel}" v-for="two in twoData"
                :key="two.id"
                v-on:click="onclick(two,3)">{{two.title}}
        </button>
      </div>
      <div>
        <button :class="{Btn:true,Btn_not:!three.stock,Btn_hover:three.id===threeSel}" v-for="three in threeData"
                v-on:click="onclick(three,4)">{{three.title}}
        </button>
      </div>
      <div>
        <button :class="{Btn:true,Btn_not:!four.stock,Btn_hover:four.id===fourSel}" v-for="four in fourData"
                v-on:click="onclick(four,5)">{{four.title}}
        </button>
      </div>
      <div>
        <button :class="{Btn:true,Btn_not:!five.stock,Btn_hover:five.id===fiveSel}" v-for="five in fiveData"
                v-on:click="onclick(five,6)">{{five.title}}
        </button>
      </div>
    </div>
    <div class="amount">
      <div class="amount-left">数量</div>
      <van-stepper
        :disabled='disabled'
        v-model="value"
        :integer="integer"
        :min="1"
        :step="1"
        :max="numMax"
        class="amount-right"
        @change="change"
      />
    </div>
    <van-button type="default" class="submit" v-on:click="submit">确认</van-button>
  </div>

</template>

<script>
  export default {
    name: "com-buySpecification",
    props: ['goods_spec', 'goods', 'num', 'status'],
    data() {
      return {
        id: this.$route.params.id,//商品id
        disabled: true,//进步器
        integer: true,
        numMax: 2,//进步器最大值
        value: 1,
        oneTitle: false,
        select: [],
        oneSel: undefined,
        twoData: [],
        twoSel: undefined,
        threeData: [],
        threeSel: undefined,
        fourData: [],
        fourSel: undefined,
        fiveData: [],
        fiveSel: undefined,
        sixData: undefined,
        specs: [],//规格

      }
    },
    mounted() {
    },
    methods: {
      change(val) {//数量查询
        console.log(val)
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=85&act=optionstock',
          type: 'get',
          data: {
            goodsid: this.id,
            specs: this.specs.join("_"),
          }
        }).then(res => {
          if (res.code === 100) {
            this.numMax = res.data.stock
          }
        })

      },
      submit() {


        if (this.specs.length !== this.num) {
          this.$toast.fail('请选择规格')
          return
        }
        this.$store.commit('setBuySpecs', this.specs.join('_'))
        this.$store.commit('setBuyNumber', this.value)


        if (this.status === '1') {//立即购买
          this.$request({
            url: 'app/index.php?i=1&c=entry&eid=85&act=orderconfirm',
            type: 'post',
            data: {
              goods: JSON.stringify([{
                id: this.id,
                optionid: this.specs.join('_'),
                num: this.value
              }])}
          }).then(res=>{
            if(res.code === 100){
              window.sessionStorage.setItem('ordersn',res.data.ordersn)
              this.$router.push({name:'indentConfirme'})
            }
          })
        } else if (this.status === '0') {//加入购物车


          this.$request({
            url:'app/index.php?i=1&c=entry&eid=85&act=mycart&id=1',
            type:'post',
            data:{
              op:'add',
              id:this.id,
              total:this.value,
              specs:this.specs.join('_')
            }
          }).then(res=>{
            if(res.code ===100){
              this.$toast.success('添加成功')
              this.$store.commit('setShowBuySpecification', false)//关闭购买栏
            }
          })


        }

        // this.$request({
        //   url:'app/index.php?i=1&c=entry&eid=85&act=mycart&id=1&op=add',
        //   type:'POST',
        //   data:{
        //     id:this.id,
        //     total: this.value,
        //     specs:this.specs,
        //   }
        // })


      },
      onclick(son, tier) {//son 传向下一层数据  tier  层数
        if (!son.stock) return;  //无库存阻止
        switch (tier) {
          case 2:
            this.oneSel = son.id
            this.twoData = son.son
            break;
          case 3:
            this.twoSel = son.id
            this.threeData = son.son
            break;
          case 4:
            this.threeSel = son.id
            this.fourData = son.son
            break;
          case 5:
            this.fourSel = son.id
            this.fiveData = son.son
            break;
          case 6:
            this.fiveSel = son.id
            this.sixData = son.son
            break;
        }


        let arr = [this.oneSel, this.twoSel, this.threeSel, this.fourSel, this.fiveSel].filter(item => {
          return item
        })
        this.specs = arr
        if (this.specs.length == this.num) {
          this.disabled = false;
        }


      },
      clickHandle(e) {


        //
        //
        // console.log(e.target.parentNode.parentNode)
        // e.target.parentNode.parentNode.insertBefore(span)


      }
    }
  }
</script>

<style lang="scss" scoped>
  .Specification {
    width: 375px;
    /*height: 500px;*/
    padding: 16px 15px 0;
    background: rgba(255, 255, 255, 1);
  }

  .product {
    overflow: hidden;
    &-left {
      width: 90px;
      height: 90px;
      float: left;

    }
    &-right {
      float: left;
      margin-left: 14px;
      .my-subPrice {
        margin-left: 12px;
        text-decoration: line-through;
      }
      &-content {
        margin-top: 22px;
        overflow: hidden;
        &-left {
          float: left;
          font-size: 12px;
          color: rgba(153, 153, 153, 1);
          line-height: 20px;
        }
        &-right {
          float: left;
          display: block;
          width: 180px;
          margin-left: 10px;
          font-size: 14px;
          color: rgba(51, 51, 51, 1);
          line-height: 20px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }

  }

  .select {
    /*overflow: hidden;*/
    margin-top: 26px;
    > div {
      margin-top: 20px;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .Btn {
        margin-left: 15px;
        width: 81px;
        height: 27px;
        background: rgba(247, 247, 247, 1);
        border-radius: 2px;
        font-size: 12px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 17px;
      }
      .Btn_not {

        opacity: 0.4 !important;
        background: #F7F7F7 !important;
        color: black !important;
      }
      .Btn_hover {
        background-color: #71B3FF;
        color: white;
      }
    }

  }

  .amount {
    margin-top: 10px;
    &-left {
      float: left;
      font-size: 12px;
      color: rgba(153, 153, 153, 1);
      line-height: 27px;

    }
    &-right {
      float: right;
      /*width: 75px;*/
      /*height: 25px;*/
    }

  }

  .submit {
    margin-top: 76px;
    margin-bottom: 54px;
    width: 345px;
    height: 49px;
    background: rgba(113, 179, 255, 1);
    border-radius: 8px;
    font-size: 18px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 25px;
  }

</style>
