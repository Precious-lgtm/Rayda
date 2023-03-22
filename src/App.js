import * as React from 'react';
import { Container } from '@mui/material';
import Header from './components/Header';
import Banner from './components/Banner';
import { MainContainer } from './features/styles/Styles';
import Products from './components/Products';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { productApi } from './features/apiSlice';
import './App.css';

function App() {
  return (
    <Provider store = {store}>
      <ApiProvider api = {productApi}>
        <MainContainer>
          <Header />
          <Banner />
          <Products />
        </MainContainer>
      </ApiProvider>
    </Provider>
    
  );
}

export default App;
