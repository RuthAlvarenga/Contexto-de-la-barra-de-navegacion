import './App.css';
import FormWrapper from './Components/FormWrapper';
import NavBar from './Components/NavBar';
import Wrapper from './Components/Wrapper';
import React from 'react';

const App = () => {
  return (
    <div className='App'>
      <Wrapper>
        <NavBar />
        <FormWrapper />
      </Wrapper>
    </div>


  );
}

export default App;
