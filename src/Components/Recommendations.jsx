import React from 'react'

const items  = [
    { id:'1',brand: 'Hyunjin', price: '2067.51', description: 'Hotter-than-your-ex T-shirt', modelsrc:'/displays/Recommendations/model/model1.webp', productsrc:'/displays/Recommendations/product/product1.webp' },
    { id:'2',brand: 'Jungkook', price: '1288.95', description: 'Silver O-Chain Bracelet', modelsrc:'/displays/Recommendations/model/model2.webp', productsrc:'/displays/Recommendations/product/product2.webp' },
    { id:'3',brand: 'Jimin', price: '4662.72', description: 'Black Leather Chain Strap Bag', modelsrc:'/displays/Recommendations/model/model3.webp', productsrc:'/displays/Recommendations/product/product3.webp' },
    { id:'4',brand: 'Jimin', price: '11237.24', description: 'White Cashmere Cardigan With Blue Lining' ,modelsrc:'/displays/Recommendations/model/model4.webp', productsrc:'/displays/Recommendations/product/product4.webp' },
    { id:'5',brand: 'Taehyung', price: '2586.55', description: 'White Asymmetrical Shoulder Cut-Out Cardigan', modelsrc:'/displays/Recommendations/model/model5.webp', productsrc:'/Recommendations/product/product5.webp'}
];

export default function Recommendations() {
    return (
        <section className="section">

            <div className="heading"> 
                <a href='/recommendations'>Recommendations</a>
            </div>

            
            

            <div className="container">
            {items.map((display,index)=>(

                <div className="display"  key={display.id}>
                    <a href={`/recommendations/product/${display.id}`}>    
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
