<template>
	<div id="login">
		<div class="left">
			<div class="text">
				<h1>Good Morning</h1>
				<p>Have a great journey ahead!</p>
			</div>
		</div>
		<div class="right">
			<div class="login_box">
				<h1>华尔投研登录系统</h1>
				<div class="account_password">
					<p>用户名</p>
					<input type="text">
					<p>密码</p>
					<input type="text">
					<el-checkbox style='margin: 10px 0;' v-model="checked">记住密码</el-checkbox>
				</div>
				<button id="loginBtn" @click="login()">登录</button>
				<div class="modify_register">
					<span @click="jump(1)">忘记密码</span>
					<span @click="jump(2)">立即注册</span>
				</div>
				<div class="weixin">
					<span class="huaer ty-weixin"></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  data() {
	    return {
			checked:''
	    };
	  },
	  methods: {
	  	jump(type){
	  		type == 1? this.$router.push('/forgot_password'):this.$router.push('/register')
	  	},
		login(){
			this.$router.push('/')
		}
	  }
	}
</script>

<style scoped="scoped" lang="scss">
	#login{
		width: 100%;height: 100vh;min-width: 1200px;background:url(../assets/login1.png) no-repeat 0 center, url(../assets/login.png) no-repeat;background-size: 40% 100%,100% 100%;
		.left{
			float: left;width: 50%;height: 100%;position: relative;color: #fff;
			.text{
				width: 500px;height: 100px;position: absolute;top: 0;right: 0;bottom: 0;margin: auto;
				h1{
					font-size: 48px;font-weight: bold
				}
			}
		}
		.right{
			float: left;width: 50%;height: 100%; position: relative;
			.login_box{
				width: 300px;height: 400px;background: #fff;position: absolute;top: 0;bottom: 0;right: 0;left: 0;margin: auto;border-radius: 5px;padding: 20px 30px;box-sizing: border-box;color: #5358e8;text-align: center;
				h1{
					font-size: 24px;font-weight: bold;
				}
				.account_password{
					text-align: left;padding: 30px 0;
					input{background: #dfdcfe;border: none;border-radius: 30px;width: 100%;line-height: 26px;padding: 0px 10px;box-sizing: border-box;color: #5358e8}
					p{font-size: 14px;margin: 10px 0}
				}
				#loginBtn{
					color: #fff;width: 100%;border: none;background:linear-gradient(to right,#7764ff, #5358e8);padding: 5px 0;border-radius: 30px; font-size: 18px;box-shadow: 2px 2px 3px #7764ff
				}
				.modify_register{
					font-size: 14px;display: flex;justify-content: space-between;margin-top: 15px;padding: 0 10px;box-sizing: border-box;
				}
				.weixin{border-top:#dad2ff 1px solid;margin-top: 10px;color: #00c000;font-size: 24px; padding-top: 10px;
					.ty-weixin{font-size: 34px}
				}
			}
		}
		
	}

</style>
