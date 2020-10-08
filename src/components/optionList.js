import * as React from 'react';
import Option from './option';
export default function OptionList(props){
    var {listTitle,arrayHeader} = props
    var productArrays = {
         foods: [
            {
                imageSrc:"../../public/img/batata-frita-final.jpg",
                optionTitle:"Batata Frita" ,
                optionDescription:"300g de batata" ,
                price:"14,90",
                quantity:0
            },
            {
                imageSrc:"../../public/img/hamburguer-final.jpg",
                optionTitle:"Hambúrguer" ,
                optionDescription:"Carne de 180g" ,
                price:"19,90" ,
                quantity:0
            },
            {
                imageSrc:"../../public/img/salada-frango-final.jpg",
                optionTitle:"Salada de Verão" ,
                optionDescription:"Frango em cubos" ,
                price:"17,90",
                quantity:0
            }],
         drinks: [
            {
                imageSrc:"../../public/img/cocafinal.jpg",
                optionTitle:"Coquinha Gelada" ,
                optionDescription:"Coquinha gelada hmmmm" ,
                price:"4,90",
                quantity:0 
            },
            {
                imageSrc:"../../public/img/guarana-final.jpg",
                optionTitle:"Guaraná" ,
                optionDescription:"Como refresca!" ,
                price:"3,90",
                quantity:0 
            },
            {
                imageSrc:"../../public/img/agua-final.png",
                optionTitle:"Água" ,
                optionDescription:"Água mineral" ,
                price:"2,00",
                quantity:0 
            }],
        desserts: [
            {
                imageSrc:"../../public/img/torta-final.jpg",
                optionTitle:"Torta de Limão" ,
                optionDescription:"Fatia de 180g" ,
                price:"6,90" ,
                quantity:0
            },
            {
                imageSrc:"../../public/img/brownie-final.jpg",
                optionTitle:"Brownie de Chocolate" ,
                optionDescription:"Pedaço de 120g" ,
                price:"5,90" ,
                quantity:0
            },
            {
                imageSrc:"../../public/img/cookie-final.jpg",
                optionTitle:"Cookies" ,
                optionDescription:"2 Cookies de 50g" ,
                price:"5,50",
                quantity:0 
            }]
    };
    
    var list = productArrays[listTitle];
    var [products,setList] = React.useState(list);

    function increment(product){
        product.quantity = product.quantity + 1;
        setList([...products]);
    };
    function decrement(product){
        product.quantity--
        setList([...products]);
    };
      
    return (
        <section>
            <h2>{arrayHeader}</h2>
            <ul>
                {products.map((element) => 
                    <Option 
                        product={element}
                        increment={increment}
                        decrement={decrement}
                    />
                )}
            </ul>
        </section>
    );

};

    


