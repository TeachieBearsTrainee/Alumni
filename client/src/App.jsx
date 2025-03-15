import AboutUs from "./components/AboutUs"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Subscription from "./components/Subscription"
// import Slides from "./components/Slides"
import Example from "./components/Example"

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /><AboutUs /><Footer /></>
    },
    {
      path: '/subscription',
      element: <><Navbar /><Subscription /><Footer /></>
    },
    {
      path: '/home',
      element: <><Navbar /><Example /><Footer /></>
    },


  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App