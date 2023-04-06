import React, { Fragment, Suspense } from "react";
import { routerProps } from "./routerData";
import { Route, Routes } from "react-router-dom";

export interface IRouterProps {
  routers: routerProps[];
}

function MainRouter({ routers }: IRouterProps) {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        {routers.map((router) => {
          const Layout = router?.layout || Fragment;
          const Guard = router?.guard || Fragment;
          const Component = router.component;
          const children = router?.children || null;
          return (
            <Route
              key={router.name}
              path={router.path}
              element={
                <Guard>
                  <Layout>
                    {children ? (
                      <SubRoutes routers={children} />
                    ) : (
                      <Component />
                    )}
                  </Layout>
                </Guard>
              }
            />
          );
        })}
      </Routes>
    </Suspense>
  );
}

function SubRoutes({ routers }: IRouterProps) {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        {routers.map((router) => {
          const Component = router.component;

          return (
            <Route
              key={router.name}
              path={router.path}
              element={<Component />}
            />
          );
        })}
      </Routes>
    </Suspense>
  );
}

const renderRouter = (routers: routerProps[]) => (
  <MainRouter routers={routers} />
);

export default renderRouter;
