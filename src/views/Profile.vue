<template>
  <div>
    <van-tabs>
      <van-tab title="登录">
      <van-cell-group>
        <van-field label="用户名" required clearable placeholder="请输入用户名" v-model="loginUsername"></van-field>
        <van-field label="密码" type="password" required clearable placeholder="请输入密码" v-model="loginPassword"></van-field>
      </van-cell-group>
      <div>
          <van-button type="primary" size="large">登录</van-button>
      </div>
      </van-tab>
      <van-tab title="注册">
            <van-cell-group>
        <van-field label="用户名" required clearable placeholder="请输入用户名" v-model="registUsername"></van-field>
        <van-field label="密码" type="password" required clearable placeholder="请输入密码" v-model="registPassword"></van-field>
      </van-cell-group>
      <div>
          <van-button @click="registHandler" type="primary" size="large">注册</van-button>
      </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import url from '@/service.config.js';

export default {
    

data(){
    return{
        loginUsername:'',
        loginPassword:'',
        registUsername:'',
        registPassword:''

    }
},
methods:{
    //注册处理方法
    registHandler(){
axios({
    url: url.registUser, //对应上面的import url
    method:'post',
    data:{
        userName: this.registUsername,
        Password: this.registPassword
    }
}).then(res => {
  console.log(res);
 if(res.data.code == 200){
  // eslint-disable-next-line no-undef
  this.$toast.success('注册成功if');
  //this.registUsername = this.registPassword = '';
 }else{
   // eslint-disable-next-line no-undef
   this.$toast.fail('注册else');
 }
// eslint-disable-next-line no-unused-vars
}).catch(err=>{
  console.log(err);
this.$toast.fail('注册catch');
});

    }
}
};
</script>

<style lang="scss">
</style>
