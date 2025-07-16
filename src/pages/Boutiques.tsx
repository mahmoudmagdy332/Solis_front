import { useEffect, useState } from "react";
import FadeEffect from "../components/common/FadeEffect";
// import Modal from "../components/common/VideoModal";
import Loader from "../components/common/Loader";
import { project } from "../app/utils/types/types";
import root from "react-shadow";
// import { MdSlowMotionVideo } from "react-icons/md";
import { useLanguageSelector } from "../app/slices/languageSlice";
import useMarkets from "../app/utils/hooks/useMarkets";
import Tabs from "../components/projects/tabs";
import axios from "axios";
import { baseUrl } from "../app/config";

export default function Boutiques() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedVideoSrc, setSelectedVideoSrc] = useState("");
  const [projects, setProjects] = useState<project[]>([]);
  // const { isLoading, data, isError, error } = ProjectsQuery();
  const { translations } = useLanguageSelector(
    (state) => state.LanguageReducer
  );
  const {
    isLoading: marketLoading,
    data: marketData,
    isError: marketIsError,
    error: marketError,
  } = useMarkets();
  const [selectedMarketId, setSelectedMarketId] = useState<number>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(baseUrl() + "projects", {
        params: {
          market_id: selectedMarketId,
        },
      })
      .then((res) => {
        setLoading(false);
        setProjects(res.data.data);
      });
  }, [selectedMarketId]);

  // useEffect(() => {
  //   if (data) setProjects(data.data.data);
  // }, [data]);

  if (loading || marketLoading || marketData === undefined) {
    return (
      <div className="flex h-screen justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (marketIsError)
    return (
      <div className="h-96 flex justify-center items-center">
        Error: {marketError?.message}
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
        <div className="//w-11/12 container mt-10 flex flex-col gap-3 text-white">
          <p className="text-xl font-bold">{translations.Projects}</p>
        </div>
      </div>
      <div className="container py-6 mb-4 mt-12 px-2">
        <Tabs
          projects={marketData.data}
          setter={setSelectedMarketId}
          current={selectedMarketId as number}
        />
      </div>
      <div className="//w-10/12 //lg:w-10/12 container mt-1 mb-10 flex flex-col gap-10">
        {projects.length === 0 || !projects ? (
          <div>
            <h1>there are no projects in this market</h1>
          </div>
        ) : (
          projects.map((project, index) => (
            <div
              key={index}
              className={`flex items-center flex-col gap-8 py-8 lg:flex-row w-full`}
            >
              {" "}
              {/* index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse justify-between" */}
              <div className="w-full lg:w-2/5">
                <FadeEffect
                  transition={0.4}
                  direction={index % 2 === 0 ? "right" : "left"}
                  duration={0.7}
                >
                  <div
                    className="relative cursor-pointer"
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

                  {project?.description && (
                    <root.div className="quote">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: project.description,
                        }}
                      />
                    </root.div>
                  )}
                </div>
              </FadeEffect>
            </div>
          ))
        )}

        {/* <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        videoSrc={selectedVideoSrc}
      /> */}
      </div>
    </div>
  );
}
