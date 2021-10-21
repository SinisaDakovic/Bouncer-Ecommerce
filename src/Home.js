import React from 'react'
import Carousel from './carousel'
import About from './components/about'
import News from './components/news'
import Search from './components/search'
import Products from './components/products'
import Ad from './components/ad'
import SellingSec from './components/SellingSec'

export default function Home() {
    return (
        <>
            <Carousel/>
            <SellingSec/>
            <Ad/>
            <About/>
            <News/>
            <Products/>
            <Search/>
        </>
    )
}


