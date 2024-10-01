import { Outlet } from "react-router"
import Header from "../Header/Header"
import Footer from '../Footer/Footer'
function SharedLayout() {
  return (
    <div>
        <Header/>
            <Outlet/>
        <Footer/>
    </div>
  )
}

export default SharedLayout
