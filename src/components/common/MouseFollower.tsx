// // import { useState, RefObject, useEffect, useRef } from "react";
// // import { useMotionValue, motion, frame, useSpring } from "framer-motion";

// // // const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };
// // // export function useFollowPointer(ref: RefObject<HTMLElement>) {
// // //   const xPoint = useMotionValue(0);
// // //   const yPoint = useMotionValue(0);
// // //   const x = useSpring(xPoint, spring);
// // //   const y = useSpring(yPoint, spring);

// // //   useEffect(() => {
// // //     if (!ref.current) return;

// // //     const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
// // //       const element = ref.current!;

// // //       frame.read(() => {
// // //         xPoint.set(clientX - element.offsetLeft - element.offsetWidth / 2);
// // //         yPoint.set(clientY - element.offsetTop - element.offsetHeight / 2);
// // //       });
// // //     };

// // //     window.addEventListener("pointermove", handlePointerMove);

// // //     return () => window.removeEventListener("pointermove", handlePointerMove);
// // //   }, []);

// // //   return { x, y };
// // // }
// // const spring = { damping: 10, stiffness: 100 };

// // const LineOfDots = () => {
// //   const points = 10; // عدد النقاط
// //   const gap = 10; // المسافة بين النقاط
// //   const x = useMotionValue(0);
// //   const y = useMotionValue(0);
// //   const smoothX = useSpring(x, spring);
// //   const smoothY = useSpring(y, spring);

// //   useEffect(() => {
// //     const handleMouseMove = (e: MouseEvent) => {
// //       x.set(e.clientX);
// //       y.set(e.clientY);
// //     };

// //     window.addEventListener("mousemove", handleMouseMove);
// //     return () => {
// //       window.removeEventListener("mousemove", handleMouseMove);
// //     };
// //   }, [x, y]);

// //   return (
// //     <div>
// //       {Array.from({ length: points }).map((_, index) => {
// //         const delay = index+gap ; // تأخير النقاط لتظهر بشكل خط
// //         return (
// //           <motion.div
// //             key={index}
// //             className="cursor-inner"
// //             style={{
// //               top:y,
// //               left:x,
// //               position:'absolute',
              
// //             }}
// //             // animate={{
// //             //   x: smoothX.get() + delay, // النقاط تتحرك في اتجاه الماوس
// //             //   y: smoothY.get()+ delay,
// //             // }}
// //             transition={{
// //               type: "spring",
// //               stiffness: 150,
// //               damping: 20,
// //               delay: 2 * 0.1, // تأخير الحركة لكل نقطة
// //             }}
// //           />
// //         );
// //       })}
// //     </div>
// //   );
// // };


// // const CustomCursor = () => {
// //   const [mouseX, setMouseX] = useState(0);
// //   const [mouseY, setMouseY] = useState(0);
// //   const [cursorStyle, setCursorStyle] = useState("default");
// //   // const ref = useRef(null);
// //   // const { x, y } = useFollowPointer(ref);

// //   // Smooth animations for the cursor
// //   useEffect(()=>{
    
// //   },[mouseX,mouseY])
// //   const manageMouseMove = (e) => {
// //     setMouseX(e.clientX);
// //     setMouseY(e.clientY);
// //   };
  
// //   const handleHover = (e) => {
// //     if (e.target.classList.contains("hoverable")) {
// //       setCursorStyle("hover");
// //     } else {
// //       setCursorStyle("default");
// //     }
// //   };

// //   useEffect(() => {
// //     window.addEventListener("mousemove", manageMouseMove);
// //     window.addEventListener("mouseover", handleHover);

// //     return () => {
// //       window.removeEventListener("mousemove", manageMouseMove);
// //       window.removeEventListener("mouseover", handleHover);
// //     };
// //   }, []);

// //   return (
// //     <>
// //       {/* المؤشر الخارجي */}
// //       <motion.div
// //         className={`cursor-outer ${cursorStyle}`}
      
// //         style={{
// //           left: mouseX,
// //           top: mouseY,
// //         }}
// //       />
// //       {/* المؤشر الداخلي */}
// //       <LineOfDots/>
// //         {/* <motion.div
// //         className={` `}
// //         ref={ref} 
        
// //          style={{
          
// //            x, // موقع مختلف لكل عنصر
// //          y
// //           }} 
// //         /> */}
    
     
      
    
     
// //     </>
// //   );
// // };

// // export default CustomCursor;



// import  { useEffect, useState } from "react";
// import { motion, useMotionValue } from "framer-motion";

// // const spring = { damping: 20, stiffness: 100 };

// const DynamicLineCursor = () => {
//   const [points, setPoints] = useState<string>(""); // سلسلة الإحداثيات
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   // const smoothX = useSpring(x, spring);
//   // const smoothY = useSpring(y, spring);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       x.set(e.clientX);
//       y.set(e.clientY);

//       // تحديث النقاط لرسم الخط
//       setPoints((prev) => {
//         const newPoint = `${e.clientX},${e.clientY}`;
//         return prev ? `${prev} ${newPoint}` : newPoint;
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [x, y]);

//   return (
//       <svg
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           pointerEvents: "none",
//           zIndex:'2000'
//         }}
//       >
//         <motion.polyline
//           points={points}
//           fill="none"
//           stroke="red"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 0 }}
//           transition={{ duration: 0.3 }}
//         />
//       </svg>
 
//   );
// };

// export default DynamicLineCursor;


// CustomCursor.tsx


import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MouseFollower: React.FC = () => {
  // const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  // const [isMouseMoving, setIsMouseMoving] = useState(false);

  useEffect(() => {
    // let timeout: ReturnType<typeof setTimeout>;

    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
      // setTrail((prev) => {
      //   const newTrail = [...prev, { x: e.clientX, y: e.clientY }];
      //   return newTrail.slice(-20); // احتفظ بآخر 100 نقطة لتحسين الأداء
      // });
      // setIsMouseMoving(true);

      // clearTimeout(timeout);
      // timeout = setTimeout(() => setIsMouseMoving(false), 10); // إذا لم يتحرك الماوس بعد 100ms
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // أضف نقاط بشكل دوري عند توقف الماوس
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!isMouseMoving) {
  //       setTrail((prev) => {
  //         const newTrail = [...prev, { x: mouseX, y: mouseY }];
  //         return newTrail.slice(-1);
  //       });
  //     }
  //   }, 100); // أضف نقطة كل 100ms

  //   return () => clearInterval(interval);
  // }, [isMouseMoving, mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed top-0 left-0 z-50">
      <motion.div
        className={`cursor-outer  `}
        style={{ left: mouseX, top: mouseY }}
        
       
      />
      {/* {trail.map((point, index) => (
        <motion.div
          key={index}
          className="absolute w-[2px] h-[2px]  bg-gradient-to-br from-black to-white rounded-full opacity-50"
          style={{
            top: point.y ,
            left: point.x ,
          }}
          // animate={{
          //   scale: [2, 5],
          //   opacity: [1, 0],
          // }}
          // transition={{
          //   duration: 0.5,
          //   ease: 'easeOut',
          //   repeat: Infinity,
          // }}
       
        />
      ))} */}
    </div>
  );
};

export default MouseFollower;