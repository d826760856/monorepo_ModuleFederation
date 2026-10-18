import { useContext } from "react";
import { HostPropsContext } from "../App";
import type { AppProps } from '../App'
function Input() {
    const { title } = useContext(HostPropsContext) as AppProps 
    return(
        <div>
            {title}
            路由Input页面
        </div>
    )
}
export default Input