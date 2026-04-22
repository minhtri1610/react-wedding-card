import { createBrowserRouter, type RouteObject } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { Suspense, lazy } from "react";


const Home = lazy(() => import('../pages/HomePage'));

const routes: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Home />
                    </Suspense>
                )
            }
        ]
    }
];

export const router = createBrowserRouter(routes);
