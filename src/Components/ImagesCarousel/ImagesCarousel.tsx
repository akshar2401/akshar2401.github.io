import * as React from "react";
import { ImagesCarouselInternalComponentType } from "./ImagesCoursel.types";
import { LazyLoad } from "../CommonComponents";

const LazyImagesCarousel: ImagesCarouselInternalComponentType = React.lazy(
  () =>
    import(
      /* webpackChunkName: "ImagesCarousel" */ "../ImagesCarousel/ImagesCarouselInternal"
    )
);

export const ImagesCarousel: ImagesCarouselInternalComponentType = (props) => {
  return (
    <LazyLoad>
      <LazyImagesCarousel {...props} />
    </LazyLoad>
  );
};
