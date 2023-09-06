import { proxy } from "valtio";

const state = proxy({
    intro: true,
    checkout: false,
    customizer: false,
    MainColor: '#030115',
    armColor: '#030115',
    color: '#EFDB48',
});

export default state;