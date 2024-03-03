import React from 'react'
import {apple, bill, google} from '../asset/assets';
import styles, {layout} from '../style';


const Billing = () => (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImg}>
        <img src={bill} alt='card' className='w-[50%] h-50%]'/>

      

      

        <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden' />in few easy step.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis expedita voluptatum sapiente enim cumque, cum nulla quidem totam reprehenderit. Delectus.</p>
        
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt='apple_store' className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
          <img src={google} alt='google_store' className='w-[128px] h-[42px] object-contain cursor-pointer' />
        </div>
      </div>


      </div>


    </section>





  )


export default Billing