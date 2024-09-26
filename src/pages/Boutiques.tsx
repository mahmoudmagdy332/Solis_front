import FadeEffect from "../components/common/FadeEffect";

function Boutiques() {
  const boutiques = [
    {
      imgSrc: "/images/Botique1.png",
      title: "BOUTIQUES AND SHOWROOMS",
      description:
        "Lighting projects for boutiques and showrooms using high-quality and modern lighting solutions by Centersvet.",
    },
    {
      imgSrc: "/images/Botique1.png",
      title: "BOUTIQUES AND SHOWROOMS",
      description:
        "Lighting projects for boutiques and showrooms using high-quality and modern lighting solutions by Centersvet.",
    },
    {
      imgSrc: "/images/Botique3.png",
      title: "BOUTIQUES AND SHOWROOMS",
      description:
        "Lighting projects for boutiques and showrooms using high-quality and modern lighting solutions by Centersvet.",
    },
  ];

  return (
    <div className=" w-10/12 lg:w-10/12 mx-auto mt-10 mb-10 flex flex-col gap-10">
      {boutiques.map((boutique, index) => (
        <div
          key={index}
          className={`flex  items-center flex-col  gap-8  ${index%2===0?" lg:flex-row":" lg:flex-row-reverse"} pt-24 lg:flex-row`}
        >
           <FadeEffect transition={0.4} direction={index%2===0?"right":"left"} duration={ 0.7}>
              <img src={boutique.imgSrc} alt={`Boutique ${index + 1}`} />
           </FadeEffect>
          
          <FadeEffect transition={0.1} direction={index%2===0?"left":"right"} duration={ 0.3}>
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-3xl">{boutique.title}</h2>
              <p className="text-xl">{boutique.description}</p>
            </div>
          </FadeEffect>
          
        </div>
      ))}
    </div>
  );
}

export default Boutiques;
