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
            width={35}
            height={247}
            viewBox="0 0 35 247"
            fill="none"
            {...props}
        >
            <Path
                opacity={0.4}
                d="M22.381 200.026c37.522-104.385-60.931-84.211-3.458-170.54 94.25-100.165 108.638 78.903 211.781 299.913 103.143 221.011-57.826 102.451-165.13 16.977 15.284-14.305-79.782-44.56-43.193-146.35z"
                fill="#A1A7E3"
            />
        </Svg>
    )
}
