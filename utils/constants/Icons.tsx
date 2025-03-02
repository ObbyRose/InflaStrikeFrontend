// @ts-nocheck
import { Box } from "@/components/ui/box";
import { cn } from "@/components/ui/cn";
import Svg, { Path, G, Mask, Rect, Defs, ClipPath, Circle, LinearGradient, Stop} from "react-native-svg";

interface IconsProps {
    className?: string;
    color?: string;
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

export const IC_PieGraph = ({ className }: IconsProps) => {
    return (
        <Box className={cn(className)}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 21"
      fill="none"
    >
      <Path
        d="M16 11.499c1.105 0 2.022.906 1.779 1.983a8.999 8.999 0 01-17.606-.227A9 9 0 017.016 2.72C8.094 2.477 9 3.394 9 4.5v2a5 5 0 005 5h2z"
        fill="#969AA0"
      />
      <Path
        d="M12 3.033c0-1.952 1.64-3.596 3.444-2.85a9.001 9.001 0 014.87 4.872c.748 1.803-.896 3.444-2.848 3.444H16.5a4.5 4.5 0 01-4.5-4.5v-.966z"
        fill="#969AA0"
      />
    </Svg>
        </Box>
    );
};

export const IC_Portfolio = ({ className, color='#B0B9C1' }: IconsProps) => {
    return (
        <Box className={cn(className)}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 21"
      fill="none"
    >
      <Path
        d="M16 11.499c1.105 0 2.022.906 1.779 1.983a8.999 8.999 0 01-17.606-.227A9 9 0 017.016 2.72C8.094 2.477 9 3.394 9 4.5v2a5 5 0 005 5h2z"
        fill={color}
      />
      <Path
        d="M12 3.033c0-1.952 1.64-3.596 3.444-2.85a9.001 9.001 0 014.87 4.872c.748 1.803-.896 3.444-2.848 3.444H16.5a4.5 4.5 0 01-4.5-4.5v-.966z"
        fill={color}
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
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.000000 512.000000"
    >
      <Path
        d="M4215 4415c-31-11-382-357-1771-1747C924 1147 710 930 701 895c-30-118 76-225 194-194 34 9 90 60 360 329l320 317 75-33c192-86 482-162 704-183 628-61 1304 173 1811 628 285 256 475 576 475 801 0 300-307 715-754 1019l-48 33 285 287c310 310 317 320 297 405-8 36-48 89-80 106-32 16-86 19-125 5zm-427-1159c215-158 430-402 499-568 74-175-7-359-271-624-345-344-795-562-1268-613-256-28-524 2-793 90-66 22-123 43-127 47s59 74 141 156l148 148 55-31c251-142 578-130 821 29 352 229 470 697 266 1058l-31 55 188 188 187 188 39-22c21-12 87-57 146-101zm-773-543c9-27 19-79 22-118 23-285-222-533-507-512-72 5-170 32-170 45 0 9 623 632 632 632 3 0 14-21 23-47zM2335 3989c-650-71-1334-463-1676-961-111-162-179-340-179-468 0-178 120-422 317-642 103-115 230-228 257-228 25 0 206 177 206 202 0 9-65 81-143 159-215 216-311 372-311 509 0 133 96 293 293 491 346 347 797 566 1273 618 178 20 354 11 551-26l88-17 100 100c119 118 126 127 106 158-17 26-158 64-332 91-123 20-429 27-550 14z"
        transform="matrix(.1 0 0 -.1 0 512)"
      />
      <Path
        d="M2425 3349c-312-58-561-287-639-589-19-74-32-234-22-274 4-15 18-32 32-38 24-11 32-5 165 128 103 102 149 155 171 198 41 80 125 166 201 206 45 24 101 71 205 174 78 77 142 146 142 153s-9 22-20 33c-17 17-32 20-102 19-46-1-105-5-133-10z"
        transform="matrix(.1 0 0 -.1 0 512)"
      />
    </Svg>
        </Box>
    );
};

export const IC_Eye = ({ className }: IconsProps) => {
    return (
        <Box className={cn(className)}>
        <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.000000 512.000000"
    >
      <Path
        d="M2370 4049c-484-54-995-310-1490-744-195-172-489-488-599-645-47-68-47-132 0-200 154-220 490-563 781-797 334-269 786-495 1123-562 649-130 1288 77 1962 633 210 174 570 551 692 726 27 40 33 57 33 100s-6 60-33 100c-64 91-214 265-349 403-696 716-1441 1062-2120 986zm474-339c446-88 915-370 1370-826 83-82 184-189 225-237l74-87-54-63c-455-528-980-908-1447-1046-172-50-272-65-452-65-189 0-315 20-494 79-471 156-961 516-1405 1032l-54 63 74 87c113 133 360 376 499 491 431 355 823 544 1240 596 82 10 319-3 424-24z"
        transform="matrix(.1 0 0 -.1 0 512)"
      />
      <Path
        d="M2395 3404c-505-112-782-656-570-1120 109-239 333-418 579-463 77-14 235-14 312 0 247 45 468 223 580 465 52 111 68 190 67 334 0 106-4 139-27 215-28 93-82 202-119 243-93 101-259 46-274-90-5-38 1-58 41-139 53-108 71-187 62-275-18-180-120-323-286-403-74-35-77-36-200-36s-126 1-200 36c-262 126-362 420-227 673 78 147 253 255 415 256 52 1 115 32 143 71 19 26 24 47 24 91 0 61-17 94-69 132-36 27-153 32-251 10z"
        transform="matrix(.1 0 0 -.1 0 512)"
      />
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

export const IC_ArrowLeft = ({ className }: IconsProps) => {
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
      <G
        mask="url(#a)"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M5 12h14M5 12l4 4M5 12l4-4" />
      </G>
    </Svg>
      </Box>
  );
};

export const IC_GreenVi = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
        <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="none"
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm6.04 5.96a1 1 0 00-1.414 0l-5.96 5.959-2.625-2.626-.095-.083a1 1 0 00-1.32 1.497L7.96 14.04l.094.084a1 1 0 001.32-.084l6.667-6.666.083-.094a1 1 0 00-.083-1.32z"
          fill="#5ACC6D"
        />
        </Svg>
      </Box>
  );
};

export const IC_Mail = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
      <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 81 87"
      fill="none"
    >
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={81}
        height={87}
      >
        <Path
          d="M0 .972h47.7c18.225 0 33 14.775 33 33v52.8H0V.972z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#a)">
        <Path
          transform="rotate(7 8.22 9.23)"
          fill="#4A3EF6"
          d="M8.22046 9.23022H89.22046V61.23022H8.22046z"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.876 60.965l44.423-30.816 35.059 39.927"
          fill="#3F35D1"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M41.757 45.21a4.4 4.4 0 005.615.69l41.245-26.798L8.22 9.23l33.537 35.98z"
          fill="url(#paint0_linear_2101_4989)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_2101_4989"
          x1={38.7435}
          y1={-5.29239}
          x2={49.3891}
          y2={38.8514}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#9D9DFF" />
          <Stop offset={1} stopColor="#6363FF" />
        </LinearGradient>
      </Defs>
    </Svg>
      </Box>
  );
};

export const IC_Settings = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <G
        fill="none"
        fillRule="evenodd"
        stroke="#969AA0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        transform="translate(2.5 1.5)"
      >
        <Path d="M18.307 6.124l-.623-1.08a1.913 1.913 0 00-2.608-.705h0a1.904 1.904 0 01-2.61-.678 1.83 1.83 0 01-.255-.915h0A1.913 1.913 0 0010.297.778H9.043A1.904 1.904 0 007.14 2.691h0a1.913 1.913 0 01-1.913 1.886 1.83 1.83 0 01-.916-.257h0a1.913 1.913 0 00-2.608.705l-.669 1.099a1.913 1.913 0 00.696 2.608h0a1.913 1.913 0 010 3.314h0a1.904 1.904 0 00-.696 2.6h0l.632 1.089a1.913 1.913 0 002.609.741h0a1.895 1.895 0 012.6.696c.164.277.252.593.255.915h0c0 1.057.857 1.913 1.913 1.913h1.254c1.053 0 1.908-.85 1.914-1.904h0a1.904 1.904 0 011.913-1.913c.321.009.636.097.915.256h0a1.913 1.913 0 002.609-.695h0l.659-1.099a1.904 1.904 0 00-.696-2.608h0a1.904 1.904 0 01-.696-2.61c.166-.289.406-.529.696-.695h0a1.913 1.913 0 00.696-2.6h0v-.008z" />
        <Circle cx={9.675} cy={10.389} r={2.636} />
      </G>
    </Svg>
      </Box>
  );
};
export const IC_DisplaySetting = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <Rect
        x={5}
        y={3}
        width={14}
        height={18}
        rx={2}
        stroke="#38BDF8"
        strokeWidth={1.5}
      />
      <Path
        d="M15.25 14v-.75h-.75V14h.75zm1.5 0h.75v-.75h-.75V14zM12 18.75h-.75v.75H12v-.75zm0-1.5v-.75h-.75v.75H12zM8.75 10v.75h.75V10h-.75zm-1.5 0H6.5v.75h.75V10zM12 5.25h.75V4.5H12v.75zm0 1.5v.75h.75v-.75H12zM14.5 14v3H16v-3h-1.5zm2.25-.75h-1.5v1.5h1.5v-1.5zM17.5 17v-3H16v3h1.5zM15 19.5a2.5 2.5 0 002.5-2.5H16a1 1 0 01-1 1v1.5zm-3 0h3V18h-3v1.5zm-.75-2.25v1.5h1.5v-1.5h-1.5zM15 16.5h-3V18h3v-1.5zm-.5.5a.5.5 0 01.5-.5V18a1 1 0 001-1h-1.5zm-5-10a.5.5 0 01-.5.5V6a1 1 0 00-1 1h1.5zm0 3V7H8v3h1.5zm-2.25.75h1.5v-1.5h-1.5v1.5zM6.5 7v3H8V7H6.5zM9 4.5A2.5 2.5 0 006.5 7H8a1 1 0 011-1V4.5zm3 0H9V6h3V4.5zm.75 2.25v-1.5h-1.5v1.5h1.5zM9 7.5h3V6H9v1.5z"
        fill="#38BDF8"
      />
    </Svg>
      </Box>
  );
};

