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
    <div className=" w-10/12 lg:w-9/12 mx-auto mt-20 mb-10 flex flex-col gap-20">
      {boutiques.map((boutique, index) => (
        <div
          key={index}
          className={`flex  items-center flex-col lg:flex-row gap-8 border-t-2 ${
            index == 0 && "border-none"
          } pt-24`}
        >
          <img src={boutique.imgSrc} alt={`Boutique ${index + 1}`} />
          <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-xl">{boutique.title}</h2>
            <p className="text-xl">{boutique.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Boutiques;
