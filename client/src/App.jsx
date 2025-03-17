import AboutUs from "./components/AboutUs"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Subscription from "./components/Subscription"
// import Slides from "./components/Slides"
import Example from "./components/Example"
import Chats from "./components/connections/Connections"

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
    {
      path: '/chat',
      element: <><Navbar /><Chats /><Footer /></>
    },

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App