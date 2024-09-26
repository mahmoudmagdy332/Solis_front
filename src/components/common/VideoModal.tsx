import React, { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };
  useEffect(()=>{
    if(isOpen){
        document.body.style.overflow = 'hidden';
       }
       else{
        document.body.style.overflow = 'scroll';
       }
  },[isOpen])
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black  z-50">
      <div className="rounded-lg md:w-3/4 lg:w-11/12 h-screen overflow-hidden shadow-lg relative">
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          className="w-full h-full cursor-pointer"
          onClick={handleVideoClick}
        />
        <button
          onClick={onClose}
          className="absolute top-1 right-4 w-8 h-8 text-white rounded-full p-1"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
