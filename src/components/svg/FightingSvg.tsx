import React from "react"
import { SvgProps } from "../../types/Pokemon"
import { Svg, Path, Defs, LinearGradient, Stop } from "react-native-svg"

const FightingSvg: React.FC<SvgProps> = ({ width, height, fill,isGradient }) => {
  // console.log("fill svg",fill)
  return (
    <Svg width={width} height={height} viewBox="0 0 136 145" fill="none">
      <Defs>
        <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor={"white"} />
          <Stop offset="100%" stopColor={fill} />
        </LinearGradient>
      </Defs>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.8345 12.3715C22.5772 5.49092 28.8106 0.399902 36.2328 0.399902C41.8001 0.399902 46.6986 3.26435 49.5348 7.5999H54.1791C57.0644 4.63879 61.0955 2.7999 65.5565 2.7999C72.0966 2.7999 77.7138 6.75283 80.1488 12.3999H84.0371C86.4736 10.8789 89.3525 9.99989 92.4364 9.99989C98.9768 9.99989 104.594 13.9528 107.029 19.5999H117.602C117.693 19.5999 117.777 19.6242 117.85 19.6667C118.333 19.6225 118.822 19.5999 119.316 19.5999C128.089 19.5999 135.2 26.7112 135.2 35.4836V83.1116L135.2 83.1999L135.2 83.2882V83.9742C135.2 84.2647 135.192 84.5541 135.176 84.8421C134.221 117.883 104.511 144.4 68 144.4C30.8865 144.4 0.800049 117 0.800049 83.1999C0.800049 66.8849 7.81018 52.0607 19.237 41.0897C19.2085 56.9953 19.4771 73.4388 20.7156 73.1567C24.0316 72.4007 21.4407 23.136 20.8345 12.3715Z"
        fill={isGradient ? "url(#grad)" :fill}
      />
    </Svg>
  )
}
export default FightingSvg
