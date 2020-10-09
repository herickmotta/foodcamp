import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import FinishOrder from './components/finishOrder';
var selectedItems;
function getParams(params){  
  selectedItems = params;
};
ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route path='/confirm' render={(props) => <FinishOrder {...props} selectedItems={selectedItems}/> } />
    <Route path='/' render={(props )=> <App {...props} getParams={getParams}/>} />
    </Switch>
  </BrowserRouter>
  ,  document.getElementById('root')
  );