export const IC_LanguageSetting = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.336 6.805c0-.006 0-.012-.002-.017a.667.667 0 00-.039-.05.758.758 0 01-.034-.042 9.222 9.222 0 00-1.298-1.425l-.052-.048a9.015 9.015 0 00-1.769-1.209l-.04-.02a8.945 8.945 0 00-.872-.39l-.037-.012c-.05-.018-.098-.036-.147-.051a9.098 9.098 0 00-.771-.24l-.036-.01c-.065-.017-.13-.035-.197-.05a8.994 8.994 0 00-.873-.158 8.456 8.456 0 00-2.183-.022l-.143.022-.096.015a8.81 8.81 0 00-.975.193l-.035.01a8.7 8.7 0 00-.862.271c-.031.012-.062.023-.094.033a8.94 8.94 0 00-.87.39 9.016 9.016 0 00-1.815 1.229 8.362 8.362 0 00-.817.812 8.798 8.798 0 00-.534.66l-.035.043a.672.672 0 00-.039.048.147.147 0 00-.007.018 8.944 8.944 0 000 10.39.15.15 0 00.007.017.669.669 0 00.04.05.782.782 0 01.034.042 8.998 8.998 0 001.297 1.425l.053.048.062.057a9.018 9.018 0 001.747 1.171c.012.006.024.011.035.018.273.138.552.262.837.372l.037.013c.05.018.097.036.146.051.254.091.511.171.772.24l.036.01c.065.017.13.035.197.05.257.06.514.105.777.143l.096.015a8.457 8.457 0 002.182.022c.05-.006.097-.014.144-.022l.095-.015a8.815 8.815 0 00.975-.193l.036-.01c.263-.069.52-.149.772-.24l.09-.031c.031-.012.062-.023.094-.033a8.954 8.954 0 00.87-.39 9.017 9.017 0 001.747-1.172c.022-.018.042-.037.063-.056l.053-.048a8.187 8.187 0 00.764-.764 9.02 9.02 0 00.533-.661.694.694 0 01.035-.042c.013-.017.027-.032.039-.05a.168.168 0 00.007-.017 8.944 8.944 0 000-10.39zm-.733 1.217a7.65 7.65 0 011.084 3.335h-3.852a11.99 11.99 0 00-.36-2.27 11.557 11.557 0 003.128-1.065zm-4.91-3.547a1.17 1.17 0 00-.213-.041c-.037-.005-.073-.01-.11-.017a16.352 16.352 0 011.732 3.435c.95-.17 1.872-.466 2.742-.881l-.022-.024a7.984 7.984 0 00-.51-.533l-.083-.076-.041-.037a5.863 5.863 0 00-.493-.413c-.035-.029-.071-.055-.107-.08l-.027-.02a7.494 7.494 0 00-.54-.364l-.129-.077a8.312 8.312 0 00-.6-.316l-.055-.027a8.65 8.65 0 00-.708-.284l-.038-.015-.063-.023a6.913 6.913 0 00-.682-.193l-.053-.014zm-4.239 6.882c.05-.696.17-1.385.354-2.058a18.428 18.428 0 004.393-.003c.184.674.302 1.364.351 2.061H9.454zm4.745 3.344c.184-.673.303-1.362.354-2.058H9.454c.05.696.168 1.385.352 2.058.73-.087 1.463-.13 2.197-.129.734 0 1.467.042 2.196.129zm-2.196-9.998a15.526 15.526 0 011.793 3.344 17.022 17.022 0 01-3.583-.001 15.656 15.656 0 011.79-3.343zm-5.308 1.71a7.786 7.786 0 00-.473.493l-.03.033-.03.032c.871.415 1.794.712 2.743.881a16.353 16.353 0 011.732-3.435 3.37 3.37 0 01-.11.017 2.307 2.307 0 00-.159.027c-.02.004-.04.01-.059.015a8.537 8.537 0 00-.796.23l-.034.013a7.28 7.28 0 00-.709.284c-.018.01-.037.018-.056.027a7.684 7.684 0 00-.599.316l-.128.078a7.773 7.773 0 00-.618.42l-.057.043a7.97 7.97 0 00-.493.414l-.04.037a3.42 3.42 0 00-.084.075zM5.404 8.022c.986.503 2.039.862 3.127 1.066a11.998 11.998 0 00-.36 2.269H4.32a7.652 7.652 0 011.085-3.335zm-1.085 4.621a7.65 7.65 0 001.085 3.335c.986-.503 2.04-.862 3.127-1.066a11.999 11.999 0 01-.36-2.269H4.32zm6.048 6.896l-.053-.014a6.906 6.906 0 01-.735-.207l-.063-.023-.038-.015a8.636 8.636 0 01-.708-.284l-.056-.027a8.292 8.292 0 01-.6-.316l-.128-.077a7.499 7.499 0 01-.54-.364l-.027-.02a5.86 5.86 0 01-.6-.494l-.042-.036a7.973 7.973 0 01-.556-.568l-.036-.04-.023-.025c.87-.415 1.793-.711 2.743-.88a16.352 16.352 0 001.731 3.434l-.109-.017a2.276 2.276 0 01-.16-.027zm-.156-3.586a15.536 15.536 0 001.792 3.344 15.656 15.656 0 001.79-3.343h.001a16.754 16.754 0 00-3.583 0zm7.574 1.141a7.813 7.813 0 01-.474.493c-.027.026-.055.05-.083.075l-.04.037a7.69 7.69 0 01-1.168.877l-.129.078a7.874 7.874 0 01-.599.316l-.056.027c-.018.01-.037.018-.055.027a7.282 7.282 0 01-.653.257l-.035.014a8.549 8.549 0 01-.748.217l-.048.012-.059.015c-.052.011-.106.02-.16.027-.036.006-.072.01-.109.018a16.355 16.355 0 001.731-3.436c.95.17 1.872.466 2.743.881a.98.98 0 01-.03.033l-.028.032zm-2.309-2.182c1.088.204 2.14.563 3.127 1.066a7.652 7.652 0 001.084-3.335h-3.852a11.997 11.997 0 01-.359 2.27z"
        fill="#2DD4BF"
      />
    </Svg>
      </Box>
  );
};

export const IC_ThemeSettings = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M7.876 18.647h0l-.006-.005a7.587 7.587 0 01-3.108-5.817h0l-.001-.012c-.157-2.757 1.387-5.476 3.848-6.926 1.415-.815 2.979-1.217 4.618-1.124l.021.001h.022c.036 0 .112.02.192.078a.372.372 0 01.076.071l.004.006.006.024.018.044c.065.166.04.287-.088.412-1.622 1.581-2.225 3.777-1.835 5.924l.002.015.004.015c.71 3.179 3.748 5.325 7.052 5.059.256.006.41.098.496.243l.018.032.022.03s.005.006.008.021a.244.244 0 01.003.08.459.459 0 01-.088.222h0l-.004.006a8.191 8.191 0 01-4.749 3.046c-.547.083-1.119.158-1.678.158a8.193 8.193 0 01-4.853-1.603z"
        stroke="#F2C724"
        strokeWidth={1.5}
      />
    </Svg>
      </Box>
  );
};

export const IC_UserPreferencesSettings = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M3.5 6.5h17"
        stroke="#FA8C64"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Rect x={15} y={4} width={3} height={5} rx={1.5} fill="#FA8C64" />
      <Rect x={15} y={16} width={3} height={5} rx={1.5} fill="#FA8C64" />
      <Rect x={5.5} y={10} width={3} height={5} rx={1.5} fill="#FA8C64" />
      <Path
        d="M3.5 12.5h17M3.5 18.5h17"
        stroke="#FA8C64"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
      </Box>
  );
};

export const IC_NotificationSettings = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M10.586 3.586A2 2 0 0114 5a7 7 0 014 6v3a4 4 0 002 3H4a4 4 0 002-3v-3a7 7 0 014-6 2 2 0 01.586-1.414zM9 17v1a3 3 0 006 0v-1"
        stroke="#F2C724"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};

export const IC_Envelope = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-name="Flat Line"
      className="icon flat-line"
    >
      <Rect
        x={3}
        y={5}
        width={18}
        height={14}
        rx={1}
        fill="none"
        stroke="#4f46e5"
        strokeWidth={2}
      />
      <Path
        d="M7 9l4.38 3.49a1 1 0 001.24 0L17 9"
        fill="none"
        stroke="#4f46e5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <Rect
        data-name="primary"
        x={3}
        y={5}
        width={18}
        height={14}
        rx={1}
        fill="none"
        stroke="#4f46e5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </Svg>
      </Box>
  );
};

export const IC_ProfileSettings = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 7a5 5 0 1010 0A5 5 0 007 7zM4 19.333V22h16v-2.667A5.333 5.333 0 0014.667 14H9.333A5.333 5.333 0 004 19.333z"
          fill="#66F"
        />
      </G>
    </Svg>
      </Box>
  );
};

