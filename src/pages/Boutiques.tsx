import { useState } from "react";
import FadeEffect from "../components/common/FadeEffect";
import Modal from "../components/common/VideoModal";

function Boutiques() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoSrc, setSelectedVideoSrc] = useState("");

  const boutiques = [
    {
      imgSrc: "/images/Botique1.png",
      title: "BOUTIQUES AND SHOWROOMS",
      description:
        "Lighting projects for boutiques and showrooms using high-quality and modern lighting solutions by Centersvet.",
      videoSrc: "../../public/Videos/WebHD_720p.mp4",
    },
    {
      imgSrc: "/images/Botique3.png",
      title: "BOUTIQUES AND SHOWROOMS",
      description:
        "Lighting projects for boutiques and showrooms using high-quality and modern lighting solutions by Centersvet.",
      videoSrc: "../../public/Videos/videoplayback.mp4",
    },
    {
      imgSrc: "/images/Botique3.png",
      title: "BOUTIQUES AND SHOWROOMS",
      description:
        "Lighting projects for boutiques and showrooms using high-quality and modern lighting solutions by Centersvet.",
      videoSrc: "",
    },
  ];

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
      {boutiques.map((boutique, index) => (
        <div
          key={index}
          className={`flex items-center flex-col gap-8 ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } pt-24 lg:flex-row`}
        >
          <FadeEffect
            transition={0.4}
            direction={index % 2 === 0 ? "right" : "left"}
            duration={0.7}
          >
            <img
              src={boutique.imgSrc}
              alt={`Boutique ${index + 1}`}
              onClick={() => handleImageClick(boutique.videoSrc)}
              className="cursor-pointer"
            />
          </FadeEffect>

          <FadeEffect
            transition={0.1}
            direction={index % 2 === 0 ? "left" : "right"}
            duration={0.3}
          >
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-3xl">{boutique.title}</h2>
              <p className="text-xl">{boutique.description}</p>
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
