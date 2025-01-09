import { useEffect, useState } from "react";

const useInView = (threshold = 0.1) => {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }else{
                    setInView(false)
                }
            },
            { threshold }
        );

        const element = document.querySelector('#contacts');
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [threshold]);

    return inView;
};
export default useInView;