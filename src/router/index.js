import Vue from 'vue'
import Router from 'vue-router'
import home from 'components/home/home'
import memberManagement from 'components/memberManagement/memberManagement'
import financialManagement from 'components/financialManagement/financialManagement'
import memberRecharge from 'components/financialManagement/memberRecharge'
import transferRecordTK from 'components/financialManagement/transferRecordTK'
import memberInvestment from 'components/financialManagement/memberInvestment'
import presentRecord from 'components/financialManagement/presentRecord'
import systemParamsSet from 'components/systemParams/systemParamsSet'
import productParamsSet from 'components/systemParams/productParamsSet'
import companyAccount from 'components/systemParams/companyAccount'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'home',
      component:home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },{
      path: '/memberManagement',
      name: 'memberManagement',
      component: memberManagement
    },{
      path: '/financialManagement',
      name: 'financialManagement',
      component: financialManagement
    },{
      path: '/memberRecharge',
      name: 'memberRecharge',
      component: memberRecharge
    },{
      path: '/transferRecordTK',
      name: 'transferRecordTK',
      component: transferRecordTK
    },{
      path: '/memberInvestment',
      name: 'memberInvestment',
      component: memberInvestment
    },{
      path: '/presentRecord',
      name: 'presentRecord',
      component: presentRecord
    },{
      path: '/systemParamsSet',
      name: 'systemParamsSet',
      component: systemParamsSet
    },{
      path: '/productParamsSet',
      name: 'productParamsSet',
      component: productParamsSet
    },{
      path: '/companyAccount',
      name: 'companyAccount',
      component: companyAccount
    }
  ]
})
