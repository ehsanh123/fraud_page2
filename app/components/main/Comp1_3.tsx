// components/page1/Comp_1_3.js
export default function Comp_1_3() {
    return     <div className="flex flex-col justify-center md:flex-row h-full w-full">
  
      
  
      <div className="bg-cover bg-center" >
  
        <img className="image_strach_2"
        src="/images/law thing.jpg" alt="Fraud Detection Visual 1" 
        style={{ width: '90vw', height: '40vh', objectFit:'fill'}} 
        />
  
        {/*text part*/}
        <h1 className='text_center'> New Regulations & Laws  </h1>
  
      </div>
  
  
      <div className="bg-cover bg-center" 
      /* image */
      
      >
  
        <img className="image_strach_2"
        src="\images\AI-detectionjpg.jpg" alt="Fraud Detection Visual 2" 
        style={{ width: '90vw', height: '40vh', objectFit:'fill'}} 
        />
        
        <p className='text_center'>  Adaptive + Online learning AI  </p>
  
      </div>
  
      <div className="bg-cover bg-center" 
      /* image */
      >
        <img className="image_strach_2"
        src="/images/infestraction1.png" alt="Fraud Detection Visual 3" 
        style={{ width: '90vw', height: '40vh', objectFit:'fill'}} 
        />
        
        <p className='text_center'>  Expertise in Backend, Infrastructure  </p>
  
      </div>
  
    </div>;
  }
  