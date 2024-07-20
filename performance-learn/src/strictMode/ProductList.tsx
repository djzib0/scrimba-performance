import Product from "./Product"
import productsData from "./data"

export default function ProductList() {
    return productsData.map(product => (
        <Product key={product.id} product={product} />
    ))
}