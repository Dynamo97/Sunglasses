import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';

import { CustomButton } from '../components';

import state from '../store';

const Home = () => {
    const snap = useSnapshot(state);
    console.log(snap.intro);
    return (
        
        <AnimatePresence>
            {snap.intro && (
                <motion.section className='home' {...slideAnimation('left')}>
                    <motion.header {...slideAnimation("down")}>
                        <img
                            src='./sunglasses_logo.png'
                            alt='logo'
                            className='w-8 h-8 object-contain'
                        />
                    </motion.header>
                    <motion.div className='home-content' {...headContainerAnimation}>
                        <motion.div {...headTextAnimation} className='sm: text-center'>
                            <h1 className='head-text'>LET IT <br className='xl:block hidden' />SHINE</h1>
                        </motion.div>
                        <motion.div {...headContentAnimation} className='flex flex-col gap-5 xl:bg-white p-5 rounded-md'>
                            <p className='max-w-md font-normal text-gray-600 bg-white rounded-xl bg-opacity-40 text-base'>Start your summer with style and use our customization tool to create your perfect sunglasses. <strong>Unleash your imagination</strong> and define your own look.</p>
                            <CustomButton
                                type="filled"
                                title="Customize"
                                handleClick={() => {
                                    state.intro = false;
                                    state.customizer = true;
                                }}
                                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                            />
                        </motion.div>
                    </motion.div>

                </motion.section>
            )}
        </AnimatePresence>
    )
}

export default Home