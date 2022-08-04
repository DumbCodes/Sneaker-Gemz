import { useParams } from 'react-router-dom';

function ProductScreen() {
  const params = useParams();
  const { aka } = params;
  return (
    <div>
      <h1>{aka}</h1>
    </div>
  );
}
export default ProductScreen;
