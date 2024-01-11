import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screen/HomeScreen'
import ProductScreen from './screen/ProductScreen'
import CartScreen from './screen/CartScreen'


function App() {
  return (
    <>
      <Header/>
        <main className='py-5'>
          <Container>
              <Routes>
                <Route path="/" element={<HomeScreen />} exact/>
                <Route path="/product/:prodid" element={<ProductScreen/>}  />
                <Route path="/cart/:cartid?" element={<CartScreen/>}  />
              </Routes>
          </Container>
        </main>
      <Footer/>
    </>
  );
}

export default App;