export const IC_ChevronRight = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6 10"
      fill="none"
    >
      <Path
        d="M1 9l4-4-4-4"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};

export const IC_IDCard = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
    >
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={20}
        height={20}
      >
        <Path fill="#fff" d="M0 0H20V20H0z" />
      </Mask>
      <G mask="url(#a)" stroke="#fff" strokeWidth={1.5}>
        <Path d="M9.5 9.5h5" strokeLinecap="square" />
        <Rect x={2} y={4} width={16} height={12} rx={2} />
        <Path d="M9.5 12.5h5" strokeLinecap="square" />
      </G>
    </Svg>
      </Box>
  );
};

export const IC_CreditCard = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
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
      <G mask="url(#a)" stroke="#2DD4BF" strokeWidth={1.5}>
        <Path
          clipRule="evenodd"
          d="M19 5a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h14z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M3.5 9.5h17" strokeLinecap="square" />
        <Path d="M14.5 13.5h3M16.5 15.5h1" strokeLinecap="round" />
      </G>
    </Svg>
      </Box>
  );
};

export const IC_AddCard = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      viewBox="0 0 40 40"
      fill="none"
    >
      <Rect width={40} height={40} rx={20} fill="#fff" />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={40}
        height={40}
      >
        <Rect width={40} height={40} rx={20} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Rect x={10} y={12.5} width={20} height={15} rx={4} fill="#4A3EF6" />
        <Rect
          x={12.5}
          y={20.8333}
          width={4.16667}
          height={4.16667}
          rx={1.33333}
          fill="#fff"
        />
        <Path
          fill="#fff"
          fillOpacity={0.596185}
          d="M10 15.8333H30V19.166629999999998H10z"
        />
        <Rect
          x={23.3333}
          y={21.6667}
          width={4.16667}
          height={0.833332}
          rx={0.416666}
          fill="#fff"
        />
        <Rect
          x={25}
          y={23.3333}
          width={2.5}
          height={0.833334}
          rx={0.416667}
          fill="#fff"
        />
      </G>
    </Svg>
      </Box>
  );
};

export const IC_CardAdded = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={208}
      height={200}
      viewBox="0 0 208 200"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M172.778 67c0-6.627-5.372-12-12-12H52.948c-6.628 0-12 5.373-12 12v46.247a234.392 234.392 0 0010.254-5.047s19.472-18.275 26.487-12.466c7.015 5.808 4.585 15.51-12.523 28.713-3.946 3.433-5.985 5.859-8.104 8.38-1.89 2.249-3.844 4.573-7.27 7.754 1.005.273 2.063.419 3.156.419h107.83c6.628 0 12-5.373 12-12V67z"
        fill="#4A3EF6"
      />
      <Path
        fill="#D8D8D8"
        fillOpacity={0.801344}
        d="M40.9478 71H172.7778V87H40.9478z"
      />
      <Rect
        x={75.9028}
        y={106}
        width={63.9178}
        height={2}
        rx={1}
        fill="#fff"
        fillOpacity={0.304058}
      />
      <Rect
        x={75.9028}
        y={114}
        width={63.9178}
        height={2}
        rx={1}
        fill="#fff"
        fillOpacity={0.304058}
      />
      <Rect
        x={75.9028}
        y={122}
        width={31.9589}
        height={2}
        rx={1}
        fill="#fff"
        fillOpacity={0.304058}
      />
      <Path
        d="M41.301 100l-10.82 2.86c-4.614 1.399-4.384 7.934-3.668 12.304.366 2.234 2.663 3.408 4.758 2.554 4.056-1.654 11.109-4.767 20.202-9.718 0 0 19.15-18.613 26.266-12.928 7.115 5.686 4.855 15.428-12.02 28.928-8.877 8-7.899 10.574-20.502 21.254-12.603 10.68-24.932 5.642-28.132 3.668"
        stroke="#ADB8CC"
        strokeWidth={1.5}
      />
      <Path
        clipRule="evenodd"
        d="M76.037 99.233c4.501 4.054-1.118 10.766-3.522 8.313l-4.333-3.929s-2.372-1.803-1.381-2.842c.99-1.04 5.394-5.003 9.236-1.542z"
        stroke="#ADB8CC"
        strokeWidth={1.5}
      />
      <Path
        d="M51.933 34.5v4M53.93 36.5h-3.994M163.79 158.5v4M165.787 160.5h-3.995"
        stroke="#4A3EF6"
        strokeWidth={1.5}
        strokeLinecap="square"
      />
      <Path
        d="M187.448 89.628a1.937 1.937 0 01-1.935-1.939c0-1.072.867-1.939 1.935-1.939s1.936.867 1.936 1.939a1.94 1.94 0 01-1.936 1.94z"
        stroke="#69DB7C"
        strokeWidth={1.5}
      />
      <Path
        d="M23.97 73.5v4M25.967 75.5h-3.995"
        stroke="#DB7F69"
        strokeWidth={1.5}
        strokeLinecap="square"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M182.864 131.047c-1.135 3.06-2.851 5.72-5.102 7.906-2.562 2.489-5.916 4.466-9.97 5.877a3.167 3.167 0 01-.412.112 3.171 3.171 0 01-.557.058h-.037a3.138 3.138 0 01-1.003-.169c-4.059-1.408-7.418-3.385-9.982-5.873-2.252-2.187-3.968-4.845-5.101-7.905-2.06-5.563-1.943-11.691-1.849-16.615l.002-.076c.019-.406.031-.833.038-1.305.034-2.316 1.885-4.232 4.213-4.361 4.855-.269 8.61-1.844 11.819-4.955l.028-.026a2.71 2.71 0 013.671 0l.028.026c3.209 3.111 6.964 4.686 11.818 4.955 2.329.129 4.18 2.045 4.214 4.361.007.475.019.901.038 1.305l.001.032c.094 4.934.211 11.074-1.857 16.653z"
        fill="#69DB7C"
      />
      <Path
        d="M159.992 124.4l4.9 5.2 10.5-11.2"
        stroke="#fff"
        strokeWidth={2.8}
        strokeLinecap="round"
      />
      <Path
        d="M173.278 38.5l.998-3M176.908 42.024l2.825-1.414"
        stroke="#ADB8CC"
        strokeWidth={1.5}
        strokeLinecap="square"
      />
      <Path
        d="M44.778 85.162S37.208 82.58 10.82 93"
        stroke="#ADB8CC"
        strokeWidth={1.5}
      />
      <Path
        d="M168.198 38.828L166.786 36"
        stroke="#ADB8CC"
        strokeWidth={1.5}
        strokeLinecap="square"
      />
    </Svg>
      </Box>
  );
};

export const IC_Market = ({ className, color='#ffffff' }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={21}
      height={26}
      viewBox="0 0 21 26"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 13.828s2.67-2.952 5.29-4.186 6.316-1.013 6.316-1.013v2.433l6.605-4.717a1 1 0 000-1.628L11.606 0v2.766s-4.93 0-8.114 2.765C.306 8.297 0 13.828 0 13.828zM21 12.168s-2.67 2.953-5.29 4.187c-2.62 1.234-6.316 1.013-6.316 1.013v-2.434l-6.605 4.717a1 1 0 000 1.628l6.605 4.717v-2.765s4.93 0 8.114-2.766C20.694 17.7 21 12.17 21 12.17z"
        fill={color}
      />
    </Svg>
      </Box>
  );
};

export const IC_Home = ({ className, color='#B0B9C1' }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 23 23"
      fill="none"
    >
      <Path
        d="M16.187.5h3.894C21.413.5 22.5 1.59 22.5 2.944v3.927a2.431 2.431 0 01-2.42 2.444h-3.893a2.431 2.431 0 01-2.42-2.444V2.944A2.431 2.431 0 0116.188.5z"
        stroke={color}
      />
      <Path
        d="M6.813 13.185c1.613 0 2.92 1.318 2.92 2.944v3.927c0 1.625-1.307 2.944-2.92 2.944H2.92C1.307 23 0 21.681 0 20.056v-3.927c0-1.626 1.307-2.944 2.92-2.944h3.893zm13.268 0c1.612 0 2.919 1.318 2.919 2.944v3.927C23 21.681 21.693 23 20.08 23h-3.893c-1.613 0-2.92-1.319-2.92-2.944v-3.927c0-1.626 1.307-2.944 2.92-2.944h3.894zM6.813 0c1.613 0 2.92 1.318 2.92 2.944v3.927c0 1.626-1.307 2.944-2.92 2.944H2.92C1.307 9.815 0 8.497 0 6.87V2.944C0 1.318 1.307 0 2.92 0h3.893z"
        fill={color}
      />
    </Svg>
      </Box>
  );
};

export const IC_Invest = ({ className, color='#B0B9C1' }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 29 28"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 20.993c4.32 0 6.752 1.56 7.971 2.732.54.52.135 1.275-.615 1.275H7.144c-.75 0-1.155-.755-.615-1.275 1.219-1.173 3.651-2.732 7.971-2.732z"
        fill={color}
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M15.5 10.984s0-9.019 9-7.997c0 0-.023 4.558-2.613 6.61-2.59 2.052-6.387 1.387-6.387 1.387zM13.815 15.402s-.901-6.413-8.71-4.558c0 0 .343 3.447 2.688 4.585 2.346 1.138 6.022-.027 6.022-.027z"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="B0B9C1"
        clipRule="B0B9C1"
        d="M14.5 20.993s-.27-4.885 0-7.183 1.16-2.663 1.16-2.663"
        fill={color}
      />
      <Path
        d="M14.5 20.993s-.27-4.885 0-7.183 1.16-2.663 1.16-2.663"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};

