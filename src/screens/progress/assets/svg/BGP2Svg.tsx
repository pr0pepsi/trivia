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

export const BGP2Svg = (props: SvgProps) => {
    return (
        <Svg
            width={93}
            height={241}
            viewBox="0 0 93 241"
            fill="none"
            {...props}
        >
            <Mask
                id="prefix__a"
                // maskUnits="userSpaceOnUse"
                x={71}
                y={45}
                width={98}
                height={151}
            >
                <Ellipse
                    cx={120.122}
                    cy={120.421}
                    rx={47.5}
                    ry={75.5}
                    transform="rotate(8.599 120.122 120.421)"
                    fill="#FF8686"
                />
            </Mask>
            <G mask="url(#prefix__a)" fill="#FF8686">
                <Path d="M79.736 122.501L261.035 190.4l-1.376 2.54L78.36 125.043zM84.391 113.903l181.3 67.899-1.377 2.54-181.299-67.898zM89.047 105.304l181.299 67.899-1.376 2.54L87.67 107.846zM75.08 131.1l181.299 67.899-1.376 2.54-181.299-67.898zM70.425 139.698l181.298 67.899-1.376 2.54L69.05 142.24zM65.769 148.297l181.298 67.899-1.376 2.54-181.298-67.898zM61.113 156.895l181.299 67.899-1.376 2.54-181.299-67.898z" />
            </G>
        </Svg>
    )
}
