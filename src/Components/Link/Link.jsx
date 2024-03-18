import PropTypes from 'prop-types';

function Link({route}) {
  return (
    <>
          <li className="mr-8"> 
                    <a href={route.path}>{route.name}</a>

                    
         </li>

                
        
   </>
  );
}
Link.propTypes = {
    route: PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  };
export default Link