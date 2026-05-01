import React from 'react';
import userimg from "../../assets/user-1.png"
import country from "../../assets/Group.png"

const PlayersCard = ({players}) => {
    return (
         <div className='main-card-div'>
                    
            <div className=" main-div card bg-base-100 w-96 shadow-lg p-4 ">
  <figure>
    <img className="rounded-2xl  h-65 object-cover"
      src={players["player-image"]}
      alt="Shoes" />
  </figure>
       <div className="card-body">
       <div className="tatile-div flex gap-3 mt-3">
        <img src={userimg} alt="" />
         <h2 className="card-title">{players["player-name"]}</h2>
       </div>
       <div className="country-div flex gap-3">
        <img className="" src={country} alt="" />
        <p>{players["player-country"]}</p>
        <span className="shadow-md rounded-xl  py-1.5 px-2  bg-gray-200  cursor-pointer ">{players["player-role"]}</span>
       </div>

<div className="py-4">
    <div className="border-b-2 border-gray-500 rounded-full"></div>
   <div className="flex">
     <p className="font-semibold text-[16px]">Rating</p>
     <span className="mr-6">{players["rating"]}</span>
   </div>
    <div className="flex">
        <p className="font-semibold text-[16px]">{players["bating-style"]}</p>
        <p className="ml-20  ">{players["bowling-style"]}</p>
    </div>
    <div className="flex">
        <p className="font-semibold text-[16px]">Price: {players["price"]}</p>
         <button className="btn  h-7 ">Choose Player</button>
      </div>

</div>
       
       
   
 
  </div>
           </div>
           </div>
    );
};

export default PlayersCard;






// {
//     "player-image": "https://i.ibb.co/d4nM5rFL/Shreyas-Iyer.jpg",
//     "player-name": "Shreyas Iyer",
//     "player-country": "India",
//     "player-role": "Batter",
//     "rating": 9.1,
//     "bating-style": "Right-hand bat",
//     "bowling-style": "Right-arm offbreak",
//     "price": "26.75 Crore"
// }