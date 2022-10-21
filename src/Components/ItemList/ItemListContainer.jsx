import './ItemListContainer.css';
import ItemList from './ItemList';
import { getData, getByCategory } from '../../Services/Firebase';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemListContainer(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    if (category === undefined) {
      getData()
        .then((data) => setData(data))
        .finally(() => setLoading(false))
    } else {
      getByCategory(category)
        .then((data) => setData(data))
        .finally(() => setLoading(false))
    }
  }, [category])

  return (
    <>
      {loading
        ? <div className='loading'>
          <div className='blob'></div>
        </div>
        :
        <div className='itemListContainer'>
          <h1>{props.greeting || category}</h1>
          <ItemList data={data} />
        </div>
      }
    </>
  );
}
export default ItemListContainer;