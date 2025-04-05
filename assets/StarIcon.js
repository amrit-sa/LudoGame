import React from "react";
import Svg, { Path } from "react-native-svg";

const StarIcon = ({ size = 24,color, style }) => (
  <Svg  viewBox="0 0 24 24" style={style} >
    <Path d="M12 2L14.9 8.63L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L9.1 8.63L12 2Z" 
        // fill={color}
    />
  </Svg>
);

export default StarIcon;
