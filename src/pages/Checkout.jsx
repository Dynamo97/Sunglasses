import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import state from '../store'
import { useSnapshot } from 'valtio'
import { CustomButton } from '../components'
import { useState } from 'react'
import { fadeAnimation, slideAnimation, headContainerAnimation} from '../config/motion'

const getColorName = (param) => {

    switch (param) {
        case '#030115':
            return 'Black'
        case '#82a7ba':
            return 'Teal'
        case '#ffe599':
            return 'Yellow'
        case '#ed9e4b':
            return 'Orange'
        case '#cc0000':
            return 'Red'
        case '#dddddd':
            return 'Silver'
        default:
            return 'FAIL'
        
    }
}

console.log(state.frameColor);

const Checkout = () => {
    const snap = useSnapshot(state);
    const [order, setOrder] = useState(false);
    return (
        <AnimatePresence>
            {snap.checkout && (
                <>
                <motion.header className='pl-16 pt-8 absolute top-0 left-0'{...slideAnimation("down")}>
                        <img
                            src='./sunglasses_logo.png'
                            alt='logo'
                            className='w-8 h-8 object-contain'
                        />
                </motion.header>
                    <motion.div
                        layoutId='back'
                        className='absolute z-10 top-5 right-5'
                        {...fadeAnimation}>

                        <CustomButton

                            type="filled"
                            title="Go Back"
                            handleClick={() => {
                                state.checkout = false;
                                state.customizer = true;
                                setOrder(false);
                            }}
                            customStyles="w-fit px-4 py-2.5 font-bold text-sm" />
                    </motion.div>
                    <motion.section className='w-screen h-screen flex items-center justify-center' {...headContainerAnimation}>
                        <div>
                            <h1 className='text-5xl mb-8'>Checkout</h1>
                            <p className='text-xl mb-2'>Your selection:</p>
                            <ul>
                                <li className='flex'>
                                <div className='text-2xl ml-4'>Frames:</div>
                                <div className='text-2xl ml-4'>{getColorName(snap.MainColor)}</div>
                                </li>
                                <li className='flex'>
                                <div className='text-2xl ml-4'>Arms:</div>
                                <div className='text-2xl ml-4'>{getColorName(snap.armColor)}</div>
                                </li>

                                
                            </ul>
                            <h3 className='mt-6 mb-6 text-2xl '>Total: <span className='font-bold'>£59.99</span></h3>

                            <CustomButton title="Order Now" type="filled" customStyles="w-fit px-4 py-2.5 font-bold text-sm" handleClick={() => setOrder(true)}/>

                            {order === true ? (<motion.div {...slideAnimation('up')} className='mt-4'>This is a demo only</motion.div>) : ''}
                        </div>
                    </motion.section>
                </>
            )}
        </AnimatePresence>
    )
}

export default Checkout