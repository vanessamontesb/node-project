import React, {Component} from 'react';
import Header from './header/header'
import Footer from './footer/footer';
import Content from './content/content';
import item from '../data/menu'
import PropTypes from 'prop-types'

class App extends Component {
  static propTypes ={
    children:PropTypes.object.isRequired
  };
  
  render (){
    const {children}=this.props;
    return (
      <>
      <Header items ={item}/>
      <Content body = {children}/>
      <Footer copyright="&copy; Vanessa Montes Buelvas"/>
      </>
     
    );
  }
}

export default App;
