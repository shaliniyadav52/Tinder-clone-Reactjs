import React from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
function TinderCards() {
  //hooks are functions that can be used in react component
  //They are similar to state and props , but they are not
  //State = it is a special kind of variable.
  const [cars , setCars]= React.useState([
    {
      name:'FERRARI', 
      url:'https://th.bing.com/th/id/R.e917a4b249cef33a3a1018e444aafca7?rik=lRSOsCTmDXXBYA&riu=http%3a%2f%2fstatic.superiorwallpapers.com%2fimages%2flthumbs%2f2015-08%2f10901_Black-Enzo-Ferrari-in-mountains-in-sunset.jpg&ehk=TWXaJs4dYSFTafFasv6mFK4X097q1h0rjhP%2f50u9f5Q%3d&risl=&pid=ImgRaw&r=0'
      
    },
    {
      name:'BMW',
      url: 'https://www.motormemos.com/wp-content/uploads/2021/03/P90415950_highRes_bmw-m3-and-bmw-m4-na.jpg'
      
    },
    {
      name:'LYKAN',
      url:'https://www.theautoblogs.com/wp-content/uploads/2021/05/HyperSport-with-all-doors-and-hood-open.jpg'

    },

   {
    name:'SCORPIO',
    url: 'https://i2.wp.com/www.glocar.in/blog/wp-content/uploads/2017/11/mahindra-scorpio-2017.jpg?resize=1024%2C576&ssl=1'

   
   }
  ]);
  return (
    <div className='card-container'>{
      cars.map(car  => (
        <TinderCard 
        className="swipe"
        key={car.name}
        preventSwipe={['up', 'down']}
        >
          <div style={ {backgroundImage: `url(${car.url})`}}
          className='card'>
            <h2>{car.name}</h2>
          </div>
        </TinderCard>
      ))
}
    </div>
    // <div>
    //  {
    //   cars.map( car=>(
    //     <TinderCard>
    //       <div style={ {backgroundImage: `url(${car.url})`}}>
    //         <h2>{car.name}</h2>
            
    //       </div>
    //     </TinderCard>
    //   ))
    //  }
    // </div>
  )
}

export default TinderCards