import * as React from 'react';

export default function Option(props){
    var {product,increment,decrement} = props;
    return (
        <li className={product.quantity > 0?'selected':''}>
            <img src={product.imageSrc} />
            <h3>{product.optionTitle}</h3>
            <p>{product.optionDescription}</p>
            <h4>R$ {product.price}</h4>
            <div className='count'>
                <button className="decrement" onClick={()=>decrement(product)}>-</button>
                <span>{product.quantity}</span>
                <button className="increment" onClick={()=>increment(product)}>+</button>
            </div>
        </li>
    );
    
};