export type InputProps = {
    title: string;
};
export type RoutePropsMap = {
    input: InputProps;
};
export type AppProps = {
    routeProps?: Partial<RoutePropsMap>;
};
