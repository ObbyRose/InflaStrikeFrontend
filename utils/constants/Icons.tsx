// @ts-nocheck
import { Box } from "@/components/ui/box";
import { cn } from "@/components/ui/cn";
import Svg, { Path, G, Mask, Rect, Defs, ClipPath } from "react-native-svg";

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

export const IC_Bitcoin = ({ className }: IconsProps) => {
    return (
        <Box className={cn(className)}>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 23 22"
                fill="none"
            >
                <G clipPath="url(#clip0_838_7285)">
                    <Path
                        d="M19.208 11.542c-.524-.661-1.315-1.115-2.372-1.362 1.347-.67 1.938-1.807 1.776-3.411-.055-.582-.22-1.086-.495-1.514a3.074 3.074 0 00-1.118-1.03c-.47-.261-.981-.46-1.532-.596a12.363 12.363 0 00-1.898-.297V0h-2.086v3.24c-.362 0-.913.008-1.654.026V0H7.742v3.332c-.298.009-.736.013-1.315.013l-2.873-.013V5.5h1.504c.687 0 1.09.3 1.207.9v3.794c.09 0 .162.004.217.013h-.217v5.315c-.073.45-.334.674-.786.674H3.974l-.42 2.42h2.71c.173 0 .42.002.746.006.326.005.57.007.732.007V22H9.83v-3.332c.38.01.93.014 1.653.014V22h2.087V18.63c.741-.036 1.398-.101 1.972-.199a8.18 8.18 0 001.647-.456 4.466 4.466 0 001.314-.773c.352-.309.643-.701.874-1.177.23-.476.377-1.027.44-1.653.118-1.225-.085-2.168-.609-2.83zM9.87 5.645l.535-.006.732-.014c.194-.004.456.007.786.033.33.027.608.062.834.106.226.044.474.117.745.218.271.101.488.225.65.37.163.146.301.33.414.556.113.224.17.482.17.773a1.8 1.8 0 01-.123.675 1.272 1.272 0 01-.365.509c-.163.136-.33.255-.502.357-.171.1-.39.182-.657.244s-.5.11-.698.146c-.199.035-.447.06-.745.072-.299.013-.525.022-.678.027-.154.004-.364.004-.63 0a53.465 53.465 0 00-.468-.007V5.645zm5.7 9.004c-.087.203-.197.38-.333.529a1.88 1.88 0 01-.535.396 4.654 4.654 0 01-.644.278c-.208.07-.459.132-.752.185a10.13 10.13 0 01-1.566.166 18.364 18.364 0 01-1.369.012l-.501-.006V11.74c.072 0 .287-.004.644-.013a36.2 36.2 0 01.874-.013c.226 0 .537.013.935.04.397.026.732.065 1.003.118.271.053.567.135.888.245.32.11.58.244.78.403.198.159.365.361.5.608.136.247.204.53.204.847 0 .247-.043.471-.129.674z"
                        fill="#F6543E"
                    />
                </G>
                <Defs>
                    <ClipPath id="clip0_838_7285">
                        <Path
                            fill="#fff"
                            transform="translate(.426)"
                            d="M0 0H22.5517V22H0z"
                        />
                    </ClipPath>
                </Defs>
            </Svg>
        </Box>
    );
};

export const IC_Ethereum = ({ className }: IconsProps) => {
    return (
        <Box className={cn(className)}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 26"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.464 1.4c-.054.126-1.687 2.8-3.629 5.944-1.942 3.143-3.546 5.755-3.566 5.806-.026.065 1.029.706 3.699 2.245l3.735 2.152 3.734-2.154c2.682-1.547 3.723-2.18 3.697-2.246C21 12.804 13.738 1.17 13.66 1.17c-.053 0-.141.103-.195.23zM6.278 14.697c.143.24 7.394 10.192 7.424 10.19.05 0 7.463-10.22 7.434-10.247-.027-.027-6.955 3.954-7.245 4.162l-.177.128-3.587-2.066a682.305 682.305 0 01-3.75-2.168c-.147-.093-.156-.093-.1.001z"
        fill="#6374C4"
      />
    </Svg>
        </Box>
    );
};

export const IC_Xrp = ({ className }: IconsProps) => {
    return (
        <Box className={cn(className)}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 23 22"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_838_7306)">
        <Path
          d="M19.915 13.535a4.964 4.964 0 00-2.385-.585l.007-.004c-1.11.013-2.02-.83-2.033-1.88-.013-1.036.852-1.888 1.94-1.924l-.002-.001a4.96 4.96 0 002.414-.635c2.268-1.277 3.014-4.054 1.665-6.202C20.174.156 17.241-.551 14.973.727c-2.268 1.277-3.014 4.053-1.665 6.201.562.896.251 2.052-.694 2.585-.932.524-2.131.245-2.704-.62v.003a4.638 4.638 0 00-1.782-1.668c-2.297-1.23-5.212-.462-6.51 1.714s-.488 4.936 1.81 6.165c2.298 1.23 5.212.463 6.51-1.713l.023-.04v.003c.552-.878 1.746-1.182 2.69-.677.957.512 1.295 1.662.754 2.568-1.298 2.176-.488 4.937 1.81 6.166 2.298 1.23 5.213.462 6.51-1.714 1.298-2.176.488-4.936-1.81-6.165z"
          fill="#638FFE"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_838_7306">
          <Path
            fill="#fff"
            transform="translate(.401)"
            d="M0 0H22.5517V22H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
        </Box>
    );
};



export const IconsMap = {
    IC_Email, IC_Bitcoin, IC_Ethereum, IC_Xrp
};

export function getIconByString(icon: string) {
    return icon && icon in IconsMap ? IconsMap[icon as keyof typeof IconsMap] : null;
}