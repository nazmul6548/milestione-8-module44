import PropTypes from 'prop-types';
import Arraylist from '../Arrylist/Arraylist';

const PriceOption = ({option}) => {
  console.log(option);
  const {name,feather,membershipFee,facilities,contact,location} = option;
  return (
    <div className='bg-blue-500 text-white p-4 rounded-md flex flex-col'>

      <h2>
        <span className='text-5xl flex justify-center p-4'>{membershipFee}</span>
      </h2>
      <h4 className='text-center text-2xl'>{name}</h4>
      <div className='flex-grow'>
        {
          facilities.map((feature,index) => <Arraylist key={index} feature={feature}></Arraylist>)
        }
      </div>

      <button className='mt-5  bg-white text-black font-bold w-full px-7 py-3 rounded-lg hover:bg-slate-200'>Buy Now</button>

    </div>
  )
}
PriceOption.PropTypes={
option: PropTypes.object
}
export default PriceOption