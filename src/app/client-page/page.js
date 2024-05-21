'use client';

import { useEffect, useState } from 'react';

export default function Page() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let data = await fetch('https://dummyjson.com/products');
        data = await data.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div className="client-component">
      <h1>Client component</h1>
      <p>You can see console output in console section</p>
      {products && products.map((item) => <h3 key={item.id}>{item.title}</h3>)}
    </div>
  );
}
