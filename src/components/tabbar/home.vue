<template>
    <div class="page">
        <h1>首页</h1>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(v,i) in pics" :key="i">
                <img :src="v.img" alt="">    
            </mt-swipe-item>    
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
import axios from "axios"
export default {
  data(){
      return {
          pics:[]
      }
  },
  created(){
      axios({
          url:"http://www.escook.cn:3000/api/getlunbo"
      }).then(res=>{
          if(res.data.status ==0 ){
              this.pics = res.data. message;
          }
      })
  }
}
</script>

<style>
    .page{
        padding: 40px 0 50px 0;
    }
    .mint-swipe {
        height: 180px;
    }
    .mint-swipe img {
        width: 100%;
    }
</style>
