import './ItemListContainer.css';
import ItemList from './ItemList';
import getData, { getByCategory } from '../../Services/MockData';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemListContainer(props) {
  const [data, setData] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    if (category === undefined) getData().then((data) => setData(data));
    else getByCategory(category).then((data) => setData(data));
  }, [category])
  return (
    <div className='itemListContainer'>
      <h1>{props.greeting || category}</h1>
      <ItemList data={data} />
    </div>
  );
}
export default ItemListContainer;