import * as React from "react"
import Svg, {
    SvgProps,
    Path,
} from "react-native-svg"

export const StarSvg = (props: SvgProps) => {
    const color = props.color ? props.color : "#969CDC";
    return (
        <Svg
            width={22}
            height={20}
            viewBox="0 0 22 20"
            fill="none"
            {...props}
        >
            <Path
                d="M11 0l3.504 6.177L21.462 7.6l-4.792 5.241.796 7.057L11 16.962l-6.466 2.937.796-7.057L.538 7.601l6.958-1.424L11 0z"
                fill={color}
            />
        </Svg>
    )
}
