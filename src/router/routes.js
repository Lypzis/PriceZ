const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "about", component: () => import("pages/AboutPage.vue") },
      { path: "privacy-policy", component: () => import("pages/PrivacyPolicyPage.vue") },
      { path: "terms", component: () => import("pages/TermsOfServicePage.vue") },
      { path: "terms-of-service", redirect: "/terms" },
      { path: "contact", component: () => import("pages/ContactPage.vue") },
      {
        path: "calculators/:platform",
        component: () => import("pages/calculator/CalculatorPlatformPage.vue")
      },
      {
        path: "calculator/:platform",
        redirect: (to) => `/calculators/${to.params.platform}`
      }
    ]
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue")
  }
]

export default routes
