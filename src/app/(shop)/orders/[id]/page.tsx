
export default function OrdersPage({params : {id }} : { params: { id: string } }) {
  return (
    <div>
      <h1>Orden #{id}</h1>
    </div>
  );
}