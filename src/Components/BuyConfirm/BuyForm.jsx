import './BuyForm.css';
import Swal from 'sweetalert2';
import { useContext, useState } from 'react';
import { cartContext } from '../../context/cartContext';
import { setOrder } from '../../Services/Firebase';
import { useNavigate } from 'react-router-dom';
import FormInput from './FormInput';


function BuyForm() {
  const navigate = useNavigate();
  const { cart, precioTotal, clearCart } = useContext(cartContext);

  const [loading, setLoading] = useState(false);
  const [buyer, setBuyer] = useState({
    name: '',
    phone: '',
    email: ''
  })

  const orderCart = cart.map((el) => {
    let art = {};
    art.id = el.id;
    art.title = el.title;
    art.price = el.price;
    return art;
  });

  function sweetAlert(msj) {
    Swal.fire({
      icon: 'success',
      title: 'Gracias!',
      text: `Tu compra fue confirmada con el ID Nº ${msj}`,
      allowOutsideClick: false
    }).then((res) => {
      if (res.isConfirmed) {
        clearCart();
        navigate('/');
      }
    })
  }

  function handleConfirm() {
    setLoading(true);
    const order = {
      buyer: {
        name: buyer.name,
        phone: buyer.phone,
        email: buyer.email
      },
      items: orderCart,
      total: precioTotal()
    }

    setOrder(order)
      .then(res => sweetAlert(res))
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: `No pudimos procesar tu compra. Error: ${err}`
        })
      })
      .finally(() => setLoading(false))
  }

  function handleChange(e) {
    const target = e.target.name;
    const value = e.target.value;
    const data = { ...buyer };
    data[target] = value;
    setBuyer(data);
  }

  return (
    loading
      ? <div className='loading'>
        <div className="blob"></div>
      </div>
      :
      <div>
        <h1>Finalizar compra</h1>
        <form className='formCompra'>
          <FormInput name='name' label='Nombre' value={buyer.name} handler={handleChange} />
          <FormInput name='phone' label='Teléfono' value={buyer.phone} handler={handleChange} />
          <FormInput name='email' label='E-mail' value={buyer.email} handler={handleChange} />
          <input type="button" value="Confirmar compra" onClick={handleConfirm} />
        </form>
      </div>
  )
}

export default BuyForm