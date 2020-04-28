<template>
<div>
<!-- 首页顶部 -->
    <van-nav-bar title="商城">
<van-icon name="search" slot="left"></van-icon>
<van-icon name="cart" slot="right"></van-icon>
</van-nav-bar>

<!--轮播图-->

<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>

    


</div>
  
</template>

<script>

export default{


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
