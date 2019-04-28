import * as React from "react";
import { getImageUrl } from "../../utils/imagePathHelper";

const ImageHeader: React.FC<{ imagePath: string }> = ({ imagePath }) => (
  <div className="image-head">
    <img src={getImageUrl(imagePath, "hero")} />
  </div>
);

export default ImageHeader;
