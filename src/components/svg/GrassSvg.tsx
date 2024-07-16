import React from "react"
import { SvgProps } from "../../types/Pokemon"
import { Svg, Path, Defs, LinearGradient, Stop } from "react-native-svg"

const GrassSvg: React.FC<SvgProps> = ({ width, height, fill,isGradient }) => {
  console.log("fill svg",fill)
  return (
    <Svg width={width} height={height} viewBox="0 0 130 139" fill="none">
      <Defs>
        <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor={"white"} />
          <Stop offset="100%" stopColor={fill} />
        </LinearGradient>
      </Defs>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.4434 121.044C20.9491 120.579 20.4603 120.105 19.9772 119.622C-5.52787 94.1171 -5.52787 52.7652 19.9772 27.2603C45.4821 1.75521 126.751 0.0489502 126.751 0.0489502C126.751 0.0489502 137.844 94.1171 112.339 119.622C89.6872 142.274 54.5361 144.808 29.0877 127.224L49.5931 102.061L82.3728 94.9837L55.6149 92.3087L72.6199 74.9944L91.9766 70.754L76.6704 66.2211L91.9766 38.6091L70.2051 63.0294L61.7977 51.1655L64.7573 70.754L49.5931 87.8489L42.5638 66.2208V94.9837L21.4434 121.044Z"
        fill={isGradient ? "url(#grad)" :fill}
      />
    </Svg>
  )
}
export default GrassSvg
