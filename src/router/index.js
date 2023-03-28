import React from "react";

const Home = React.lazy(() => import('@/view/home/Home'))
const Detail = React.lazy(() => import('@/view/detail/Detail'))
const Entire = React.lazy(() => import('@/view/entire/Entire'))

const route = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/detail',
        element: <Detail />
    },
    {
        path: '/entire',
        element: <Entire />
    }
]
export default route