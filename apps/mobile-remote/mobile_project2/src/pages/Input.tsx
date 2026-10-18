import { useContext } from "react";
import { RoutePropsContext } from "../router/route-props-context";
import type { InputProps } from '../router/route-props'
function Input() {
    const props = useContext(RoutePropsContext).input as InputProps | undefined
    return(
        <div>
            {props?.title}
            路由Input页面
        </div>
    )
}
export default Input