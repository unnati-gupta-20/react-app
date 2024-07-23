import React from 'react'
import Header from './Header'

export default function Faq() {
    return (
        <>
            <Header/>
            <div>

                <div className="faq">
                    <p className="heading">FAQ</p>

                    <div className='question'>
                        <h2>What is CLOTHO?</h2>

                        <p className="dropdown">Clotho is a global marketplace for creative and one-of-a-kind goods.
                            It’s home to a universe of special, extraordinary items, from unique home
                            decor pieces to trending fashion finds.</p>

                    </div>

                    <div className='question'>
                        <h2>Why choose CLOTHO?</h2>

                        <div className="dropdown">
                            <h3>A community doing good</h3>
                            <p>CLOTHO is where people come together to make, sell, buy, and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet. Here are some of the ways we’re making a positive impact, together:

                                Your purchases on CLOTHO in 2021 generated nearly $4 billion in income for small businesses.

                                We advocate for policy—at the global and local level—that benefits creative entrepreneurs and helps small businesses grow and thrive.

                                We are deepening our commitment to a sustainable future and are working towards a new goal to reach net zero emissions by 2030.
                            </p>

                            <h3>Support independent creators</h3>
                            <p>There’s no CLOTHO warehouse—just millions of people selling the things they love. We make the whole process easy, helping you connect directly with talented artisans from across the world (including India) to find something extraordinary.
                            </p>

                            <h3>Peace of mind</h3>
                            <p>With CLOTHO Purchase Protection, you can shop confidently, knowing if something goes wrong with your order, we’ve got your back for all eligible purchases. If you ever need assistance, we are always ready to step in for support.
                            </p>



                        </div>
                    </div>


                    <div className='question'>
                        <h2>How to buy on CLOTHO?</h2>

                        <p className="dropdown">If you’re looking for something specific, start by putting in the
                            keywords in our search and then using filters to narrow down the results. You can even
                            message the sellers with any questions or requests you may have before placing an order with them.
                            If you’re looking for inspiration, head on over to our <a href='#'>Editor’s Picks</a> or look out
                            for the <a href='#'>latest updates</a> on our Journal to discover extraordinary items.</p>
                    </div>

                    <div className='question'>
                        <h2>How to sell on CLOTHO?</h2>

                        <p className="dropdown">You can sell handmade goods, vintage items, and craft supplies on CLOTHO.
                            With low fees, powerful tools, and support and education, we help creative entrepreneurs start, manage,
                            and scale their businesses. Want to open a shop? All it takes is Rs. 16* to <a href='#'> start selling on CLOTHO</a>.</p>

                        <p class="dropdown">*Listing fees are billed for 0.20 USD, so if your bank's currency is not USD, the amount in your currency
                            may vary based on changes in the exchange rate.</p>
                    </div>

                    <div className='question'>
                        <h2>Contact</h2>
                        <p className="dropdown">Mail us at <a href='#'>CLOTHO2024@gmail.com</a> or call +91 9014577777</p>
                        <p className='dropdown'> Drop a hi! at our DM on our <a href='https://www.instagram.com/uranium_spams/'>Instagram</a> and <a href='https://www.linkedin.com/in/unnati-gupta-3869b5254/'>LinkedIn</a></p>
                    </div>

                </div>

            </div>
        </>

    )
}