export const IC_Profile = ({ className, color='#B0B9C1' }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 29 28"
      fill="none"
    >
      <Circle
        cx={14.5}
        cy={8}
        r={5}
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 22.143c0-1.363.588-2.67 1.799-3.296C7.935 18.001 10.679 17 14.5 17c3.822 0 6.565 1.002 8.201 1.847 1.21.626 1.799 1.933 1.799 3.296A2.857 2.857 0 0121.643 25H7.357A2.857 2.857 0 014.5 22.143z"
        fill={color}
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};

export const IC_Phone = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M19.519 15.578L17.542 13.6a1.634 1.634 0 00-1.163-.481c-.439 0-.852.17-1.163.481l-.69.69c-.38.38-.977.518-1.683.389-.786-.144-1.588-.593-2.259-1.264-.671-.67-1.12-1.473-1.263-2.259-.13-.706.009-1.303.389-1.683l.689-.69c.31-.31.482-.723.482-1.163 0-.44-.171-.852-.482-1.163L8.422 4.482A1.634 1.634 0 007.26 4c-.439 0-.852.171-1.163.482l-.69.69c-.64.64-1.07 1.463-1.273 2.443-.189.906-.176 1.905.037 2.968.423 2.108 1.625 4.276 3.298 5.95 1.673 1.672 3.841 2.875 5.95 3.297a8.32 8.32 0 001.633.17c.463 0 .91-.044 1.335-.133.98-.204 1.802-.633 2.444-1.274l.689-.689a1.647 1.647 0 000-2.326z"
        stroke="#38BDF8"
        strokeWidth={1.5}
      />
    </Svg>
      </Box>
  );
};

export const IC_Passport = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
    >
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={20}
        height={20}
      >
        <Path fill="#fff" d="M0 0H20V20H0z" />
      </Mask>
      <G mask="url(#a)" stroke="#fff">
        <Rect x={3} y={1} width={14} height={18} rx={2} strokeWidth={1.5} />
        <Path
          clipRule="evenodd"
          d="M10 14a4 4 0 110-8 4 4 0 010 8z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8.685 6.4h.4a11.37 11.37 0 000 7.2h-.4M11 6.4a11.37 11.37 0 010 7.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M6.4 11.4V11c2.336.78 4.864.78 7.2 0v.4M6.4 9.085a11.37 11.37 0 017.2 0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
      </Box>
  );
};

export const IC_Security = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        clipRule="evenodd"
        d="M4 5.133S8.748 4 11.933 4c3.186 0 7.934 1.133 7.934 1.133v7.934C17.509 17.782 11.933 21 11.933 21S6.358 17.782 4 13.067V5.133z"
        stroke="#2DD4BF"
        strokeWidth={1.5}
      />
      <Path
        d="M8.987 11.058l2.513 3.145 4.487-5.207"
        stroke="#2DD4BF"
        strokeWidth={1.5}
      />
    </Svg>
      </Box>
  );
};

export const IC_NotificationsInactive = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
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
        stroke="#969AA0"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M10.586 3.586A2 2 0 0114 5a7 7 0 014 6v3a4 4 0 002 3H4a4 4 0 002-3v-3a7 7 0 014-6 2 2 0 01.586-1.414zM9 17v1a3 3 0 006 0v-1" />
      </G>
    </Svg>
      </Box>
  );
};

export const IC_Fingerprint = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
    >
      <Path
        d="M15.408 27.026a.5.5 0 00-.633.316l-.445 1.333a.5.5 0 00.95.316l.444-1.333a.5.5 0 00-.316-.632zM9.69 23.762a.49.49 0 00-.565.313c-.008.024-.024.043-.03.068l-.016.07c-.184.741-.787 2.253-.793 2.268a.5.5 0 00.928.372c.025-.062.58-1.454.803-2.282l.032-.117.023-.097a.5.5 0 00-.381-.595zM3.772 17.976v-.002a15.154 15.154 0 01-.105-1.889c0-.668.059-1.332.163-1.988.075-.466.168-.927.295-1.379a.499.499 0 00-.347-.616.492.492 0 00-.578.273c-.012.025-.03.046-.038.074a13.404 13.404 0 00-.38 1.886v.002a13.515 13.515 0 00-.115 1.748c0 1.948.245 3.348.796 4.542a.501.501 0 00.908-.42c-.295-.64-.49-1.362-.599-2.23zM8.363 19.587c-.032-.022-.062-.051-.093-.074.032.022.06.05.093.072-.042-.452-.102-.878-.162-1.3C8.097 17.567 8 16.887 8 16.083c0-.25.015-.496.037-.74a8.09 8.09 0 011.337-3.784 8.039 8.039 0 014.098-3.139 7.884 7.884 0 014.566-.155.5.5 0 10.256-.967 8.865 8.865 0 00-6.369.698h-.003l-.015.009-.02.008.003.001a9.223 9.223 0 00-3.369 3.024 9.085 9.085 0 00-1.39 3.564A9.11 9.11 0 007 16.082c0 .876.107 1.623.21 2.345l.037.26c.158 1.128.279 2.327-.022 4.002-.125.698-.32 1.485-.618 2.408a.5.5 0 10.952.306c.24-.742.415-1.405.545-2.01v-.001c.343-1.6.353-2.775.259-3.805z"
        fill="#4A3EF6"
      />
      <Path
        d="M6.057 18.807a30.52 30.52 0 01-.168-1.482 14.233 14.233 0 01-.056-1.242 10.27 10.27 0 01.319-2.529 10.346 10.346 0 011.433-3.216l-.02-.019.02.019a10.212 10.212 0 012.51-2.6.491.491 0 00.2-.367.502.502 0 00-.087-.33.501.501 0 00-.698-.114l-.035.027a11.194 11.194 0 00-2.618 2.685l-.001-.001a11.601 11.601 0 00-1.473 2.977l-.036.114a11.466 11.466 0 00-.508 3.148l-.006.292c.006 1.084.12 1.941.232 2.77.07.524.136 1.023.169 1.542.05.827.019 1.768-.223 2.915a.5.5 0 00.978.207c.148-.701.22-1.312.25-1.874v-.001c.059-1.094-.057-1.993-.182-2.92zM27.195 19.917c-.006 0-.011.004-.017.004a.498.498 0 00-.463.514l.004.138c.019.558.031 1.143.031 1.76a.5.5 0 001 0c0-.68-.013-1.325-.036-1.935a.491.491 0 00-.519-.48zM18.916 23.195a.5.5 0 00-.47-.527.493.493 0 00-.528.469c-.002.017-.078 1.182-.455 2.779l.01-.002-.01.002c-.195.827-.469 1.767-.858 2.73a.5.5 0 00.927.375c.444-1.099.779-2.332.992-3.268h.004c.012-.055.02-.104.032-.157l.012-.053h-.002c.279-1.343.342-2.281.346-2.348zM23.424 19.665a28.19 28.19 0 00-.361-3.704 11.452 11.452 0 00-.449-1.789.5.5 0 10-.945.323c.135.396.25.824.341 1.272.045.218.087.466.128.729.158 1.024.278 2.366.298 3.847a28.596 28.596 0 01-.23 4.12h-.002a18.752 18.752 0 01-.599 2.894.5.5 0 00.957.286c.347-1.157.586-2.56.724-3.818a31.762 31.762 0 00.14-4.163c0 .001 0 .003-.002.003z"
        fill="#4A3EF6"
      />
      <Path
        d="M21.167 19.32a28.495 28.495 0 00-.18-2.434c-.15-1.217-.347-1.943-.426-2.197a4.616 4.616 0 00-1.072-1.833h.001A4.803 4.803 0 0016 11.333a4.58 4.58 0 00-1.493.249l-.095.033a.5.5 0 10.342.94l.075-.027c.376-.129.77-.195 1.171-.195.835 0 1.637.296 2.287.79a3.718 3.718 0 011.322 1.87c.058.183.28.965.428 2.38h.002c.06.56.108 1.21.13 1.974.018.673.01 1.332-.016 1.984a26.267 26.267 0 01-.476 4.144l.016-.006c-.006.002-.01.005-.016.006a22.398 22.398 0 01-.788 2.945.5.5 0 00.946.327c.383-1.113.702-2.417.924-3.637l.003-.001.023-.15c.214-1.268.343-2.64.378-3.998h.002v-.034l.001-.034h-.001c.011-.518.016-1.042.002-1.574z"
        fill="#4A3EF6"
      />
      <Path
        d="M16.87 21.695a30.306 30.306 0 00-.08-4.007 18.82 18.82 0 00-.217-1.618.5.5 0 00-.98.193c.003.015.114.608.204 1.582a26.634 26.634 0 01.05 4.147c-.066.994-.193 2.06-.42 3.157a.5.5 0 10.979.202c.227-1.095.37-2.368.445-3.394.002 0 .019-.262.018-.262zM12.08 25.166c.348-1.25.515-2.412.57-3.475.002-.017.008-.168.009-.186.057-1.494-.082-2.862-.2-3.91l-.01-.088c-.062-.558-.115-1.045-.115-1.424 0-.868.28-1.682.814-2.356a.5.5 0 00-.082-.703c-.031-.024-.067-.035-.102-.051a.723.723 0 00-.178-.046.494.494 0 00-.422.179 4.819 4.819 0 00-1.03 2.977c0 .317.034.69.075 1.088.018.175.034.344.056.536.11.98.246 2.178.203 3.559l.005.002c-.001 0-.003 0-.004-.002a15.274 15.274 0 01-.592 3.783c-.222.77-.515 1.572-.907 2.405a.5.5 0 10.905.425c.37-.785.706-1.722.94-2.486l.006.002.03-.114c.01-.037.025-.078.035-.114l-.006-.001z"
        fill="#4A3EF6"
      />
      <Path
        d="M14.77 21.75a1.02 1.02 0 00.004-.055c.083-1.389-.003-2.765-.097-3.762h.002l-.026-.245-.058-.53c-.053-.466-.095-.833-.095-1.075 0-.874.673-1.584 1.5-1.584.677 0 1.09.296 1.47 1.057.103.207.29 1.125.43 2.292.009-.001.009 0 0 .002.101.84.179 1.807.183 2.735a.5.5 0 00.5.498h.002a.5.5 0 00.498-.502 28.592 28.592 0 00-.197-2.904l.002-.001c-.005-.038-.017-.14-.02-.154-.144-1.136-.337-2.081-.504-2.415-.345-.688-.966-1.607-2.364-1.607-1.379 0-2.5 1.159-2.5 2.583 0 .299.045.691.1 1.188.019.159.038.332.057.51l.006.001h-.006c.112 1.04.223 2.405.108 4.016a18.271 18.271 0 01-.696 3.868c-.24.817-.548 1.667-.947 2.543a.5.5 0 00.91.414 22.404 22.404 0 001.073-2.957c.35-1.27.554-2.627.648-3.729.002 0 .014-.124.018-.186zM29.212 14.372a14.55 14.55 0 00-.41-2.007l-.02-.083a.013.013 0 00-.002.005 14.005 14.005 0 00-.73-1.942l.001-.003-.01-.02-.01-.024-.001.003a13.475 13.475 0 00-1.39-2.29 13.39 13.39 0 00-2.232-2.335 13.219 13.219 0 00-5.983-2.787.5.5 0 00-.182.983 12.21 12.21 0 015.337 2.424c.92.722 1.73 1.566 2.41 2.513.59.822 1.08 1.718 1.457 2.67.008-.015.008-.014 0 0 .33.836.576 1.711.722 2.619v.001c.104.649.164 1.311.164 1.986v.081c0 .239.172.43.396.479.034.008.067.022.104.022a.5.5 0 00.5-.5v-.082c0-.58-.05-1.15-.121-1.713z"
        fill="#4A3EF6"
      />
      <Path
        d="M27.051 18.417a.5.5 0 00.498-.546 43.302 43.302 0 00-.258-2.135v-.001l-.021-.141v.001c-.205-1.332-.414-2.18-.495-2.475-.04-.15-.118-.37-.164-.517l-.002.003a11.167 11.167 0 00-1.443-2.94 11.248 11.248 0 00-2.653-2.705A11.091 11.091 0 0016 4.833c-1.417 0-2.8.264-4.107.786a.5.5 0 00.37.929 10.086 10.086 0 019.239.92 10.25 10.25 0 014.366 6.142l.01-.011-.01.01c.115.46.35 1.519.55 3.11.009.072.102.882.136 1.244a.5.5 0 00.497.454z"
        fill="#4A3EF6"
      />
      <Path
        d="M25.388 18.131l-.015-.186v.001a28.738 28.738 0 00-.508-3.526s-.112-.478-.154-.628a9.075 9.075 0 00-1.233-2.753l-.001.001a9.021 9.021 0 00-2.71-2.663.5.5 0 10-.535.846 8.014 8.014 0 012.39 2.34v-.001c.508.76.897 1.608 1.134 2.531.067.242.166.648.27 1.202.162.859.332 2.092.416 3.689h-.001c.058 1.108.07 2.395.007 3.853l-.005.004c-.038.825-.098 1.699-.19 2.634a.5.5 0 10.994.1c.127-1.278.197-2.451.226-3.532l.004-.004a42.29 42.29 0 00-.092-3.905l.003-.003zM4.994 10.475c.297-.589.64-1.142 1.015-1.666-.011-.012-.02-.028-.032-.04l.033.04a12.306 12.306 0 012.408-2.515A12.244 12.244 0 0115.84 3.67a.5.5 0 00-.007-1h-.006a13.219 13.219 0 00-8.236 3.007 13.415 13.415 0 00-2.204 2.305c-.004.004-.006.01-.01.013l-.015.02h.001c-.47.632-.92 1.334-1.284 2.055l-.02.041c-.124.247-.003.505.244.629.062.031.129.045.196.045a.573.573 0 00.494-.31z"
        fill="#4A3EF6"
      />
      <Path
        d="M16 9.167c-2.302 0-4.338 1.161-5.577 2.932a6.927 6.927 0 00-1.257 3.984l.001.018c.002.634.053 1.097.115 1.63.07.606.151 1.326.192 2.556l.014.007-.014-.007c.014.444.024.95.026 1.548a.5.5 0 00.5.498H10a.5.5 0 00.499-.5c0-.357-.007-.73-.013-1.037v-.027l-.001-.044a30.093 30.093 0 00-.21-3.108 16.41 16.41 0 01-.091-.966 9.224 9.224 0 01-.019-.568c0-1.35.454-2.594 1.208-3.59 1.068-1.412 2.741-2.326 4.626-2.326 1.783 0 3.445.811 4.56 2.226.028.036.065.06.101.086.177.13.42.138.6-.003a.494.494 0 00.18-.312.493.493 0 00-.096-.39A6.772 6.772 0 0016 9.167z"
        fill="#4A3EF6"
      />
    </Svg>
      </Box>
  );
};

