import {createBrowserRouter, Navigate} from "react-router-dom";
import Layout from "../page/layout/Layout.tsx";
import NewsList from "../component/newsList/NewsList.tsx";
import AddNews from "../component/addNews/AddNews.tsx";
import Home from "../component/home/Home.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Navigate to="/home"/>
            },
            {
                path: "news",
                element: <NewsList/>
            },
            {
                path:"news/new",
                element:<AddNews mode="create"/>
            },
            {
                path:"news/new/:newsId",
                element:<AddNews mode="edit"/>
            },
            {
                path: "home",
                element:<Home/>
            }
        ]
    },
]);

export default router;