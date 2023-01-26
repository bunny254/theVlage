const ProductFeed = ({ products }) => {
    return (
        <div>
            {products.map((product) => (
                <img src={product.url} />
            ))}
        </div>
    )
}

export default ProductFeed
