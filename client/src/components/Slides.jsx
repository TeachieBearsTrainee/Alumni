// import React from 'react'

// const Slides = () => {

//     const images = [
//         "/images/slides_1.jpg",
//         "/images/aboutImage.jpg",
//     ];

//     const [currentImage, setCurrentImage] = useState(0);
//     const [isFading, setIsFading] = useState(false);

//     const handleImageClick = () => {
//         setIsFading(true);
//         setTimeout(() => {
//             setCurrentImage((prev) => (prev + 1) % images.length);
//             setIsFading(false);
//         }, 500); // Match with transition duration
//     };


//     return (
//         <div className='w-100% h-250 mb-[4%]'>
//             <div className='  flex relative w-[100%] h-full bg-[url(../images/slides_1.jpg)] bg-no-repeat bg-cover '>
//                 <div className=' px-[6%] py-[6%] w-[45%] flex flex-col justify-center gap-12 text-white '>
//                     <h1 className=' text-8xl'>Landscape</h1>
//                     <p className=' w-[110%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quisquam repellendus quia aperiam eum aliquam quo repudiandae modi sequi expedita dolores, sapiente quam, nisi et quidem corporis cupiditate facere labore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel repudiandae nulla ex eligendi quos minus, officiis quia magni ut ullam praesentium tempora est dolore dolorum, iure deleniti animi explicabo labore!</p>
//                     <button className=' px-7 py-3 bg-[#31500C] rounded-2xl w-[40%]'>Explore now</button>
//                 </div>
//                 <div className='  h-full w-[55%]'>

//                 </div>
//             </div>
//         </div>

//     )
// }

// export default Slides