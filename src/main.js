import Vue from 'vue';
import Layout from './components/layout';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import IndexPage from './pages/index';
import DetailPage from './pages/detail';
import DetailAnaPage from './pages/detail/analysis'
import DetailCouPage from './pages/detail/count'
import DetailForPage from './pages/detail/forecast'
import DetailPubPage from './pages/detail/publish'



Vue.use(VueRouter);
Vue.use(VueResource)
let router=new VueRouter({
  // mode:'history',
  routes:[
    {
      path:'/',
      component:IndexPage
    },
    {
      path:'/detail',
      component:DetailPage,
      redirect: '/detail/analysis',  //直接访问第一个详情页面
      children:[
        {
          path:'forecast',
          component:DetailForPage
        },
        {
          path:'analysis',
          component:DetailAnaPage
        },
        {
          path:'publish',
          component:DetailPubPage
        },
        {
          path:'count',
          component:DetailCouPage
        }
      ]
    }

  ]
})
new Vue({
    el:'#app',
    router,
    template:'<Layout/>',
    components: { Layout }
});

if (module.hot) {
  module.hot.accept();
}
