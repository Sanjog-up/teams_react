import { Outlet } from 'react-router'
import Navbar from '../src/components/navbar'
import Footer from '../src/components/footer'

const ClientLayount = () => {
  return (
    <main className="page">
      {/* <Navbar /> */}

        <Outlet/>
      {/* footer */}
      <Footer/>
    </main>
  )
}

export default ClientLayount;
