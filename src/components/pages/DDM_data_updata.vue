<template>
	<div style="width: 100%;height: 100%;">
		<div class="search_box">
			<div class="operation">
				<button>导入</button>
				<button>导出模版</button>
			</div>
			<input class="search_input" type="text"><span class="huaer ty-sousuo"></span>
		</div>
		<h1>当前数据表</h1>
		<div class="table-outbox" style="position: relative;">
			<div class="table-box">
				<el-table :data="tableData" style="width: 100%;" >
					<el-table-column prop="date" label="证券代码"  width="120" align="center">
					</el-table-column>
					<el-table-column prop="date" label="证券名称" width="150" align="center">
					</el-table-column>
					<el-table-column prop="date" label="总股本" width="120" align="center">
					</el-table-column>
					<el-table-column prop="date" label="Bata值" width="120" align="center">
					</el-table-column>
					<el-table-column label="年度累计分红总额[单位]元" align="center">
						<el-table-column prop="province" label="[年度]2018" width="120" align="center">
						</el-table-column>
						<el-table-column prop="city" label="[年度]2017" width="120" align="center">
						</el-table-column>
						<el-table-column prop="address" label="[年度]2016" width="120" align="center">
						</el-table-column>
						<el-table-column prop="zip" label="[年度]2015" width="120" align="center">
						</el-table-column>
						
						<el-table-column prop="province" label="[年度]2018" width="120" align="center">
						</el-table-column>
						<el-table-column prop="city" label="[年度]2017" width="120" align="center">
						</el-table-column>
						<el-table-column prop="address" label="[年度]2016" width="120" align="center">
						</el-table-column>
						<el-table-column prop="zip" label="[年度]2015" width="120" align="center">
						</el-table-column>
					</el-table-column>
				</el-table>
			</div>
			<el-pagination style="background: #fff;padding: 9px 20px;position: absolute;bottom: 0;width: 100%;border-top: 1px solid #f3f3f3;z-index: 9999;" background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
			 :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="400">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {currentPage4: 3,
				tableData: [{
					date: '2016-05-03',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-02',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-04',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-01',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-08',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-06',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-07',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-07',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-07',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-07',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-07',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-07',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-07',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-07',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-07',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-07',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-07',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-07',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-07',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-07',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-07',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-07',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-07',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-07',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-07',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-07',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-07',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-07',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-07',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-07',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-07',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-07',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-07',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-07',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-07',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}]
			}
		},
		methods: {
			formatter(row, column) {
				return row.address;
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			rowclick(){
				console.log(1122)
				this.$router.push('/DDM_detail')
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.search_box {
		background: #fff;
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
		line-height: initial;
		text-align: right;
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.operation {
			color: #fff;

			button {
				background: #7764ff;
				color: #fff;
				border: none;
				border-radius: 30px;
				padding: 5px 0px;
				width: 80px;
			}
		}

		.search_input {
			width: 260px;
			border: 1px solid #7764ff;
			border-radius: 30px;
			line-height: 25px;
			margin-right: 10px;
			padding: 0 10px;
			padding-right: 30px;

		}

		.ty-sousuo {
			position: absolute;
			right: 30px;
			top: 0px;
			bottom: 0;
			margin: auto;
			line-height: 50px
		}

	}

	h1 {
		text-align: left;
		margin: 20px 0
	}
	.table-outbox{
		position: relative;
		width: 100%;
		height: calc(100% - 120px);
	}
	.table-box {
		width: 100%;
		background: #fff;
		padding-bottom: 44px;
		height: 100%;overflow: scroll;
	}
	// ::-webkit-scrollbar{display: block}
</style>