export const IC_FaceID = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
     <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
    >
      <Path
        d="M27.064 1.9h-3.387a.765.765 0 00-.777.777c0 .44.338.778.777.778h3.387c.826 0 1.481.655 1.481 1.48v3.388c0 .439.338.777.778.777.439 0 .777-.338.777-.777V4.935A3.03 3.03 0 0027.064 1.9zM8.323 1.9H4.935A3.03 3.03 0 001.9 4.935v3.388c0 .439.338.777.777.777.44 0 .778-.338.778-.777V4.935c0-.825.655-1.48 1.48-1.48h3.388c.439 0 .777-.338.777-.778a.765.765 0 00-.777-.777zM2.677 22.9a.765.765 0 00-.777.777v3.387A3.03 3.03 0 004.935 30.1h3.388c.439 0 .777-.338.777-.777a.765.765 0 00-.777-.778H4.935c-.825 0-1.48-.655-1.48-1.48v-3.388a.765.765 0 00-.778-.777zM29.323 22.9a.765.765 0 00-.778.777v3.387c0 .826-.655 1.481-1.48 1.481h-3.388a.765.765 0 00-.777.778c0 .439.338.777.777.777h3.387a3.03 3.03 0 003.036-3.036v-3.387a.765.765 0 00-.777-.777zM14 19.35c.14 0 .255-.029.37-.086l2-1c.28-.14.48-.423.48-.764v-6.25c0-.48-.37-.85-.85-.85s-.85.37-.85.85v5.714l-1.52.771a.82.82 0 00-.372 1.13c.12.32.436.485.742.485zM9.75 10.4c-.48 0-.85.37-.85.85v2.5c0 .48.37.85.85.85s.85-.37.85-.85v-2.5c0-.48-.37-.85-.85-.85zM22.25 10.4c-.48 0-.85.37-.85.85v2.5c0 .48.37.85.85.85s.85-.37.85-.85v-2.5c0-.48-.37-.85-.85-.85zM9.932 22.874h0A8.983 8.983 0 0016 25.224a8.983 8.983 0 006.067-2.35h0c.34-.312.37-.85.057-1.192a.848.848 0 00-1.192-.056 7.285 7.285 0 01-9.865 0 .848.848 0 00-1.19.056.848.848 0 00.055 1.192z"
        fill="#4A3EF6"
        stroke="#4A3EF6"
        strokeWidth={0.2}
      />
    </Svg>
      </Box>
  );
};

export const IC_Swap = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13 12"
      fill="none"
    >
      <Path
        d="M3.417 8.252V1m0 0L1 3.417M3.417 1l2.418 2.417m3.626 0v7.253m0 0l2.418-2.418M9.46 10.67L7.044 8.252"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};

// V2 ICONS
export const IC_Activity_Active = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
        <Svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.508 15.5s2.414-2.669 4.782-3.784C11.658 10.6 15 10.8 15 10.8V13l5.86-4.186a1 1 0 000-1.628L15 3v2.5s-4.456 0-7.335 2.5c-2.88 2.5-3.157 7.5-3.157 7.5z"
        fill="url(#paint0_linear_0_5068)"
        stroke="url(#paint1_linear_0_5068)"
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.492 14s-2.414 2.669-4.782 3.784C16.342 18.9 13 18.7 13 18.7v-2.2l-5.86 4.186a1 1 0 000 1.628L13 26.5V24s4.456 0 7.335-2.5c2.88-2.5 3.157-7.5 3.157-7.5z"
        fill="url(#paint2_linear_0_5068)"
        stroke="url(#paint3_linear_0_5068)"
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_0_5068"
          x1={4.5083}
          y1={9.25}
          x2={22}
          y2={9.25}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_0_5068"
          x1={4.5083}
          y1={9.25}
          x2={22}
          y2={9.25}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_0_5068"
          x1={23.4917}
          y1={20.25}
          x2={6}
          y2={20.25}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_0_5068"
          x1={23.4917}
          y1={20.25}
          x2={6}
          y2={20.25}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
      </Defs>
    </Svg>
      </Box>
  );
};

