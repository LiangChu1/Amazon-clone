import React, {useContext} from "react";
import './Product.css';
import { StateContext} from './StateProvider';

function Product({id, title, image, price, rating}) {
  
  const { state, dispatch } = useContext(StateContext);

  const addToBasket = () => {
      //dispatch the item into the data layer
      return dispatch({
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
    <div className='product' key={id}>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                {new Array(rating).fill().map(() => (<p>⭐</p>))}
            </div>
        </div>

        <img src={image} alt=''></img>
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
