import React from 'react'
import tur1 from '../../../img/tur1.jpg'
import tur2 from '../../../img/tur2.jpeg'
import tur3 from '../../../img/tur3.jpg'
import tur4 from '../../../img/tur4.jpg'
import './SecondSection.scss'
const SecondSection = () => {
  return (
    <div>
    <div className='tittle_sec'>
    <h1 className='tittle_second'> Найпопулярніші тури</h1>
      </div>

    <div className='container_tures'>
           
           <div className='tur1'>
            <img className='tur1_img' src={tur1}/>
           </div>

           <div className='tur2'>
            <img className='tur2_img' src={tur2}/>
         </div>
         <div className='tur3'>
            <img className='tur3_img' src={tur3}/>
          </div>
          <div className='tur4'>
            <img className='tur4_img' src={tur4}/>
            </div>
            

    </div>
    </div>
  )
}

export default SecondSection
