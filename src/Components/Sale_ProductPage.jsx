import React from 'react'
import Header from './Header'
import Footer from './Footer'

const items  = [
  { id:'1',discount: '60%-75%', description: 'Kids Wear', productsrc:'/displays/Sale/product1.jpg' },
  { id:'2',discount: '70%-80%', description: 'Ethnic Wear', productsrc:'/displays/Sale/product2.jpg' },
  { id:'3',discount: '30%-40%', description: 'Jeans',productsrc:'/displays/Sale/product3.jpg' },
  { id:'4',discount: '25%-35%', description: 'Shoes' , productsrc:'/displays/Sale/product4.jpg' },
  { id:'5',discount: '50%-55%',description: 'Office Wear', productsrc:'/displays/Sale/product5.jpg'},
  { id:'6',discount: '10%-15%',description: 'Jewellery', productsrc:'/displays/Sale/product6.jpg'},
  { id:'7',discount: '10%-25%',description: 'Skincare', productsrc:'/displays/Sale/product7.jpg'},
  { id:'8',discount: '25%-30%',description: 'Makeup', productsrc:'/displays/Sale/product8.jpg'}
];


export default function Sale_ProductPage() {
  return (
    <>
        <Header/>
        <section className="page2_section">

            <div className="page2_heading"> 
                <p>Sale</p>
            </div>

            
            

            <div className="product_container">
            {items.map((display,index)=>(

              <div className="display" key={display.id}>
                    <a href="#">    
                        <div className="img">
                            <img className='sale_product' src={display.productsrc}></img>
                        </div>
                    </a>

                    <div className="sale_text">
                        <div className='description'>
                            <a href='#' className='Discount'>{display.discount}</a>
                            <a href='#' className='item_name'>{display.description}</a>
                        </div>
                    </div>
                </div>                 
            ))}
            </div>
         </section>
        <Footer/>
    </>
  )
}
