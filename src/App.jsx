import React from 'react';
import PropTypes from 'prop-types'
import Stars from './components/Stars'

function App() {
  return (
    <div className="App">
      <Stars count={5}/>
    </div>
  );
}

export default App;

App.propType = {
  count: PropTypes.number
}
