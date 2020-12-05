<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="login">
      <p>登录</p>
      <div class="line"></div>
      <form>
        账号 <input class="login" type="text" placeholder="请输入工号">
        <br>
        密码 <input class="pasw" type="password" placeholder="请输入密码">
        <router-link to="/banner">
          <button class="dl">立即登录</button>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎来到卓音考试系统'
          }
  }
}  
// onSubmit(function(){
//   var obj = this.userInfo;
//   obj.url = this.domainName;
//   LoginApi.login(this.url + this.curVersion, obj)
//     .then(res =>{
//       console.log(res.data);
//       if(res.data.status === "SUCCESS") {
//         this.$message({
//           message:"登录成功",
//           type:"sucess"
//         });
//         localStorage.setItem("loginName",this.userInfo.loginName);
//         this.$router.push("/index");
//       }else{
//         this.user.info = {
//           loginName:"",
//           password:""
//         };
//         this.$message.error("账号或密码有误");
//       }
//     })
//     .catch(err =>{
//       this.$message.error("登录失败");
//       console.log(err);
//     });
// })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  margin-top:50px;
  letter-spacing: 7px;
  font-size:40px;
}
#login{
  border:1px solid;
  box-shadow:2px 2px 3px 0.5px lightblue;
  border-radius:10px 10px;
  width:300px;
  height:210px;
  margin:70px auto;
}
.line{
  height:1px;
  width:260px;
  margin:0 auto;
  background-color: black;
}
.login,.pasw{
  margin-bottom:20px;
  width:200px;
  margin-left:10px;
}
.login{
  margin-top:20px;
}
p{
  text-align:left;
  margin-left:20px;
  font-size:20px;
  color:#3cb371;
  letter-spacing:4px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.dl{
  width:80px;
  height:25px;
  margin-bottom:20px;
}
.dl:hover{
  background-color:black;
  color:white;
}
</style>
