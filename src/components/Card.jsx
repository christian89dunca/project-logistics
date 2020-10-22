import React from 'react';

const Card = ({imgSrc, item, user, location, comment="", rating}) => {

    let stars = [];
    let emptyStars = [] ;
    for (let i=1; i<=rating; i++){
     stars.push(i) 
    }

   for (let i=stars.length; i< 5; i++){
       emptyStars.push(i)
   }
        

    

    return ( 
        
        <div className="card" style={{width:100+"%", margin:"auto"}}>
            <img className="imgStyles" src={imgSrc} alt="slide-image"></img>
            <div class="card-container">
                <h4 style={{margin: 0}}><b>{item}</b></h4>
                <h5 style={{margin: 10}}><i class="fas fa-user"></i> {user}</h5>
                <h5 style={{margin: 10}}><i class="fas fa-map-marker-alt"></i> {location}</h5>
                <h5 style={{fontWeight: 200}}>{comment}</h5>
                <ul style={{listStyle:"none", padding:0, display: "flex", justifyContent: "center"}}>
                {stars.map(star => {
                   return ( <li>
                        <i class="fas fa-star" style={{color:"#F9CE00"}}></i>
                    </li> )
                })}
                {emptyStars.map(star => {
                   return ( <li>
                        <i class="far fa-star" style={{color:"#F9CE00"}}></i>
                    </li> )
                })}
                
                </ul>

                
            </div>
        </div>
     );
}
 
export default Card;