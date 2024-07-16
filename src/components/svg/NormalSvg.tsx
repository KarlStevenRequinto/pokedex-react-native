import React from "react"
import { SvgProps } from "../../types/Pokemon"
import { Svg, Path, Defs, LinearGradient, Stop } from "react-native-svg"

const NormalSvg: React.FC<SvgProps> = ({ width, height, fill,isGradient }) => {
  console.log("fill svg",fill)
  return (
    <Svg width={width} height={height} viewBox="0 0 128 127" fill="none">
      <Defs>
        <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor={"white"} />
          <Stop offset="100%" stopColor={fill} />
        </LinearGradient>
      </Defs>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M127.281 63.3999C127.281 98.3492 98.9492 126.681 64 126.681C29.0508 126.681 0.71875 98.3492 0.71875 63.3999C0.71875 28.4507 29.0508 0.118652 64 0.118652C98.9492 0.118652 127.281 28.4507 127.281 63.3999ZM100.161 63.3999C100.161 83.3709 83.971 99.5605 64 99.5605C44.029 99.5605 27.8394 83.3709 27.8394 63.3999C27.8394 43.4289 44.029 27.2393 64 27.2393C83.971 27.2393 100.161 43.4289 100.161 63.3999Z"
        fill={isGradient ? "url(#grad)" :fill}
      />
    </Svg>
  )
}
export default NormalSvg
