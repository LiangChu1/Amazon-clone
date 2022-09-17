import React, { useContext } from 'react'
import './CheckoutProduct.css'
import { StateContext } from './StateProvider';

function CheckoutProduct({id, image, title, price, rating, hideButton}) {
    
    const { state, dispatch } = useContext(StateContext);

    const removeFromBasket = () => {
        //remove item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
  
    return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image}/>
        <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className='checkoutProduct__rating'>
                    {new Array(rating).fill().map(() => (<p>⭐</p>))}
                </p>
                {!hideButton &&( 
                <button onClick={removeFromBasket}>remove from basket</button>
                )}
        </div>
    </div>
  )
}

export default CheckoutProduct 
