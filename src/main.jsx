import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, } from 'react-router-dom'
import myCreatedRouter from './MyRoute/MyRoute'

// const myCreatedRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home></Home>
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRouter}></RouterProvider>
  </React.StrictMode>,
)
