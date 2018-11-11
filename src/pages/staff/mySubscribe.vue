<template>
  <div>

    <com-card :item="item"  v-for="item,index in appoint" :key="index"></com-card>
  </div>
</template>

<script>
  import ComCard from './com/com-card'

  export default {
    name: "mySubscribe",
    data(){
      return{
        appoint:[]
      }
    },
    components: {
      ComCard
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
          if(res.code===100){
            this.appoint = res.data.appoint
          }

        })
      }
    }
  }
</script>

<style scoped>

</style>
