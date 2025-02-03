import Comp_1_4 from '@/app/components/main/Comp1_4';

// components/page1/Comp_1_5.js
export default function Comp_1_5() {
  const images = ['/images/maxres.jpg', '/images/app_law2.png'];

  return  <div className='flex-col'>
    <div >
      <p className="text_title"> The Story in Figures  </p>
    </div>
    <div className='md:flex sm:flex-row' > 
      <Comp_1_4 imageSrc1="/images/maxres.jpg" imageSrc2="/images/fraud-focus-11.jpg"/>
      
      <Comp_1_4 imageSrc1="/images/quick_respond.jpg" 
      imageSrc2="/images/customer-service.jpg"/>
      
    </div>  

  </div>

  
};