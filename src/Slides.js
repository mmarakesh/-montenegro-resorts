import {useState} from 'react';
import './App.css';

function Slides({image}) {
    const [photo, setPhoto] = useState(0);

    const previousPhoto = () => {
        setPhoto ( photo => {
            photo --;
            if (photo < 0) {
                photo = image.length -1;
            }
            return photo;
        }
        )
    }

    const nextPhoto = () => {
        setPhoto (photo => {
            photo ++;
            if (photo > image.length - 1) {
                photo = 0;
            }
            return photo;
        })
    }

    return(
        <div className='box'>
            <div className='slid'>
                <button className='slideBtn' onClick={previousPhoto}>◁</button>
            </div>

            <div>
            <img src={image[photo]} width='700px' height='500px'/>
            </div>

           <div className='slid'>
            <button className='slideBtn' onClick={nextPhoto}>▷</button>
            </div> 
        </div>
    )
}
export default Slides ;