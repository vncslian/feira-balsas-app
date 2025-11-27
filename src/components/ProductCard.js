import React from 'react';

function ProductCard({ produto }) {
    const nomeVendedor = produto.id_vendedor ? produto.id_vendedor.nome : 'Vendedor Desconhecido';
    const precoFormatado = produto.preco ? 
                           produto.preco.toFixed(2).replace('.', ',') : 
                           '0,00';
    
    const imagemUrl = `/img/${produto.nome.toLowerCase().replace(/[^a-z0-9]/g, '-')}.png`;

    return (
        <div className="product-card" data-id={produto._id}>
            <div 
                className="product-image" 
                style={{ backgroundImage: `url('${imagemUrl}')` }}
            ></div>
            <div className="product-info">
                <h3>{produto.nome} - {produto.descricao}</h3>
                <div className="product-details">
                    <span className="vendor-name">Vendedor: {nomeVendedor}</span>
                    <span className="unit">{produto.unidade_medida || 'Unidade'}</span>
                </div>
                <div className="product-price-action">
                    <span className="price">R$ {precoFormatado}</span>
                    <button className="btn btn-small">Comprar</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;