<template>
    <div>

      <!--list start-->
      <div>
        <div class="selectAddress">
          <div class="space_between">
            <div>
              <div class="flex_start selectAddress_padding">
                <div class="selectAddress_name">四川成都市高新区中和镇孤帆远影</div>
              </div>
              <div class="flex_start" >
                <div class="selectAddress_infoAddress">四川成都市高新区中和镇孤帆远影2号四川成都市高新区中和镇孤帆远影2号</div>
              </div>
            </div>
            <div class="more"></div>
          </div>
        </div>
      </div>



      <!--list end-->
    </div>
</template>

<script>
    export default {
        name: "selectAddress"
    }
</script>

<style lang="scss" scoped>

  .null{
    width: 100%;
    height: 10px;
    background-color: rgba(244,244,244,1);
  }
  .selectAddress{
    padding: 20px 15px;
    .selectAddress_padding{
      padding-bottom: 5px;
    }
    .selectAddress_default{
      width: 30px;
      height: 15px;
      text-align: center;
      line-height: 15px;
      color: #E9584F;
      border-radius: 4px;
      border: 1px solid #E9584F;
    }
    .selectAddress_phone,.selectAddress_name{
      font-size:15px;
      font-family:PingFangSC-Medium;
      font-weight:500;
      color:rgba(51,51,51,1);
    }
    .selectAddress_phone{
      padding-left: 20px;
    }
    .selectAddress_infoAddress{
      font-size:14px;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(153,153,153,1);
      width: 280px;
    }
    .more{
      border-top: 1px solid #333;
      border-right: 1px solid #333;
      transform: rotate(45deg);
      content: '';
      width: 9px;
      height: 9px;
    }
    .space_between{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .flex_start{
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }

</style>
