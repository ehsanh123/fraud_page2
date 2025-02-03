import Comp_1_1 from '@/app/components/main/Comp1_1';
import Comp_1_2 from '@/app/components/main/Comp1_2';

import Comp_1_3 from '@/app/components/main/Comp1_3';
import Devider from './components/main/devider';
import Comp_1_5 from '@/app/components/main/Comp1_5';

import Devider2 from './components/main/devider2';
import Comp_1_6 from './components/main/Comp1_6';


export default function Home() {
  return (
    <div>
      {/* <Background1 /> */}
      <Comp_1_6 />
      
      <Comp_1_1 />

      <Comp_1_2 />
      
      {/* <Slider /> */}
      <Devider />
      <Comp_1_3 />
      <Devider2 />
      <Comp_1_5 />
      
    
    </div>
  );
}