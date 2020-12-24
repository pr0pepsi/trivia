import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg";

export const StarSvg = (props: SvgProps) => {
  return (
    <Svg width={25} height={25} viewBox="0 0 25 25" fill="none" {...props}>
      <Path
        d="M12.5 25C19.404 25 25 19.404 25 12.5S19.404 0 12.5 0 0 5.596 0 12.5 5.596 25 12.5 25z"
        fill="#F7A491"
      />
      <Path
        d="M12.5 23.177c-5.888 0-10.654-4.79-10.654-10.654S6.612 1.846 12.5 1.846 23.154 6.636 23.154 12.5 18.388 23.177 12.5 23.177zm0-20.513c-5.42 0-9.837 4.415-9.837 9.836 0 5.42 4.416 9.836 9.837 9.836 5.42 0 9.836-4.415 9.836-9.836 0-5.42-4.415-9.836-9.836-9.836z"
        fill="#C4886E"
      />
      <Path
        d="M12.5 5.584l1.542 4.79h5.023L15 13.318l1.565 4.766L12.5 15.14l-4.065 2.944L10 13.318l-4.065-2.944h5.023l1.542-4.79z"
        fill="#fff"
      />
    </Svg>
  );
};
