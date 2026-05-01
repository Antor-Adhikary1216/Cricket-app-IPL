

import './index.css'
import navImg from "./assets/logo.png"
import fream from "./assets/Frame 8.png"
import dolor from "./assets/Currency.png"
import Abelebal from './componentes/abelebalplyers/Abelebal'
import { Suspense } from 'react'
import Selectedplayes from './componentes/SelectedPlayers/Selectedplayes'

const playersdata= async()=>{
  const res= await fetch("/players.json")
  return res.json()

}


function App() {
const playersPromise = playersdata()

  return (

    <>
   
    

     {/* test navbar ========>*/}
     <div className="navbar max-w-330 bg-base-100   flex mx-auto mt-8">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"><img className="w-17 h-17" src={navImg}
     alt="" /></a>
  </div>
  <ul className="flex p-5 gap-5 cursor-pointer ">
    <li>Home</li>
    <li>Fixture</li>
    <li>Teams</li>
    <li>Schedules</li>
  </ul>
  <div className="flex items-center gap-1.5 shadow rounded-xl p-2 border border-gray-300  h-13 my-auto cursor-pointer
  "> 
    <span className=" text-[#131313] font-semibold text-[16px]">60</span>
     <span className="text-[#131313] font-semibold text-[16px]">Coin</span>
     <img src={dolor} alt="" />
   
  </div>
 
</div>
 <img className="mx-auto mt-4" src={fream} alt="" / >
     {/* test navbar<========= */}

    <div className="max-w-330 mx-auto mt-10 flex justify-between">
     <h3 className="font-bold text-[28px]">Available Players</h3>
     <div>
    <button className="btn btn-active mr-1 bg-amber-400">Available</button>
    <button className="btn btn-active ">Selected <span>(0)</span></button>
     </div>

    </div>

    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Abelebal playersPromise={playersPromise} ></Abelebal>
    </Suspense>
    
  {/* <Selectedplayes></Selectedplayes> */}

     
    </>
  )
}

export default App
