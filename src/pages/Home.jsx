import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

const Home = () => {
    return (
        <div>
            <Navbar />
            <section className="flex flex-col border-b-[1px] b border-gray-400 mx-16 pt-28 pb-10 ">
                <h1 className="text-3xl">Top Selling</h1>
                <div className="gap-5 flex-wrap items-center justify-center pt-10 flex">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
            <section className="flex flex-col border-b-[1px] b border-gray-400 mx-16 pt-10 pb-10 ">
                <h1 className="text-3xl">New Arrivals</h1>
                <div className="gap-5 flex-wrap items-center justify-center pt-10 flex">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
            <section className="flex flex-col border-b-[1px] b border-gray-400 mx-16 pt-10 pb-10 ">
                <h1 className="text-3xl">Explore</h1>
                <div className="gap-5 flex-wrap items-center justify-center pt-10 flex">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>

        </div>
    )
}

export default Home