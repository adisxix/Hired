import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
const AppLayout = ()=>{
    return(
        <div className="relative min-h-screen overflow-x-hidden">
          <div className = "grid-background"></div>
          <main className="relative z-10">
            <Header />
            <Outlet />

          </main>
          <div className="relative z-10">
            <Footer />
          </div>
        </div>
    )
}

export default AppLayout;