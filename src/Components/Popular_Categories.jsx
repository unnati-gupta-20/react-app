import React from 'react'

const items  = [
    { id:'1',brand: 'Asa', price: '856.42', description: 'Black And White Stripes Scarf', modelsrc:'/displays/popular/model/model1.webp', productsrc:'/displays/popular/product/product1.webp' },
    { id:'2',brand: 'Soyeon', price: '1031.16', description: 'Yellow-Lilac Crochet Flowers Scarf', modelsrc:'/displays/popular/model/model2.jpg', productsrc:'/displays/popular/product/product2.jpg' },
    { id:'3',brand: 'Hyuna', price: '1029.43', description: 'Green Floral Lace Head Scarf', modelsrc:'/displays/popular/model/model3.jpg', productsrc:'/displays/popular/product/product3.png' },
    { id:'4',brand: 'Mina', price: '3711.14', description: 'Black Scarf Pattern Skirt' ,modelsrc:'/displays/popular/model/model4.jpg', productsrc:'/displays/popular/product/product4.jpg' },
    { id:'5',brand: 'Jihyo', price: '1721.49', description: 'Red Summer Faux Silk Scarf', modelsrc:'/displays/popular/model/model5.jpg', productsrc:'/displays/popular/product/product5.jpg'},
    { id:'6',brand: 'Jungkook', price: '1288.95', description: 'Silver O-Chain Bracelet', modelsrc:'/displays/Recommendations/model/model2.webp', productsrc:'/displays/Recommendations/product/product2.webp' },
    { id:'7',brand: 'Jimin', price: '4662.72', description: 'Black Leather Chain Strap Bag', modelsrc:'/displays/Recommendations/model/model3.webp', productsrc:'/displays/Recommendations/product/product3.webp' },
    { id:'8',brand: 'Jimin', price: '11237.24', description: 'White Cashmere Cardigan With Blue Lining' ,modelsrc:'/displays/Recommendations/model/model4.webp', productsrc:'/displays/Recommendations/product/product4.webp' }
    
];



export default function Popular_Categories() {
    return (
        <section className="section">

            <div className="heading"> 
                <a href='/popular'>Popular </a>
            </div>

            
            

            <div className="container">
            {items.map((display,index)=>(

                <div className="display"  key={display.id}>
                    <a href={`/popular/product/${display.id}`}>    
                        <div className="img">
                            <img className='model' src={display.modelsrc}></img>
                            <img className='product' src={display.productsrc}></img>
                            <button onClick={() => alert('Added to wishlist')}><img src='/icons/Addtofav.svg'></img></button>
                        </div>
                    </a>

                    <div className="text">
                        <div className='description'>
                            <a href='#' className='Brand'>{display.brand}</a>
                            <a href='#' className='item_name'>{display.description}</a>
                            <a href='#' className='price'>₹{display.price}</a>
                        </div>

                        <button onClick={() => alert('Added to cart')}><img src='/icons/Addtocart.svg'></img></button>
                    </div>
                </div>                 
            ))}
            </div>
         </section>

    )
}


{/* <div className="display">
                    <a href="#">
                        <div className="img">
                            <img className='model' src='/public/displays/popular/model/model2.jpg'></img>
                            <img className='product' src='/public/displays/popular/product/product2.jpg'></img>
                            <button><img src='/public/icons/Addtofav.svg'></img></button>
                        </div>
                    </a>

                    <div className="text">
                        <div className='description'>
                            <a href='#' className='Brand'>Soyeon</a>
                            <a href='#' className='item_name'>Yellow-Lilac Crochet Flowers Scarf</a>
                            <a href='#' className='price'>₹1031.16</a>
                        </div>

                        <button><img src='/public/icons/Addtocart.svg'></img></button>
                    </div>
                </div>

                <div className="display">
                    <a href="#">
                        <div className="img">
                            <img className='model' src='/public/displays/popular/model/model3.jpg'></img>
                            <img className='product' src='/public/displays/popular/product/product3.png'></img>
                            <button><img src='/public/icons/Addtofav.svg'></img></button>
                        </div>
                    </a>

                    <div className="text">
                        <div className='description'>
                            <a href='#' className='Brand'>Hyuna</a>
                            <a href='#' className='item_name'>Green Floral Lace Head Scarf</a>
                            <a href='#' className='price'>₹1029.43</a>
                        </div>

                        <button><img src='/public/icons/Addtocart.svg'></img></button>
                    </div>
                </div>

                <div className="display">
                    <a href="#">
                        <div className="img">
                            <img className='model' src='/public/displays/popular/model/model4.jpg'></img>
                            <img className='product' src='/public/displays/popular/product/product4.jpg'></img>
                            <button><img src='/public/icons/Addtofav.svg'></img></button>
                        </div>
                    </a>

                    <div className="text">
                        <div className='description'>
                            <a href='#' className='Brand'>Mina</a>
                            <a href='#' className='item_name'>Black Scarf Pattern Skirt</a>
                            <a href='#' className='price'>₹3711.14</a>
                        </div>

                        <button><img src='/public/icons/Addtocart.svg'></img></button>
                    </div>
                </div>

                <div className="display">
                    <a href="#">
                        <div className="img">
                            <img className='model' src='/public/displays/popular/model/model5.jpg'></img>
                            <img className='product' src='/public/displays/popular/product/product5.jpg'></img>
                            <button><img src='/public/icons/Addtofav.svg'></img></button>
                        </div>
                    </a>

                    <div className="text">
                        <div className='description'>
                            <a href='#' className='Brand'>Jihyo</a>
                            <a href='#' className='item_name'>Red Summer Faux Silk Scarf</a>
                            <a href='#' className='price'>₹1721.49</a>
                        </div>

                        <button><img src='/public/icons/Addtocart.svg'></img></button>
                    </div>
                </div>*/}