// components/page1/Comp_1_4.js
import Image from 'next/image';

interface Props {
  imageSrc1: string;
  imageSrc2: string;
}


export default function Comp_1_4({ imageSrc1 , imageSrc2 }: Props) {
    return   <div className="flex flex-col justify-center md:flex-row h-full w-full">



      <div >
        {/* image */}
        <div className="bg-cover bg-center" >

        <img className="image_strach_2"
            src={imageSrc1} alt="Fraud Detection Visual 1" 
            style={{ width: '100vw', height: '40vh'}} 
          />
        </div>
      
        {/* image */}
        <div className="bg-cover bg-center" >

        <img className="image_strach_2"
            src={imageSrc2} alt="Fraud Detection Visual 2" 
            style={{ width: '100vw', height: '40vh'}} 
          />
        </div>
        
      </div>

      

    </div>

    
  };
  


// // components/page1/Comp_1_4.js



// export default function Comp_1_4() {
//     return  <div >

//       <div >
//       <p className="text_center"> Title of Graphs </p>
//       </div>

//       <div  style={{ display: 'flex', justifyContent: 'space-between' }}>
//         {/* image */}
//         <div className="bg-cover bg-center" >

//           <img className="image_strach_2"
//             src="/images/app_law.png" alt="Fraud Detection Visual 1" 
//             style={{ width: '100%', height: '90%'}} 
//           />
//         </div>
      
//         {/* image */}
//         <div className="bg-cover bg-center" >

//           <img className="image_strach_2"
//             src="/images/app_law.png" alt="Fraud Detection Visual 2" 
//             style={{ width: '100%', height: '90%'}} 
//           />
//         </div>
        
//       </div>

      

//     </div>

    
//   };
  