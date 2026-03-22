import { Toaster } from "react-hot-toast";
import Footer from "./Footer"
import Header from "./Header"


function Layout({children}) {
    const style = { minHeight: "150vh" };
  return (
    <div>
      <Header/>
      <div style={style}>
        {children}
      </div>
      <Footer/>
      <Toaster />
    </div>
  )
}

export default Layout
