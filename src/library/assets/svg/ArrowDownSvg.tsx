import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
  Ellipse,
} from "react-native-svg";

export const ArrowDownSvg = (props: SvgProps) => {
  return (
    <Svg width={15} height={10} viewBox="0 0 15 10" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.171 4.281c-.974-.878-2.548-2.487-3.597-3.51C2.524-.18 1.85.623.576 1.94c-1.424 1.39 0 2.12 2.023 4.095L6.272 9.62c1.349 1.17 2.473-.585 4.272-2.267l2.345-2.24c2.324-2.195 2.848-2.195.975-3.95-1.65-1.683-1.575-1.683-4.198.95-1.199 1.098-2.12 1.949-2.495 2.168z"
        fill="#fff"
      />
    </Svg>
  );
};
