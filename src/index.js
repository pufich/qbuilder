import React from 'react';
import { render } from 'react-dom';
import QueryBuilder from './QueryBuilder';
console.log('QueryBuilder', QueryBuilder)
const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <QueryBuilder />
    
  </div>
);

render(<App />, document.getElementById('root'));
