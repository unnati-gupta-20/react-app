import React from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom';


const items  = [
    { id:'1',brand: 'Hyunjin', price: '2067.51', description: 'Hotter-than-your-ex T-shirt', modelsrc:'/displays/Recommendations/model/model1.webp', productsrc:'/displays/Recommendations/product/product1.webp' , views:'63', size:'slim fit', modelsize:'M', material:'Cotton', productcode:'645353' },
    { id: '2', brand: 'Jungkook', price: '1288.95', description: 'Silver O-Chain Bracelet', modelsrc: '/displays/Recommendations/model/model2.webp', productsrc: '/displays/Recommendations/product/product2.webp' , views:'35', size:'slim fit', modelsize:'M', material:'Silver', productcode:'97885873'},
    { id: '3', brand: 'Jimin', price: '4662.72', description: 'Black Leather Chain Strap Bag', modelsrc: '/displays/Recommendations/model/model3.webp', productsrc: '/displays/Recommendations/product/product3.webp' , views:'76', size:'free', modelsize:'M', material:'Faux Leather', productcode:'5452627'},
    { id: '4', brand: 'Jimin', price: '11237.24', description: 'White Cashmere Cardigan With Blue Lining', modelsrc: '/displays/Recommendations/model/model4.webp', productsrc: '/displays/Recommendations/product/product4.webp',  views:'87', size:'free', modelsize:'M', material:'Cashmere', productcode:'14335'},
    { id:'5',brand: 'Taehyung', price: '2586.55', description: 'White Asymmetrical Shoulder Cut-Out Cardigan', modelsrc:'/displays/Recommendations/model/model5.webp', productsrc:'/Recommendations/product/product5.webp' , views:'76', size:'slim fit', modelsize:'M', material:'Cardigan', productcode:'75646346'}
];



export default function Recommendations_detail() {
    let { id } = useParams()
    let filterData = items.filter((recommendations) => recommendations.id === id)
    console.log(filterData)

    
        return (
            <>
                <Header />

                <section>
                    <div className='page2container'>

                        <div className='productimg'>
                            <img src={filterData[0].productsrc}></img>
                            <img src={filterData[0].modelsrc}></img>
                        </div>


                        <div className='producttext'>

                            <div className='productinfo'>
                                <h1>{filterData[0].description}</h1>
                                <h2>{filterData[0].brand}</h2>
                                <h3>₹{filterData[0].price}</h3>
                            </div>

                            <div className='otherinfo'>
                                <div className='viewcontainer'>
                                <p className='views'>{filterData[0].views} </p> 
                                <p>views in the last 10 hours</p>
                                </div>

                                <p className='size'>Select size</p>
                                <div className='buttoncontainer'>
                                    <button>XS</button>
                                    <button>S</button>
                                    <button>M</button>
                                    <button>L</button>
                                    <button>XL</button>
                                </div>

                            </div>

                            <div className='pg2buttoncontainer'>
                                <button className='addtocart_pg2' onClick={() => alert('Added to cart')}>Add to cart</button>
                                <button className='addtowishlist_pg2' onClick={() => alert('Added to wishlist')}>Add to wishlist</button>
                            </div>

                            <div className='productdetails'>
                                

                                <h2>Size & Fit </h2>
                                <p>{filterData[0].size}</p>
                                <p>The model (height 6') is wearing a size {filterData[0].modelsize}</p>

                                <h2>Material & Care </h2>
                                <p>{filterData[0].material}</p>
                                <p>Dry Clean</p>

                                <h2>Product Code:<p>{filterData[0].productcode}</p></h2>








                            </div>
                        </div>

                    </div>




                </section>

            </>

        )
    }










