import './App.css';
import HeaderClient from './components/HeaderClient';
import ButtonPrimary from './components/ButtonPrimary';
import ButtonInverse from './components/ButtonInverse';
import ProductDetaislCard from './components/ProductDetailsCard';

function App() {
  return (
    <>
    <HeaderClient />  
    <main>
      <section id="product-details-section" className="dsc-container">
        <ProductDetaislCard />
        <div className="dsc-btn-page-container">
            <ButtonPrimary />
            <ButtonInverse />
        </div>
      </section>
    </main>
    </>
  )
}

export default App
