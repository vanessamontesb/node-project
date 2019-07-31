import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './header.css';


class Header extends Component{
  static propTypes = {
  items: PropTypes.array.isRequired
  };
  render (){
    const items=this.props.items;
    return (
      <div className="Header">
        <header className="App-header">
          <ul className="Menu" >{items && items.map((item,key)=><li key={key}>{item.title}</li>)}</ul>
        </header>
      </div>
    );
  }
  
}

export default Header;