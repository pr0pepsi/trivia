import * as React from "react"
import Svg, {
    SvgProps,
    Path,
    Defs,
    Pattern,
    Use,
    Image,
} from "react-native-svg"

export const BGP1Svg = (props: SvgProps) => {
    return (
        <Svg
            width={41}
            height={328}
            viewBox="0 0 41 328"
            fill="none"
            {...props}
        >
            <Path
                opacity={0.4}
                d="M18.227 165.949c-26.635 85.042 51.72 65.563 8.467 136.778-72.313 83.547-89.837-59.711-180.005-233.675-90.167-173.964 42.999-84.167 131.984-19.137C-33.118 61.908 44.2 83.021 18.227 165.95z"
                fill="#A1A7E3"
            />
        </Svg>
    )
}
