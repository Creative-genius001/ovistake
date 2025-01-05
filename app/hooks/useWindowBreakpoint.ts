import React from 'react';

export function useWindowSize() {
    
    const [windowWidth, setWindowWidth] = React.useState<number>(0);

    React.useEffect(() => {    
            const handleResize = () => {
                const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                setWindowWidth(windowWidth);
            };   
        
            handleResize();
    
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowWidth;
}

// export function useIsMobile(breakpoint: number = 768) {
//   const { width } = useWindowSize();
//   return width < breakpoint;
// }
