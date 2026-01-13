import React from "react";
import { Heart } from "lucide-react";
import Section from "./Section";
import Image from "./Image";

const Header = ({
  bride,
  groom,
  photos = [],
  layout = "grid",
  mobileLayout = null,
}) => {
  const finalMobileLayout = mobileLayout || layout;

  const hasPhotos = photos && photos.length > 0;

  const renderPhotos = (currentLayout, isMobile = false) => {
    const responsiveClass = isMobile ? "md:hidden" : "hidden md:block";

    switch (currentLayout) {
      case "grid":
        return (
          <div
            className={`grid grid-cols-2 ${
              isMobile ? "md:hidden" : "hidden md:grid"
            } md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto px-4`}
          >
            {photos.map((photo, index) => (
              <div key={index} className="aspect-square">
                <Image
                  src={photo}
                  alt={`Photo ${index + 1} - ${bride} & ${groom}`}
                  className="w-full h-full"
                  rounded={true}
                  shadow={true}
                />
              </div>
            ))}
          </div>
        );

      case "single":
        return (
          <div className={`flex justify-center ${responsiveClass}`}>
            <Image
              src={photos[0]}
              alt={`${bride} & ${groom}`}
              className="max-w-md w-full"
              rounded={true}
              shadow={true}
            />
          </div>
        );

      case "circles":
        return (
          <div
            className={`flex flex-wrap justify-center gap-6 max-w-4xl mx-auto px-4 ${responsiveClass}`}
          >
            {photos.map((photo, index) => (
              <div key={index}>
                <Image
                  src={photo}
                  alt={`Photo ${index + 1} - ${bride} & ${groom}`}
                  className="border-4 border-white"
                  width={isMobile ? 120 : 150}
                  height={isMobile ? 120 : 150}
                  circle={true}
                  shadow={true}
                />
              </div>
            ))}
          </div>
        );

      case "horizontal":
        return (
          <div
            className={`flex overflow-x-auto gap-4 pb-4 px-4 max-w-6xl mx-auto scrollbar-hide ${responsiveClass}`}
          >
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`flex-shrink-0 ${
                  isMobile ? "w-48 h-64" : "w-64 h-80"
                }`}
              >
                <Image
                  src={photo}
                  alt={`Photo ${index + 1} - ${bride} & ${groom}`}
                  className="w-full h-full"
                  rounded={true}
                  shadow={true}
                />
              </div>
            ))}
          </div>
        );

      case "masonry":
        return (
          <div
            className={`columns-2 ${
              isMobile ? "md:hidden" : "hidden md:columns-3"
            } lg:columns-4 gap-4 max-w-6xl mx-auto px-4`}
          >
            {photos.map((photo, index) => (
              <div key={index} className="mb-4 break-inside-avoid">
                <Image
                  src={photo}
                  alt={`Photo ${index + 1} - ${bride} & ${groom}`}
                  className="w-full"
                  rounded={true}
                  shadow={true}
                />
              </div>
            ))}
          </div>
        );

      case "featured":
        if (photos.length === 0) return null;
        return (
          <div className={`max-w-4xl mx-auto px-4 ${responsiveClass}`}>
            <div className="mb-4">
              <Image
                src={photos[0]}
                alt={`Photo principale - ${bride} & ${groom}`}
                className="w-full max-h-96 mx-auto"
                rounded={true}
                shadow={true}
              />
            </div>

            {photos.length > 1 && (
              <div
                className={`grid ${
                  isMobile ? "grid-cols-2" : "grid-cols-3 md:grid-cols-4"
                } gap-3`}
              >
                {photos.slice(1).map((photo, index) => (
                  <div key={index} className="aspect-square">
                    <Image
                      src={photo}
                      alt={`Photo ${index + 2} - ${bride} & ${groom}`}
                      className="w-full h-full"
                      rounded={true}
                      shadow={true}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Section className="bg-gradient-to-br from-green-100 to-amber-100 text-center pt-20">
      <h1 className="text-5xl md:text-7xl font-bold text-col-champ text-name mb-4">
        ¡NOS CASAMOS!
      </h1>

      {hasPhotos && (
        <div className="my-8">
          {renderPhotos(finalMobileLayout, true)}

          {renderPhotos(layout, false)}
        </div>
      )}

      {!hasPhotos && (
        <div className="mb-8">
          <Heart className="w-16 h-16 mx-auto text-green-600 animate-pulse" />
        </div>
      )}

      <div className="text-4xl md:text-6xl text-col-oliv text-name font-light my-6">
        {bride} & {groom}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </Section>
  );
};

export default Header;
