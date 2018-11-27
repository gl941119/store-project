<template>
  <div class="chengeAddress">

    <ul class="list">
      <li class="list-cell">
        <div class="list-cell-title">收货人</div>
        <input type="text" v-model="realname" class="list-cell-content" placeholder="姓名">
        <div class="fill"></div>
      </li>

      <li class="list-cell">
        <div class="list-cell-title">联系人</div>
        <input type="text" v-model="mobile" class="list-cell-content" placeholder="手机号码">
        <div class="fill"></div>
      </li>

      <li class="list-cell" v-on:click="show = true">
        <div class="list-cell-title">所在地区</div>
        <input type="text" disabled v-model="area" class="list-cell-content">
        <van-icon name="arrow" class="list-cell-icon"/>
        <div class="fill"></div>
      </li>

      <li class="list-cell">
        <div class="list-cell-title">详细地址</div>
        <input type="text" v-model="address" class="list-cell-content" placeholder="详细地址需填写楼层或房间号">
        <van-icon name="close" class="list-cell-icon" v-on:click="address = undefined"/>
        <div class="fill"></div>
      </li>
      <li class="list-cell">
      </li>
    </ul>

    <div class="default">
      <div class="default-title">设为默认地址</div>
      <van-switch v-model="checked" class="default-icon defaultIcon"/>
    </div>


    <div class="remove" v-if="id != 0" v-on:click="deleteSubmit">
      <p>删除收货地址</p>
    </div>
    <div class="addBtn" v-if="id == 0">
      <van-button type="primary" v-on:click="addSubmit">确定</van-button>
    </div>
    <div class="changeBtn" v-else>

      <van-button type="primary" v-on:click="changeSubmit">确定</van-button>
      <!--<van-button type="primary" >删除地址</van-button>-->
    </div>

    <van-popup v-model="show" position="bottom" :overlay="true" :lazy-render="true">
      <van-area :area-list="areaList" :columns-num="3" title="详细地址"
                @confirm="confirmHandle"
                @cancel="cancelHandle"/>
    </van-popup>
  </div>
</template>

<script>
  import area from '../../../../../../utils/area'

  export default {
    name: "chengAddress",
    data() {
      return {
        Data: null,
        realname: undefined,
        mobile: undefined,
        area: undefined,
        address: undefined,
        show: false,
        areaList: area,
        id: this.$route.params.id,
        checked: false
      }
    },
    mounted() {

      if (this.id !== 0) {
        this.request()
      }


    },
    methods: {
      addSubmit() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=88&act=saveaddress',
          type: 'post',
          data: {
            realname: this.realname,
            mobile: this.mobile,
            address: this.address,
            area: this.DataFormart(this.area),
            isdefault: this.checked === true ? 1 : 0
          }
        }).then((res) => {
          if (res.code === 100) {
            this.$toast.success('添加成功')
            this.$router.go(-1)
          }
        })

      },
      deleteSubmit() {


        this.$dialog.confirm({
          title: '确定要删除该地址吗？'
        }).then(() => {
          this.$request({
            url: "app/index.php?i=1&c=entry&eid=88&act=deladdress",
            type: 'get',
            data: {
              id: this.id
            }
          }).then((res) => {
            if (res.code === 100) {
              this.$toast.success('删除成功')
              this.$router.go(-1)
            }
          })
        }).catch(() => {
          // on cancel
        });

      },
      changeSubmit() {//提交修改
        if (!this.realname) {
          this.$toast.fail('请输入收货人')
          return;
        }
        if (!this.mobile) {
          this.$toast.fail('请输入联系人')
          return;
        }
        if (!this.realname) {
          this.$toast.fail('请输入详细地址')
          return;
        }
        this.$request({
          url: "app/index.php?i=1&c=entry&eid=88&act=saveaddress",
          type: 'post',
          data: {
            realname: this.realname,
            mobile: this.mobile,
            address: this.address,
            area: this.DataFormart(this.area),
            id: this.$route.params.id,
            isdefault: this.checked === true ? 1 : 0
          }
        }).then((res) => {
          if (res.code === 100) {
            this.$toast.success('修改成功')
            this.$router.go(-1)
          }
        })
      },
      confirmHandle(val) {
        this.area = val[0].name + '-' + val[1].name + '-' + val[2].name
        this.show = false

      },
      cancelHandle() {
        this.show = false
      },
      DataFormart(val) {

        let arr = val.split('-');

        // 通过值找名
        function findKey(obj, value, compare = (a, b) => a === b) {
          return Object.keys(obj).find(k => compare(obj[k], value))
        }

        let area = {
          "province": {
            "name": arr[0],
            "code": findKey(this.areaList.province_list, arr[0])
          },
          "city": {
            "name": arr[1],
            "code": findKey(this.areaList.city_list, arr[1])
          },
          "district": {
            "name": arr[2],
            "code": findKey(this.areaList.county_list, arr[2])
          }
        }
        return JSON.stringify(area)

      },
      request() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=88&act=address',
          type: 'get',
          data: {
            id: this.$route.params.id
          }
        }).then((res) => {
          let Data = res.data.address;
          this.realname = Data.realname
          this.mobile = Data.mobile
          this.address = Data.address
          this.area = Data.province.name + '-' + Data.city.name + '-' + Data.area.name
          this.checked = Data.isdefault == '1' ? true : false
        })
      }

    }

  }
</script>

<style lang="scss" scoped>
  .chengeAddress {
    background-color: #F4F4F4;
    height: 100%;
  }

  .list {
    margin-top: 10px;
    &-cell {
      padding: 12px 15px;
      width: 375px;
      height: 45px;
      background: rgba(255, 255, 255, 1);
      overflow: hidden;
      position: relative;
      &-title {
        float: left;
        width: 60px;
        height: 21px;
        font-size: 15px;
        color: rgba(153, 153, 153, 1);
        line-height: 21px;
      }
      &-content {
        float: left;
        margin-left: 10px;
        width: 255px;
        height: 21px;
        font-size: 15px;
        color: rgba(51, 51, 51, 1);
        line-height: 21px;
        background-color: white;
      }
      &-icon {
        float: right;
        top: 50%;
        margin-top: -6px;
        vertical-align: middle;
        font-size: 12px;
        color: rgba(204, 204, 204, 1);
      }
      .fill {
        margin: 0 auto;
        width: 345px;
        height: 1px;
        background: rgba(216, 216, 216, 1);
        position: absolute;
        bottom: 0;
      }
    }
  }
  .changeBtn {
    margin-top: 36px;
    text-align: center;
    button:first-child {
      width: 345px;
      height: 45px;
      background: rgba(113, 179, 255, 1);
      box-shadow: 0px 5px 7px 0px rgba(204, 226, 249, 1);
      border-radius: 4px;
    }
  }
  .addBtn {
    margin-top: 36px;
    text-align: center;
    button {
      width: 345px;
      height: 45px;
      background: rgba(113, 179, 255, 1);
      box-shadow: 0px 5px 7px 0px rgba(204, 226, 249, 1);
      border-radius: 4px;
    }
  }
  .default {
    margin-top: 15px;
    width: 375px;
    height: 50px;
    background: rgba(255, 255, 255, 1);
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-title {
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Regular;
      color: rgba(51, 51, 51, 1);
    }
  }
  .remove{
    margin-top: 15px;
    width:375px;
    height:50px;
    background:rgba(255,255,255,1);
    padding: 0 15px;
    line-height: 50px;
    font-size:14px;
    color:rgba(228,57,59,1);
    line-height:50px;
  }


</style>
