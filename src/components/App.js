import React, {Component} from 'react';
import Header from './header/header'
import Footer from './footer/footer';
import Content from './content/content';
import item from '../data/menu'


class App extends Component {
  
  render (){
    return (
      <>
      <Header items ={item}/>
      <Content/>
      <Footer copyright="&copy; Vanessa Montes Buelvas"/>
      </>
     
    );
  }
}

export default App;
