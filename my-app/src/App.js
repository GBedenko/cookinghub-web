// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import Header from './components/header/Header'

import cooking_logo from './img/cooking_logo.png'

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        
      </div>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.object.isRequired,
//   loading: PropTypes.bool.isRequired
// };

// function mapStateToProps(state, ownProps) {
//   return {
//     loading: state.ajaxCallsInProgress > 0
//   };
// }

export default App;