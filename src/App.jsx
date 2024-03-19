
import './App.css'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/NavBar/NavBar'
import PriceOption from './components/priceOption/PriceOption'
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {

  return (
    <>

      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      {/* <h1 className='text-7xl'>Vite + React</h1> */}
      <PriceOption></PriceOption>
      <LineChart></LineChart>
    </>
  )
}

export default App
