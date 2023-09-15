import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
git 

import { fadeAnimation,  doubleSlideAnimation } from '../config/motion';

import {  ColorPicker,  CustomButton } from '../components';


const Customizer = () => {
  const snap = useSnapshot(state);

  


  return (
    <AnimatePresence>
      {snap.customizer && (
        <>
          {/* <motion.div
            key="custom"
            className='absolute top-0 left-0 z-10'
            {...slideAnimation('left')}
          >
            <div className='flex items-center min-h-screen'>
              <div className='editortabs-container tabs'>
                {EditorTabs.map((tab) => (
                  <Tab key={tab.name} tab={tab} handleClick={() => {}} />
                ))}
                
              </div>
            </div>
          </motion.div> */}
          <motion.div
          layoutId="back"
            className='absolute z-10 top-5 right-5'
            {...fadeAnimation}
          >
            <CustomButton 
              type="filled"
              title="Go Back"
              
              handleClick={() => {
                state.intro = true;
                state.customizer = false;
              }}
              customStyles="w-fit px-4 mx-2 py-2.5 font-bold text-sm"
            />
            <CustomButton 
              type="filled"
              title="View Cart"
              handleClick={() => {
                state.checkout = true;
                state.customizer = false;
              }}
              customStyles="w-fit px-4 mx-2 py-2.5 font-bold text-sm"
            />
           
          </motion.div>
          <motion.div className='filtertabs-container' {...doubleSlideAnimation('up')}>
          {/* {FilterTabs.map((tab) => (
                  <Tab 
                    key={tab.name} 
                    tab={tab} 
                    handleClick={() => {}} 
                    isFilterTab
                    isActiveTab=""
                  />
                ))}   */}
                <ColorPicker target="frame" title="Frames"/>
                <ColorPicker target="arm" title="Arms"/>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer