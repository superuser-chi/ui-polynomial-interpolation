const routes = [
    {
      path: "/",
      name: "index",
      component: () => import("@/layouts/BaseLayout.vue"),
      children: [{ path: "", component: () => import("@/views/Index.vue") }]
    }
  ];
  
  // Always leave this as last one
  if (process.env.MODE !== "ssr") {
    routes.push({
      path: "*",
      component: () => import("@/views/Error404.vue")
    });
  }
  
  export default routes;
  