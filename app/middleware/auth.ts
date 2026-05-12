export default defineNuxtRouteMiddleware(() => {
    const { loggedIn, user } = useUserSession();
    console.log(loggedIn, user)
    // redirect the user to the login screen if they're not authenticated
    if (!loggedIn.value) {
      return navigateTo('/login');
    } else {
      return navigateTo('/dashboard');
    };
  });