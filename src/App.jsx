// import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './componants/Output/About/About'
import Portfolio from './componants/Output/Portofolio/Portfolio'
import Contact from './componants/Output/Contact/Contact'
import Output from './componants/Output/Output'

function App() {
  const router = createBrowserRouter([{
    path: "", element: <Output />, children: [
      { path: "", element: <About /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
    ]
  }
  ])

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
