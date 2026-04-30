
import './App.css'
import navImg from "./assets/logo.png"
import dolor from "./assets/Currency.png"

function App() {


  return (
    <>

     {/* test navbar ========>*/}
     <div className="navbar max-w-330 bg-base-100   flex mx-auto mt-8">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"><img className="w-17 h-17" src={navImg}
     alt="" /></a>
  </div>
  <ul className="flex p-5 gap-5 ">
    <li>Home</li>
    <li>Fixture</li>
    <li>Teams</li>
    <li>Schedules</li>
  </ul>
  <div className="flex items-center gap-1.5 shadow rounded-xl p-2 border border-gray-300  h-13 my-auto
  "> 
    <span className=" text-[#131313] font-semibold text-[16px]">60</span>
     <span className="text-[#131313] font-semibold text-[16px]">Coin</span>
     <img src={dolor} alt="" />
   
  </div>
</div>
     {/* test navbar<========= */}

     
    </>
  )
}

export default App
