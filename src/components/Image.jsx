import React from "react";

const Image = ({
  src,
  alt,
  className = "",
  width,
  height,
  rounded = false,
  circle = false,
  shadow = false,
}) => {
  const imagePath = src.startsWith("http")
    ? src
    : `${import.meta.env.BASE_URL}${src}`;

  const baseClasses = "object-cover";
  const roundedClasses = rounded ? "rounded-lg" : "";
  const circleClasses = circle ? "rounded-full" : "";
  const shadowClasses = shadow ? "shadow-lg" : "";

  const allClasses =
    `${baseClasses} ${roundedClasses} ${circleClasses} ${shadowClasses} ${className}`.trim();

  return (
    <img
      src={imagePath}
      alt={alt}
      width={width}
      height={height}
      className={allClasses}
      loading="lazy"
    />
  );
};

export default Image;