export const IC_Home_Active = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
        <Svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 12.543a3 3 0 011.096-2.318l7.5-6.16a3 3 0 013.808 0l7.5 6.16a3 3 0 011.096 2.318V23.5a2 2 0 01-2 2h-4.16a1 1 0 01-1-1v-3.708a2 2 0 00-2-2h-2.68a2 2 0 00-2 2V24.5a1 1 0 01-1 1H5.5a2 2 0 01-2-2V12.543z"
        fill="url(#paint0_linear_0_5083)"
        stroke="url(#paint1_linear_0_5083)"
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_0_5083"
          x1={3.5}
          y1={14}
          x2={24.5}
          y2={14}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_0_5083"
          x1={3.5}
          y1={14}
          x2={24.5}
          y2={14}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
      </Defs>
    </Svg>
      </Box>
  );
};

export const IC_Invest_Active = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
        <Svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 20.993c4.32 0 6.752 1.56 7.971 2.732.54.52.135 1.275-.615 1.275H6.644c-.75 0-1.155-.755-.615-1.275C7.248 22.552 9.68 20.993 14 20.993z"
        fill="url(#paint0_linear_0_5073)"
        stroke="url(#paint1_linear_0_5073)"
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 10.984s0-9.019 9-7.997c0 0-.023 4.558-2.613 6.61C18.797 11.649 15 10.984 15 10.984z"
        fill="url(#paint2_linear_0_5073)"
        stroke="url(#paint3_linear_0_5073)"
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.315 15.401s-.901-6.412-8.71-4.557c0 0 .343 3.447 2.688 4.585 2.346 1.138 6.022-.028 6.022-.028z"
        fill="url(#paint4_linear_0_5073)"
        stroke="url(#paint5_linear_0_5073)"
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 20.993s-.27-4.885 0-7.183 1.16-2.663 1.16-2.663"
        fill="url(#paint6_linear_0_5073)"
      />
      <Path
        d="M14 20.993s-.27-4.885 0-7.183 1.16-2.663 1.16-2.663"
        stroke="url(#paint7_linear_0_5073)"
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_0_5073"
          x1={5}
          y1={22.9966}
          x2={23}
          y2={22.9966}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_0_5073"
          x1={5}
          y1={22.9966}
          x2={23}
          y2={22.9966}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_0_5073"
          x1={15}
          y1={7.01506}
          x2={24}
          y2={7.01506}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_0_5073"
          x1={15}
          y1={7.01506}
          x2={24}
          y2={7.01506}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear_0_5073"
          x1={12.9248}
          y1={12.6256}
          x2={5.0027}
          y2={13.739}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
        <LinearGradient
          id="paint5_linear_0_5073"
          x1={12.9248}
          y1={12.6256}
          x2={5.0027}
          y2={13.739}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
        <LinearGradient
          id="paint6_linear_0_5073"
          x1={13.8647}
          y1={16.0701}
          x2={15.1597}
          y2={16.0701}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
        <LinearGradient
          id="paint7_linear_0_5073"
          x1={13.8647}
          y1={16.0701}
          x2={15.1597}
          y2={16.0701}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
      </Defs>
    </Svg>
      </Box>
  );
};

export const IC_Profile_Active = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
        <Svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle
        cx={14}
        cy={8}
        r={5}
        fill="url(#paint0_linear_0_5079)"
        stroke="url(#paint1_linear_0_5079)"
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 22.143c0-1.363.588-2.67 1.799-3.296C7.435 18.001 10.179 17 14 17c3.822 0 6.565 1.002 8.201 1.847 1.21.626 1.799 1.933 1.799 3.296A2.857 2.857 0 0121.143 25H6.857A2.857 2.857 0 014 22.143z"
        fill="url(#paint2_linear_0_5079)"
        stroke="url(#paint3_linear_0_5079)"
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_0_5079"
          x1={9}
          y1={8}
          x2={19}
          y2={8}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_0_5079"
          x1={9}
          y1={8}
          x2={19}
          y2={8}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_0_5079"
          x1={4}
          y1={21}
          x2={24}
          y2={21}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_0_5079"
          x1={4}
          y1={21}
          x2={24}
          y2={21}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
      </Defs>
    </Svg>
      </Box>
  );
};

export const IC_Activity_Inactive = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
        <Svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        clipRule="evenodd"
        d="M4.508 15.5s2.414-2.669 4.782-3.784C11.658 10.6 15 10.8 15 10.8V13l5.86-4.186a1 1 0 000-1.628L15 3v2.5s-4.456 0-7.335 2.5c-2.88 2.5-3.157 7.5-3.157 7.5z"
        stroke="#B0B9C1"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.492 14s-2.414 2.669-4.782 3.784C16.342 18.9 13 18.7 13 18.7v-2.2l-5.86 4.186a1 1 0 000 1.628L13 26.5V24s4.456 0 7.335-2.5c2.88-2.5 3.157-7.5 3.157-7.5z"
        fill="#B0B9C1"
        stroke="#B0B9C1"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};

export const IC_Home_Inactive = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
        <Svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 12.543a3 3 0 011.096-2.318l7.5-6.16a3 3 0 013.808 0l7.5 6.16a3 3 0 011.096 2.318V23.5a2 2 0 01-2 2h-4.16a1 1 0 01-1-1v-3.708a2 2 0 00-2-2h-2.68a2 2 0 00-2 2V24.5a1 1 0 01-1 1H5.5a2 2 0 01-2-2V12.543z"
        fill="#B0B9C1"
        stroke="#B0B9C1"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};

export const IC_Invest_Inactive = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
        <Svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 20.993c4.32 0 6.752 1.56 7.971 2.732.54.52.135 1.275-.615 1.275H6.644c-.75 0-1.155-.755-.615-1.275C7.248 22.552 9.68 20.993 14 20.993z"
        fill="#B0B9C1"
        stroke="#B0B9C1"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M15 10.984s0-9.019 9-7.997c0 0-.023 4.558-2.613 6.61C18.797 11.649 15 10.984 15 10.984zM13.315 15.402s-.901-6.413-8.71-4.558c0 0 .343 3.447 2.688 4.585 2.346 1.138 6.022-.027 6.022-.027z"
        stroke="#B0B9C1"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 20.993s-.27-4.885 0-7.183 1.16-2.663 1.16-2.663"
        fill="#B0B9C1"
      />
      <Path
        d="M14 20.993s-.27-4.885 0-7.183 1.16-2.663 1.16-2.663"
        stroke="#B0B9C1"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};

export const IC_Profile_Inactive = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
        <Svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle
        cx={14}
        cy={8}
        r={5}
        stroke="#B0B9C1"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 22.143c0-1.363.588-2.67 1.799-3.296C7.435 18.001 10.179 17 14 17c3.822 0 6.565 1.002 8.201 1.847 1.21.626 1.799 1.933 1.799 3.296A2.857 2.857 0 0121.143 25H6.857A2.857 2.857 0 014 22.143z"
        fill="#B0B9C1"
        stroke="#B0B9C1"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};

export const IC_Arrow_Down = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M4 9l8 8 8-8"
        stroke="#363D4E"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};

export const IC_Back = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M15 4l-8 8 8 8"
        stroke="#363D4E"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};

export const IC_Cross = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M6 6l12 12M18 6L6 18"
        stroke="#363D4E"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};

export const IC_Options = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.2 12a2.4 2.4 0 11-4.802-.002A2.4 2.4 0 017.2 12zm7.2 0a2.4 2.4 0 11-4.802-.002A2.4 2.4 0 0114.4 12zm7.2 0a2.4 2.4 0 11-4.802-.002A2.4 2.4 0 0121.6 12z"
        fill="#363D4E"
      />
    </Svg>
      </Box>
  );
};

export const IC_Help = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle
        cx={12}
        cy={12}
        r={10}
        stroke="#363D4E"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 14.5v-.154c0-1.113.638-2.114 1.5-2.818.75-.612 1.5-1.442 1.5-2.31 0-1.735-1.246-2.968-3-2.968S9 7.483 9 9.218"
        stroke="#363D4E"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Circle cx={12} cy={17.5} r={1.25} fill="#363D4E" />
    </Svg>
      </Box>
  );
};

export const IC_Search = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.1 10.5a7.4 7.4 0 1114.8 0 7.4 7.4 0 01-14.8 0zM10.5.9a9.6 9.6 0 000 19.2 9.56 9.56 0 005.966-2.079l4.756 4.757a1.1 1.1 0 101.556-1.556l-4.756-4.756A9.56 9.56 0 0020.1 10.5 9.6 9.6 0 0010.5.9z"
        fill="#363D4E"
      />
    </Svg>
      </Box>
  );
};

export const IC_Arrow_Down_White = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M4 9l8 8 8-8"
        stroke="#F6F7F8"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};
export const IC_Back_White = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M15 4l-8 8 8 8"
        stroke="#F6F7F8"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};
