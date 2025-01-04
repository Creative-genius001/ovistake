import React from 'react';

export function useWindowSize() {
    
    const [windowWidth, setWindowWidth] = React.useState<number>(() =>
        typeof window !== 'undefined' ? window.innerWidth : 0
    );

    React.useEffect(() => {
        if (typeof window === 'undefined') return;
            
            const handleResize = () => {
                setWindowWidth(window.innerWidth);
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
