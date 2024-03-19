import { FaArrowRight } from "react-icons/fa6";

const Arraylist = ({feature}) => {
  return (
    <div className="pl-8">
        <p className="flex items-center"><FaArrowRight className="mr-2"></FaArrowRight>{feature}</p>

    </div>
  )
}

export default Arraylist