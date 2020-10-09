import * as React from 'react';
import { Link } from 'react-router-dom';

export default function BottomBar(props){

    return (
        <footer className = "bottomBar">
            <button className = {props.activateButton ? 'buttonActivated closeOrder':'closeOrder'}> 
                <Link to='/confirm'>{props.activateButton ? 'Fechar Pedido!': 'Selecione 3 itens para fechar o pedido'}</Link>
            </button>
        </footer>
    );
}
