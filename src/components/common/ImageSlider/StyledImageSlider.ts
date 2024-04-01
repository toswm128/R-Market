import styled from "@emotion/styled";

const ImageSliderItem = {
  Container: styled.div`
    position: relative;
    .button_wrap {
      top: 50%;
      padding: 0 16px;
      box-sizing: border-box;
      width: 100%;
      height: 0px;
      position: absolute;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 99;
    }
    button {
      border: none;
      background-color: rgba(0, 0, 0, 0.3);
      color: white;
      padding: 8px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      transition: 0.2s all ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: rgba(0, 0, 0, 0.5);
        box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
      }
    }
  `,

  Slider: styled.div`
    width: 100%;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    display: flex;
    max-height: 500px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    img {
      scroll-snap-align: start;

      min-width: 100%;
      object-fit: contain;
      flex-basis: 100%;
    }
  `,
};

export default ImageSliderItem;
