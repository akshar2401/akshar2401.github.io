export interface CarouselImage {
  src: string;
  alt: string;
  classes?: string;
  styles?: { [key: string]: string };
}

export interface ImagesCarouselProps {
  images: CarouselImage[];
}
