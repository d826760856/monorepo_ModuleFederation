import WujieReact from "wujie-react";
import lifecycles from "./lifecycle";
import plugins from "./plugin";
import './index.css'

const { setupApp } = WujieReact;
type WujieReactProps = Parameters<typeof setupApp>[0] & {
    width?: string;
    height?: string;
};

const degrade = window.localStorage.getItem("degrade") === "true" || !window.Proxy || !window.CustomElementRegistry;

function WujieApp(props: WujieReactProps) {
    return <WujieReact {...props} />;
}

setupApp({
    name: "react17",
    url: "http://localhost:5173/",
    //   attrs,
    exec: true,
    // fetch: credentialsFetch,
    plugins,
    // prefix: { "prefix-dialog": "/dialog", "prefix-location": "/location" },
    degrade,
    ...lifecycles,
});

function McApp() {
    return(
        <>
            <div className="mcApp">这是mcApp</div>
            <WujieApp
                width="100%"
                height="100%"
                name="react17"
                // sync={true}
                // props={props}
            />
        </>
    )
}
export default McApp