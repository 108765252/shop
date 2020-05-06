<template>
  <div>
    ajax
    <van-button type="primary" @click="getData">获取数据</van-button>
    <van-button type="danger" @click="clearData">清空数据</van-button>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        {{index+1}}: {{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    clearData(){
    this.list = [];
  },
    ajax() {
      //ajax原理
      let movieUrl =
        "https://douban.uieee.com/v2/movie/top250?start=0&count=15";
      // 创建对象
      let xmlhttp;
      if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
      } else {
        // eslint-disable-next-line no-undef
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      }
      //初始化 HTTP 请求参数，例如 URL 和 HTTP 方法GET、POST、HEAD，true是异步，但是并不发送请求。
        xmlhttp.open("GET", movieUrl, true);
        //通过调用上面的open()参数指定发送一个 HTTP 请求
        xmlhttp.send();
      
      xmlhttp.addEventListener("readystatechange", () => {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          let obj = JSON.parse(xmlhttp.responseText);
          console.log(obj);
          this.list = obj.subjects;
          // ES6语法：this在这个作用域中list定义渲染对象内容
        }
      });
    },
    getData() {
      this.ajax();
    }
  }
};
</script>

<style>
</style>