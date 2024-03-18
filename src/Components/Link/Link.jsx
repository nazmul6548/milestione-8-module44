import PropTypes from 'prop-types';

function Link({route}) {
  return (
    <>
          <li className="mr-8 hover:bg-amber-500 p-2 m-4 "> 
                    <a href={route.path}>{route.name}</a>

                    
         </li>

                
        
   </>
  );
}
Link.propTypes = {
    route: PropTypes.object
  };
export default Link