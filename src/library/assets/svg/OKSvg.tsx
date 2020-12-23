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

export const OKSvg = (props: SvgProps) => {
    return (
        <Svg
            width={20}
            height={15}
            viewBox="0 0 20 15"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.171 9.281c-.974-.878-2.548-2.487-3.597-3.51C2.524 4.82 1.85 5.623.576 6.94c-1.424 1.39 0 2.12 2.023 4.095l3.673 3.584c1.349 1.17 2.473-.585 4.272-2.267l7.345-7.24c2.324-2.195 2.848-2.195.974-3.95-1.648-1.683-1.573-1.683-4.197.95-1.199 1.098-7.12 6.949-7.495 7.168z"
                fill="#FF7C7C"
            />
        </Svg>
    )
}
