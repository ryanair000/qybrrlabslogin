import createImageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "@/lib/sanity/config";

const imageBuilder = createImageUrlBuilder({ projectId, dataset });

export const urlForImage = source => {
  // Ensure source and asset exist
  if (!source || !source.asset?._ref) {
    console.warn("[urlForImage] Missing source or source.asset._ref:", source);
    return null; // Return null if basic asset info is missing
  }

  let width = null;
  let height = null;

  // Attempt to parse dimensions safely from _ref
  try {
    const refParts = source.asset._ref.split("-");
    if (refParts.length > 2) {
      const dimensionsString = refParts[2];
      if (dimensionsString && dimensionsString.includes('x')) {
        const parts = dimensionsString.split('x');
        if (parts.length === 2) {
          width = parseInt(parts[0], 10);
          height = parseInt(parts[1], 10);
          // Reset if parsing resulted in NaN
          if (isNaN(width) || isNaN(height)) {
             width = null; 
             height = null; 
          }
        }
      }
    }
  } catch (e) {
    console.error("[urlForImage] Error parsing dimensions from ref:", source.asset._ref, e);
    // Reset width and height if any error occurs during parsing
    width = null;
    height = null;
  }

  // Build the URL using the image builder
  try {
    const image = imageBuilder.image(source).auto("format");

    // Conditionally apply width if parsed successfully
    const finalImage = width ? image.width(Math.min(width, 2000)) : image;
    
    const url = finalImage.url();

    // Return structure - width/height might be null if parsing failed
    return {
      src: url,
      width: width,
      height: height
    };
  } catch (e) {
     console.error("[urlForImage] Error building image URL:", source, e);
     return null; // Return null if URL building fails
  }
};
