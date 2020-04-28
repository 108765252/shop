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


<input type="text" id="inp" />
你说啥: <span id="demo"></span>

</div>

  
</template>

<script>

//export default{
//     // data数据返回数组
// data(){
//     return{
//         carouselItem: [
//             {
//                 name:'img1',
//                 imgSrc:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1041994715,1243354266&fm=26&gp=0.jpg'
//             },
//              {
//                 name:'img2',
//                 imgSrc:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=116744544,2055858210&fm=26&gp=0.jpg'
//             },
//              {
//                 name:'img3',
//                 imgSrc:'http://linyi.dzwww.com/focus/202004/W020200406281461395731.jpg'
//             }

//         ]
//     }
    
  var Obj = {}// 监听对象
  var demo = document.getElementById('demo') // 获取DOM
  var inp = document.getElementById('inp') // 获取DOM
  Object.defineProperty(Obj, 'text', {
    configurable: true,
    enumerable: true,
    set: function (val) {
      // 将Obj对象新改变的值赋值给input的value，然后页赋值给demo
      inp.value = val
      demo.innerHTML = val
      console.log('input里面输入了' + val)
    }
  })
    inp.addEventListener('keyup',function(e){
        // console.log(e.target.value)
        Obj.text = e.target.value
    }
    )


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
