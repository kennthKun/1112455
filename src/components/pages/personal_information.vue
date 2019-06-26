<template>
	<div class='info'>
		<div class="pic">
			<div class="add" v-show="maxStatus" @click="chooseType">
				<img v-show="!list" class="add-image"  src="http://yaqin.ckun.vip/pic/avatar.gif" alt="">
				<img v-show="list" class="list" :src="list" />
			</div>
			<p style="font-size: 14px;margin-top: 5px;">上传头像</p>
			<input id="upload_file" type="file" class="file-input" accept="image/png,image/jpeg,image/jpg" :multiple="multiple" @change="inputChange" style="display: none" />
		</div>
		<div class="p2">
			<div>姓名：</div>
			<el-input style="flex: 1;" v-model="form.name" placeholder="请输入姓名"></el-input>
		</div>
		<div class="p2">
			<div>手机号：</div>
			<el-input style="flex: 1;" v-model="form.phone" placeholder="请输入手机号"></el-input>
		</div>
		<div class="p2">
			<div>密码：</div>
			<el-input  style="flex: 1;" v-model="form.password" placeholder="请输入密码"></el-input>
		</div>
		<div class="p2">
			<div>确认密码：</div>
			<el-input style="flex: 1;" v-model="form.repassword" placeholder="请确认密码"></el-input>
		</div>
		<div class="p2">
			<div></div>
			<button id="saveBtn">保存</button>
		</div>
	</div>
</template>

<script>
	import { showLoading, hideLoading } from '@/assets/loading.js';
	export default {
			data() {
				return {
					maxStatus: true,
					list: '',
					name: '',
					phone: '',
					form:{
						name:'',
						phone:'',
						photo:'',
						password:'',
						repasswordr:'',
					}
				};
			},
			props: {
				multiple: false,
				max: 1,
			},
			methods: {
				chooseType() {
					document.getElementById("upload_file").click();
				},
				async inputChange(e) {
					let files = e.target.files;
					console.log(files)
					let uploadAll = [].slice.call(files, 0).map(this.upload);
					//使用object.values(files)，测试安卓存在兼容性问题，替换为[].slice.call(files ,0)
					console.log(uploadAll)
					showLoading();
					let result = await Promise.all(uploadAll);
					document.getElementById("upload_file").value = "";
				},
				
				upload(file, index) {
					console.log(file)
					return new Promise(async(resolve, reject) => {
						let form = new FormData();
						console.log(this.axios)
						form.append("file", file);
						let result = this.axios.post("http://yaqin.ckun.vip:8081/file_upload", form)
							.then(response => {
								console.log(response)
								this.form.photo = response.data.res[0].path
								this.list = "http://yaqin.ckun.vip/" + response.data.res[0].path
								hideLoading();
							}).catch(error => {
								console.log(error)
							});
					});
				}
			}
		};
</script>

<style scoped="scoped" lang="scss">
	.info{
		background:#fff;padding: 60px 0 100px 0;text-align: center;
		.add{width: 90px;height: 90px;margin: 0 auto;border-radius: 50%; overflow: hidden; box-shadow: 0px 0px 5px #333;
			.list,.add-image{
				width: 80px;
			}
		}
		.p2{display: flex;align-items: center;width: 450px;margin: 0 auto;font-size: 14px; margin-top:15px; padding-right: 80px;
			div{width: 80px;text-align: left}
			#saveBtn{color: #fff;width: 100%;border: none;background:linear-gradient(to right,#7764ff, #5358e8);padding: 10px 0;font-size: 14px;flex: 1;margin-top: 10px}
		}
	}
</style>
