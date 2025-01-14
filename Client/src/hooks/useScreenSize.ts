import { useState, useEffect } from 'react';

const useScreenWidthSize = () => {
    
    const getScreenSize = (width:number) => {
        if (width <= 900) return "small";
        if (width <= 1600) return "medium";
        return "large";
    };
    const [screenWidthSize, setScreenSize] = useState(getScreenSize(window.innerWidth));

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(getScreenSize(window.innerWidth));
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return screenWidthSize;
};

export default useScreenWidthSize;