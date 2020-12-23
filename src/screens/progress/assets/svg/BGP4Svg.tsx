import * as React from "react"
import Svg, {
    SvgProps,
    Path,
    Defs,
    Pattern,
    Use,
    Image,
    Mask,
    Ellipse,
    G,
} from "react-native-svg"

export const BGP4Svg = (props: SvgProps) => {
    return (
        <Svg
            width={63}
            height={84}
            viewBox="0 0 63 84"
        fill="none"
        {...props}
        >
        <Ellipse
                cx={77.488}
                cy={88.977}
          rx={47.5}
          ry={75.5}
                transform="rotate(28.133 77.488 88.977)"
                fill="#FF7878"
            />
      </Svg>
    )
}
