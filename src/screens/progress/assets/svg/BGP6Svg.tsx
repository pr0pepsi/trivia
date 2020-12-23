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

export const BGP6Svg = (props: SvgProps) => {
    return (
        <Svg
            width={97}
            height={80}
            viewBox="0 0 97 80"
            fill="none"
            {...props}
        >
            <Path
                d="M62.718 25.7c31.427 27.403 42.928 65.647 25.687 85.42C71.164 130.892 31.71 124.705.282 97.301c-31.427-27.404-42.928-65.648-25.687-85.42C-8.164-7.893 31.29-1.706 62.718 25.698z"
                fill="#C7CAEB"
            />
        </Svg>
    )
}
