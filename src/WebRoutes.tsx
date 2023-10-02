import {createBrowserRouter} from "react-router-dom";
import Account from "./pages/Account/Account";
import Template from "./components/templateWeb/Template";
import MainPage from "./pages/MainPage/MainPage";
import CreateNote from "./pages/CreateNote/CreateNote";
import Auth from "./pages/Auth/Auth";
import RegistrationContainer from "./pages/Registration/RegistrationContainer";
import AuthContainer from "./pages/Auth/AuthContainer";
import MainPageContainer from "./pages/MainPage/MainPageContainer";
import CreateNoteContainer from "./pages/CreateNote/CreateNoteContainer";

export const WebRoutes = createBrowserRouter([
    {
        path:"/",
        element: (
            <Template currentPage="main">
                <MainPageContainer/>
            </Template>
        ),
    },
    {
        path:"/account",
        element: (
            <Template currentPage="account">
                <Account/>
            </Template>
        ),
    },
    {
        path:"/createNote",
        element: (
            <Template currentPage="createNote">
                <CreateNoteContainer/>
            </Template>
        ),
    },
    {
        path:"/auth",
        element: (
            <Template currentPage="account">
                <AuthContainer/>
            </Template>
        ),
    },
    {
        path:"/registration",
        element: (
            <Template currentPage="account">
                <RegistrationContainer/>
            </Template>
        ),
    }
])