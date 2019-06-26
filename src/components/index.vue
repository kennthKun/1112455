<template>
	<el-container style="height: 100vh;">
		<el-aside width='200px' style="background: #fff;text-align: left;position: absolute;top: 0;left: 0px;height: 100%;transition: 0.5s;" :style='{left:asideleft}'>
			<div class="title">华尔投研</div>
			<el-menu :default-active="active">
				<el-submenu index="1">
					<template slot="title"><i class="el-icon-menu"></i>股票投资工具</template>
					<el-menu-item-group>
						<router-link to='/DDM_module'><el-menu-item index="1-1">DDM模型</el-menu-item></router-link>
					</el-menu-item-group>
				</el-submenu>
				<el-submenu index="2">
					<template slot="title"><i class="el-icon-menu"></i>系统管理</template>
					<el-menu-item-group>
						<router-link to='/DDM_data_updata'><el-menu-item index="2-1">DDM模型数据上传</el-menu-item></router-link>
					</el-menu-item-group>
				</el-submenu>
				<el-submenu index="3">
					<template slot="title"><i class="el-icon-menu"></i>个人信息</template>
					<el-menu-item-group>
						<router-link to='/personal_information'><el-menu-item index="3-1">个人信息</el-menu-item></router-link>
					</el-menu-item-group>
				</el-submenu>
			</el-menu>
		</el-aside>
		<el-main style="padding: 0;transition: 0.5s;height: 100%;" :style='{paddingLeft:mainPLeft}'>
			<el-header style='transition: 0.5s;' :style="{width:headerwidht}">
				<div class="switch" @click="asideFun()"><span class="huaer ty-liebiao"></span></div>
				<div class="navlist"><span class="pagename">{{pagename}}</span></div>
				<div class="head-right">
					<div class="userbox"><span style="margin-right: 5px; font-size: 18px;" class="huaer ty-yonghu1"></span>{{username}}</div>
					<div class="outbtn-box">
						<div @click="outLogin(1)" style="width: 50px;"><span style="font-weight: bold;margin-right: 5px;" class="huaer ty-close"></span>退出</div>
						<div class="out-btn" v-show="islogin">
							<div>
								<p>提示</p>
								<p>是否退出登录？</p>
							</div>
							<div>
								<span @click="outLogin(2)">取消</span>
								<span @click="exit()">确定</span>
							</div>
						</div>
					</div>
				</div>
			</el-header>
			<div style="height: 60px;"></div>
			<el-main  style='width: 100%;height: calc(100% - 60px);min-width: 700px;'>
				<router-view></router-view>
			</el-main>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		data() {
			return {
				active:'1-1',
				asideleft:'0',
				mainPLeft:'200px',
				islogin:0,
				headerwidht:'calc(100% - 200px)',
				username:'哈哈哈',
				pagename:'股票投资工具/DDM模型'
			};
		},
		components: {
			
		},
		created(){
			console.log(this.$route)
			this.pagename = this.$route.name
		},
		watch:{
		  $route(to,from){
			console.log(this.$route.name);
			this.pagename = this.$route.name
		  }
		},
		methods: {
			onClick(e, editor) {
				console.log('Element clicked')
				console.log(e)
				console.log(editor)
			},
			exit(){
				this.$router.push('/login')
			},
			asideFun(){
				this.asideleft = this.asideleft == '0'?'-200px' : '0',
				this.mainPLeft = this.mainPLeft == '200px'?'0':'200px',
				this.headerwidht = this.headerwidht == 'calc(100% - 200px)'? '100%':'calc(100% - 200px)'
			},
			outLogin(type){
				type == 1? this.islogin = 1 :  this.islogin = 0
			}
		}
	}
</script>

<style>
	.pagename{
		border-bottom: 3px solid #fff;
		line-height: 60px;
		height: 60px;
		box-sizing: border-box;
		display: inline-block;
	}
	.switch{padding: 0 20px;}
	.ty-liebiao{font-size: 22px;}
	.head-right{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.userbox{
		margin-right: 30px;
	}
	.outbtn-box{
		position: relative;
		width: 30px;
	}
	.out-btn{
		color: #333;
		position: absolute;
		width: 200px;
		height: 100px;
		line-height: initial;
		left: -75px;
		bottom:-85px;
		background: #fff;
		border-radius: 5px;
		box-shadow: 0px 0px 2px #5D41F2;
		overflow: hidden;
	}
	.out-btn div:first-child{
		height: 70px;
		padding: 10px 0;
		line-height: 25px;
	}
	.out-btn div:first-child p{
		font-weight: bold;
	}
	.out-btn div:first-child p:last-child{
		font-size: 12px;font-weight: 300;color: #000;
	}
	.out-btn div:last-child{
		height: 30px;
		line-height:30px;
		box-shadow: -1px -1px 0px #b1b4ff;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.out-btn div:last-child span{
		width: 50%;
		text-align: center;
	}
	.out-btn div:last-child span:first-child{
		background: #5358E8;color: #fff;
	}
	.title{
		text-align: center;height: 60px;
		line-height: 60px;color: #fff;
		background: #5d41f2;
	}
	.el-header{
		background-color: #7764ff;
		color: #fff;
		text-align: center;
		line-height: 60px;
		width:calc(100% - 200px);
		display: flex;
		padding-right: 120px;
		box-sizing: border-box;
		font-size: 14px;
		position: absolute;top: 0;z-index: 99999;
	}

	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 200px;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 160px;
	}

	body>.el-container {
		margin-bottom: 40px;
	}
	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}
	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}
	.is-opened{background: #ffe8f1;}
	.el-menu-item.is-active{background: #ebf5ff;}
	.navlist{flex: 1;text-align: left;}
	.el-menu-item-group__title{display: none;}
</style>
