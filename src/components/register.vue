<template>
	<div id="login">
		<div class="register_box">
			<p>已有华尔投研帐号? <span @click="login()">快捷登录 <i class="huaer ty-arrow"></i></span></p>
			<h1>欢迎注册华尔投研</h1>
			<div class="register_inner">
				<div class="input_box"><span>手机号</span>
					<div class="register_inner_right">
						<el-input v-model="phone" placeholder="请输入内容"></el-input>
					</div>
				</div>
				<div class="input_box"><span>验证码</span>
					<div class="register_inner_right">
						<el-input style='width: 190px' v-model="VerificationCode" placeholder="请输入内容"></el-input>
						<el-button style="width: 100px;" type="primary">发送验证码</el-button>
					</div>
				</div>
				<div class="input_box"><span>密码</span>
					<div class="register_inner_right">
						<el-input v-model="password" placeholder="请输入内容"></el-input>
					</div>
				</div>
				<div class="input_box"><span>确认密码</span>
					<div class="register_inner_right">
						<el-input v-model="repassword" placeholder="请输入内容"></el-input>
					</div>
				</div>
				<el-button type="primary" style="width: 100%;">注册帐号</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				checked: '',
				phone: '',
				VerificationCode: '',
				password: '',
				repassword: '',
			};
		},
		methods: {
			login(){
				this.$router.push('/login')
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	#login {
		width: 100%;
		height: 100vh;
		min-width: 1200px;
		background: url(../assets/login1.png) no-repeat 0 center, url(../assets/login.png) no-repeat;
		background-size: 40% 100%, 100% 100%;

		.register_box {
			width: 800px;
			height: 420px;
			background: #fff;
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			margin: auto;
			padding: 20px;
			box-sizing: border-box;
			h1{font-weight: bold}
			p {
				text-align: right;
				font-size: 14px;
				color: #999;

				span {
					color: #5358e8;
					margin-left: 5px;
					cursor: pointer;
				}

				.ty-arrow {
					font-size: 14px
				}
			}

			h1 {
				text-align: center;
				font-size: 28px;
				font-weight: 300;
				margin-top: 5px
			}

			.register_inner {
				width: 430px;
				height: 300px;
				background: #fff;
				margin: 0 auto;
				margin-top: 40px;

				.input_box {
					display: flex;
					align-items: center;
					margin-bottom: 15px;

					span {
						width: 130px;
						color: #666;
						font-weight: 300;
						font-size: 18px
					}
					.register_inner_right{
						width: 300px;
						display: flex;
						justify-content: space-between
					}
				}
			}
		}
	}
</style>
