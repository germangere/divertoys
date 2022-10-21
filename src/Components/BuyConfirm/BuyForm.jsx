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
    name: { valor: '', valid: false },
    phone: { valor: '', valid: false },
    email: { valor: '', valid: false }
  })

  const orderCart = cart.map((el) => {
    let art = {};
    art.id = el.id;
    art.title = el.title;
    art.price = el.price;
    return art;
  });

  const regex = {
    name: /^([ \u00c0-\u01ffa-zA-Z'-]){1,50}$/,
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    phone: /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/
  }

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

  function handleConfirm(evt) {
    evt.preventDefault();
    setLoading(true);
    const order = {
      buyer: {
        name: buyer.name.valor,
        phone: buyer.phone.valor,
        email: buyer.email.valor
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

  function validInput(name, value) {
    if (value === '') return false;
    return regex[name].test(value) ? true : false
  }

  function handleChange(e) {
    const { name, value } = e.target;
    const buyerData = { ...buyer };
    buyerData[name]['valor'] = value;
    buyerData[name]['valid'] = validInput(name, value);
    setBuyer(buyerData);
  }

  function activeSubmitBtn() {
    let res = [];
    for (const key in buyer) {
      res.push(buyer[key]['valid']);
    }
    return res.every((el) => el === true);
  }

  return (
    loading
      ? <div className='loading'>
        <div className='blob'></div>
      </div>
      :
      <div>
        <h1>Finalizar compra</h1>
        <form className='formCompra' onSubmit={handleConfirm}>
          <FormInput name='name' label='Nombre' value={buyer.name.valor} handler={handleChange} />
          <FormInput name='phone' label='Teléfono' value={buyer.phone.valor} handler={handleChange} />
          <FormInput name='email' label='E-mail' value={buyer.email.valor} handler={handleChange} />
          <input type='submit' value='Confirmar compra' disabled={activeSubmitBtn() ? false : true} />
        </form>
      </div>
  )
}

export default BuyForm