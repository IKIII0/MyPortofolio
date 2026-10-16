import React from 'react';

export const Component = () => {
  // Certificate images for the infinite scroll
  const images = [
    "/Sertifikat Memulai Pemrograman dengan Python.png",
    "/Sertifikat Belajar Dasar AI.png",
    "/Sertifikat Belajar Dasar Data Science.png",
    "/Sertifikat_Python.png",
    "/Sertifikat_MachineLearning.png",
    "/Sertifikat_SFT_2026.png",
    "/3rd Best Project in Web Pathway GDGoC USU.png",
    "/1st Best Project in Android Mobile Programming Pathway.png"
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <>
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 20s linear infinite;
        }

        .scroll-container:hover .infinite-scroll {
          animation-play-state: paused;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .image-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
      `}</style>
      
      <div className="scroll-container w-full py-8 relative overflow-hidden flex items-center justify-center cursor-pointer">
        {/* Scrolling images container */}
        <div className="relative z-10 w-full flex items-center justify-center">
          <div className="w-full max-w-6xl">
            <div className="infinite-scroll flex gap-6 w-max px-4">
              {duplicatedImages.map((image, index) => (
                <div
                  key={index}
                  className="image-item flex-shrink-0 w-56 h-40 sm:w-72 sm:h-52 md:w-96 md:h-72 lg:w-[500px] lg:h-[360px] rounded-xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={image}
                    alt={`Sertifikat ${(index % images.length) + 1}`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component;
