
export type AppProps = {
  title: string
}
import { RouterProvider } from "react-router-dom"
import router from "./router"
import { createContext } from "react";

export const HostPropsContext = createContext<AppProps | null>(null);

function App(props: AppProps) {
  return (
    <HostPropsContext.Provider value={props}>
      <RouterProvider router={router}>
      </RouterProvider>
    </HostPropsContext.Provider>
    )
}

export default App
