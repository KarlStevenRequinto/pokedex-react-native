import React from "react"
import { SvgProps } from "../../types/Pokemon"
import { Svg, Path, Defs, LinearGradient, Stop } from "react-native-svg"

const IceSvg: React.FC<SvgProps> = ({ width, height, fill,isGradient }) => {
  // console.log("fill svg",fill)
  return (
    <Svg width={width} height={height} viewBox="0 0 200 200">
      <Defs>
        <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor={"white"} />
          <Stop offset="100%" stopColor={fill} />
        </LinearGradient>
      </Defs>
      <circle cx="100" cy="100" r="100" fill={isGradient ? "url(#grad)" :fill} />

      <g transform="translate(100, 100)">
        <line x1="0" y1="-40" x2="0" y2="40" stroke="white" stroke-width="4" />
        <line x1="-40" y1="0" x2="40" y2="0" stroke="white" stroke-width="4" />
        <line
          x1="-28"
          y1="-28"
          x2="28"
          y2="28"
          stroke="white"
          stroke-width="4"
        />
        <line
          x1="-28"
          y1="28"
          x2="28"
          y2="-28"
          stroke="white"
          stroke-width="4"
        />
        <circle cx="0" cy="0" r="6" fill="white" />
      </g>
    </Svg>
  )
}
export default IceSvg
