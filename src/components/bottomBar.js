import * as React from 'react';


export default function BottomBar(props){

    return (
        <footer className = "bottomBar">
            <button className = {props.activateButton ? 'buttonActivated closeOrder':'closeOrder'}> 
                {props.activateButton ? 'Fechar Pedido!': 'Selecione 3 itens para fechar o pedido'}
            </button>
        </footer>
    );
}
