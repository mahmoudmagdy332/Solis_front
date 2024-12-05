import { useState, RefObject, useEffect, useRef } from "react";
import { useMotionValue, motion, frame, useSpring } from "framer-motion";

// const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };
// export function useFollowPointer(ref: RefObject<HTMLElement>) {
//   const xPoint = useMotionValue(0);
//   const yPoint = useMotionValue(0);
//   const x = useSpring(xPoint, spring);
//   const y = useSpring(yPoint, spring);

//   useEffect(() => {
//     if (!ref.current) return;

//     const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
//       const element = ref.current!;

//       frame.read(() => {
//         xPoint.set(clientX - element.offsetLeft - element.offsetWidth / 2);
//         yPoint.set(clientY - element.offsetTop - element.offsetHeight / 2);
//       });
//     };

//     window.addEventListener("pointermove", handlePointerMove);

//     return () => window.removeEventListener("pointermove", handlePointerMove);
//   }, []);

//   return { x, y };
// }
const spring = { damping: 10, stiffness: 100 };

const LineOfDots = () => {
  const points = 10; // عدد النقاط
  const gap = 10; // المسافة بين النقاط
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, spring);
  const smoothY = useSpring(y, spring);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y]);

  return (
    <div>
      {Array.from({ length: points }).map((_, index) => {
        const delay = index+gap ; // تأخير النقاط لتظهر بشكل خط
        return (
          <motion.div
            key={index}
            className="cursor-inner"
            style={{
              top:y,
              left:x,
              position:'absolute',
              
            }}
            // animate={{
            //   x: smoothX.get() + delay, // النقاط تتحرك في اتجاه الماوس
            //   y: smoothY.get()+ delay,
            // }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20,
              delay: 2 * 0.1, // تأخير الحركة لكل نقطة
            }}
          />
        );
      })}
    </div>
  );
};


const CustomCursor = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [cursorStyle, setCursorStyle] = useState("default");
  // const ref = useRef(null);
  // const { x, y } = useFollowPointer(ref);

  // Smooth animations for the cursor
  useEffect(()=>{
    
  },[mouseX,mouseY])
  const manageMouseMove = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };
  
  const handleHover = (e) => {
    if (e.target.classList.contains("hoverable")) {
      setCursorStyle("hover");
    } else {
      setCursorStyle("default");
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <>
      {/* المؤشر الخارجي */}
      <motion.div
        className={`cursor-outer ${cursorStyle}`}
      
        style={{
          left: mouseX,
          top: mouseY,
        }}
      />
      {/* المؤشر الداخلي */}
      <LineOfDots/>
        {/* <motion.div
        className={` `}
        ref={ref} 
        
         style={{
          
           x, // موقع مختلف لكل عنصر
         y
          }} 
        /> */}
    
     
      
    
     
    </>
  );
};

export default CustomCursor;
