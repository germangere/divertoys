import './ItemCount.css';
import { useState } from 'react';

function ItemCount(props) {
  const [count, setCount] = useState(1);

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (count < props.stock) setCount(count + 1);
  }

  return (
    <div>
      <div className='itemCount'>
        <button onClick={handleSubstract}>-</button>
        <div>{count}</div>
        <button onClick={handleAdd}>+</button>
      </div>
      <div>
        <button id='addBtn' onClick={() => props.onAdd(count)}>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount;