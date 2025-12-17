import { useState } from "react";


const useBreakPoints = () => {

    const [width, setWidth] = useState(window.innerWidth);
    console.log(width)
    const [size, setSize] = useState('base');

    // window.addEventListener('resize', () => {
    //     setWidth(window.innerWidth);
    // })
    

    if (width < 480) {
        setSize('base');
    } else if (width >= 480 && width < 768) {
        setSize('sm');
    } else if (width >= 768 && width < 992) {
        setSize('md');
    } else if (width >= 992 && width < 1280) {
        setSize('lg');
    } else {
        setSize('xl');
    }

    return { size, width };
}

export default useBreakPoints;