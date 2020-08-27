import router from '@/router';

export default function authGuard(store) {
  const authRoutes = ['FrontPage', 'Login', 'Register'];

  router.beforeEach((to, from, next) => {
    if (authRoutes.includes(to.name) && store.state.auth.isLoggedIn) {
      return next({ name: 'Dashboard' });
    }

    if (!authRoutes.includes(to.name) && !store.state.auth.isLoggedIn) {
      return next({ name: 'FrontPage' });
    }

    return next();
  });
}
