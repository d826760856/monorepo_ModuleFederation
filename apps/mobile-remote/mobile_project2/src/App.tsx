import { RouterProvider } from "react-router-dom"
import router from "./router"
import type { AppProps } from './router/route-props'

import { RoutePropsContext } from "./router/route-props-context"

function App({ props = {} }: AppProps) {
  return (
    <RoutePropsContext.Provider value={props}>
      <RouterProvider router={router}>
      </RouterProvider>
    </RoutePropsContext.Provider>
    )
}

export default App
