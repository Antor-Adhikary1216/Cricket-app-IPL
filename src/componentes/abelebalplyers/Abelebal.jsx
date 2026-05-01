import React, { use } from 'react';
import PlayersCard from '../PlayersCard/PlayersCard';

const Abelebal = ({playersPromise}) => {
    const playersData= use(playersPromise)
    // console.log(playersData.player-name)
    return (
        <div className=" max-w-330 mx-auto mt-20  md:grid grid-cols-3 gap-10">
            {/* <h1 className="font-bold text-[28px]">Available Players{playersData.length}</h1> */}
            {/* card====> */}
            {/* main div */}
             {
                playersData.map(players=><PlayersCard players={players}></PlayersCard> )
            }
            
         
            {/* <====card */}

           
          
        </div>
    );
};

export default Abelebal;       




