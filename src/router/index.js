import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login'
import register from '@/components/register'
import forgot_password from '@/components/forgot_password'
import personal_information from '@/components/pages/personal_information'
import DDM_module from '@/components/pages/DDM_module'
import DDM_data_updata from '@/components/pages/DDM_data_updata'
import DDM_detail from '@/components/pages/DDM_detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
	  redirect:'/DDM_module',
		children:[{
			path:'/personal_information',
			component:personal_information,
			name:'个人信息'
		},{
			path:'/DDM_module',
			component:DDM_module,
			name:'DDM模型'
		},{
			path:'/DDM_data_updata',
			component:DDM_data_updata,
			name:'DDM模型数据上传'
		},{
			path:'/DDM_detail',
			component:DDM_detail,
			name:'股票投资工具/DDM模型'
		}]
    },{
			path: '/login',
			name: '登录',
			component: login
		},{
			path: '/register',
			name: '注册',
			component: register
		},{
			path:'/forgot_password',
			name:'忘记密码',
			component:forgot_password
		}
  ]
})
