import React from 'react';
import { Jumbotron, Button,} from 'react-bootstrap'
import { Link } from "react-router-dom"

const Prices = (props) => {
 return(
   <div>
     <section data-scroll-index="3" className="prices content-block">
       <div className="container">
         <h2 data-aos="zoom-in-up">Pricing</h2>
         <div className="row">
           <div className="col-md-4">
             <div className="price-option">
               <h3 className="price-option-name">ROUND CAKES</h3>
               <div className="price-option-main">
                 <div className="price-value">
                   <span className="price-currency">$</span>20<span className="pricing-desc">/class</span>
                 </div>

                 <div className="price-option-features">
                <p> 8"               8-10              $19.99</p>
                 <p>10"             14-18              $31.99</p>
                <p> 12"             25-30              $42.99</p>
                <p> 14"             50-60              $86.99</p>
              <p>   16"             70-80             $112.99</p>

                 </div>
               </div>
             </div>
           </div>
           <div className="col-md-4">
             <div className="price-option">
               <h3 className="price-option-name highlighted">SHEET CAKES</h3>
               <div className="price-option-main">
                 <div className="price-value">
                   <span className="price-currency">$</span>150<span className="pricing-desc">/mth</span>
                 </div>

                 <div className="price-option-features">
              <p>   ¼ SHEET         18-20              $26.99</p>
              <p>   ½ SHEET         40-50              $54.99</p>
              <p>   FULL SHEET     80-108            $96.99</p>
                 </div>
               </div>
             </div>
           </div>
           <div className="col-md-4">
             <div className="price-option">
               <h3 className="price-option-name">CUPCAKES </h3>
               <div className="price-option-main">
                 <div className="price-value">
                   <span className="price-currency">$</span>300<span className="pricing-desc">/mth</span>
                 </div>
                 <div className="price-option-features">
                   <p>$8.00  ½ Dozen             $16.00 Dozen</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
   </div>
 )
}

export default Prices;
