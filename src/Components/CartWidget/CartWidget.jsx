import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function CartWidget({ cant }) {
  return (
    <>
      <FontAwesomeIcon icon={faCartShopping} />
      <span> {cant}</span>
    </>
  )
}
export default CartWidget;