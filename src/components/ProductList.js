import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; 

const API_URL = 'http://localhost:3000/api/produtos'; 

function ProductList() {
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch(API_URL);

                if (!response.ok) {
                    throw new Error(`Erro ${response.status}: Falha na API.`);
                }

                const data = await response.json();
                
                const produtosEmDestaque = data.filter(p => p.em_destaque);
                
                setProdutos(produtosEmDestaque);
            } catch (err) {
                console.error('Erro de conexão ou busca:', err);
                setError('Não foi possível carregar os produtos. Verifique se a API está ativa.');
            } finally {
                setLoading(false); 
            }
        }
        
        fetchProducts();
    }, []); 

    if (loading) {
        return <div className="loading-message">Carregando produtos...</div>;
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return (
        <section className="catalog-section" id="destaques">
            <h2>Destaques da Feira</h2>
            <div className="products-grid">
                {produtos.map(produto => (
                    <ProductCard key={produto._id} produto={produto} />
                ))}
            </div>
        </section>
    );
}

export default ProductList;