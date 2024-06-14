import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import BuildingView from "@/pages/BuildingView.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Analyse d'occupation",
        component: BuildingView,
      },
    ],
  },
];

export default routes;
