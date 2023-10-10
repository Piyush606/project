import React from 'react'
import Header from './Header'
import Footer from './Footer'
import WhatsappIcon from './WhatsappIcon'


const Layout = ({children}) => {
  return (
    <>
        <Header />
        <WhatsappIcon/>
        <div className='shadow-sm'>
        {children}
        </div>
        <Footer />
    </>
  )
}

export default Layout
