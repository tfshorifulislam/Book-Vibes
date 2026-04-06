import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout/MainLayout";
import HomePage from "../Pages/Homepage/HomePage";
import BooksPage from "../Pages/BooksPage/BooksPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'BookPage',
                element: <BooksPage />
            },
        ],
        
        errorElement: <ErrorPage />
    }
])
