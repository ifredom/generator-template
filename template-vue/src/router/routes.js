/* only page components */
import App from '@/App';
/* Asynchronous loading components */
const Login = r => require.ensure([], () => r(require('@/page/login')), 'login');

const routes = [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '',
        redirect: '/login' // default router, redirect to '/login'
      },
      {
        path: '/login',
        component: Login
      }
    ]
  }
];
export default routes;
