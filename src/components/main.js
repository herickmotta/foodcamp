import * as React from 'react';
import OptionList from './optionList';
export default function Main(){
    return (
        <main>
            <OptionList listTitle = 'foods' arrayHeader='Primeiro, seu prato' />
            <OptionList listTitle = 'drinks'arrayHeader='Agora, sua bebida '/>
            <OptionList listTitle = 'desserts' arrayHeader='Por fim, sua sobremesa '/>
        </main>
    );
}