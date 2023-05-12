import React from 'react'
import Navabar from '../Navbar/Navabar'
import tur1 from '../../img/tur1.jpg'
import tur2 from '../../img/tur2.jpeg'
import tur3 from '../../img/tur3.jpg'
import tur4 from '../../img/tur4.jpg'
import Footer from '../HomePage/Footer/Footer'
import './Ture.scss'
const Ture = () => {
  return (
    <div>
      <Navabar/>
  <h1 className='consultant_tittle'>Наші Тури</h1>
      <div className='container_tures_ture'>
    
           
           <div className='tur1'>
            <img className='tur1_img' src={tur1}/>
            <p>Токио</p>
           </div>

           <div className='tur2'>
            <img className='tur2_img' src={tur2}/>
            <p>Париж</p>
         </div>
         <div className='tur3'>
            <img className='tur3_img' src={tur3}/>
            <p>Китай</p>
          </div>
          <div className='tur4'>
            <img className='tur4_img' src={tur4}/>
            <p>Амстердам</p>
            </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Ture
