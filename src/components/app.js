import * as React from 'react';
import TopBar from './topBar';
import BottomBar from './bottomBar';
import OptionList from './optionList';
export default function App() {
  function categoriesList() {
    return [
      {
        arrayHeader: 'Primeiro, seu prato',
        options: [
          {
            imageSrc: "../../public/img/batata-frita-final.jpg",
            optionTitle: "Batata Frita",
            optionDescription: "300g de batata",
            price: "14,90",
            quantity: 0
          },
          {
            imageSrc: "../../public/img/hamburguer-final.jpg",
            optionTitle: "Hambúrguer",
            optionDescription: "Carne de 180g",
            price: "19,90",
            quantity: 0
          },
          {
            imageSrc: "../../public/img/salada-frango-final.jpg",
            optionTitle: "Salada de Verão",
            optionDescription: "Frango em cubos",
            price: "17,90",
            quantity: 0
          }],
      },
      {
        arrayHeader: 'Agora, sua bebida',
        options: [
          {
            imageSrc: "../../public/img/cocafinal.jpg",
            optionTitle: "Coquinha Gelada",
            optionDescription: "Coquinha gelada hmmmm",
            price: "4,90",
            quantity: 0
          },
          {
            imageSrc: "../../public/img/guarana-final.jpg",
            optionTitle: "Guaraná",
            optionDescription: "Como refresca!",
            price: "3,90",
            quantity: 0
          },
          {
            imageSrc: "../../public/img/agua-final.png",
            optionTitle: "Água",
            optionDescription: "Água mineral",
            price: "2,00",
            quantity: 0
          }],
      },
      {
        arrayHeader: 'Por fim, sua sobremesa',
        options: [
          {
            imageSrc: "../../public/img/torta-final.jpg",
            optionTitle: "Torta de Limão",
            optionDescription: "Fatia de 180g",
            price: "6,90",
            quantity: 0
          },
          {
            imageSrc: "../../public/img/brownie-final.jpg",
            optionTitle: "Brownie de Chocolate",
            optionDescription: "Pedaço de 120g",
            price: "5,90",
            quantity: 0
          },
          {
            imageSrc: "../../public/img/cookie-final.jpg",
            optionTitle: "Cookies",
            optionDescription: "2 Cookies de 50g",
            price: "5,50",
            quantity: 0
          }
        ]
      }
    ];
  };
  var [categories, setCategories] = React.useState(categoriesList());
  function increment(option) {
    option.quantity = option.quantity + 1;
    setCategories([...categories]);
  };
  function decrement(option) {
    if (option.quantity > 0) {
      option.quantity--
      setCategories([...categories]);
    }
  };
  
  var selectedCategories = categories.filter(categorie =>{
    var selectedOptions = categorie.options.filter(option => option.quantity > 0);
    return selectedOptions.length > 0;
  });
  var activateButton = false;
  if (selectedCategories.length === categories.length){
    activateButton = true;;
  };
  return (
    <div id="main-container">
      <TopBar />
      <main>
        {categories.map(optionList => <OptionList optionList={optionList} increment={increment} decrement={decrement} />)}
      </main>
      <BottomBar activateButton={activateButton}/>
    </div>
  );
}

