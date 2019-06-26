<template>
	<div style="width: 100%;">
		<div class="search_box">
			<input class="search_input" type="text"><span class="huaer ty-sousuo"></span>
		</div>

		<el-table @row-click='rowclick' :data="tableData" style="width: 100%;margin-top: 10px;background: initial;" :default-sort="{prop: 'date', order: 'descending'}">
			<el-table-column prop="date" label="股票代码" sortable align='center'>
			</el-table-column>
			<el-table-column prop="name" label="股票名称" sortable align='center'>
			</el-table-column>
			<el-table-column prop="address" label="总股本" sortable align='center' :formatter="formatter">
			</el-table-column>
			<el-table-column prop="address" label="Bata值" sortable align='center' :formatter="formatter">
			</el-table-column>
			<el-table-column prop="address" label="上市以来分红数" align='center' sortable :formatter="formatter">
			</el-table-column>
			<el-table-column prop="address" label="最近一次分工金额" align='center' sortable :formatter="formatter">
			</el-table-column>
			<el-table-column prop="address" label="数据更新时间" align='center' :formatter="formatter">
			</el-table-column>
		</el-table>
		<el-pagination style="background: #fff;margin-top: 10px;padding: 9px 20px;" background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
		 :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="400">
		</el-pagination>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				currentPage4: 3,
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '1516 弄'
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
</style>
