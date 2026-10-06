import React, { useEffect, useState } from 'react';

function FetchProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

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

    return (
        <div>
            <h2>Fetch Products</h2>

            {loading && <h2 style={{ color: 'red' }}>Loading data...</h2>}

            {error && <h2>Error: {error}</h2>}

            <table border="2">
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default FetchProducts;