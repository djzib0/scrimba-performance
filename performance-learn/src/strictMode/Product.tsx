import React from 'react'

export default function Product({ product }: {product: any}) {
    return (
        <div className="product-card">
            <p className="truncate">{product.name}</p>
        </div>
    )
}