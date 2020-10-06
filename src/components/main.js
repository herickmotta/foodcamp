import * as React from 'react';
import OptionList from './optionList';
import Option from './option';
export default function Main(){
    return (
        <main>
            <OptionList listTitle = 'foods'/>
            <OptionList listTitle = 'drinks'/>
            <OptionList listTitle = 'desserts'/>
        </main>
    );
}