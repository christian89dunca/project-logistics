import React, {useState} from 'react';
import Card from './Card';
import "./../styles/Carousel.css"
import i1 from "./../assets/pianoC.jpg"



const Carousel = () => {
    let carouselArr = [
    <Card imgSrc={i1} item="Grand Piano" user="Christian D." location="London" comment="excelent service, recommend" rating="3" />, 
    <Card imgSrc={i1} item="Grand Piano" user="Christian D." location="London" comment="excelent service, recommend"rating="2"/>, 
    <Card imgSrc={i1} item="Grand Piano" user="Christian D." location="London" comment="excelent service, recommend"rating="5"/>
]

    const [x, setX] = useState(0);
    const goLeft=()=>{
        (x === 0 ? setX(-100 * (carouselArr.length -1)) : setX(x +100));
    };
    const goRight=()=>{
        (x === -100 * (carouselArr.length -1)) ? setX(0) : setX(x - 100);
    };
    return ( 
        <div style={{display: "flex", flexDirection:"row", width:"100vw", minHeight: "80vh", position: "relative"} }>

        <div className="btn-carousel left" onClick={goLeft}>
        <i class="fas fa-chevron-left"></i>
        </div>

            <div className="carousel">
                {
                    carouselArr.map((item, index)=> {
                        return(
                        <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                            {item}
                            </div>
                        )
                    })
                }
            </div>

            <div className="btn-carousel right" onClick={goRight}>
            <i class="fas fa-chevron-right"></i>
            </div>
        </div>
     );
}
 
export default Carousel;