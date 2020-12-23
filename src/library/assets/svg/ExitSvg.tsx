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

export const ExitSvg = (props: SvgProps) => {
    const color = props.color ? props.color : '#4953BE';
    return (
        <Svg
            width={15}
            height={16}
            viewBox="0 0 15 16"
            fill="none"
            {...props}
        >
            <Path
                d="M3.143 15.432l4.352-4.415 4.354 4.415c1.703 1.727 4.31-.871 2.584-2.623L10.08 8.399l4.352-4.415c1.7-1.721-.887-4.344-2.584-2.62L7.495 5.775 3.143 1.363c-1.7-1.724-4.284.899-2.587 2.62l4.355 4.415L.556 12.81c-1.697 1.723.887 4.346 2.587 2.622z"
                fill={color}
            />
        </Svg>
    )
}
