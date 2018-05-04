<template>
    <div class="page">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(v,i) in pics" :key="i">
                <img :src="v.img" alt="">    
            </mt-swipe-item>    
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to='news'>
                   <img src="../../assets/images/menu1.png" alt="">
                    <div class="mui-media-body">新聞資訊</div>
                    </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to='pics'>
                   <img src="../../assets/images/menu2.png" alt="">
                    <div class="mui-media-body">圖片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to='goods'>
                    <img src="../../assets/images/menu3.png" alt="">
                    <div class="mui-media-body">商品購買</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to='/'>
                    <img src="../../assets/images/menu4.png" alt="">
                    <div class="mui-media-body">留言反饋</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to='/'>
                    <img src="../../assets/images/menu5.png" alt="">
                    <div class="mui-media-body">視頻專區</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to='/'>
                    <img src="../../assets/images/menu6.png" alt="">
                    <div class="mui-media-body">聯繫我們</div></router-link></li>
        </ul>
    </div>

    
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      pics: []
    };
  },
  created() {
    axios({
      url: "http://www.escook.cn:3000/api/getlunbo"
    }).then(res => {
      if (res.data.status == 0) {
        this.pics = res.data.message;
      }
    });
  }
};
</script>

<style>
.page {
  padding: 40px 0 50px 0;
}
body {

}
.mint-swipe {
  height: 157px;
}
.mint-swipe img {
  width: 100%;
}
.mui-table-view-cell img {
    width: 60px;
}
.mui-grid-view.mui-grid-9{
    background-color: #fff;
}
</style>
