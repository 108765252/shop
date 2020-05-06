<template>
  <div>
    ajax
    <van-button type="primary" @click="getData">获取数据</van-button>
    <van-button type="danger">清空数据</van-button>
    <ul>
      <li v-for="(item,index) in list" :key="index">
          {{index+1}}: {{item.title}}
          </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //应该返回对象
      list: []
    };
  },
  methods: {
    ajax() {
      //ajax原理

      let movieUrl =
        "https://douban.uieee.com/v2/movie/top250?start=0&count=15";

      //创建XMLHttpRequest对象 从地址获取数据
      // eslint-disable-next-line no-unused-vars
      let xmlhttp;
      if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
      } else {
        // eslint-disable-next-line no-undef
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        xmlhttp.open("GET", movieUrl, true);
        xmlhttp.send();
      }
      xmlhttp.addEventListener("readystatechange", () => {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          let obj = JSON.parse(xmlhttp.responseText);
          console.log(obj);
          //this.list = obj.subjects;
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