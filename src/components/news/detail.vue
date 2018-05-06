<template>
    <div class="page">
        <div class="news-detail">
            <div class="news-title">
                <h4 v-text="newsInfo.title"></h4>
                <p class="news-info">
                    <span>发表时间: {{newsInfo.add_time | dateformat("YYYY年MM月DD日 HH:mm:ss")}}</span>
                    <span class="mui-pull-right">点击： {{newsInfo.click}}次</span>
                </p>
                <hr>
            </div>
            <div class="news-content" v-html="newsInfo.content">
                
            </div>
        </div>
        <div class="news-comment">
            <comment :id="$route.params.id"></comment>
        </div>
    </div>
</template>

<script>


import axios from "axios";

import dateformat from "../../filters/dateformat";

import comment from "../common/comment.vue";

export default {
    data(){
        return {
            newsInfo:{}
        }
    },
    created(){
        axios({
            url:"http://www.escook.cn:3000/api/getnew/" + this.$route.params.id
        }).then(res=>{
            if(res.data.status == 0){
                this.newsInfo = res.data.message[0]
            }
        })
    },
    filters: {
        dateformat
    },
    components: {
        comment
    }
}
</script>

<style>
.news {
    padding-left: 5px;
    padding-right: 5px;
}

.news-content img{
    width: 100%;
}

.news-comment{
    margin-bottom: 10px;
}
</style>
