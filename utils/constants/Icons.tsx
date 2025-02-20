// @ts-nocheck
import { Box } from "@/components/ui/box";
import { cn } from "@/components/ui/cn";
import Svg, { Path, G, Mask, Rect } from "react-native-svg";

interface IconsProps {
    className?: string;
}

export const IC_Email = ({ className }: IconsProps) => {
    return (
        <Box className={cn(className)}>
        <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        >
        <G opacity={0.401781}>
            <Mask
            id="a"
            style={{
                maskType: "luminance"
            }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={24}
            height={24}
            >
            <Path fill="#fff" d="M0 0H24V24H0z" />
            </Mask>
            <G
            mask="url(#a)"
            stroke="#000"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            >
            <Path
                clipRule="evenodd"
                d="M18.417 5.583c1.012 0 1.833.821 1.833 1.834v9.166c0 1.013-.82 1.834-1.833 1.834H5.583a1.833 1.833 0 01-1.833-1.834V7.418c0-1.013.82-1.833 1.833-1.833h12.834z"
            />
            <Path d="M3.75 7.417l8.25 5.5 8.25-5.5" />
            </G>
        </G>
        </Svg>
        </Box>
    );
};

export const IC_Lock = ({ className }: IconsProps) => {
    return (
        <Box className={cn(className)}>
        <Svg
      width={23}
      height={24}
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G opacity={0.395884}>
        <Mask
          id="a"
          style={{
            maskType: "luminance"
          }}
          maskUnits="userSpaceOnUse"
          x={-1}
          y={0}
          width={24}
          height={24}
        >
          <Path fill="#fff" d="M-1 0H23V24H-1z" />
        </Mask>
        <G
          mask="url(#a)"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Path
            clipRule="evenodd"
            d="M15.584 11.084c1.012 0 1.833.82 1.833 1.833v5.5c0 1.012-.821 1.833-1.834 1.833H6.418a1.833 1.833 0 01-1.833-1.833v-5.5c0-1.013.82-1.833 1.833-1.833h9.166z"
            strokeWidth={1.5}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 16.583a.917.917 0 110-1.833.917.917 0 010 1.833z"
            fill="#000"
            strokeWidth={2}
          />
          <Path
            d="M7.333 11.083V7.417a3.667 3.667 0 117.334 0v3.666"
            strokeWidth={1.5}
          />
        </G>
      </G>
    </Svg>
        </Box>
    );
};

export const IC_EyeOff = ({ className }: IconsProps) => {
    return (
        <Box className={cn(className)}>
        <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G opacity={0.602694}>
        <Mask
          id="a"
          style={{
            maskType: "luminance"
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
        >
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </Mask>
        <G mask="url(#a)">
          <Path
            d="M3 3l18 18M10.584 10.587a2 2 0 102.828 2.83"
            stroke="#000"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M7.053 7.28l.421.62-.421-.62zm.2-1.042l.62-.421-.62.421zM2.868 12l-.644-.384a.75.75 0 000 .768L2.868 12zm14.07 4.727l.419.622-.42-.622zm1.04.203l.623-.42-.622.42zm-.202 1.04l-.419-.62.42.62zM1.35 12.373l-.651.372.65-.372zm0-.744L2 12l-.651-.372zm4.862-5.59l-.421-.62.421.62zm3.358.048l-.206-.72.206.72zm2.428-.336l-.002.75h.001l.001-.75zm-3.355-.179l.721-.206-.721.206zm.515-.927l-.207-.721.207.721zM12 4.25L12 5H12v-.75zm10.65 7.378l.651-.372-.65.372zm0 .744L22 12l.651.372zm-2.603 3.625l-.551-.509.55.51zm-1.06.042l.509-.55-.51.55zm-.042-1.06l-.55-.51.55.51zM21.132 12l.644.384a.75.75 0 000-.768l-.644.384zM12 5.75l-.001.75H12v-.75zM7.474 7.9a1.5 1.5 0 00.4-2.083l-1.242.842.842 1.241zm-3.961 4.484C4.745 10.316 6.076 8.85 7.474 7.9l-.842-1.24c-1.626 1.102-3.095 2.754-4.408 4.956l1.289.768zM12 17.5c-3.191 0-6.031-1.761-8.487-5.884l-1.289.768C4.854 16.797 8.114 19 12 19v-1.5zm4.518-1.395c-1.387.936-2.88 1.395-4.518 1.395V19c1.942 0 3.726-.55 5.357-1.65l-.839-1.245zm2.083.405a1.5 1.5 0 00-2.083-.405l.839 1.244 1.244-.839zm-.405 2.083a1.5 1.5 0 00.405-2.083l-1.244.84.839 1.243zM12 20.5c2.246 0 4.321-.643 6.196-1.907l-.839-1.244C15.726 18.45 13.942 19 12 19v1.5zM.698 12.744C3.527 17.695 7.279 20.5 12 20.5V19c-4 0-7.333-2.332-10-7l-1.302.744zm0-1.488a1.5 1.5 0 000 1.488L2 12l-1.302-.744zM5.79 5.418C3.83 6.747 2.145 8.724.698 11.256L2 12c1.369-2.395 2.913-4.175 4.632-5.34L5.79 5.417zm2.083.399a1.5 1.5 0 00-2.083-.4l.842 1.242 1.241-.842zm1.903.99a7.966 7.966 0 012.219-.307L12 5a9.466 9.466 0 00-2.637.365l.413 1.442zM7.92 5.777a1.5 1.5 0 001.855 1.03l-.413-1.442-1.442.413zm1.03-1.854a1.5 1.5 0 00-1.03 1.855l1.442-.413-.413-1.442zm3.053-.423a10.966 10.966 0 00-3.054.423l.413 1.442A9.466 9.466 0 0111.999 5l.005-1.5zm11.298 7.756c-2.829-4.95-6.58-7.755-11.3-7.756V5C16 5 19.331 7.333 22 12l1.302-.744zm0 1.489a1.5 1.5 0 000-1.49L22 12l1.302.745zM20.6 16.506c.981-1.062 1.88-2.32 2.703-3.761L22 12c-.778 1.361-1.612 2.524-2.503 3.488l1.102 1.018zm-2.12.084a1.5 1.5 0 002.12-.084l-1.102-1.018-1.018 1.102zm-.084-2.12a1.5 1.5 0 00.084 2.12l1.018-1.102-1.102-1.018zm2.092-2.854c-.669 1.123-1.367 2.07-2.091 2.854l1.101 1.018c.806-.872 1.566-1.907 2.279-3.104l-1.289-.768zM12 6.5c3.191 0 6.031 1.761 8.487 5.884l1.289-.768C19.146 7.203 15.886 5 12 5v1.5zm-.004 0h.003L12 5H12l-.003 1.5z"
            fill="#000"
          />
        </G>
      </G>
    </Svg>
        </Box>
    );
};

export const IC_Eye = ({ className }: IconsProps) => {
    return (
        <Box className={cn(className)}>
        <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G opacity={0.602694}>
        <Mask
          id="a"
          style={{
            maskType: "luminance"
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={24}
          height={24}
        >
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </Mask>
        <G mask="url(#a)">
          <Path
            d="M3 3l18 18M10.584 10.587a2 2 0 102.828 2.83"
            stroke="#000"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M7.053 7.28l.421.62-.421-.62zm.2-1.042l.62-.421-.62.421zM2.868 12l-.644-.384a.75.75 0 000 .768L2.868 12zm14.07 4.727l.419.622-.42-.622zm1.04.203l.623-.42-.622.42zm-.202 1.04l-.419-.62.42.62zM1.35 12.373l-.651.372.65-.372zm0-.744L2 12l-.651-.372zm4.862-5.59l-.421-.62.421.62zm3.358.048l-.206-.72.206.72zm2.428-.336l-.002.75h.001l.001-.75zm-3.355-.179l.721-.206-.721.206zm.515-.927l-.207-.721.207.721zM12 4.25L12 5H12v-.75zm10.65 7.378l.651-.372-.65.372zm0 .744L22 12l.651.372zm-2.603 3.625l-.551-.509.55.51zm-1.06.042l.509-.55-.51.55zm-.042-1.06l-.55-.51.55.51zM21.132 12l.644.384a.75.75 0 000-.768l-.644.384zM12 5.75l-.001.75H12v-.75zM7.474 7.9a1.5 1.5 0 00.4-2.083l-1.242.842.842 1.241zm-3.961 4.484C4.745 10.316 6.076 8.85 7.474 7.9l-.842-1.24c-1.626 1.102-3.095 2.754-4.408 4.956l1.289.768zM12 17.5c-3.191 0-6.031-1.761-8.487-5.884l-1.289.768C4.854 16.797 8.114 19 12 19v-1.5zm4.518-1.395c-1.387.936-2.88 1.395-4.518 1.395V19c1.942 0 3.726-.55 5.357-1.65l-.839-1.245zm2.083.405a1.5 1.5 0 00-2.083-.405l.839 1.244 1.244-.839zm-.405 2.083a1.5 1.5 0 00.405-2.083l-1.244.84.839 1.243zM12 20.5c2.246 0 4.321-.643 6.196-1.907l-.839-1.244C15.726 18.45 13.942 19 12 19v1.5zM.698 12.744C3.527 17.695 7.279 20.5 12 20.5V19c-4 0-7.333-2.332-10-7l-1.302.744zm0-1.488a1.5 1.5 0 000 1.488L2 12l-1.302-.744zM5.79 5.418C3.83 6.747 2.145 8.724.698 11.256L2 12c1.369-2.395 2.913-4.175 4.632-5.34L5.79 5.417zm2.083.399a1.5 1.5 0 00-2.083-.4l.842 1.242 1.241-.842zm1.903.99a7.966 7.966 0 012.219-.307L12 5a9.466 9.466 0 00-2.637.365l.413 1.442zM7.92 5.777a1.5 1.5 0 001.855 1.03l-.413-1.442-1.442.413zm1.03-1.854a1.5 1.5 0 00-1.03 1.855l1.442-.413-.413-1.442zm3.053-.423a10.966 10.966 0 00-3.054.423l.413 1.442A9.466 9.466 0 0111.999 5l.005-1.5zm11.298 7.756c-2.829-4.95-6.58-7.755-11.3-7.756V5C16 5 19.331 7.333 22 12l1.302-.744zm0 1.489a1.5 1.5 0 000-1.49L22 12l1.302.745zM20.6 16.506c.981-1.062 1.88-2.32 2.703-3.761L22 12c-.778 1.361-1.612 2.524-2.503 3.488l1.102 1.018zm-2.12.084a1.5 1.5 0 002.12-.084l-1.102-1.018-1.018 1.102zm-.084-2.12a1.5 1.5 0 00.084 2.12l1.018-1.102-1.102-1.018zm2.092-2.854c-.669 1.123-1.367 2.07-2.091 2.854l1.101 1.018c.806-.872 1.566-1.907 2.279-3.104l-1.289-.768zM12 6.5c3.191 0 6.031 1.761 8.487 5.884l1.289-.768C19.146 7.203 15.886 5 12 5v1.5zm-.004 0h.003L12 5H12l-.003 1.5z"
            fill="#000"
          />
        </G>
      </G>
    </Svg>
        </Box>
    );
};

export const IC_Person = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
      <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={24}
        height={24}
      >
        <Path fill="#fff" d="M0 0H24V24H0z" />
      </Mask>
      <G mask="url(#a)">
        <Path
          clipRule="evenodd"
          d="M12 11.083a3.667 3.667 0 110-7.333 3.667 3.667 0 010 7.333z"
          stroke="#000"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.044 15.294l.53.53-.53-.53zm9.912 0l-.53.53.53-.53zm-1.06 1.06l.53-.53-.53.53zm-7.261.53a2.167 2.167 0 011.532-.634v-1.5c-.973 0-1.905.386-2.593 1.074l1.06 1.06zM8 18.418c0-.575.228-1.126.635-1.532l-1.061-1.061A3.667 3.667 0 006.5 18.417H8zm0 1.833v-1.833H6.5v1.833H8zm-1.5 1.5a1.5 1.5 0 001.5-1.5H6.5v1.5zM5 20.25a1.5 1.5 0 001.5 1.5v-1.5H5zm0-1.833v1.833h1.5v-1.833H5zm1.513-3.654A5.167 5.167 0 005 18.417h1.5c0-.973.386-1.905 1.074-2.593l-1.06-1.06zm3.654-1.513c-1.37 0-2.685.544-3.654 1.513l1.06 1.06a3.667 3.667 0 012.594-1.073v-1.5zm3.666 0h-3.666v1.5h3.666v-1.5zm3.654 1.513a5.166 5.166 0 00-3.654-1.513v1.5c.973 0 1.905.386 2.593 1.074l1.06-1.06zM19 18.417c0-1.37-.544-2.685-1.513-3.654l-1.06 1.06a3.667 3.667 0 011.073 2.594H19zm0 1.833v-1.833h-1.5v1.833H19zm-1.5 1.5a1.5 1.5 0 001.5-1.5h-1.5v1.5zm-1.5-1.5a1.5 1.5 0 001.5 1.5v-1.5H16zm0-1.833v1.833h1.5v-1.833H16zm-.635-1.532c.407.406.635.957.635 1.532h1.5c0-.973-.386-1.905-1.074-2.593l-1.06 1.06zm-1.532-.635c.575 0 1.126.228 1.532.635l1.061-1.061a3.667 3.667 0 00-2.593-1.074v1.5zm-3.666 0h3.666v-1.5h-3.666v1.5zM6.5 18.75a1.5 1.5 0 00-1.5 1.5h1.5v-1.5zm11 0h-11v1.5h11v-1.5zm1.5 1.5a1.5 1.5 0 00-1.5-1.5v1.5H19zm-1.5 1.5a1.5 1.5 0 001.5-1.5h-1.5v1.5zm-11 0h11v-1.5h-11v1.5zM5 20.25a1.5 1.5 0 001.5 1.5v-1.5H5z"
          fill="#000"
        />
      </G>
    </Svg>
      </Box>
  );
};
export const IconsMap = {
    IC_Email,
    IC_EyeOff,
    IC_Eye,
    IC_Lock,
    IC_Person,
};

export function getIconByString(icon: string) {
    return icon && icon in IconsMap ? IconsMap[icon as keyof typeof IconsMap] : null;
}