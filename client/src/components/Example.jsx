import { useState } from "react";


const Example = () => {

    const images = [
        {
            image: "url('/images/Component24.png')",
            text: "Landscape",
            slide: "/images/slide1-1.png"
        },
        {
            image: "url('/images/slides_1.jpg')",
            text: "Portaits",
            slide: "/images/slide2-2.png"
        },
        {
            image: "url('/images/Component23.png')",
            text: "Abstract",
            slide: "/images/slide4-4.png"
        },
        {
            image: "url('/images/Component25.png')",
            text: "Sports",
            slide: "/images/slide3-3.png"
        },
    ];

    const [currentImage, setCurrentImage] = useState(0);
    const [isFading, setIsFading] = useState(false);

    const handleImageClick = (index) => {
        if (index === currentImage) return;
        setIsFading(true);
        setTimeout(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
            setIsFading(false);
        }, 500);
    };

    return (
        <div
            className="relative w-full h-270 flex items-center justify-center overflow-hidden"
            onClick={handleImageClick}
        >
            {/* Old background Image (fading out) */}
            <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-2000 ${isFading ? "opacity-0" : "opacity-100"
                    }`}
                style={{ backgroundImage: images[(currentImage + 1) % images.length].image }}
            ></div>

            {/* New background (fading in) */}
            <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-2000 ${isFading ? "opacity-100" : "opacity-0"
                    }`}
                style={{ backgroundImage: images[currentImage].image }}
            ></div>
            {/* {} */}
            <div className=" flex">
                <div className=' px-[6%] py-[6%] w-[45%] flex flex-col justify-center gap-12 text-white z-20'>
                    <h1
                        className={`animate-slideFromTop text-white text-8xl font-bold transition-all duration-500 ${isFading ? "translate-y-10 opacity-0" : "-translate-y-0 opacity-100"
                            }`}
                    >{images[currentImage].text}</h1>
                    <p className=' w-[110%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quisquam repellendus quia aperiam eum aliquam quo repudiandae modi sequi expedita dolores, sapiente quam, nisi et quidem corporis cupiditate facere labore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel repudiandae nulla ex eligendi quos minus, officiis quia magni ut ullam praesentium tempora est dolore dolorum, iure deleniti animi explicabo labore!</p>
                    <button className=' px-7 py-3 bg-[#31500C] rounded-2xl w-[40%]'>Explore now</button>
                </div>
                {/* images */}
                <div className="absolute bottom-40 left-300 transform -translate-x-1/2 w-full max-w-screen-lg overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 "
                        style={{ transform: `translateX(-${currentImage * 36}%)`, transition: "transform 2s ease-out-in" }}
                    >
                        {images.map((newArr, index) => (
                            <img
                                key={index}
                                src={newArr.slide}
                                alt={`Slide ${index}`}
                                className={`w-[370px] h-[430px] object-cover rounded-4xl mx-2 cursor-pointer transition-all duration-500 border-4 ${index === currentImage ? "scale-100 border-white" : " scale-70 border-transparent"}`}
                                onClick={() => handleClick(index)}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Example;
