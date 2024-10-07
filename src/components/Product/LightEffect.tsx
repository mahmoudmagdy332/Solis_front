import { useState } from "react";
import classes from "./LightEffect.module.css";

function LightEffect() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      LgImage: "images/Light1.jpg",
      SmImage: "images/lightsm3.png",
      alt: "Flood Light",
      caption: "F - Flood",
    },
    {
      LgImage: "images/Light2.jpg",
      SmImage: "images/lightsm2.png",
      alt: "Spot Light",
      caption: "S - Spot",
    },
    {
      LgImage: "images/Light3.jpg",
      SmImage: "images/lightsm1.jpg",
      alt: "Ambient Light",
      caption: "A - Ambient",
    },
  ];

  const handleClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className={classes.container}>
      <div className={classes.mainDisplay}>
        <img
          src={images[currentImageIndex].LgImage}
          className={classes.mainImage}
          alt={images[currentImageIndex].alt}
        />
        <div className={classes.caption}>
          {images[currentImageIndex].caption}
        </div>
      </div>

      <div className={classes.thumbnailContainer}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.SmImage}
            className={`${classes.smallImage} ${
              index === currentImageIndex ? classes.activeThumbnail : ""
            }`}
            alt={`Thumbnail of ${image.alt}`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default LightEffect;