export const IC_Bell_White = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.318 1.04a1.19 1.19 0 011.453.82l.328 1.198c3.4-.319 6.639 1.798 7.552 5.13l1.36 4.958c1.218.42 2.046 1.192 2.367 2.363.775 2.829-2.205 5.097-7.179 6.523l-.69.19-.357.09c-5.207 1.3-9.099.834-9.891-2.058-.321-1.17.001-2.245.841-3.203l-1.358-4.958c-.913-3.332.808-6.748 3.916-8.134L6.331 2.76c-.17-.619.207-1.255.84-1.42l1.147-.301zm3.36 14.505c-4.326 1.133-6.719 2.836-6.353 4.169.365 1.333 3.308 1.638 7.635.504 4.327-1.133 6.72-2.835 6.354-4.169-.366-1.333-3.308-1.638-7.635-.504zm.183.791l.602-.162c.347 1.501-.587 3.016-2.132 3.421-1.303.341-2.633-.214-3.299-1.277 1.251-.776 2.894-1.442 4.83-1.982z"
        fill="#F6F7F8"
      />
    </Svg>
      </Box>
  );
};
export const IC_Cross_White = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M6 6l12 12M18 6L6 18"
        stroke="#F6F7F8"
        strokeWidth={2.4}
        strokeLinecap="round"
      />
    </Svg>
      </Box>
  );
};

export const IC_Options_White = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.2 12a2.4 2.4 0 11-4.802-.002A2.4 2.4 0 017.2 12zm7.2 0a2.4 2.4 0 11-4.802-.002A2.4 2.4 0 0114.4 12zm7.2 0a2.4 2.4 0 11-4.802-.002A2.4 2.4 0 0121.6 12z"
        fill="#F6F7F8"
      />
    </Svg>
      </Box>
  );
};

export const IC_Search_White = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.1 10.5a7.4 7.4 0 1114.8 0 7.4 7.4 0 01-14.8 0zM10.5.9a9.6 9.6 0 000 19.2 9.56 9.56 0 005.966-2.079l4.756 4.757a1.1 1.1 0 101.556-1.556l-4.756-4.756A9.56 9.56 0 0020.1 10.5 9.6 9.6 0 0010.5.9z"
        fill="#F6F7F8"
      />
    </Svg>
      </Box>
  );
};
export const IC_Bell = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
     <Svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.931.866a.992.992 0 011.212.684l.273.998c2.834-.265 5.532 1.499 6.293 4.276l1.133 4.13c1.015.35 1.706.994 1.973 1.97.646 2.357-1.838 4.247-5.982 5.436l-.575.158-.298.076c-4.339 1.082-7.582.694-8.243-1.716-.267-.975.002-1.87.702-2.669l-1.132-4.131C1.526 7.3 2.96 4.454 5.55 3.299l-.274-.998a.965.965 0 01.7-1.184l.955-.25zm2.802 12.088c-3.606.944-5.6 2.363-5.296 3.474.305 1.11 2.757 1.365 6.363.42 3.606-.944 5.6-2.363 5.295-3.474-.304-1.11-2.757-1.365-6.362-.42zm.152.66l.5-.135c.29 1.25-.488 2.513-1.776 2.85-1.085.284-2.194-.178-2.749-1.064 1.043-.647 2.412-1.202 4.025-1.652z"
        fill="#363D4E"
      />
    </Svg>
      </Box>
  );
};

export const IC_Camera_Purple = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        clipRule="evenodd"
        d="M2 7.348a2 2 0 012-2h3l1.923-1.806A2 2 0 0110.292 3h3.416a2 2 0 011.37.542L17 5.348h3a2 2 0 012 2V19a2 2 0 01-2 2H4a2 2 0 01-2-2V7.348z"
        stroke="url(#paint0_linear_0_5233)"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={5.5} cy={8.5} r={1.5} fill="url(#paint1_linear_0_5233)" />
      <Circle
        cx={12}
        cy={13}
        r={4}
        stroke="url(#paint2_linear_0_5233)"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_0_5233"
          x1={2}
          y1={12}
          x2={22}
          y2={12}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_0_5233"
          x1={4}
          y1={8.5}
          x2={7}
          y2={8.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_0_5233"
          x1={8}
          y1={13}
          x2={16}
          y2={13}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
      </Defs>
    </Svg>
      </Box>
  );
};

export const IC_Direction_Purple = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.908 4.121c.375-.167.75-.161 1.126.016.376.177.652.454.829.829.177.375.183.75.016 1.126l-5.975 13.012c-.229.48-.578.766-1.047.86-.47.094-.897.005-1.283-.266-.386-.271-.578-.667-.578-1.189v-5.505H5.49c-.522 0-.918-.192-1.189-.578a1.598 1.598 0 01-.266-1.283c.094-.469.38-.818.86-1.048l13.012-5.974z"
        fill="url(#paint0_linear_0_5277)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_0_5277"
          x1={4}
          y1={12}
          x2={20}
          y2={12}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
      </Defs>
    </Svg>
      </Box>
  );
};

export const IC_Location_Purple = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        clipRule="evenodd"
        d="M12 22c5.333-3.546 8-7.546 8-12 0-4.017-3.582-8-8-8s-8 3.983-8 8c0 4.422 2.667 8.422 8 12z"
        stroke="url(#paint0_linear_0_5188)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        stroke="url(#paint1_linear_0_5188)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_0_5188"
          x1={4}
          y1={12}
          x2={20}
          y2={12}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_0_5188"
          x1={9.5}
          y1={10}
          x2={14.5}
          y2={10}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
      </Defs>
    </Svg>
      </Box>
  );
};
export const IC_Scan_Face_Purple = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        clipRule="evenodd"
        d="M7.453 8.48A4.566 4.566 0 0112 3.5v0a4.566 4.566 0 014.547 4.98l-.185 2.036A4.38 4.38 0 0112 14.5v0a4.38 4.38 0 01-4.362-3.984L7.453 8.48z"
        stroke="url(#paint0_linear_0_5213)"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 .6a.9.9 0 100 1.8V.6zm2 .9h.9a.9.9 0 00-.9-.9v.9zm-.9 2a.9.9 0 101.8 0h-1.8zm1.8 10a.9.9 0 10-1.8 0h1.8zm-.9 2v.9a.9.9 0 00.9-.9H21zm-2-.9a.9.9 0 100 1.8v-1.8zM5 16.4a.9.9 0 100-1.8v1.8zm-2-.9h-.9a.9.9 0 00.9.9v-.9zm.9-2a.9.9 0 10-1.8 0h1.8zm-1.8-10a.9.9 0 101.8 0H2.1zm.9-2V.6a.9.9 0 00-.9.9H3zm2 .9A.9.9 0 105 .6v1.8zm14 0h2V.6h-2v1.8zm1.1-.9v2h1.8v-2h-1.8zm0 12v2h1.8v-2h-1.8zm.9 1.1h-2v1.8h2v-1.8zm-16 0H3v1.8h2v-1.8zm-1.1.9v-2H2.1v2h1.8zm0-12v-2H2.1v2h1.8zM3 2.4h2V.6H3v1.8z"
        fill="url(#paint1_linear_0_5213)"
      />
      <Path
        d="M3 22.5v0c0-1.2.751-2.273 1.88-2.683L8.5 18.5s1.75 1 3.5 1 3.5-1 3.5-1l3.62 1.317A2.856 2.856 0 0121 22.5v0"
        stroke="url(#paint2_linear_0_5213)"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_0_5213"
          x1={7}
          y1={9}
          x2={17}
          y2={9}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_0_5213"
          x1={3}
          y1={8.5}
          x2={21}
          y2={8.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_0_5213"
          x1={3}
          y1={20.5}
          x2={21}
          y2={20.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
      </Defs>
    </Svg>
      </Box>
  );
};

export const IC_Lamp_Purple = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 21.5a2 2 0 01-2 2h-2a2 2 0 01-2-2h6zm-3-16a6.5 6.5 0 013.001 12.267L15 20.5H9v-2.732A6.5 6.5 0 0112 5.5zM3 11a1 1 0 01.117 1.993L3 13H2a1 1 0 01-.117-1.993L2 11h1zm19 0a1 1 0 01.117 1.993L22 13h-1a1 1 0 01-.117-1.993L21 11h1zm-1.87-6.834a1 1 0 01.147 1.314l-.079.098-.672.74a1 1 0 01-1.559-1.247l.079-.098.672-.74a1 1 0 011.413-.067zm-16.259 0a1 1 0 011.413.067l.672.74.079.098a1 1 0 01-1.559 1.247l-.672-.74-.079-.098a1 1 0 01.146-1.314zM12 1a1 1 0 01.993.883L13 2v1a1 1 0 01-1.993.117L11 3V2a1 1 0 011-1z"
        fill="url(#paint0_linear_0_5281)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_0_5281"
          x1={1}
          y1={12.25}
          x2={23}
          y2={12.25}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
      </Defs>
    </Svg>
      </Box>
  );
};

export const IC_Camera_Orange = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        clipRule="evenodd"
        d="M2 7.348a2 2 0 012-2h3l1.923-1.806A2 2 0 0110.292 3h3.416a2 2 0 011.37.542L17 5.348h3a2 2 0 012 2V19a2 2 0 01-2 2H4a2 2 0 01-2-2V7.348z"
        stroke="#F26333"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={5.5} cy={8.5} r={1.5} fill="#F26333" />
      <Circle
        cx={12}
        cy={13}
        r={4}
        stroke="#FFA080"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};

