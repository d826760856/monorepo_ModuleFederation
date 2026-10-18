import { createBrowserRouter } from "react-router-dom";
import Button from "../pages/Button";
import Input from "../pages/Input";

const router = createBrowserRouter([
    { path: '/', element: <Button></Button> },
    { path: '/button', element: <Button></Button> },
    { path: '/Input', element: <Input></Input> },
])

export default router