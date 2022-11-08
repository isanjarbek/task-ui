import React, { Suspense } from "react"
import Layout from "components/Layout"
import { routes } from "routes/routes"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <Layout>
      <Suspense>
        <Routes>
          {routes.map(({ path, element, ...rest }, key) => (
            <Route {...{ path, element, ...rest }} key={key} />
          ))}
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
