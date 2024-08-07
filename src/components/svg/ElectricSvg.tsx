import React from "react"
import { SvgProps } from "../../types/Pokemon"
import { Svg, Path, Defs, LinearGradient, Stop } from "react-native-svg"

const ElectricSvg: React.FC<SvgProps> = ({ width, height, fill ,isGradient}) => {
  // console.log("fill svg",fill)
  return (
    <Svg width={width} height={height} viewBox="0 0 90 145" fill="none">
      <Defs>
        <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor={"white"} />
          <Stop offset="100%" stopColor={fill} />
        </LinearGradient>
      </Defs>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.8675 0.804657C15.8397 0.724304 15.8996 0.640503 15.9845 0.640503H66.5614C66.6157 0.640503 66.6638 0.675824 66.6798 0.727629L89.9105 75.7823C89.935 75.8619 89.8756 75.9427 89.7921 75.9427H56.1211C56.0801 75.9427 56.0505 75.9818 56.0618 76.0214L75.373 144.001C75.4107 144.133 75.2377 144.219 75.1553 144.109L0.108921 44.3093C0.0476084 44.2278 0.105797 44.1113 0.207778 44.1113H30.767C30.8095 44.1113 30.8393 44.0694 30.8252 44.0292L15.8675 0.804657Z"
        fill={isGradient ? "url(#grad)" :fill}
      />
    </Svg>
  )
}
export default ElectricSvg
