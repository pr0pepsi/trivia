import * as React from "react"
import Svg, {
    SvgProps,
    Path,
    Defs,
    Pattern,
    Use,
    Image,
    Ellipse,
} from "react-native-svg"

export const BGP1Svg = (props: SvgProps) => {
    return (
        <Svg
            width={98}
            height={106}
            viewBox="0 0 98 106"
        fill="none"
        {...props}
      >
            <Ellipse
                cx={20.5}
                cy={16.5}
                rx={47.5}
                ry={75.5}
                transform="rotate(28.133 20.5 16.5)"
                fill="#C7CAEB"
        />
      </Svg>
    )
}
