<template>
<div>
<!-- 首页顶部 -->
    <van-nav-bar title="商城">
<van-icon name="search" slot="left"></van-icon>
<van-icon name="cart" slot="right"></van-icon>
</van-nav-bar>

<!--轮播图-->
<div class="carousel">
<van-swipe :autoplay="3000">
  <van-swipe-item class="carousel-item" v-for="(item,index) in carouselItem" :key="index">
 <img :src="item.imgSrc" alt="">
  </van-swipe-item>
</van-swipe>
</div>
</div>

  
</template>

<script>

export default{
    // data数据返回数组
data(){
    return{
        carouselItem: [
            {
                name:'img1',
                imgSrc:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1041994715,1243354266&fm=26&gp=0.jpg'
            },
             {
                name:'img2',
                imgSrc:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=116744544,2055858210&fm=26&gp=0.jpg'
            },
             {
                name:'img3',
                imgSrc:'http://linyi.dzwww.com/focus/202004/W020200406281461395731.jpg'
            }

        ]
    }
    
 }
 }


</script>

<style lang="scss">
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
