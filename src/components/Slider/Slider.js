// import Slider from "react-slick";
// import React, { Component } from "react";
// import '../MoviePage/moviePage.css'


// export default class Responsive extends Component {
//     state={
//         totalCards:[]
//     }
//     async componentDidMount() {
//         console.log(this.props.cards);
        
//         this.setState({ totalCards: this.props.cards })
//         // console.log(this.totalCards);
        
//     }
//     // movieCast = this.props.cards
//     render() {
//         // console.log(this.props);


//         var settings = {
//             dots: true,
//             infinite: false,
//             speed: 500,
//             slidesToShow: 14,
//             slidesToScroll: 4,
//             initialSlide: 0,
//             responsive: [
//                 {
//                     breakpoint: 1024,
//                     settings: {
//                         slidesToShow: 3,
//                         slidesToScroll: 3,
//                         infinite: true,
//                         dots: true
//                     }
//                 },
//                 {
//                     breakpoint: 600,
//                     settings: {
//                         slidesToShow: 2,
//                         slidesToScroll: 2,
//                         initialSlide: 2
//                     }
//                 },
//                 {
//                     breakpoint: 480,
//                     settings: {
//                         slidesToShow: 1,
//                         slidesToScroll: 1
//                     }
//                 }
//             ]
//         };
//         return (
//             <div>
//                 <h2> Responsive </h2>
//                 <Slider {...settings}>

//                     <div className="cast">
//                         {this.totalCards && this.totalCards.map((item, key) => {
//                             return (
//                                 <div className="actor" key={key}>
//                                     <img className="actor-pic" alt={key} src={item.poster}></img>
//                                     <div className="actor-name">{item.name}</div>
//                                     <div className="character">{item.character}</div>
//                                 </div>
//                             )
//                         })}
//                     </div>
//                     {/* <div>
//               <h3>1</h3>
//             </div> */}
//                 </Slider>
//             </div>
//         );
//     }
// }