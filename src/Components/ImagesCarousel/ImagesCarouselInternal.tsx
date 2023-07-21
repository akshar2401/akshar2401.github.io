import * as React from "react";
import {
  Carousel,
  CarouselItem,
} from "../../../node_modules/react-bootstrap/esm/index";
import { ImagesCarouselInternalComponentType } from "./ImagesCoursel.types";

const ImagesCarouselInternal: ImagesCarouselInternalComponentType = (props) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  if (!props.images || props.images.length === 0) {
    return null;
  }
  return (
    <Carousel
      activeIndex={activeIndex}
      onSelect={setActiveIndex}
      style={Object.assign({}, { height: "400px" }, props.imageStyles || {})}
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

export default ImagesCarouselInternal;
