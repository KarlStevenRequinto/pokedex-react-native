import React from "react"
import { SvgProps } from "../../types/Pokemon"
import { Svg, Path, Defs, LinearGradient, Stop } from "react-native-svg"

const RockSvg: React.FC<SvgProps> = ({ width, height, fill,isGradient }) => {
  // console.log("fill svg",fill)
  return (
    <Svg width={width} height={height} viewBox="0 0 146 115" fill="none">
      <Defs>
        <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor={"white"} />
          <Stop offset="100%" stopColor={fill} />
        </LinearGradient>
      </Defs>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M112.265 54.3615C112.257 54.3502 112.253 54.3362 112.256 54.3224L121.442 0.753753C121.447 0.729087 121.468 0.71106 121.493 0.71106H124.401C124.423 0.71106 124.443 0.7256 124.449 0.746975L145.147 66.2792C145.153 66.2994 145.146 66.3219 145.129 66.3351L129.869 78.2497C129.846 78.2674 129.813 78.2629 129.796 78.2396L112.265 54.3615ZM0.851074 89.8735C0.851074 89.8957 0.865361 89.9154 0.886481 89.9224L32.344 100.208C32.3592 100.213 32.3761 100.211 32.3893 100.202L102.704 51.6578C102.716 51.6497 102.724 51.637 102.726 51.6229L110.266 1.02842C110.271 0.997372 110.247 0.969472 110.216 0.969472H47.934C47.9185 0.969472 47.9042 0.976279 47.8944 0.988063L0.862894 57.7244C0.855254 57.7337 0.851074 57.7452 0.851074 57.7573V89.8735ZM45.4525 102.829L79.8193 114.086C79.8348 114.091 79.852 114.089 79.8652 114.079L120.781 84.73C120.804 84.714 120.81 84.6827 120.794 84.6597L105.456 61.8348C105.44 61.8109 105.408 61.8047 105.384 61.8211L45.4525 102.829Z"
        fill={isGradient ? "url(#grad)" :fill}
      />
    </Svg>
  )
}
export default RockSvg
