import { useParams } from 'react-router';
import './Product.css'
import { useEffect } from 'react';

function Product () {

    const { productId } = useParams();

    useEffect(() => {
        console.log(productId);
    }, [])

    return(
        <>
            <div className='main__container'>
                <h1>Product page</h1>
            </div>
        </>
    ) 
}

export default Product;