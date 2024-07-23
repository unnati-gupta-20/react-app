import React from 'react'
import Header from '../Components/Header'
import Popular_Categories from '../Components/Popular_Categories'
import Local_Market from '../Components/Local_Market'
import Recommendations from '../Components/Recommendations'
import Sale from '../Components/Sale'
import Footer from '../Components/Footer'

export default function LandingPage() {
    return (
        <main>

            <Header />
            <Popular_Categories />
            <Local_Market />
            <Recommendations />
            <Sale />
            <Footer />

        </main>
    )
}
