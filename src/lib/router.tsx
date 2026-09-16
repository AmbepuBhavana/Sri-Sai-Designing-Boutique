import React, { createContext, useContext, useEffect, useState } from "react";

export interface RouterLocation {
  pathname: string;
  search: string;
  hash: string;
}

const LocationContext = createContext<RouterLocation>({
  pathname: typeof window !== "undefined" ? window.location.pathname : "/",
  search: typeof window !== "undefined" ? window.location.search : "",
  hash: typeof window !== "undefined" ? window.location.hash : "",
});

export function BrowserRouter({ children }: { children: React.ReactNode }) {
  const [loc, setLoc] = useState<RouterLocation>({
    pathname: typeof window !== "undefined" ? window.location.pathname : "/",
    search: typeof window !== "undefined" ? window.location.search : "",
    hash: typeof window !== "undefined" ? window.location.hash : "",
  });

  useEffect(() => {
    const handlePopState = () => {
      setLoc({
        pathname: window.location.pathname,
        search: window.location.search,
        hash: window.location.hash,
      });
    };
    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handlePopState);
    };
  }, []);

  return <LocationContext.Provider value={loc}>{children}</LocationContext.Provider>;
}

export function useLocation(): RouterLocation {
  return useContext(LocationContext);
}

export function Link({
  to,
  children,
  onClick,
  className,
  ...props
}: {
  to: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
  [key: string]: any;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (to.startsWith("http") || to.startsWith("tel:") || to.startsWith("mailto:")) {
      return;
    }
    if (!e.defaultPrevented && e.button === 0 && !e.metaKey && !e.altKey && !e.ctrlKey && !e.shiftKey) {
      e.preventDefault();
      window.history.pushState({}, "", to);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  return (
    <a href={to} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}

const OutletContext = createContext<React.ReactNode>(null);

export function Outlet() {
  return <>{useContext(OutletContext)}</>;
}

export function Route(_props: { path?: string; index?: boolean; element?: React.ReactNode }) {
  return null;
}

export function Routes({
  children,
  location: customLocation,
}: {
  children: React.ReactNode;
  location?: RouterLocation;
}) {
  const currentLoc = customLocation || useLocation();
  const rawPath = currentLoc.pathname || "/";
  const path = rawPath.replace(/\/+$/, "") || "/";

  let matchedElement: React.ReactNode = null;

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    const { element, children: subRoutes } = child.props as any;

    if (element && subRoutes) {
      let subElement: React.ReactNode = null;
      let matched = false;
      let fallbackElement: React.ReactNode = null;

      React.Children.forEach(subRoutes, (subChild) => {
        if (!React.isValidElement(subChild)) return;
        const subProps = subChild.props as any;

        if (subProps.path === "*") {
          fallbackElement = subProps.element;
        }

        if (!matched) {
          if (subProps.index && path === "/") {
            subElement = subProps.element;
            matched = true;
          } else if (subProps.path === "privacy" && path === "/privacy") {
            subElement = subProps.element;
            matched = true;
          } else if (subProps.path === "terms" && path === "/terms") {
            subElement = subProps.element;
            matched = true;
          }
        }
      });

      if (!matched && fallbackElement) {
        subElement = fallbackElement;
      }

      matchedElement = (
        <OutletContext.Provider value={subElement}>
          {element}
        </OutletContext.Provider>
      );
    }
  });

  return <>{matchedElement}</>;
}
