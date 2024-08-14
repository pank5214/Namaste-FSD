import { useEffect, useState } from "react";

const ImageSlider = () => {
  const images = [
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    "https://piktochart.com/wp-content/uploads/2023/04/large-29.jpg",
    "https://i.pinimg.com/originals/2b/66/01/2b66016d5a1e2d230ecce59f8e673382.png",
    "https://i.pinimg.com/736x/5f/09/47/5f0947219a7f446e804e7e0055089fad.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKMpEfmuwzKmwyl4reX0NW7-Ixgn1DCz6IvxSYpq_CQ&s",
  ];

  const [active, setActive] = useState(0);
  useEffect(() => {
    const i = setInterval(() => {
      loadNextImage();
    }, 4000);
    return () => {
      clearInterval(i);
    };
  }, []);
  const loadNextImage = () => {
    setActive((active) => (active + 1) % images.length);
  };
  const loadPrevImage = () => {
    setActive((active) => (active - 1 < 0 ? images.length - 1 : active - 1));
  };

  return (
    <div>
      <div className="m-2 p-2 flex justify-center items-center gap-4">
        <div className="w-[600px] h-[450px] overflow-hidden flex-shrink-0">
          <img
            className="w-full h-full rounded-lg object-cover opacity-50 transition-opacity duration-300"
            src={images[active - 1 < 0 ? images.length - 1 : active - 1]}
            alt="wallpaper"
          />
        </div>
        <div className="absolute mr-[47rem] ml-4 bg-white py-2 rounded-2xl z-10">
          <img
            className="h-12 w-12 cursor-pointer"
            onClick={loadPrevImage}
            src="https://cdn0.iconfinder.com/data/icons/glyphpack/26/nav-arrow-left-512.png"
            alt="left-arrow"
          />
        </div>

        <div className="w-[800px] h-[450px] overflow-hidden flex-shrink-0">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={images[active]}
            alt="wallpaper"
          />
        </div>
        <div className="absolute ml-[47rem] mr-4 bg-white py-2 rounded-2xl z-10">
          <img
            className="h-12 w-12 cursor-pointer"
            onClick={loadNextImage}
            src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
            alt="right-arrow"
          />
        </div>

        <div className="w-[600px] h-[450px] overflow-hidden flex-shrink-0">
          <img
            className="w-full h-full object-cover rounded-lg opacity-50 transition-opacity duration-300"
            src={images[(active + 1) % images.length]}
            alt="wallpaper"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