export const IC_Scan_Face_Orange = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        clipRule="evenodd"
        d="M7.453 8.48A4.566 4.566 0 0112 3.5v0a4.566 4.566 0 014.547 4.98l-.185 2.036A4.38 4.38 0 0112 14.5v0a4.38 4.38 0 01-4.362-3.984L7.453 8.48z"
        stroke="#F26333"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 .6a.9.9 0 100 1.8V.6zm2 .9h.9a.9.9 0 00-.9-.9v.9zm-.9 2a.9.9 0 101.8 0h-1.8zm1.8 10a.9.9 0 10-1.8 0h1.8zm-.9 2v.9a.9.9 0 00.9-.9H21zm-2-.9a.9.9 0 100 1.8v-1.8zM5 16.4a.9.9 0 100-1.8v1.8zm-2-.9h-.9a.9.9 0 00.9.9v-.9zm.9-2a.9.9 0 10-1.8 0h1.8zm-1.8-10a.9.9 0 101.8 0H2.1zm.9-2V.6a.9.9 0 00-.9.9H3zm2 .9A.9.9 0 105 .6v1.8zm14 0h2V.6h-2v1.8zm1.1-.9v2h1.8v-2h-1.8zm0 12v2h1.8v-2h-1.8zm.9 1.1h-2v1.8h2v-1.8zm-16 0H3v1.8h2v-1.8zm-1.1.9v-2H2.1v2h1.8zm0-12v-2H2.1v2h1.8zM3 2.4h2V.6H3v1.8z"
        fill="#FFA080"
      />
      <Path
        d="M3 22.5v0c0-1.2.751-2.273 1.88-2.683L8.5 18.5s1.75 1 3.5 1 3.5-1 3.5-1l3.62 1.317A2.856 2.856 0 0121 22.5v0"
        stroke="#F26333"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};
export const IC_Camera_Flip = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 7.348a2 2 0 012-2h3l1.923-1.806A2 2 0 0110.292 3h3.416a2 2 0 011.37.542L17 5.348h3a2 2 0 012 2V19a2 2 0 01-2 2H4a2 2 0 01-2-2V7.348z"
        fill="#363D4E"
        stroke="#363D4E"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.3 12.75c0 .084-.002.167-.006.25h1.75a.2.2 0 01.146.336l-2.543 2.755a.2.2 0 01-.283.011l-2.554-2.766a.2.2 0 01.147-.336h1.735A3.7 3.7 0 0010.3 9.463L9.187 8.257A5.3 5.3 0 0117.3 12.75zm-10.594-.255h-1.75a.2.2 0 01-.146-.336l2.554-2.766a.2.2 0 01.283.011l2.543 2.755a.2.2 0 01-.147.336H8.31a3.7 3.7 0 005.391 3.542l1.113 1.206a5.3 5.3 0 01-8.107-4.747z"
        fill="#fff"
      />
    </Svg>
      </Box>
  );
};
export const IC_NoFlash = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.28 2.504c.2-.314.545-.504.917-.504.498 0 .903.404.903.903v5.764c0 .194.136.36.327.4l3.74.763a.593.593 0 01.387.893l-2.169 3.517 4.299 4.03a1 1 0 01-1.271 1.54l-.097-.08-16-15a1 1 0 011.271-1.54l.097.08 4.462 4.184 3.135-4.95zM7.288 10.39l7.27 6.815-2.656 4.307A1.027 1.027 0 0110 20.973v-5.916a.07.07 0 00-.056-.068l-3.487-.698a1.02 1.02 0 01-.662-1.546l1.492-2.355z"
        fill="#363D4E"
      />
    </Svg>
      </Box>
  );
};

export const IC_Recieve = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.26 4c-.726 2.325-1.648 4.098-2.766 5.318-1.118 1.22-2.666 2.17-4.643 2.85l-1.23-3.21-3.513 6.899a.99.99 0 00.43 1.33l.096.042L12.85 20l-1.228-3.206c2.6-1 4.445-2.595 5.534-4.785 1.089-2.19 1.123-4.86.102-8.009z"
        fill="#363D4E"
        stroke="#363D4E"
        strokeWidth={1.77987}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};
export const IC_Camera_White = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        clipRule="evenodd"
        d="M2 7.348a2 2 0 012-2h3l1.923-1.806A2 2 0 0110.292 3h3.416a2 2 0 011.37.542L17 5.348h3a2 2 0 012 2V19a2 2 0 01-2 2H4a2 2 0 01-2-2V7.348z"
        stroke="#F6F7F8"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={5.5} cy={8.5} r={1.5} fill="#F6F7F8" />
      <Circle
        cx={12}
        cy={13}
        r={4}
        stroke="#F6F7F8"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};
export const IC_Arrow_Left_White = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M15 4.5L7.5 12l7.5 7.5"
        stroke="#F6F7F8"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};

export const IC_Circle_Tick_White = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.8 12C1.8 6.367 6.366 1.8 12 1.8c5.633 0 10.2 4.567 10.2 10.2 0 5.633-4.567 10.2-10.2 10.2-5.633 0-10.2-4.567-10.2-10.2zm15.344-4.265a1 1 0 00-1.409.12L10.53 14.03 8.2 11.745l-.095-.083a1 1 0 00-1.306 1.51l3.099 3.042.093.08a1 1 0 001.372-.15l5.901-7 .075-.1a1 1 0 00-.195-1.309z"
        fill="#F6F7F8"
      />
    </Svg>
      </Box>
  );
};
export const IC_Tick_White = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M4.8 12.26l4.958 5.04L19.2 5.7"
        stroke="#F6F7F8"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};

export const IC_Scan_White = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M16.222 1.6a.9.9 0 000 1.8V1.6zM22.4 16.222a.9.9 0 00-1.8 0h1.8zM16.222 20.6a.9.9 0 000 1.8v-1.8zm-8.444 1.8a.9.9 0 100-1.8v1.8zM1.6 7.778a.9.9 0 001.8 0H1.6zM16.222 3.4h2.64V1.6h-2.64v1.8zm2.64 0c.96 0 1.738.779 1.738 1.739h1.8A3.539 3.539 0 0018.861 1.6v1.8zM20.6 5.14v2.639h1.8V5.139h-1.8zm0 11.083v2.64h1.8v-2.64h-1.8zm0 2.64c0 .96-.778 1.738-1.739 1.738v1.8a3.539 3.539 0 003.54-3.539h-1.8zM18.861 20.6h-2.639v1.8h2.64v-1.8zm-11.083 0H5.139v1.8h2.639v-1.8zm-2.639 0c-.96 0-1.739-.778-1.739-1.739H1.6a3.539 3.539 0 003.539 3.54v-1.8zM3.4 18.861v-2.639H1.6v2.64h1.8zm0-11.083V5.139H1.6v2.639h1.8zm0-2.639c0-.96.779-1.739 1.739-1.739V1.6A3.539 3.539 0 001.6 5.14h1.8zM5.14 3.4h2.639V1.6H5.139v1.8z"
        fill="#F6F7F8"
      />
      <Rect
        x={7.5}
        y={7.5}
        width={9}
        height={9}
        rx={2}
        stroke="#F6F7F8"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};

export const IC_Star = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        clipRule="evenodd"
        d="M10.186 15.098a.4.4 0 00-.372 0l-4.387 2.306a.4.4 0 01-.58-.422l.838-4.884a.4.4 0 00-.115-.354l-3.55-3.46a.4.4 0 01.223-.682l4.904-.712a.4.4 0 00.301-.22l2.193-4.443a.4.4 0 01.718 0l2.193 4.444a.4.4 0 00.301.219l4.904.712a.4.4 0 01.222.683l-3.549 3.459a.4.4 0 00-.115.354l.838 4.884a.4.4 0 01-.58.422l-4.387-2.306z"
        stroke="url(#paint0_linear_0_5180)"
        strokeWidth={2}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_0_5180"
          x1={1}
          y1={10.5}
          x2={19}
          y2={10.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
      </Defs>
    </Svg>
      </Box>
  );
};

export const IC_Check_Off = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M4 9.8L8.132 14 16 6"
        stroke="#A7AAB2"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};

export const IC_Check_On = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M4 9.8L8.132 14 16 6"
        stroke="#00B167"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};

export const IC_Edit = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M11.7 17.398h6.377"
        stroke="#363D4E"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M10.855 2.456c.737-.94 1.928-.89 2.868-.153l1.39 1.09c.94.737 1.273 1.88.536 2.82L7.36 16.79a1.48 1.48 0 01-1.15.568l-3.197.04-.724-3.114c-.102-.437 0-.897.277-1.252l8.29-10.575z"
        stroke="#363D4E"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.303 4.436l4.794 3.758"
        stroke="#363D4E"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};



export const IconsMap = {
  IC_Email, IC_Bitcoin, IC_Ethereum, IC_Xrp, IC_PieGraph, IC_Search, IC_NotificationSettings, IC_Fingerprint, IC_FaceID,
  IC_ProfileSettings, IC_CreditCard, IC_Phone, IC_GreenVi, IC_Mail, IC_Market, IC_Invest, IC_Portfolio, IC_Eye, IC_Lock, IC_Person,
  IC_ArrowLeft, IC_Settings, IC_DisplaySetting, IC_LanguageSetting, IC_ThemeSettings, IC_UserPreferencesSettings,
  IC_AddCard, IC_CardAdded, IC_EyeOff, IC_ChevronRight, IC_IDCard, IC_Passport, IC_Home, IC_Profile, IC_NotificationsInactive, IC_Arrow_Down, IC_Back,
  IC_Cross, IC_Options, IC_Help, IC_Arrow_Down_White, IC_Back_White, IC_Bell_White, IC_Cross_White, IC_Options_White, IC_Search_White, IC_Bell,
  IC_Activity_Active, IC_Home_Active, IC_Invest_Active, IC_Profile_Active, IC_Activity_Inactive, IC_Home_Inactive, IC_Invest_Inactive, IC_Profile_Inactive, IC_Swap
};

export function getIconByString(icon: string) {
    return icon && icon in IconsMap ? IconsMap[icon as keyof typeof IconsMap] : null;
}