import * as React from 'react';

export default function Option(props){
    var {imageSrc,optionTitle, optionDescription, price} = props;
    var [className, setClassName] = React.useState(''); 
    return (
        <li className={className} onClick={() => setClassName('selected')}>
            <img src={imageSrc} />
            <h3>{optionTitle}</h3>
            <p>{optionDescription}</p>
            <h4>R$ {price}</h4>
            <div className="count">
                <button className="decrement">-</button>
                <span>0</span>
                <button className="increment">+</button>
            </div>
        </li>
    );
};