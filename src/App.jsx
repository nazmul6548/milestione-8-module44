
import './App.css'
import DaisyUi from './Components/Daisy ui/DaisyUi'
import LineChart from './Components/Linechart/LineChart'
import Navbar from './Components/Navbar/Navbar'
import { PriceOp } from './Components/Priceoptiom/PriceOps'

function App() {
 

  return (
    <>
    <Navbar></Navbar>
    {/* <DaisyUi></DaisyUi> */}
    <PriceOp></PriceOp>
      {/* <h1>nazmul islam jewel</h1> */}
      <LineChart></LineChart>
 
    </>
  )
}

export default App
