import './ItemDetail.css';
import { useState, useEffect } from 'react'
import { getItem } from '../../Services/MockData';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const [itemData, setItemData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getItem(id)
      .then((item) => setItemData(item))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <>
        {
          error
            ? <div>
              <h2>Ocurrió un error</h2>
              <p>{error}</p>
            </div>
            : <div className='loading'>
              <div className="blob"></div>
            </div>
        }
      </>
    )
  }

  return (
    <ItemDetail
      id={itemData.id}
      stock={itemData.stock}
      img={itemData.img}
      title={itemData.title}
      description={itemData.description}
      price={itemData.price}
    />
  )
}

export default ItemDetailContainer;