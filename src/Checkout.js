// import React from 'react'
// import './Checkout.css'

// function Checkout() {
//   return (
//     <div className='checkout'>
//         <div className="checkout-left">
//             <img
//                 className='checkout-ad' 
//                 src="https://m.media-amazon.com/images/G/31/img21/Pharmacy/Pc_popup_diduknow_WA_1.gif" alt="" 
//             />
//             <div className='checkout-title'>
//                 <h1>Shopping Cart</h1>
//             </div>
//         </div>
//         <div className="checkout-right">
//             <h1>Subtotal</h1>
//         </div>
//     </div>
//   )
// }

// export default Checkout

import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className='checkout'>
        <img
            className='checkout-ad' 
            src="https://m.media-amazon.com/images/G/31/img21/Pharmacy/Pc_popup_diduknow_WA_1.gif" alt="" 
        />
        <div className='checkout-content'>
    <div className="checkout-left">
        <div className='checkout-title'>
            <h1>Shopping Cart</h1>
        </div>
    </div>
    <div className="checkout-right">
        <Subtotal/>
    </div>
</div>

        
    </div>
  )
}

export default Checkout