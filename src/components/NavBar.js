import {useState} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes, faAnkh} from '@fortawesome/free-solid-svg-icons'

import './NavBar.css' 

function NavBar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [button, setButton] = useState(true);
    const closMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(false);
        }
    }
    window.addEventListener('resize',showButton)

    
  return <div>
       <nav className = 'navbar navbar-dark bg-dark'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'  onClick={closMobileMenu}>
                    Techboss Deliveries
                    {/* <FontAwesomeIcon icon={faAnkh}/> */}
                </Link>
                <div className='menu-icon' onClick={handleClick}> 
                    <FontAwesomeIcon icon={click ? faTimes: faBars}/>
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/dash' className='nav-links' onClick={closMobileMenu}>
                        Dashboard
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/clientele' className='nav-links' onClick={closMobileMenu}>
                        New Client
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/moverr' className='nav-links' onClick={closMobileMenu}>
                        New Mover
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/ordr' className='nav-links' onClick={closMobileMenu}>
                    New Order
                </Link>
                </li>

                <li className='nav-item'>
                    <Link to='/delivs' className='nav-links' onClick={closMobileMenu}>
                        New Delivery
                    </Link>
                </li>


              </ul>
            </div>
              {/* {button && <Button buttonStyle='btn--outline'>Heat Plans</Button>} */}
 </nav>
  </div>;
}

export default NavBar;
