import * as React from "react";
import {
  Carousel,
  CarouselItem,
} from "../../../node_modules/react-bootstrap/esm/index";
import { ImagesCarouselProps } from "./ImagesCoursel.types";

const ImagesCarousel: React.FC<ImagesCarouselProps> = (props) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  if (!props.images || props.images.length === 0) {
    return null;
  }

  return (
    <Carousel
      activeIndex={activeIndex}
      onSelect={(index, e) => setActiveIndex(index)}
      style={{ height: "400px" }}
    >
      {props.images.map((image) => {
        return (
          <CarouselItem key={image.src} className="w-100 h-100">
            <img
              src={image.src}
              alt={image.alt}
              className={image.classes ?? ""}
              style={image.styles ?? {}}
            />
          </CarouselItem>
        );
      })}
    </Carousel>
  );
};

export default ImagesCarousel;
