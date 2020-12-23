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
            width={96}
            height={231}
            viewBox="0 0 96 231"
        fill="none"
        {...props}
      >
            <G opacity={0.6}>
          <Mask
            id="prefix__a"
                    x={46}
                    y={29}
                    width={137}
                    height={173}
          >
            <Ellipse
                        cx={114.5}
                        cy={115.5}
              rx={47.5}
              ry={75.5}
                        transform="rotate(17.494 114.5 115.5)"
                        fill="#FF9393"
            />
          </Mask>
                <G mask="url(#prefix__a)" fill="#FF9393">
                    <Path d="M96.984 90.21l168.619 95.117-2.36 3.093L94.626 93.303zM74.278 111.31l168.619 95.116-2.36 3.093L71.92 114.403zM80.207 103.535l168.619 95.116-2.36 3.093-168.618-95.116zM86.136 95.76l168.619 95.117-2.359 3.093L83.777 98.853zM68.348 119.086l168.62 95.116-2.36 3.093L65.99 122.18zM62.42 126.861l168.618 95.116-2.359 3.093L60.06 129.954zM56.49 134.636l168.619 95.116-2.36 3.093L54.132 137.73zM50.56 142.411l168.62 95.116-2.36 3.093-168.618-95.116z" />
                </G>
        </G>
      </Svg>
    )
}
