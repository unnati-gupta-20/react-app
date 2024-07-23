import React from 'react'
import Header from './Header'
import Footer from './Footer'

const items  = [
    { id:'1',brand: 'Biba', price: '2356', description: 'Blue Kurti', modelsrc:'/displays/LocalMarket/model1.jpg' },
    { id:'2',brand: 'Vogue', price: '31031.16', description: 'Crystal Laced Necklace', modelsrc:'/displays/LocalMarket/model2.jpg'},
    { id:'3',brand: 'Soch', price: '5029.43', description: 'Golden Handwoven Saree', modelsrc:'/displays/LocalMarket/model3.jpg' }
     
];

export default function Local_ProductPage() {
  return (
    <>
        <Header/>
        <section className="page2_section">

            <div className="page2_heading"> 
                <p>Local</p>
            </div>

            
            

            <div className="product_container">
            {items.map((display,index)=>(

                <div className="display"  key={display.id}>
                    <a href="#">    
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
        <Footer/>
    </>
  )
}
