// import React from 'react'
import Nav from "../Output/Nanbar/Nav"
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

export default function Output() {
    return (
        <>
            <Nav />
            <Outlet></Outlet>

            <Footer />
        </>
    )
}
