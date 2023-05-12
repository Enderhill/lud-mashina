import React from 'react'
import Navabar from '../Navbar/Navabar'
import './Consultant.scss'
import foto1 from '../../img/foto1.jpg'
import foto2 from '../../img/foto2.jpg'
import foto3 from '../../img/foto3.jpg'
import foto4 from '../../img/foto4.jpg'
import Footer from '../HomePage/Footer/Footer'




const Consultant = () => {
  return (
    <div>
    <Navabar/>
    <h1 className='consultant_tittle'>Наші Консультанти</h1>

    <div className='container_tures'>
           
           <div className='tur1'>
            <img className='tur1_img' src={foto1}/>
            <p>Сергей Зверев</p>
           </div>

           <div className='tur2'>
            <img className='tur2_img' src={foto2}/>
            <p>Сергей Дронов</p>
         </div>
         <div className='tur3'>
            <img className='tur3_img' src={foto3}/>
            <p>Сергей Пипетков</p>
          </div>
          <div className='tur4'>
            <img className='tur4_img' src={foto4}/>
            <p>Сергей Троица</p>
            </div>
            

    </div>

    <Footer/>
    </div>
  )
}

export default Consultant
