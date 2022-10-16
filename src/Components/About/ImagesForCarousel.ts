import FirstImage from "../../../images/Akshar1.jpeg";
import SecondImage from "../../../images/Akshar2.jpeg";
import { CarouselImage } from "../ImagesCarousel/ImagesCoursel.types";

const images: CarouselImage[] = [
  {
    src: FirstImage,
    alt: "Akshar's first image",
    classes: "d-block h-100 w-100",
  },
  {
    src: SecondImage,
    alt: "Akshar's first image",
    classes: "d-block w-100 h-100",
  },
];

export default images;
