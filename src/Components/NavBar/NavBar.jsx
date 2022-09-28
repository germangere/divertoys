import './NavBar.css';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <>
      <header>
        <nav>
          <Link to='/'>
            <img src="/assets/logo.png" alt="logo" />
          </Link>
          <ul>
            <li><Link to='/categoria/juguetes'>Juguetes</Link></li>
            <li><Link to='/categoria/juegos de mesa'>Juegos de mesa</Link></li>
            <li><Link to='/categoria/aire libre'>Aire libre</Link></li>
            <li><Link to='/cart'><CartWidget /></Link></li>
          </ul>
        </nav>
      </header>
    </>
  )
}
export default NavBar;