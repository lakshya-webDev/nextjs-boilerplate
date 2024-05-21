'use client';

import SkeletonLoader from '@/components/common/Skeleton';
import ProductCard from '@/components/ProductCard';
import React, { Suspense, useEffect, useState } from 'react';

export default function Page() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let data = await fetch('https://dummyjson.com/products');
        data = await data.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div className="client-component">
      <h1>Client component</h1>
      <p>You can see console output in console section</p>
      {loading ? (
        <SkeletonLoader height={40} />
      ) : (
        <div className="product-listing">
          {products &&
            products.map((item) => (
              <React.Fragment key={item.id}>
                <ProductCard data={item} />
                {/* <h3>{item.title}</h3> */}
              </React.Fragment>
            ))}
        </div>
      )}
    </div>
  );
}
