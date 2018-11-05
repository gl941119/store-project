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
      <dl :data-type="1" :data-son="type">
        <dt>味道</dt>
          <button v-for="item in goods_spec"
                  :data-title="item.title" :key="item.id" v-on:click="clickHandle">{{item.title}}
          </button>
          <!--<van-button type="default" class="select-btn"  -->
          <!---->
          <!--v-on:click=""-->
          <!--&gt;</van-button>-->
      </dl>
    </div>
    <div class="amount">
      <div class="amount-left">数量</div>
      <van-stepper
        v-model="value"
        :integer="integer"
        :min="1"
        :step="1"
        class="amount-right"
      />
    </div>
    <van-button type="default" class="submit" v-on:click="submit">确认</van-button>
  </div>

</template>

<script>
  export default {
    name: "com-buySpecification",
    props: ['goods_spec', 'goods', 'num'],
    data() {
      return {
        integer: true,
        value: 1,
        oneTitle: false,
        select: [],
        type:JSON.stringify(this.goods_spec)
      }
    },
    mounted() {
      // for (let i=0 ,len=parseInt(this.num);i<len;i++){
      //   this.select.push({})
      // }
      // console.log(this.select,this.goods_spec)
      // this.select[0] = this.goods_spec
      //
      // let block = `<van-button type="default" class="select-btn">{{item.title}}</van-button>`
      // let html = `<dl><dt>味道</dt><dd>${}</dd></dl>`


    },
    methods: {
      submit() {

      },
      clickHandle(e) {
        console.log(this.$refs['outer'])
        let outer = this.$refs['outer'],//select
          curr = e.target.parentNode,//dl
          son = JSON.parse(curr.getAttribute("data-son"));

        if(outer.children.length == curr.getAttribute("data-type")){//兄弟节点添加
          // var dl = document.createElement('dl'); //1、创建元素
          JSON.parse(curr.getAttribute("data-son")).forEach((item,index)=>{
            if(item.title == e.target.innerText){
            son = son[index].son
            }
          })
          console.log(son)
          let newElement = document.createElement('dl')
          let _dt = `<dt>味道</dt>`
          son.forEach((item)=>{
            _dt += `<button :data-title="item.title"  @click.native="clickHandle()">${item.title}</button>`
          })
          newElement.innerHTML = _dt
          outer.appendChild(newElement)
        }else{//兄弟节点替换



        }

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
    > dl {

    }
    /*&-btn {*/
    /*border: 0;*/
    /*margin-left: 15px;*/
    /*margin-bottom: 11px;*/
    /*width: 81px;*/
    /*height: 27px;*/
    /*background: rgba(247, 247, 247, 1);*/
    /*border-radius: 2px;*/
    /*font-size: 12px;*/
    /*font-weight: 500;*/
    /*color: rgba(51, 51, 51, 1);*/
    /*line-height: 17px;*/
    /*}*/
    /*&-btn:hover {*/
    /*background: rgba(113, 179, 255, 1);*/
    /*color: rgba(255, 255, 255, 1);*/
    /*}*/
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
