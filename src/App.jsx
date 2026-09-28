import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './Global.css';
/**
 * Componente Principal App
 * Compõe a aplicação unindo o Header, o Main (Catálogo com Axios) e o Footer.
 */
function App() {
  return (
    <div className="app-container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;