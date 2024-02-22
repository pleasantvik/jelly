import { lazy } from "react";

import RootLayout from "@/layout/RootLayout";

const BaseRoutes = [
  {
    path: `/*`,
    exact: true,
    component: lazy(() => import("@/views/routes")),
    Layout: RootLayout,
    useAuth: false, // value is true when authentication is done
  },
];

export default BaseRoutes;
