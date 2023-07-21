import * as React from "react";

export interface CarouselImage {
  src: string;
  alt: string;
  classes?: string;
  styles?: { [key: string]: string };
}

export interface ImagesCarouselProps {
  images: CarouselImage[];
  imageStyles?: React.CSSProperties;
}

export type ImagesCarouselInternalComponentType = React.FC<ImagesCarouselProps>;
