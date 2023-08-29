import Image from 'next/image'
import Navbar from './navbar'
import Category from './category'
import Menu from './menu'
import Footer from './footer'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Category/>
      <Menu/>
      <Footer/>
    </div>
  )
}
