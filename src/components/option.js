import * as React from 'react';

export default function Option(props){
    var {imageSrc,optionTitle, optionDescription, price,className,setClassName,countClass,setCountClass,count,setCount} = props;
    return (
        <li className={className} onClick={(event) => {setClassName('selected'); setCountClass('count')}}>
            <img src={imageSrc} />
            <h3>{optionTitle}</h3>
            <p>{optionDescription}</p>
            <h4>R$ {price}</h4>
            <div className={countClass}>
                <button className="decrement" onClick={(event) => decrement(event)}>-</button>
                <span>{count}</span>
                <button className="increment" onClick={()=>setCount(count+1)}>+</button>
            </div>
        </li>
    );
    function decrement(event){
        if(count>1) setCount(count-1);
        else{
            event.stopPropagation();
            setClassName('');
            setCountClass('count hidden');
        };
    }
};