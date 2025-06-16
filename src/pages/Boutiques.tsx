import { useEffect, useState } from "react";
import FadeEffect from "../components/common/FadeEffect";
// import Modal from "../components/common/VideoModal";
import Loader from "../components/common/Loader";
import { ProjecysQuery } from "../app/services/queries";
import { project } from "../app/utils/types/types";
import root from 'react-shadow';
// import { MdSlowMotionVideo } from "react-icons/md";
import { useLanguageSelector } from "../app/slices/languageSlice";

function Boutiques() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedVideoSrc, setSelectedVideoSrc] = useState("");
  const [projects,setProjects]=useState<project[]>([]);
  const { isLoading,data, isError, error } = ProjecysQuery();
  const { translations } = useLanguageSelector((state) => state.LanguageReducer);
   
   
   useEffect(()=>{
    if(data)
      setProjects(data.data.data); 
   },[data])
   if (isLoading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <Loader />
      </div>
    );
  }
  if (isError)
    return (
      <div className="h-96 flex justify-center items-center">
        Error: {error?.message}
      </div>
    ); 


  // const handleImageClick = (imgSrc: string) => {
  //   setSelectedVideoSrc(imgSrc);
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  //   setSelectedVideoSrc("");
  // };

  return (
    <div>
 <div className="bg-black pt-10 pb-4">
            <div className="w-11/12 mx-auto mt-10 flex flex-col gap-3 text-white">
               <p className="text-xl font-bold">{translations.Projects}</p>
            </div>
        </div>
    <div className="w-10/12 lg:w-10/12 mx-auto mt-1 mb-10 flex flex-col gap-10">
      {projects?.map((project, index) => (
        <div
          key={index}
          className={`flex items-center flex-col gap-8 pt-24 lg:flex-row w-full
             ${
              'flex'
              // index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse justify-between"
             }  
             `}
        >
          <div className="w-full lg:w-2/5">
          <FadeEffect
            transition={0.4}
            direction={index % 2 === 0 ? "right" : "left"}
            duration={0.7}
            
          >
           <div className="relative cursor-pointer"   
          //  onClick={() => handleImageClick(project.video)}
           >
             <img
               src={project.image}
               alt={`Boutique ${index + 1}`}
             
               className=" h-40 md:h-56 lg:h-72 2xl:h-80 w-full object-cover"
             />
          
             {/* <MdSlowMotionVideo className="text-gray-300 text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/> */}
             
           </div>
          </FadeEffect>
          </div>
         

          <FadeEffect
            transition={0.1}
            direction={index % 2 === 0 ? "left" : "right"}
            duration={0.3}
          >
            <div className="flex flex-col  gap-4">
              <h2 className="font-semibold text-3xl">{project.title}</h2>
            
              {project?.description&&(
           <root.div className="quote">
          <p
          dangerouslySetInnerHTML={{ __html: project.description }}
          
          />
          </root.div>
        )}
            </div>
          </FadeEffect>
        </div>
      ))}

      {/* <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        videoSrc={selectedVideoSrc}
      /> */}
    </div>
    </div>
    
  );
}

export default Boutiques;
