import { useState } from "react";
import classes from "./LightEffect.module.css";
import { useProductSliceSelector } from "../../app/slices/ProductSlice";

function LightEffect() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { effects } = useProductSliceSelector((state) => state.ProductReducer);
  
  const handleClick = (index: number) => {
    setCurrentImageIndex(index);
  };
  
  return (
    <div className={classes.container}>
      <div className={classes.mainDisplay}>
        <img
          src={effects[currentImageIndex]?.image}
          className={classes.mainImage}
          alt={effects[currentImageIndex]?.name}
        />
        <div className={classes.caption}>
          {effects[currentImageIndex]?.name}
        </div>
      </div>

      <div className={classes.thumbnailContainer}>
        {effects?.map((effect, index) => (
          <img
            key={index}
            src={effect.image_effect}
            className={`${classes.smallImage} ${
              index === currentImageIndex ? classes.activeThumbnail : ""
            }`}
            alt={`Thumbnail of ${effect.name}`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default LightEffect;
