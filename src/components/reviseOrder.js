import * as React from 'react';

export default function ReviseOrder(props){
    var {item} = props;
    var{optionTitle,price,quantity} = item;
    return (
        <div className='ordered'>
            <div>{optionTitle} </div>
            <div>R${(parseFloat(price)*quantity).toFixed(2)}</div>
        </div>
    );
}