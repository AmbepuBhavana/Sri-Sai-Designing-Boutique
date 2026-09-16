import { MainLayout } from "@/layouts/MainLayout";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage, PrivacyPage, TermsPage } from "@/pages/LegalPages";
import React, { Component, useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";

class ErrorBoundary extends Component<
  { children: React.ReactNode },
  { hasError: boolean; error: any }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: 40,
            color: "#d4af37",
            background: "#0b0b0b",
            minHeight: "100vh",
            fontFamily: "sans-serif",
          }}
        >
          <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>Sri Sai Designing Boutique</h2>
          <p style={{ color: "#fff", marginBottom: "16px" }}>
            An unexpected error occurred while rendering the page:
          </p>
          <pre
            style={{
              color: "#ff8888",
              background: "#161616",
              padding: 16,
              borderRadius: 8,
              overflow: "auto",
              fontSize: "13px",
            }}
          >
            {String(this.state.error?.stack || this.state.error?.message || this.state.error)}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: 16,
              padding: "10px 24px",
              background: "#d4af37",
              color: "#000",
              border: "none",
              borderRadius: 9999,
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function PageRouter() {
  const { pathname } = useLocation();
  const raw = (pathname || "/").replace(/\/+$/, "") || "/";

  let page = <HomePage />;
  if (raw === "/privacy") page = <PrivacyPage />;
  else if (raw === "/terms") page = <TermsPage />;
  else if (raw !== "/" && raw !== "/index.html") page = <NotFoundPage />;

  return <MainLayout>{page}</MainLayout>;
}

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollManager />
        <PageRouter />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

