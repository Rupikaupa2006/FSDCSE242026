import React, { useEffect, useState } from 'react';

function FetchProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);

                const serverData = await fetch('https://dummyjson.com/products');

                const jsonData = await serverData.json();
                setProducts(jsonData.products);

            } catch (e) {
                console.log("Error is: " + e);
                setError(e.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);
    function cartData(element){

    }

    return (
        <div>
            <h2>Fetch Products</h2>
            {loading && <h2 style={{ color: 'red' }}>Loading data...</h2>}

            <table border="3"> 
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                </thead>
        
                <tbody>
                    {products.map((ele) => (
                        <tr key={ele.id}>
                            <td>
                                <img
                                    src={ele.thumbnail}
                                    height="200"
                                    width="200"
                                    alt={ele.title}
                                />
                            </td>
                            <td>{ele.title}</td>
                            <td>{ele.description}</td>
                            <td>{ele.price}</td>
                            <td>{ele.category}</td>
                            <td> <button onClick={() => cartData(ele)}> addToCart</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default FetchProducts;