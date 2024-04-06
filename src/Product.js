import React from 'react'
import './Product.css'
import GradeIcon from '@mui/icons-material/Grade';
import { useStateValue } from './StateProvider'

function Product({ id , title , image , price , rating}) {
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () =>{
        // dispatch the item into data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

  return (
    <div className='product'>
        <div className="product-info">
            <p>{title}</p>
        </div>
        <p className="product-price">
            <small>₹</small>
            <strong>{price}</strong>
        </p>
        <div className="product-rating">
            {Array(rating).fill().map((_, i) => (
                <p key={i}><GradeIcon/></p>
            ))}
        </div>
        <img src={image} alt="" />
        <button onClick={addToBasket}>Add To Cart</button>
    </div>
  )
}

export default Product