import React from "react"
import { SvgProps } from "../../types/Pokemon"
import { Svg, Path, Defs, LinearGradient, Stop } from "react-native-svg"

const FlyingSvg: React.FC<SvgProps> = ({ width, height, fill,isGradient }) => {
  // console.log("fill svg",fill)
  return (
    <Svg width={width} height={height} viewBox="0 0 144 125" fill="none">
      <Defs>
        <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor={"white"} />
          <Stop offset="100%" stopColor={fill} />
        </LinearGradient>
      </Defs>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50.2628 124.8C71.3573 124.8 89.417 113.076 96.8726 96.4564C96.9638 96.2536 66.9395 104.259 67.8968 101.429C68.3243 100.165 86.7293 93.4419 100.139 85.5996C107.846 81.092 111.395 71.55 111.395 71.55C111.395 71.55 98.4102 77.8542 91.8461 79.4534C78.6184 82.6765 66.9743 82.3295 66.9743 81.9937C66.9743 81.2675 86.3089 77.5938 113.182 61.218C125.822 53.5154 129.255 40.2477 129.255 40.2477C129.255 40.2477 115.358 48.5255 106.957 51.2584C87.0348 57.7392 68.8542 59.6922 68.8542 58.8153C68.8542 56.9377 84.8537 52.5381 101.817 44.3185C110.637 40.0449 118.275 34.4616 127.127 28.2524C141.611 18.0934 144 0 144 0C144 0 129.714 9.21378 122.743 12.2736C93.9772 24.8993 68.5769 31.5222 50.2628 32.956C22.617 35.1205 0 54.4095 0 79.4534C0 104.498 22.5033 124.8 50.2628 124.8Z"
        fill={isGradient ? "url(#grad)" :fill}
      />
    </Svg>
  )
}

export default FlyingSvg
