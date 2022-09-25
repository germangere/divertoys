import { useState, useEffect } from 'react'
import { getItem } from '../../Services/MockData';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const [itemData, setItemData] = useState({});

  useEffect(() => {
    getItem().then((item) => { setItemData(item) })
  }, [])

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

export default ItemDetailContainer