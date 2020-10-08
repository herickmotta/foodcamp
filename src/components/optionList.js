import * as React from 'react';
import Option from './option';
export default function OptionList(props){
    var {optionList,decrement,increment} = props;
    var {options,arrayHeader} = optionList; 

      
    return (
        <section>
            <h2>{arrayHeader}</h2>
            <ul>
                {options.map(option => <Option option={option} increment={increment} decrement={decrement}/>)}
            </ul>
        </section>
    );

};

    


