async function productList() {
  let data = await fetch('https://dummyjson.com/products');
  data = await data.json();
  return data.products;
}
export default async function Page() {
  let products = await productList();
  console.log(products);
  return (
    <div className="server-component">
      <h1>Server component</h1>
      <p>You can see console output in terminal</p>
    </div>
  );
}
