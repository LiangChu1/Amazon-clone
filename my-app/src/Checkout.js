import React, { useContext } from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { StateContext } from './StateProvider';
import Subtotal from './Subtotal'

function Checkout() {
    
    const { state, dispatch } = useContext(StateContext);
  
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg' alt='' />
                
                <div>
                    <h3>Hello, {state.user?.email}</h3>
                    <h2 className='checkout__title'>
                        Your shopping basket
                    </h2>

                    {state.basket.map(item => (
                        <CheckoutProduct 
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                    ))}    
                </div>

            </div>

            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
  )
}

export default Checkout
