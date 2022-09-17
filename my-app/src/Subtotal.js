import React, { useContext } from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { StateContext } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const history = useHistory();
    const { state, dispatch } = useContext(StateContext);
    
    return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value) => (
                <>
                <p>
                    Subtotal ({state.basket.length} items): <strong>{value}</strong>
                </p>
                <small className='subtotal__gift'>
                    <input type= "checkbox" />
                    This order contains a gift
                </small>                
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(state.basket)} 
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}      
        />

        <button onClick={e => history.push('/payment')}>
            Proceed to Checkout
        </button>
    </div>
  )
}

export default Subtotal
