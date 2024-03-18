import PropTypes from 'prop-types';
import Link from '../Link/Link';
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { useState } from 'react';


function Navbar() {
    const [open,setOpen] = useState(false)


    const navbarRoutes = [
        { id:1, name: 'Home', path: '/' },
        { id:2, name: 'About', path: '/about' },
        { id:3, name: 'Services', path: '/services' },
        { id:4, name: 'Contact', path: '/contact' }
      ];

  return (
    <nav>
        <div className='md:hidden text-2xl bg-slate-800 text-white p-5' onClick={() => setOpen(!open)}>
            {
                open === true ? <RxCross1 ></RxCross1> :  <RiMenu2Fill ></RiMenu2Fill>
            }

        </div>
        
        <ul className={`md:flex duration-1000 absolute md:static
        ${open ? 'top-16': '-top-72'}
        bg-slate-800  text-white p-4'`}>
        {
                navbarRoutes.map(items =>( <Link key={items.id} route={items}> </Link>) )}
        </ul>
      

    </nav>
  )
}
Navbar.propTypes = {
    Navbar: PropTypes.object.isRequired
  };
export default Navbar