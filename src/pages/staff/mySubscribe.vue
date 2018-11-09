<template>
  <div>
    <navbar :name="'预约记录'"></navbar>
    <!--<com-card></com-card>-->
  </div>
</template>

<script>
  // import ComCard from './com/com-card'

  export default {
    name: "mySubscribe",
    components: {
      // ComCard
    },
    mounted() {
      this.request()
    },
    methods: {
      request() {
        this.$request({
          url: "app/index.php?i=1&c=entry&eid=88&act=appointlist",
          type: 'get'
        }).then(res => {

        })
      }
    }
  }
</script>

<style scoped>

</style>
