import * as React from "react"
import Svg, {
    SvgProps,
    Path,
    Defs,
    Pattern,
    Use,
    Image,
} from "react-native-svg"

export const BGP3Svg = (props: SvgProps) => {
    return (
        <Svg
            width={20}
            height={487}
            viewBox="0 0 20 487"
        fill="none"
        {...props}
      >
        <Path
                d="M21.988 183.938c61.758-92.141-38.647-96.49 38.077-166.271C175.827-56.598 146.28 120.6 192.64 360.047c46.36 239.447-80.983 85.333-164.306-23.65 18.3-10.163-66.567-62.607-6.345-152.459z"
                fill="#4953BE"
                fillOpacity={0.31}
        />
      </Svg>
    )
}
