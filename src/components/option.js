import * as React from 'react';

export default function Option(props){
    var {option,increment,decrement} = props;
    var {quantity,imageSrc,optionTitle,optionDescription,price} = option;
    return (
        <li className={quantity > 0?'selected':''}>
            <img src={imageSrc} />
            <h3>{optionTitle}</h3>
            <p>{optionDescription}</p>
            <h4>R$ {price}</h4>
            <div className='count'>
                <button className="decrement" onClick={()=>decrement(option)}>-</button>
                <span>{quantity}</span>
                <button className="increment" onClick={()=>increment(option)}>+</button>
            </div>
        </li>
    );
    
};