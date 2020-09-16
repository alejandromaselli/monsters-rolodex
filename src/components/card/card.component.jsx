import React from 'react';

import './card.style.css';

export const Card = props =>{

    //const path = "https://robohash.org/PC" + props.monster.id + ".png?set=set2"
    
    //console.log(props.monster);

    return(
    
        <div className="card-container">
            <img  alt="monster" src={`https://robohash.org/PC${props.monster.id}png?set=set2&size=180x180`} />
            <h2>{ props.monster.name }</h2>
            <p> { props.monster.email } </p>
        </div>
    
    );
}

