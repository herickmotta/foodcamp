import * as React from 'react';
import TopBar from './topBar';
import ReviseOrder from './reviseOrder';
import { Link } from 'react-router-dom';
export default function FinishOrder(props){
    var url = encodeURIComponent(`Olá, gostaria de fazer o pedido:`);
    var totalPrice = 0.0;
    props.selectedItems.forEach(item =>{
        var itemPrice = (parseFloat(item.price)*item.quantity).toFixed(2);
        url = `${url} ${item.optionTitle}   R$${itemPrice}%0A `;
        totalPrice += parseFloat(itemPrice);
    });
    url = `${url}Total   R$${totalPrice.toFixed(2)}`;
    url = `https://wa.me/5555999299145?text=${url}`;
    return (
        <div className = "finishOrder">
            <TopBar />
            <main className="revise">
                <h2>Revise seu pedido</h2>
                <div className="reviseBox">
                    {props.selectedItems.map(item => <ReviseOrder item={item}/>)}
                    <div className="ordered total">
                        <div>Total:</div> 
                        <div>R${totalPrice.toFixed(2)}</div>
                    </div>
                </div>
                <a className="finish" href={url}> Tudo certo, pode pedir! </a>
                <Link to='/'className="cancel">Cancelar</Link>
            </main>
        </div>
    );
}


