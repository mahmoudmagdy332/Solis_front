import { useEffect, useState } from "react";
import FadeEffect from "../components/common/FadeEffect";
import Modal from "../components/common/VideoModal";
import Loader from "../components/common/Loader";
import { ProjecysQuery } from "../app/services/queries";
import { project } from "../app/utils/types/types";

function Boutiques() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoSrc, setSelectedVideoSrc] = useState("");
  const [projects,setProjects]=useState<project[]>([]);
  const { isLoading,data, isError, error } = ProjecysQuery();
   
   
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
  // const boutiques = [
  //   {
  //     imgSrc: "/images/Botique1.png",
  //     title: "BOUTIQUES AND SHOWROOMS",
  //     description:
  //       "Lighting projects for boutiques and showrooms using high-quality and modern lighting solutions by Centersvet.",
  //     videoSrc: "Videos/WebHD_720p.mp4",
  //   },
  //   {
  //     imgSrc: "images/Botique3.png",
  //     title: "BOUTIQUES AND SHOWROOMS",
  //     description:
  //       "Lighting projects for boutiques and showrooms using high-quality and modern lighting solutions by Centersvet.",
  //     videoSrc: "Videos/videoplayback.mp4",
  //   },
  //   {
  //     imgSrc: "images/Botique3.png",
  //     title: "BOUTIQUES AND SHOWROOMS",
  //     description:
  //       "Lighting projects for boutiques and showrooms using high-quality and modern lighting solutions by Centersvet.",
  //     videoSrc: "",
  //   },
  // ];

  const handleImageClick = (imgSrc: string) => {
    setSelectedVideoSrc(imgSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideoSrc("");
  };

  return (
    <div className="w-10/12 lg:w-10/12 mx-auto mt-10 mb-10 flex flex-col gap-10">
      {projects?.map((project, index) => (
        <div
          key={index}
          className={`flex items-center flex-col gap-8 ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } pt-24 lg:flex-row `}
        >
          <div className="lg:w-2/5">
          <FadeEffect
            transition={0.4}
            direction={index % 2 === 0 ? "right" : "left"}
            duration={0.7}
            
          >
            <img
              src={project.image}
              alt={`Boutique ${index + 1}`}
              onClick={() => handleImageClick(project.video)}
              className="cursor-pointer "
            />
          </FadeEffect>
          </div>
         

          <FadeEffect
            transition={0.1}
            direction={index % 2 === 0 ? "left" : "right"}
            duration={0.3}
          >
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-3xl">{project.title}</h2>
              <p className="text-xl">{project.description}</p>
            </div>
          </FadeEffect>
        </div>
      ))}

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        videoSrc={selectedVideoSrc}
      />
    </div>
  );
}

export default Boutiques;
