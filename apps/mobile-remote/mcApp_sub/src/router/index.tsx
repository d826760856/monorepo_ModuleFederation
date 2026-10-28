import { createBrowserRouter } from "react-router-dom";
import McApp_Sub from '../evtTest'
import UnifyMcApp_Sub from '../unifyTodoEvtText'

const router = createBrowserRouter([
    { path: '', element: <McApp_Sub></McApp_Sub> },
    { path: '/local', element: <UnifyMcApp_Sub></UnifyMcApp_Sub> },
])
export default router