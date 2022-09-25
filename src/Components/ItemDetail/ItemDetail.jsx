import './ItemDetail.css';

function ItemDetail(props) {
  return (
    <div className='itemDetail'>
      <div className='detailImg'>
        <img src={props.img} alt={props.title} />
      </div>
      <div className='detailInfo'>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <h4>$ {props.price}</h4>
      </div>
    </div>
  )
}
export default ItemDetail;