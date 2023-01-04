import {useState} from 'react';
import {cities} from './data';
import './App.css';
import Slides from './Slides';

function App() {
const [city, setCity] = useState(cities);
const [showText, setShowText] = useState(false);

const removeCity = (id) => {
let newCity = city.filter(item => item.id !== id);
console.log(newCity)
setCity(newCity);
  }

  const showTextClick = (item) => {
    item.showMore = !item.showMore
    setShowText(!showText)
    console.log(showText)
  }

return(
  <div>
    <div className='container'>
    <h1>Top {cities.length} resort towns in Montenegro</h1>
    </div>
    
    {cities.map(item => {
      const{id, cityName, description, image, showMore} = item;

     return(
      <div key={id}>
      <div className='container'>
      <h2>{id} - {cityName}</h2>
      </div>

      <div className='container'>
        <p>{showMore ? description : description.substring(0,220)+ "...."}
        <button onClick = {() => showTextClick(item)}>{showMore ? "SHOW LESS" : "READ MORE"}</button>
        </p>
        </div>

      <div className='container'>
        <Slides image = {image}/>
      </div>

      <div className='container'>
        <button className='btn' onClick={() => removeCity(id)}>remove</button>
      </div>
     </div>
     )
    })}
    
    <div className='container'>
        <button className='btn deleteAll' onClick={() => setCity([])}>delete all</button>
    </div>
    </div>
)
}

export default App;