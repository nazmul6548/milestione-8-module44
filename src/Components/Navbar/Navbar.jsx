import PropTypes from 'prop-types';
import Link from '../Link/Link';



function Navbar() {


    const navbarRoutes = [
        { id:1, name: 'Home', path: '/' },
        { id:2, name: 'About', path: '/about' },
        { id:3, name: 'Services', path: '/services' },
        { id:4, name: 'Contact', path: '/contact' }
      ];

  return (
    <nav>
        <ul className='md:flex'>
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