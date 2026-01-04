import React from 'react'
import AppRouter from './Router/AppRouter'
import Header from './components/Header';
import Footer from './components/Footer';
import CartToast from './components/CartToast';

export default function App() {
  return (
    <>
      <Header />
      <CartToast />
      <AppRouter />

    </>
  )
}
