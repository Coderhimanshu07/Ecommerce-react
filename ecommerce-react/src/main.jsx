import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CartProvider from "./Context/Cart_Context";
import ProductContext from './Context/Product-Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductContext>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </ProductContext>
  </StrictMode>,
)
