import React from 'react';
import {Link} from 'react-router-dom';

function CardItem(props) {
    const { product, onAdd } = props;

    return(
        <>
        <li className = 'cards_item' list-style= 'none'>
            {/* <Link className='cards__item__link' */}
            {/* to={props.path}> */}
                <figure className='cards__item__pic-wrap'
              >
                    <img src={product.src} alt='Product Image' width='250px' height = '250px'
                    className='cards__itm__img'/>
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text' align='center'>
                       <strong>{product.text}</strong> </h5>
                        <h5 className='cards__item__text'>Cost (USD):
                        {product.price}</h5>
                        <h5 className='cards__item__text'>
                        {product.label}</h5>
                </div>
                <button onClick={() => onAdd(product)}>add to cart</button>
            {/* </Link> */}
        </li>
        </>
    )
}

export default CardItem;