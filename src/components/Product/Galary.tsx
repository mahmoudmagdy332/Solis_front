function Galary() {
  const image = [
    {
      ImageSrc: "../../../public/images/galary1.jpg",
      alt: "galary1",
    },
    {
      ImageSrc: "../../../public/images/galary2.jpg",
      alt: "galary2",
    },

    {
      ImageSrc: "../../../public/images/galary3.jpg",
      alt: "galary3",
    },
    {
      ImageSrc: "../../../public/images/galary4.jpg",
      alt: "galary4",
    },
    {
      ImageSrc: "../../../public/images/galary5.jpg",
      alt: "galar5",
    },
  ];
  return (
    <div className="grid grid-cols-3">
      {image.map((image, index) => (
        <img key={index} src={image.ImageSrc} alt={image.alt} />
      ))}
    </div>
  );
}

export default Galary;
