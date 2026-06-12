import { useParams } from 'react-router';

const ProductDetailPage = () => {
    const params = useParams();
    console.log(params);

    // get products by id
  return (
    <main className='page'>
      <h1>Product Detail Page</h1>
      <h3>Product ID: {params.id}</h3>
    </main>
  )
}

export default ProductDetailPage;
