import React from "react";
import AppLayout from "./AppLayout";
import { Outlet } from "react-router-dom";

export default function AppRoutes() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
