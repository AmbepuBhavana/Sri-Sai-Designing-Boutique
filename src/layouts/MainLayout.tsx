import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Navbar } from "@/components/layout/Navbar";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageSeo } from "@/components/seo/PageSeo";
import { Outlet } from "react-router-dom";
import React from "react";

export function MainLayout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <PageSeo />
      <JsonLd />
      <Navbar />
      <main>
        {children || <Outlet />}
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
