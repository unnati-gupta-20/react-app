import React from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom';

const items = [
    { id: '1', brand: 'Asa', price: '856.42', description: 'Black And White Stripes Scarf', modelsrc: '/displays/popular/model/model1.webp', productsrc: '/displays/popular/product/product1.webp', views:'83', size:'free', modelsize:'M', material:'Polyester', productcode:'4536453' },
    { id: '2', brand: 'Soyeon', price: '1031.16', description: 'Yellow-Lilac Crochet Flowers Scarf', modelsrc: '/displays/popular/model/model2.jpg', productsrc: '/displays/popular/product/product2.jpg'  ,views:'35', size:'free', modelsize:'S', material:'Yarn', productcode:'5766584' },
    { id: '3', brand: 'Hyuna', price: '1029.43', description: 'Green Floral Lace Head Scarf', modelsrc: '/displays/popular/model/model3.jpg', productsrc: '/displays/popular/product/product3.png' , views:'43', size:'free', modelsize:'M', material:'Yarn', productcode:'7465773'},
    { id: '4', brand: 'Mina', price: '3711.14', description: 'Black Scarf Pattern Skirt', modelsrc: '/displays/popular/model/model4.jpg', productsrc: '/displays/popular/product/product4.jpg'  ,views:'56', size:'free', modelsize:'L', material:'Cotton', productcode:'8574839'},
    { id: '5', brand: 'Jihyo', price: '1721.49', description: 'Red Summer Faux Silk Scarf', modelsrc: '/displays/popular/model/model5.jpg', productsrc: '/displays/popular/product/product5.jpg', views:'96', size:'free', modelsize:'M', material:'Faux silk', productcode:'85867574' },
    { id: '6', brand: 'Jungkook', price: '1288.95', description: 'Silver O-Chain Bracelet', modelsrc: '/displays/Recommendations/model/model2.webp', productsrc: '/displays/Recommendations/product/product2.webp' , views:'35', size:'slim fit', modelsize:'M', material:'Silver', productcode:'97885873'},
    { id: '7', brand: 'Jimin', price: '4662.72', description: 'Black Leather Chain Strap Bag', modelsrc: '/displays/Recommendations/model/model3.webp', productsrc: '/displays/Recommendations/product/product3.webp' , views:'76', size:'free', modelsize:'M', material:'Faux Leather', productcode:'5452627'},
    { id: '8', brand: 'Jimin', price: '11237.24', description: 'White Cashmere Cardigan With Blue Lining', modelsrc: '/displays/Recommendations/model/model4.webp', productsrc: '/displays/Recommendations/product/product4.webp',  views:'87', size:'free', modelsize:'M', material:'Cashmere', productcode:'14335'}

];

export default function PopularProductPage() {
    let { id } = useParams()
    let filterData = items.filter((popular) => popular.id === id)
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











/* import React from 'react';

export default function Header() {
    const items = [
        { id:'1',brand: 'Asa', price: '856.42', description: 'Black And White Stripes Scarf', modelsrc:'/public/displays/popular/model/model1.webp', productsrc:'/public/displays/popular/product/product1.webp' },
    { id:'2',brand: 'Soyeon', price: '1031.16', description: 'Yellow-Lilac Crochet Flowers Scarf', modelsrc:'/public/displays/popular/model/model2.jpg', productsrc:'/public/displays/popular/product/product2.jpg' },
    { id:'3',brand: 'Hyuna', price: '1029.43', description: 'Green Floral Lace Head Scarf', modelsrc:'/public/displays/popular/model/model3.jpg', productsrc:'/public/displays/popular/product/product3.png' },
    { id:'4',brand: 'Mina', price: '3711.14', description: 'Black Scarf Pattern Skirt' ,modelsrc:'/public/displays/popular/model/model4.jpg', productsrc:'/public/displays/popular/product/product4.jpg' },
    { id:'5',brand: 'Jihyo', price: '1721.49', description: 'Red Summer Faux Silk Scarf', modelsrc:'/public/displays/popular/model/model5.jpg', productsrc:'/public/displays/popular/product/product5.jpg'},
    { id:'6',brand: 'Hyunjin', price: '2067.51', description: 'Hotter-than-your-ex T-shirt', modelsrc:'/public/displays/Recommendations/model/model1.webp', productsrc:'/public/displays/Recommendations/product/product1.webp' },
    { id:'7',brand: 'Jungkook', price: '1288.95', description: 'Silver O-Chain Bracelet', modelsrc:'/public/displays/Recommendations/model/model2.webp', productsrc:'/public/displays/Recommendations/product/product2.webp' },
    { id:'8',brand: 'Jimin', price: '4662.72', description: 'Black Leather Chain Strap Bag', modelsrc:'/public/displays/Recommendations/model/model3.webp', productsrc:'/public/displays/Recommendations/product/product3.webp' },
    { id:'9',brand: 'Jimin', price: '11237.24', description: 'White Cashmere Cardigan With Blue Lining' ,modelsrc:'/public/displays/Recommendations/model/model4.webp', productsrc:'/public/displays/Recommendations/product/product4.webp' },
    { id:'10',brand: 'Taehyung', price: '2586.55', description: 'White Asymmetrical Shoulder Cut-Out Cardigan', modelsrc:'/public/displays/Recommendations/model/model5.webp', productsrc:'/public/displays/Recommendations/product/product5.webp'}
]; 
    return (
        <section>
            <div className='page2container'>
                {items.map((display, index) => (
                    <div key={index} className='product'>
                        <div className='productimg'>
                            <img src={display.productsrc} alt='Product' />
                        </div>

                        <div className='producttext'>
                            <div className='productinfo'>
                                <h1>{display.description}</h1>
                                <h2>{display.brand}</h2>
                                <h3>₹{display.price}</h3>
                            </div>

                            <div className='otherinfo'>
                                <p className='views'>183 views in the last 10 hours</p>
                                <p className='size'>Select size</p>
                                <div className='buttoncontainer'>
                                    <button>XS</button>
                                    <button>S</button>
                                    <button>M</button>
                                    <button>L</button>
                                    <button>XL</button>
                                </div>
                            </div>

                            <div className='productdetails'>
                                <h2>PRODUCT DETAILS</h2>
                                <p>A black and white scarf handmade with perfection.</p>

                                <h2>Size & Fit</h2>
                                <p>Slim-fit</p>
                                <p>The model (height 6') is wearing a size M</p>

                                <h2>Material & Care</h2>
                                <p>65% Polyester & 20% Viscose & 15% Wool</p>
                                <p>Dry Clean</p>

                                <h2>Product Code:</h2>
                                <p>27289454</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
} */