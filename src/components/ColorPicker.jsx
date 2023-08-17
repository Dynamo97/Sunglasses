

import React from 'react';
import { GithubPicker,  CirclePicker } from 'react-color';
import state from '../store';
import { useSnapshot } from 'valtio';
import { colors, colours } from '../config/constants';
import { motion } from 'framer-motion';



const ColorPicker = (props) => {

  const target = props.target;
  const title = props.title;
  
  const snap = useSnapshot(state);

  let c = []

  for (let i in colours) {
    c.push(colours[i].color)
  }


  const handleColor = (newColor) => {
    
    if (target === 'frame') {
      state.MainColor = newColor.hex;
    } if (target === 'arm') {
      state.armColor = newColor.hex;
    }
  }
  

  
  return (
    <>
       {/* <GithubPicker
         color={color}
        onChangeComplete={ handleColor }
       /> */}
       <motion.div className="flex flex-col space-between content-center w-fit mx-8">
        <h3 className='text-2xl mb-2 text-center'>{title}</h3>
        <CirclePicker colors={colors} onChangeComplete={handleColor}/>  
       </motion.div>

      
    </>
  );
  
}

export default ColorPicker;
