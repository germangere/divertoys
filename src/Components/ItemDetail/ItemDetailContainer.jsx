import { useState, useEffect } from 'react'
import { getItem } from '../../Services/MockData';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const [itemData, setItemData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getItem(id).then((item) => setItemData(item));
  }, [id])


  return (
    <ItemDetail
      id={itemData.id}
      img={itemData.img}
      title={itemData.title}
      description={itemData.description}
      price={itemData.price}
    />
  )
}

export default ItemDetailContainer;