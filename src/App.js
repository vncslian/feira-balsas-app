import React from 'react';
import './App.css'; 
import ProductList from './components/ProductList'; 

const HeaderPrincipal = () => (
    <header className="header-principal">
        <div className="container header-content">
            <div className="logo">
                <img src="/img/logo.png" alt="Logo Feira Balsas" className="logo-image" />
            </div>
            <nav className="nav-principal">
                <a href="#destaques" className="nav-link">Catálogo</a>
                <a href="#destaques" className="nav-link">Destaques</a>
                <a href="#cadastro" className="nav-link">Cadastro</a>
            </nav>
        </div>
    </header>
);

const SecondaryHeader = () => (
    <div className="header-container-fixo">
        <section className="secondary-header">
            <div className="secondary-content"> 
                <div className="address-info">
                    <i className="fas fa-map-marker-alt"></i> Informe seu endereço
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Buscar produtos, vendedor e muito mais..."/>
                    <button><i className="fas fa-search"></i></button>
                </div>
                <nav className="nav-secundaria">
                    <a href="#" className="nav-action">Crie sua conta</a>
                    <a href="#" className="nav-action">Entre</a>
                    <a href="#" className="nav-action cart-icon">
                        Compras <i className="fas fa-shopping-cart"></i>
                        <span className="cart-count">0</span>
                    </a>
                </nav>
            </div>
        </section>
    </div> 
);

const Footer = () => (
    <footer className="main-footer">
        <div className="container footer-grid">
            <div className="footer-col vendor-center">
                <h3><i className="fas fa-store"></i> CENTRAL DO VENDEDOR</h3>
                <ul>
                    <li><a href="#">Cadastre-se para vender</a></li>
                    <li><a href="#">Área do Produtor/Artesão</a></li>
                    <li><a href="#">Condições de Venda</a></li>
                </ul>
            </div>
            <div className="footer-col customer-service">
                <h3><i className="fas fa-headset"></i> CENTRAL DE ATENDIMENTO</h3>
                <ul>
                    <li><a href="#">Fale Conosco</a></li>
                    <li><a href="#">Minhas Compras</a></li>
                    <li><a href="#">Dúvidas Frequentes</a></li>
                </ul>
            </div>
            <div className="footer-col help">
                <h3><i className="fas fa-question-circle"></i> AJUDA</h3>
                <ul>
                    <li><a href="#">Política de Privacidade</a></li>
                    <li><a href="#">Termos de Uso</a></li>
                    <li><a href="#">Entrega e Devolução</a></li>
                </ul>
            </div>
        </div>
        <div className="container copyright">
            <p>&copy; 2025 Feira Balsas. Todos os direitos reservados.</p>
        </div>
    </footer>
);

function App() {
  return (
    <>
        <HeaderPrincipal />
        
        <section className="hero-section" id="topo">
            <div className="container hero-content">
                <div className="hero-text-area">
                    <p className="welcome-text">BEM-VINDOS À</p>
                    <h1>FEIRA BALSAS</h1> 
                    <p className="subtitle">Descubra os sabores, cores e talentos de Balsas. Produtos frescos, artesanato autêntico e inovação local — tudo direto dos nossos empreendedores para você.</p>
                    <a href="#destaques" className="btn btn-catalogo">VER CATÁLOGO</a>
                </div>
                <div className="hero-image-area">
                    <div className="hero-image-feirante"><img src="/img/Feirante.png" alt="hero-image-feirante" className="hero-image-feirante" /></div>
                </div>
            </div>
        </section>

        <SecondaryHeader /> 
        
        <main className="main-content" id="produtos">
            <div className="container">
                <section className="products-section" id="destaques">
                    <h2>Produtos em Destaque</h2>
                    
                    <ProductList /> 
                    
                </section>
            </div>
        </main>

        <Footer />
    </>
  );
}

export default App;