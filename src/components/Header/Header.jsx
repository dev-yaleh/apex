import React from 'react';
import './Header.css';
import Logo from '../../assets/logo-branco.svg' // Importa a imagem do logo da loja Apex

/**
 * Componente Header
 * Responsável por renderizar o cabeçalho principal da loja Apex.
 * Usa a tag semântica <header> para acessibilidade.
 */
function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="Logo da loja, representada por um acento circunflexo e a palavra 'Apex'" className="header-logo" />
    </header>
  );
}

export default Header;