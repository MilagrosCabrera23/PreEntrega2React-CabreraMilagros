import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';

function productosById(id) {
  return axios.get(`https://dummyjson.com/products/${id}`);
}

const ItemDetalles = () => {
  const [product, setProduct] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    productosById(itemId)
      .then((res) => { setProduct(res.data); })
      .catch((err) => { console.log(err); });
  }, [itemId]);

  return <ItemDetailContainer ProductosData={product} />;
};

export default ItemDetalles;

