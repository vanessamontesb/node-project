import React, {Component} from 'react';
//import PropTypes from 'prop-types'
import './footer.css';


const Footer =props =>{
  return (
    <div className="Footer">
            <header className="App-Footer">
              
               <p>{props.copyright}</p>
             
               
            </header>
          </div>
  )
}
// class Footer extends Component {
//   static propTypes = {
//     copyright:PropTypes.string.isRequired
//     };
//     render(){
//       const {copyright} =this.props
//     return (
//       <div className="Footer">
//         <header className="App-Footer">
          
//             <p>{copyright}</p>
         
           
//         </header>
//       </div>
//     );
//     }
// }
export default Footer;