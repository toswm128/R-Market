import { useRef } from "react";
import ImageSliderItem from "./StyledImageSlider";

interface ImageSliderType {
  imageList: string[];
}

const ImageSlider = ({ imageList }: ImageSliderType) => {
  const sliderRef = useRef<HTMLDivElement | any>();

  const handlePrevSlide = () => {
    sliderRef.current?.scrollBy({
      left: -100,
      behavior: "smooth",
    });
  };

  const handleNextSlide = () => {
    sliderRef.current?.scrollBy({
      left: 100,
      behavior: "smooth",
    });
  };

  return (
    <ImageSliderItem.Container>
      <ImageSliderItem.Slider ref={sliderRef}>
        {imageList.map((url, key) => (
          <img src={url} key={key} alt="" />
        ))}
      </ImageSliderItem.Slider>
      {imageList.length > 1 && (
        <div className="button_wrap">
          <button onClick={() => handlePrevSlide()}>＜</button>

          <button onClick={() => handleNextSlide()}>＞</button>
        </div>
      )}
    </ImageSliderItem.Container>
  );
};

export default ImageSlider;
