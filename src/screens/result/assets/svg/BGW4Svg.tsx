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

export const BGW4Svg = (props: SvgProps) => {
    return (
        <Svg
            width={120}
            height={94}
            viewBox="0 0 120 94"
            fill="none"
            {...props}
        >
            <Mask
                id="prefix__a"
                // maskUnits="userSpaceOnUse"
                x={-34}
                y={24}
                width={131}
                height={123}
            >
                <Ellipse
                    cx={31.5}
                    cy={85.5}
                    rx={47.5}
                    ry={75.5}
                    transform="rotate(-48.912 31.5 85.5)"
                    fill="#fff"
                />
            </Mask>
            <G mask="url(#prefix__a)" fill="#fff">
                <Path d="M-17.694 57.248L136.96-59.206l1.404 2.525L-16.29 59.774zM-22.447 48.702L132.207-67.752l1.405 2.526L-21.042 51.228zM-27.198 40.157L127.454-76.297l1.405 2.525L-25.794 42.683zM-12.942 65.793L141.712-50.66l1.404 2.526L-11.538 68.32zM-8.19 74.339L146.464-42.115l1.404 2.526L-6.786 76.865zM-3.438 82.885L151.215-33.57l1.405 2.526L-2.034 85.41zM1.313 91.43L155.967-25.024l1.405 2.526L2.718 93.956zM11.562 120.683L166.216 4.229l1.404 2.526L12.967 123.209zM6.81 112.138L161.464-4.316l1.405 2.526L8.215 114.664zM2.058 103.592L156.712-12.862l1.405 2.526L3.463 106.118zM16.314 129.229L170.968 12.775l1.404 2.526L17.72 131.755zM21.066 137.774L175.72 21.32l1.404 2.526L22.47 140.3zM25.818 146.32L180.472 29.866l1.405 2.526L27.223 148.846zM30.57 154.866L185.224 38.412l1.405 2.526L31.975 157.392z" />
            </G>
        </Svg>
    )
}