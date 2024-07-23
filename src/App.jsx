import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Header from './Components/Header'
import Popular_Categories from './Components/Popular_Categories'
import Local_Market from './Components/Local_Market'
import Recommendations from './Components/Recommendations'
import Sale from './Components/Sale'
import Footer from './Components/Footer'
import PopularProductPage from './Components/PopularProductPage'
import LandingPage from './pages/LandingPage'
import Faq from './Components/Faq'
import { Route, Routes } from 'react-router-dom'
import Popular_Categories_ProductPage from './Components/Popular_Categories_ProductPage'
import Sale_ProductPage from './Components/Sale_ProductPage'
import Recommendations_ProductPage from './Components/Recommendations_ProductPage'
import Local_ProductPage from './Components/Local_ProductPage'
import Recommendations_detail from './Components/Recommendation_detail'




export default function App() {


    return (
        <Routes>

            <Route
                path="/"
                element={<LandingPage />}

            />

            <Route
                path="/popular/product/:id"
                element={<PopularProductPage />}

            />

            <Route
                path="/recommendations/product/:id"
                element={<Recommendations_detail />}

            />

            <Route
                path="/faq"
                element={<Faq />}

            />

            <Route
                path="/popular"
                element={<Popular_Categories_ProductPage />}

            />

            <Route
                path="/categories"
                element={<Sale_ProductPage />}

            />

            <Route
                path="/recommendations"
                element={<Recommendations_ProductPage />}

            />

            <Route
                path="/local"
                element={<Local_ProductPage />}

            />







        </Routes>
    )
}





