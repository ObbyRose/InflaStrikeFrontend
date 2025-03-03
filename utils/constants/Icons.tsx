// @ts-nocheck
import { Box } from "@/components/ui/box";
import { cn } from "@/components/ui/cn";
import Svg, { Path, G, Mask, Rect, Defs, ClipPath, Circle, LinearGradient, Stop, Ellipse} from "react-native-svg";

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

export const IC_ChevronRight_White = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6 10"
      fill="none"
    >
      <Path
        d="M1 9l4-4-4-4"
        stroke="#ffffff"
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
export const IC_Tick_Purple = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M4.8 12.26L9.76 17.3 19.2 5.7"
        stroke="url(#paint0_linear_65_8186)"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_65_8186"
          x1={4.80078}
          y1={11.5002}
          x2={19.2008}
          y2={11.5002}
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
export const IC_Passport_Photo = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      width={130}
      height={102}
      viewBox="0 0 130 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G filter="url(#filter0_d_0_736)">
        <Rect x={15} y={3} width={100} height={72} rx={8} fill="#fff" />
        <Rect
          x={14.5}
          y={2.5}
          width={101}
          height={73}
          rx={8.5}
          stroke="#CCD5E2"
        />
      </G>
      <Rect x={15} y={3} width={100} height={72} rx={8} fill="#DFE5F0" />
      <Path
        d="M15 11a8 8 0 018-8h84a8 8 0 018 8v44a4 4 0 01-4 4H19a4 4 0 01-4-4V11z"
        fill="#fff"
      />
      <Rect x={23} y={12} width={24} height={30} rx={2} fill="#D8D8D8" />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={23}
        y={12}
        width={24}
        height={30}
      >
        <Rect x={23} y={12} width={24} height={30} rx={2} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Path fill="#1761C5" d="M20 12H50V42H20z" />
        <Mask
          id="b"
          style={{
            maskType: "luminance"
          }}
          maskUnits="userSpaceOnUse"
          x={20}
          y={12}
          width={30}
          height={30}
        >
          <Path fill="#fff" d="M20 12H50V42H20z" />
        </Mask>
        <G mask="url(#b)">
          <Circle
            opacity={0.21}
            cx={24.875}
            cy={14.7188}
            r={9.28125}
            stroke="#fff"
            strokeWidth={3.75}
          />
          <Circle
            opacity={0.21}
            cx={48.5938}
            cy={39.9375}
            r={12.1875}
            stroke="#fff"
            strokeWidth={3.75}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32.068 27.719h5.864l1.1 13.031h-8.063l1.1-13.031z"
            fill="#fff"
          />
          <Mask
            id="c"
            style={{
              maskType: "luminance"
            }}
            maskUnits="userSpaceOnUse"
            x={30}
            y={27}
            width={10}
            height={14}
          >
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M32.068 27.719h5.864l1.1 13.031h-8.063l1.1-13.031z"
              fill="#fff"
            />
          </Mask>
          <G mask="url(#c)">
            <Path
              opacity={0.6}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M31.834 28.96s.653 1.876 3.118 2.294c2.465.417 3.878 0 3.878 0L38.313 28l-6.716.031.237.93z"
              fill="#1761C5"
            />
          </G>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.111 37.706a5.437 5.437 0 013.217-3.637l6.451-2.606S33.513 35.87 35 35.87s3.235-4.408 3.235-4.408l6.44 2.605a5.437 5.437 0 013.213 3.636l1.175 4.39H20.936l1.174-4.388z"
            fill="url(#paint0_linear_0_736)"
          />
          <Mask
            id="d"
            style={{
              maskType: "luminance"
            }}
            maskUnits="userSpaceOnUse"
            x={20}
            y={31}
            width={30}
            height={12}
          >
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.111 37.706a5.437 5.437 0 013.217-3.637l6.451-2.606S33.513 35.87 35 35.87s3.235-4.408 3.235-4.408l6.44 2.605a5.437 5.437 0 013.213 3.636l1.175 4.39H20.936l1.174-4.388z"
              fill="#fff"
            />
          </Mask>
          <G mask="url(#d)" fill="#BECAE4">
            <Path d="M34.8125 35.1562H35.1875V42.18745H34.8125z" />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.143 42.094l.352-2.303-.958 2.303h.606zM43.672 42.094l-.353-2.303.958 2.303h-.605z"
            />
          </G>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.74 32.46a.28.28 0 01.167-.321l1.843-.76c1.085 2.866 2.142 4.28 2.97 4.457 0 0-.695 2.837-1.276 3.043-.268.094-1.905-.967-2.847-3.298-.29-.72-.71-2.487-.856-3.121zM40.25 32.46a.28.28 0 00-.166-.321l-1.843-.76c-1.085 2.866-2.142 4.28-2.97 4.457 0 0 .695 2.837 1.276 3.043.268.094 1.905-.967 2.847-3.298.29-.72.71-2.487.857-3.121z"
            fill="#002F70"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30.5 17.344h9.563s-.019 6.367-.188 8.688c-.183 2.512-2.462 4.155-4.98 4.155h-2.89c-.378 0-.71-.134-.818-.496-.152-.512-.346-1.55-.5-3.659-.299-4.1-.187-8.688-.187-8.688z"
            fill="#fff"
          />
          <Ellipse
            cx={32.75}
            cy={25.2129}
            rx={0.84375}
            ry={0.421875}
            fill="#FDE0D5"
          />
          <Ellipse
            cx={37.9062}
            cy={25.2129}
            rx={0.84375}
            ry={0.421875}
            fill="#FDE0D5"
          />
          <Circle cx={33.1719} cy={23.2969} r={0.421875} fill="#002F70" />
          <Circle cx={37.4844} cy={23.2969} r={0.421875} fill="#002F70" />
          <Path
            opacity={0.34}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.456 18.122s.472 1.993 2.627 1.715c2.155-.277 3.401-2.747 5.427-.61 0 0-1.277-2.797-4.12-2.462-2.842.335-3.934 1.357-3.934 1.357z"
            fill="#325CD8"
          />
          <Path
            d="M31.456 18.122s.364 1.093 2.258 1.438"
            stroke="#002F70"
            strokeWidth={0.5}
            strokeLinecap="round"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30.5 23.72s-2.937-6.522.529-7.51c0 0 .139-2.59 2.379-2.664 2.24-.073 2.605.66 4.524.917s3.382 2.112 3.382 4.29-1.252 4.966-1.252 4.966.202-5.053-1.912-5.597c-2.115-.543-2.73.768-4.103.768-1.375 0-2.591-.838-2.591-.838s-.048 1.112-.25 2.306c-.2 1.194-.706 3.361-.706 3.361z"
            fill="#002F70"
          />
          <Path
            d="M32.115 21.767s.85-.577 1.792-.206M38.594 21.767s-.85-.577-1.792-.206"
            stroke="#002F70"
            strokeWidth={0.5}
            strokeLinecap="round"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M39.906 23.574s.653-1.658 1.647-.652c.995 1.006-.162 3.802-1.787 2.862l.14-2.21z"
            fill="#fff"
          />
          <Path
            d="M40.45 24.816c.123-.794.346-1.263.669-1.406"
            stroke="#CCD4E6"
            strokeWidth={0.5}
            strokeLinecap="round"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30.626 23.574s-.653-1.658-1.647-.652c-.994 1.006.162 3.802 1.787 2.862l-.14-2.21z"
            fill="#fff"
          />
          <Path
            d="M30.081 24.816c-.122-.794-.345-1.263-.668-1.406M35.272 21.75v.973c0 .598 1.25 2.497.44 2.734-.81.236-.807.22-.807.22M34.119 27.386s1.432.667 2.496 0"
            stroke="#CCD4E6"
            strokeWidth={0.5}
            strokeLinecap="round"
          />
        </G>
      </G>
      <Rect x={53} y={14} width={19} height={1} rx={0.5} fill="#003D8F" />
      <Rect x={81} y={50} width={26} height={1} rx={0.5} fill="#CCD5E2" />
      <Rect x={53} y={24} width={11} height={1} rx={0.5} fill="#003D8F" />
      <Rect x={53} y={34} width={11} height={1} rx={0.5} fill="#003D8F" />
      <Rect x={69} y={34} width={8} height={1} rx={0.5} fill="#003D8F" />
      <Rect
        opacity={0.2}
        x={53}
        y={17}
        width={26}
        height={2.5}
        rx={1.25}
        fill="#002F70"
      />
      <Rect
        opacity={0.2}
        x={83}
        y={17}
        width={22}
        height={2.5}
        rx={1.25}
        fill="#002F70"
      />
      <Rect
        opacity={0.2}
        x={53}
        y={27}
        width={20}
        height={2.5}
        rx={1.25}
        fill="#002F70"
      />
      <Rect
        opacity={0.2}
        x={53}
        y={37}
        width={9}
        height={2.5}
        rx={1.25}
        fill="#002F70"
      />
      <Rect
        opacity={0.2}
        x={53}
        y={47}
        width={4}
        height={4}
        rx={1}
        fill="#002F70"
      />
      <Rect
        opacity={0.2}
        x={58}
        y={47}
        width={4}
        height={4}
        rx={1}
        fill="#002F70"
      />
      <Rect
        opacity={0.2}
        x={63}
        y={47}
        width={4}
        height={4}
        rx={1}
        fill="#002F70"
      />
      <Rect
        opacity={0.2}
        x={68}
        y={47}
        width={4}
        height={4}
        rx={1}
        fill="#002F70"
      />
      <Rect
        opacity={0.2}
        x={69}
        y={37}
        width={6}
        height={2.5}
        rx={1.25}
        fill="#002F70"
      />
      <Path
        d="M84 48s5.427-1.265 4.93-2.529c-.496-1.263-2.18.162-.609 2.529l3.23-2.114L90.683 48s2.61-.133 3.713-1.447C95.499 45.239 94.56 48 95.4 48s3.82-1.447 2.753-2.529c-1.068-1.082-2.546 2.529 0 2.529 2.545 0 5.847-2.529 5.847-2.529"
        stroke="#003D8F"
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M24.2 63L23 64.25l1.2 1.25M27.16 63l-1.2 1.25 1.2 1.25M30.12 63l-1.2 1.25 1.2 1.25M33.08 63l-1.2 1.25 1.2 1.25M36.04 63l-1.2 1.25 1.2 1.25M39 63l-1.2 1.25L39 65.5M41.96 63l-1.2 1.25 1.2 1.25M44.92 63l-1.2 1.25 1.2 1.25M47.88 63l-1.2 1.25 1.2 1.25M50.84 63l-1.2 1.25 1.2 1.25M53.8 63l-1.2 1.25 1.2 1.25M56.76 63l-1.2 1.25 1.2 1.25M59.72 63l-1.2 1.25 1.2 1.25M62.68 63l-1.2 1.25 1.2 1.25M65.64 63l-1.2 1.25 1.2 1.25M68.6 63l-1.2 1.25 1.2 1.25M71.56 63l-1.2 1.25 1.2 1.25M74.52 63l-1.2 1.25 1.2 1.25M77.48 63l-1.2 1.25 1.2 1.25M80.44 63l-1.2 1.25 1.2 1.25M83.4 63l-1.2 1.25 1.2 1.25M86.36 63l-1.2 1.25 1.2 1.25M89.32 63l-1.2 1.25 1.2 1.25M92.28 63l-1.2 1.25 1.2 1.25M95.24 63l-1.2 1.25 1.2 1.25M98.2 63L97 64.25l1.2 1.25M101.16 63l-1.2 1.25 1.2 1.25M104.12 63l-1.2 1.25 1.2 1.25M107.08 63l-1.2 1.25 1.2 1.25M24.2 68L23 69.25l1.2 1.25M27.16 68l-1.2 1.25 1.2 1.25M30.12 68l-1.2 1.25 1.2 1.25M33.08 68l-1.2 1.25 1.2 1.25M36.04 68l-1.2 1.25 1.2 1.25M39 68l-1.2 1.25L39 70.5M41.96 68l-1.2 1.25 1.2 1.25M44.92 68l-1.2 1.25 1.2 1.25M47.88 68l-1.2 1.25 1.2 1.25M50.84 68l-1.2 1.25 1.2 1.25M53.8 68l-1.2 1.25 1.2 1.25M56.76 68l-1.2 1.25 1.2 1.25M59.72 68l-1.2 1.25 1.2 1.25M62.68 68l-1.2 1.25 1.2 1.25M65.64 68l-1.2 1.25 1.2 1.25M68.6 68l-1.2 1.25 1.2 1.25M71.56 68l-1.2 1.25 1.2 1.25M74.52 68l-1.2 1.25 1.2 1.25M77.48 68l-1.2 1.25 1.2 1.25M80.44 68l-1.2 1.25 1.2 1.25M83.4 68l-1.2 1.25 1.2 1.25M86.36 68l-1.2 1.25 1.2 1.25M89.32 68l-1.2 1.25 1.2 1.25M92.28 68l-1.2 1.25 1.2 1.25M95.24 68l-1.2 1.25 1.2 1.25M98.2 68L97 69.25l1.2 1.25M101.16 68l-1.2 1.25 1.2 1.25M104.12 68l-1.2 1.25 1.2 1.25M107.08 68l-1.2 1.25 1.2 1.25"
        stroke="#fff"
        strokeWidth={0.7}
      />
      <G opacity={0.64}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M94.398 46.906c.123 0 .244.011.364.039.372.085.689.326.995.559.288.219.587.446.835.446.249 0 .547-.227.836-.446.307-.233.623-.474.995-.56.385-.088.783-.008 1.168.07.346.068.705.14.913.04.216-.106.386-.438.549-.758.178-.347.361-.707.664-.95.305-.246.695-.347 1.072-.444.346-.09.703-.183.851-.369.146-.185.157-.554.167-.912.011-.393.023-.8.193-1.156.167-.348.472-.607.768-.857.275-.233.559-.475.614-.713.05-.223-.098-.556-.242-.879-.161-.363-.328-.739-.328-1.141 0-.403.167-.779.328-1.142.144-.323.292-.656.241-.879-.054-.239-.339-.48-.614-.713-.295-.25-.6-.509-.767-.858-.171-.356-.183-.762-.194-1.155-.01-.358-.02-.728-.167-.912-.148-.187-.505-.28-.85-.369-.377-.097-.768-.198-1.073-.444-.303-.243-.486-.602-.663-.95-.164-.32-.333-.652-.549-.757-.209-.1-.567-.03-.914.04-.385.077-.784.156-1.167.068-.372-.084-.689-.325-.995-.558-.289-.22-.588-.447-.836-.447s-.547.227-.835.447c-.307.233-.623.474-.995.558-.386.09-.784.009-1.167-.068-.347-.07-.706-.14-.914-.04-.216.105-.385.437-.55.757-.177.348-.36.707-.663.95-.305.246-.695.347-1.073.445-.345.09-.701.182-.85.369-.146.184-.157.553-.167.911-.011.393-.023.8-.193 1.156-.167.348-.472.607-.767.857-.276.233-.56.474-.614.713-.05.223.097.557.24.879.162.364.329.739.329 1.142 0 .402-.167.778-.328 1.141-.144.323-.291.656-.241.88.054.238.338.48.614.712.295.25.6.51.767.858.17.355.182.762.194 1.155.01.358.02.728.166.912.148.187.506.28.851.369.377.097.768.198 1.072.444.303.243.487.603.664.95.164.32.333.652.55.757.207.101.566.03.913-.04.264-.053.535-.107.803-.107zm2.194 1.843c-.514 0-.938-.323-1.313-.608-.24-.181-.487-.37-.693-.417-.221-.05-.534.013-.837.073-.452.09-.966.193-1.413-.024-.455-.221-.697-.694-.91-1.112-.139-.272-.283-.554-.453-.69-.172-.139-.478-.218-.775-.295-.45-.117-.96-.249-1.272-.644-.312-.393-.328-.922-.341-1.388-.009-.31-.018-.629-.115-.831-.093-.194-.332-.397-.563-.593-.359-.303-.764-.647-.877-1.148-.11-.483.103-.96.29-1.382.128-.287.26-.583.26-.815 0-.233-.132-.529-.26-.815-.187-.422-.4-.9-.29-1.383.113-.5.518-.844.877-1.147.23-.197.47-.4.563-.594.097-.202.106-.521.115-.831.013-.466.028-.994.34-1.387.313-.395.823-.528 1.273-.644.296-.077.603-.156.774-.295.17-.137.314-.418.454-.691.213-.417.454-.89.91-1.112.447-.217.96-.115 1.413-.024.304.06.616.123.837.073.205-.047.453-.235.693-.417.374-.285.799-.608 1.313-.608.515 0 .94.323 1.314.608.24.182.487.37.693.417.219.05.533-.012.836-.073.453-.09.966-.194 1.414.024.454.221.696.695.909 1.111.14.273.284.555.454.692.172.138.479.218.775.294.449.117.959.249 1.273.644.312.393.327.922.34 1.388.009.31.018.629.114.831.094.194.333.397.564.593.358.304.764.647.877 1.148.109.483-.103.96-.29 1.382-.128.287-.26.583-.26.816 0 .232.132.528.26.815.187.422.399.899.291 1.382-.114.5-.52.844-.878 1.148-.231.196-.47.398-.563.593-.097.202-.106.521-.115.831-.013.466-.028.994-.34 1.388-.313.395-.823.527-1.273.644-.296.076-.603.156-.775.294-.17.137-.314.419-.453.691-.213.418-.455.89-.91 1.111-.448.218-.96.115-1.413.025-.303-.06-.617-.124-.837-.073-.206.047-.453.235-.693.417-.374.285-.8.608-1.314.608z"
          fill="#FF7C00"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M94.847 44.206c.072 0 .142.008.213.023.328.073.572.321.807.561.13.133.35.357.443.357.094 0 .313-.224.444-.357.235-.24.479-.488.807-.561.338-.075.69.052 1 .165.148.054.457.166.533.133.079-.038.18-.339.233-.501.107-.32.217-.65.484-.858.268-.21.639-.243.967-.272.172-.016.493-.045.547-.11.053-.065.011-.377-.012-.544-.043-.32-.092-.681.058-.985.147-.299.45-.476.743-.648.151-.088.43-.252.45-.339.016-.078-.156-.334-.249-.472-.183-.272-.39-.58-.39-.924 0-.343.207-.65.389-.923.093-.138.265-.394.25-.473-.02-.086-.3-.25-.45-.338-.293-.172-.596-.35-.744-.648-.149-.304-.101-.666-.058-.985.023-.168.065-.479.013-.543-.054-.066-.376-.095-.548-.11-.327-.03-.698-.063-.966-.273-.268-.209-.378-.539-.484-.858-.054-.162-.154-.463-.234-.5-.072-.035-.384.078-.533.132-.31.113-.661.24-1 .165-.327-.073-.571-.321-.806-.56-.13-.135-.35-.358-.444-.358-.094 0-.312.224-.443.357-.235.24-.479.488-.808.561-.337.075-.688-.052-.998-.165-.15-.054-.46-.166-.534-.133-.08.038-.18.34-.234.502-.106.319-.217.649-.483.857-.268.21-.64.243-.967.272-.172.016-.493.045-.547.111-.053.065-.01.376.012.543.043.32.092.681-.058.985-.147.299-.45.477-.743.648-.15.088-.43.252-.45.339-.016.078.156.334.249.472.183.272.39.58.39.923 0 .344-.207.652-.39.924-.093.138-.265.395-.25.473.02.086.3.25.45.338.293.172.597.35.745.648.15.304.1.666.057.985-.022.167-.064.479-.012.544.054.066.375.094.548.11.327.03.698.063.966.272.267.209.377.539.483.858.055.162.155.464.234.5.075.036.385-.077.534-.132.245-.09.516-.188.786-.188zm1.463 1.722c-.435 0-.745-.317-1.02-.597-.132-.135-.312-.32-.407-.34-.108-.024-.359.068-.544.135-.365.133-.779.284-1.16.105-.385-.183-.523-.597-.645-.963-.06-.18-.142-.427-.222-.49-.082-.063-.347-.087-.541-.104-.39-.035-.833-.075-1.099-.401-.265-.325-.207-.754-.156-1.134.026-.189.061-.45.015-.543-.043-.088-.27-.22-.435-.317-.339-.198-.722-.423-.818-.835-.093-.4.148-.758.36-1.075.115-.172.259-.385.259-.495 0-.109-.144-.323-.259-.494-.212-.317-.453-.675-.36-1.074.096-.412.48-.637.818-.836.165-.097.391-.23.435-.317.046-.094.01-.354-.015-.544-.051-.379-.11-.808.156-1.132.266-.326.708-.366 1.098-.401.194-.018.46-.042.541-.105.08-.063.163-.31.223-.49.122-.366.26-.78.646-.962.381-.179.794-.029 1.16.104.184.067.44.158.542.135.096-.02.276-.205.408-.34.275-.28.585-.597 1.02-.597.435 0 .746.317 1.02.597.133.135.313.32.408.34.105.022.359-.068.543-.135.365-.133.779-.284 1.16-.104.386.181.523.596.645.962.061.18.143.427.223.49.082.063.347.087.541.105.39.035.833.074 1.099.4.264.325.207.755.155 1.133-.026.19-.06.45-.014.544.043.088.269.22.435.317.338.198.722.423.818.835.093.4-.148.758-.361 1.075-.115.172-.258.385-.258.494 0 .11.143.323.258.495.213.316.454.675.361 1.074-.096.413-.48.638-.818.836-.165.096-.391.23-.435.317-.046.094-.011.354.015.543.051.38.109.809-.156 1.133-.266.326-.708.366-1.098.401-.194.018-.46.042-.542.105-.08.063-.162.31-.222.49-.122.366-.26.78-.646.962-.38.18-.794.03-1.16-.104-.184-.067-.44-.158-.543-.136-.095.022-.275.206-.407.34-.275.28-.586.598-1.02.598z"
          fill="#FF7C00"
        />
        <Mask
          id="e"
          style={{
            maskType: "luminance"
          }}
          maskUnits="userSpaceOnUse"
          x={87}
          y={29}
          width={20}
          height={25}
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M87 53.828h19.185V29.564H87v24.264z"
            fill="#fff"
          />
        </Mask>
        <G mask="url(#e)" fillRule="evenodd" clipRule="evenodd" fill="#FF7C00">
          <Path d="M92.078 38.028h8.464v-.564h-8.464v.564zM92.078 39.157h8.464v-.564h-8.464v.564zM92.078 40.85h8.464v-.565h-8.464v.564z" />
          <Path d="M96.31 36.02a2.858 2.858 0 00-2.854 2.855 2.858 2.858 0 002.855 2.854 2.857 2.857 0 002.853-2.854 2.857 2.857 0 00-2.853-2.854zm0 6.522a3.672 3.672 0 01-3.667-3.667 3.672 3.672 0 013.668-3.668 3.672 3.672 0 013.667 3.668 3.672 3.672 0 01-3.667 3.667zM90.95 53.828h10.721v-.564H90.95v.564zM89.257 51.007h14.107v-.565H89.257v.565z" />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_0_736"
          x1={20.9375}
          y1={31.4629}
          x2={20.9375}
          y2={42.0941}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F4F5F7" />
          <Stop offset={1} stopColor="#E5E8ED" />
        </LinearGradient>
      </Defs>
    </Svg>
      </Box>
  );
};
export const IC_Selfie_Photo = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
   <Svg
      width={102}
      height={102}
      viewBox="0 0 102 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G filter="url(#filter0_d_0_693)">
        <Rect x={15} y={3} width={72} height={72} rx={16} fill="#fff" />
        <Rect x={14.5} y={2.5} width={73} height={73} rx={16.5} stroke="#fff" />
      </G>
      <Mask
        id="a"
        style={{
          maskType: "alpha"
        }}
        maskUnits="userSpaceOnUse"
        x={15}
        y={3}
        width={72}
        height={72}
      >
        <Path
          d="M71 3H31c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16h40c8.837 0 16-7.163 16-16V19c0-8.837-7.163-16-16-16z"
          fill="#325CD8"
        />
      </Mask>
      <G mask="url(#a)">
        <Mask
          id="b"
          style={{
            maskType: "alpha"
          }}
          maskUnits="userSpaceOnUse"
          x={15}
          y={3}
          width={72}
          height={72}
        >
          <Path d="M87 3H15v72h72V3z" fill="#fff" />
        </Mask>
        <G mask="url(#b)">
          <Path d="M87 3H15v72h72V3z" fill="#1761C5" />
          <Path
            opacity={0.21}
            d="M26.7 31.8c12.302 0 22.275-9.973 22.275-22.275 0-12.302-9.973-22.275-22.275-22.275-12.302 0-22.275 9.973-22.275 22.275C4.425 21.827 14.398 31.8 26.7 31.8zM83.625 99.3c16.154 0 29.25-13.096 29.25-29.25S99.779 40.8 83.625 40.8s-29.25 13.096-29.25 29.25S67.471 99.3 83.625 99.3z"
            stroke="#fff"
            strokeWidth={9}
          />
          <Mask
            id="c"
            style={{
              maskType: "alpha"
            }}
            maskUnits="userSpaceOnUse"
            x={41}
            y={40}
            width={20}
            height={32}
          >
            <Path
              d="M43.964 40.725h14.072L60.675 72h-19.35l2.639-31.275z"
              fill="#fff"
            />
          </Mask>
          <G mask="url(#c)">
            <Path
              d="M43.964 40.725h14.072L60.675 72h-19.35l2.639-31.275z"
              fill="#fff"
            />
            <Path
              opacity={0.6}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M43.4 43.704c1.046 3.001 3.54 4.836 7.485 5.504 3.944.669 7.046.669 9.306 0l-1.24-7.809-16.12.075.57 2.23z"
              fill="#1761C5"
            />
          </G>
          <Mask
            id="d"
            style={{
              maskType: "alpha"
            }}
            maskUnits="userSpaceOnUse"
            x={17}
            y={49}
            width={68}
            height={27}
          >
            <Path
              d="M27.786 55.965L43.27 49.71c2.773 7.053 5.35 10.58 7.73 10.58 2.38 0 4.968-3.527 7.763-10.58l15.456 6.254a13.05 13.05 0 017.712 8.724l2.819 10.537h-67.5l2.818-10.532a13.05 13.05 0 017.718-8.728z"
              fill="#fff"
            />
          </Mask>
          <G mask="url(#d)">
            <Path
              d="M27.786 55.965L43.27 49.71c2.773 7.053 5.35 10.58 7.73 10.58 2.38 0 4.968-3.527 7.763-10.58l15.456 6.254a13.05 13.05 0 017.712 8.724l2.819 10.537h-67.5l2.818-10.532a13.05 13.05 0 017.718-8.728z"
              fill="url(#paint0_linear_0_693)"
            />
            <Path d="M51.45 58.575h-.9V75.45h.9V58.575z" fill="#BECAE4" />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M32.142 75.225l.847-5.528-2.3 5.528h1.453zM71.812 75.225l-.847-5.528 2.3 5.528h-1.453z"
              fill="#BECAE4"
            />
          </G>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M38.778 51.33l4.421-1.82c2.605 6.877 5.143 10.27 7.128 10.695-1.112 4.538-2.132 6.972-3.061 7.301-.643.228-4.571-2.32-6.833-7.915-.544-1.346-1.23-3.842-2.057-7.487a.675.675 0 01.402-.773zM63.201 51.33l-4.421-1.82c-2.605 6.877-5.143 10.27-7.127 10.695 1.11 4.538 2.131 6.972 3.06 7.301.643.228 4.571-2.32 6.833-7.915.544-1.346 1.23-3.842 2.057-7.487a.675.675 0 00-.402-.773z"
            fill="#002F70"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M40.2 15.825h22.95c-.029 10.188-.179 17.138-.45 20.852a10.756 10.756 0 01-10.727 9.973h-.596a10.756 10.756 0 01-10.727-9.973c-.479-6.56-.629-13.511-.45-20.852z"
            fill="#fff"
          />
          <Path
            d="M45.6 35.722c1.118 0 2.025-.453 2.025-1.012 0-.56-.907-1.013-2.025-1.013-1.118 0-2.025.454-2.025 1.013 0 .559.907 1.012 2.025 1.012zM57.975 35.722c1.118 0 2.025-.453 2.025-1.012 0-.56-.907-1.013-2.025-1.013-1.118 0-2.025.454-2.025 1.013 0 .559.907 1.012 2.025 1.012z"
            fill="#FDE0D5"
          />
          <Path
            d="M46.612 31.125a1.012 1.012 0 100-2.025 1.012 1.012 0 000 2.025zM56.962 31.125a1.012 1.012 0 100-2.025 1.012 1.012 0 000 2.025z"
            fill="#002F70"
          />
          <Path
            opacity={0.34}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M42.494 17.692c.755 3.19 2.857 4.562 6.305 4.118 5.171-.666 8.163-6.594 13.025-1.464-2.043-4.475-5.338-6.445-9.887-5.91-4.548.536-7.696 1.621-9.443 3.256z"
            fill="#325CD8"
          />
          <Path
            d="M42.494 17.691c.583 1.748 2.39 2.899 5.42 3.452"
            stroke="#002F70"
            strokeWidth={0.675}
            strokeLinecap="round"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M40.2 31.125c-4.7-10.434-4.277-16.441 1.269-18.021.222-4.145 2.126-6.277 5.71-6.394 5.377-.177 6.252 1.582 10.857 2.2 4.606.617 8.117 5.07 8.117 10.297 0 3.485-1.001 7.458-3.003 11.918.322-8.086-1.208-12.564-4.591-13.433-5.075-1.304-6.55 1.844-9.847 1.844-2.2 0-4.272-.67-6.218-2.013a44.913 44.913 0 01-.598 5.535c-.322 1.91-.888 4.6-1.696 8.067z"
            fill="#002F70"
          />
          <Path
            d="M44.076 26.44c1.36-.924 2.794-1.088 4.3-.495M59.627 26.44c-1.361-.924-2.795-1.088-4.301-.495"
            stroke="#002F70"
            strokeWidth={0.9}
            strokeLinecap="round"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M62.774 30.778c1.045-2.653 2.363-3.175 3.954-1.565 2.386 2.414-.39 9.124-4.29 6.868l.336-5.303z"
            fill="#fff"
          />
          <Path
            d="M64.082 33.758c.294-1.907.828-3.032 1.603-3.374"
            stroke="#CCD4E6"
            strokeWidth={0.675}
            strokeLinecap="round"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M40.503 30.778c-1.045-2.653-2.363-3.175-3.954-1.565-2.386 2.414.39 9.124 4.29 6.868l-.336-5.303z"
            fill="#fff"
          />
          <Path
            d="M39.195 33.758c-.294-1.907-.828-3.032-1.603-3.374"
            stroke="#CCD4E6"
            strokeWidth={0.675}
            strokeLinecap="round"
          />
          <Path
            d="M51.653 26.398v2.335c0 1.436 2.998 5.994 1.054 6.561-1.296.38-1.941.556-1.935.53"
            stroke="#CCD4E6"
            strokeWidth={0.9}
            strokeLinecap="round"
          />
          <Path
            d="M48.885 39.925c2.292 1.067 4.289 1.067 5.99 0"
            stroke="#CCD4E6"
            strokeWidth={0.675}
            strokeLinecap="round"
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_0_693"
          x1={51}
          y1={49.71}
          x2={51}
          y2={75.2249}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F4F5F7" />
          <Stop offset={1} stopColor="#E5E8ED" />
        </LinearGradient>
      </Defs>
    </Svg>
      </Box>
  );
};
export const IC_Arrow_Left = ({ className }: IconsProps) => {
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

export const IC_Letter = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        clipRule="evenodd"
        d="M2.083 3.75c0-.92.747-1.667 1.667-1.667h9.167c.92 0 1.667.746 1.667 1.667v12.5c0 .92.746 1.667 1.666 1.667v0H3.75c-.92 0-1.667-.747-1.667-1.667V3.75z"
        stroke="#363D4E"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M14.584 11.25h1.666c.92 0 1.667.746 1.667 1.667v3.333c0 .92-.746 1.667-1.667 1.667v0c-.92 0-1.666-.747-1.666-1.667v-5z"
        stroke="#363D4E"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.417 10h5.833M5.417 13.333H8.75M5.417 6.667h5.833"
        stroke="#363D4E"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};

export const IC_Minus = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M4 10h12"
        stroke="#363D4E"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};

export const IC_Plus = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M10 4v12M4 10h12"
        stroke="#363D4E"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};

export const IC_Search_Alter = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M12.914 12.914L17 17"
        stroke="#363D4E"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle
        cx={8.75}
        cy={8.75}
        r={5.75}
        stroke="#363D4E"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};

export const IC_Arrow_Right = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M8 4l6 6-6 6"
        stroke="#5C616F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};

export const IC_Info_Circle = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle
        cx={10}
        cy={10}
        r={7.5}
        stroke="#5C616F"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 10h1v4h1"
        stroke="#5C616F"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={10} cy={6.75} r={1.25} fill="#5C616F" />
    </Svg>
      </Box>
  );
};

export const IC_Arrow_Right_White = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M8 16l6-6-6-6"
        stroke="#F6F7F8"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};

export const IC_Arrow_Up_White = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M16 12l-6-6-6 6"
        stroke="#F6F7F8"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};
export const IC_Edit_White = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M11.693 16.963h6.002"
        stroke="#F6F7F8"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M10.898 2.9c.694-.884 1.815-.838 2.7-.145l1.308 1.026c.885.694 1.198 1.77.504 2.655L7.61 16.39c-.26.334-.659.53-1.082.535l-3.01.038-.68-2.931c-.097-.412 0-.845.26-1.179L10.898 2.9z"
        stroke="#F6F7F8"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.438 4.763L13.948 8.3"
        stroke="#F6F7F8"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};

export const IC_Plus_White = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M10 4v12M4 10h12"
        stroke="#F6F7F8"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
      </Box>
  );
};

export const IC_Bank_Of_America = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width={48} height={48} rx={24} fill="#E31837" />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={48}
        height={48}
      >
        <Rect width={48} height={48} rx={24} fill="#fff" />
      </Mask>
      <G mask="url(#a)" fillRule="evenodd" clipRule="evenodd" fill="#fff">
        <Path d="M23.943 35c6-5.243 14.428-10.34 19.057-12.175-.714-.466-1.829-1.136-3.086-1.864-5.971 2.01-12.943 6.466-19.171 11.505 1.057.815 2.171 1.66 3.2 2.534zM21.2 20.758c-.886-.437-1.857-.845-2.6-1.194-2.257 1.135-5.2 2.854-8.914 5.562.8.437 1.657.962 2.571 1.486 2.857-2.156 5.743-4.194 8.943-5.854zM26.543 18.253c-1.086-.612-4.857-2.04-7.457-2.65-.772.29-1.858.727-2.6 1.048.943.262 4.457 1.223 7.457 2.767.771-.379 1.857-.845 2.6-1.165zM13.771 17.874c-3.343 1.573-6.857 3.728-8.771 4.98.685.32 1.371.583 2.314 1.05 4.229-2.914 7.543-4.69 8.857-5.273-.942-.35-1.828-.582-2.4-.757zM29.057 17.35c.771-.262 1.657-.496 2.429-.729-2.229-.96-5.029-1.98-7.543-2.621-.4.117-1.6.437-2.429.7.857.261 3.686.931 7.543 2.65zM14.97 28.3c.915.553 1.886 1.31 2.829 1.951 6.257-4.951 12.428-8.767 19.2-10.922-.943-.495-1.772-.932-2.829-1.456-4.057 1.049-11 3.874-19.2 10.427z" />
      </G>
    </Svg>
      </Box>
  );
};

export const IC_Citi_Bank = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width={48} height={48} rx={24} fill="#330497" />
      <Mask
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={48}
        height={48}
      >
        <Rect width={48} height={48} rx={24} fill="#fff" />
      </Mask>
      <Path
        d="M17.744 28.654l-.057.055c-.923.94-1.99 1.439-3.091 1.439-2.297 0-3.964-1.723-3.964-4.1 0-2.374 1.667-4.1 3.964-4.1 1.1 0 2.168.5 3.09 1.443l.058.057 1.477-1.786-.04-.048c-1.228-1.452-2.702-2.158-4.514-2.158-1.818 0-3.48.611-4.678 1.715C8.687 22.366 8 24.051 8 26.047c0 1.995.687 3.684 1.989 4.88 1.198 1.108 2.86 1.717 4.678 1.717 1.812 0 3.286-.706 4.514-2.159l.04-.045-1.477-1.786zM20.714 32.401h2.61V19.663h-2.61V32.4zM33.544 29.631c-.696.424-1.344.637-1.926.637-.843 0-1.224-.445-1.224-1.436v-6.76h2.658v-2.398h-2.658V15.71l-2.557 1.37v2.594H25.63v2.399h2.207v7.19c0 1.959 1.16 3.297 2.892 3.332 1.177.023 1.886-.327 2.316-.583l.026-.02.628-2.455-.155.094zM35.706 32.401h2.61V19.663h-2.61V32.4z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.88 17.402C37.49 14.02 33.524 12 29.488 12c-4.034 0-8.002 2.019-10.387 5.402l-.122.174h3.008l.033-.036c2.047-2.113 4.72-3.23 7.468-3.23 2.75 0 5.421 1.117 7.472 3.23l.033.036H40l-.12-.174z"
        fill="#ED1C24"
      />
    </Svg>
      </Box>
  );
};

export const IC_Chase = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width={48} height={48} rx={24} fill="#330497" />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={48}
        height={48}
      >
        <Rect width={48} height={48} rx={24} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.737 12.848c0-.469.38-.848.848-.848l7.696.002 7.144 6.785H19.737v-5.94zm16.015 7.137c.159.159.248.374.248.6l-.003 7.697-6.782 7.148V19.738h5.937c.225 0 .44.088.6.247zM27.415 36a.848.848 0 00.846-.848v-5.94H12.573l7.143 6.786 7.7.002zm-15.167-7.984a.848.848 0 01-.248-.6v-7.698l6.785-7.147v15.694h-5.938a.847.847 0 01-.599-.249z"
          fill="#fff"
        />
      </G>
    </Svg>
      </Box>
  );
};

export const IC_Visa = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width={48} height={48} rx={24} fill="#330497" />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={48}
        height={48}
      >
        <Rect width={48} height={48} rx={24} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Path
          d="M21.408 29.342h-2.88l1.801-11.14h2.88l-1.801 11.14zM31.85 18.474A7.098 7.098 0 0029.266 18c-2.844 0-4.847 1.517-4.86 3.685-.023 1.6 1.435 2.49 2.525 3.023 1.114.545 1.493.9 1.493 1.386-.011.747-.9 1.09-1.73 1.09-1.15 0-1.766-.177-2.702-.592l-.38-.178-.402 2.5c.675.309 1.92.582 3.212.594 3.022 0 4.99-1.494 5.013-3.805.012-1.268-.758-2.24-2.418-3.034-1.007-.51-1.624-.853-1.624-1.374.012-.475.522-.96 1.659-.96a4.893 4.893 0 012.146.427l.26.118.392-2.406z"
          fill="#fff"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M37.006 18.202h2.228l2.323 11.14H38.89s-.26-1.28-.343-1.672h-3.698l-.605 1.671h-3.022L35.5 19.127c.297-.723.819-.924 1.506-.924zm-.178 4.076l-1.15 3.117h2.394c-.118-.557-.664-3.223-.664-3.223l-.2-.96a61.75 61.75 0 01-.291.816c-.056.155-.094.26-.089.25z"
          fill="#fff"
        />
        <Path
          d="M16.122 18.202l-2.82 7.596-.31-1.54c-.52-1.778-2.156-3.71-3.982-4.67l2.584 9.742h3.046l4.528-11.128h-3.046z"
          fill="#fff"
        />
        <Path
          d="M10.682 18.202H6.047L6 18.427c3.615.924 6.01 3.153 6.993 5.831l-1.008-5.12c-.165-.711-.675-.913-1.303-.936z"
          fill="#FAA61A"
        />
      </G>
    </Svg>
      </Box>
  );
};

export const IC_Mastercard = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width={48} height={48} rx={24} fill="#E3E0DA" />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={48}
        height={48}
      >
        <Rect width={48} height={48} rx={24} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Path fill="#FF5F00" d="M20.5 16.8667H27.5V30.6334H20.5z" />
        <Path
          d="M20.704 23.75A8.807 8.807 0 0124 16.872 8.551 8.551 0 0018.66 15C13.873 15 10 18.913 10 23.75s3.873 8.75 8.66 8.75c2.02 0 3.873-.705 5.34-1.872-1.997-1.58-3.296-4.083-3.296-6.878z"
          fill="#EB001B"
        />
        <Path
          d="M38 23.75c0 4.837-3.873 8.75-8.66 8.75A8.551 8.551 0 0124 30.628c2.02-1.604 3.296-4.083 3.296-6.878A8.807 8.807 0 0024 16.872 8.551 8.551 0 0129.34 15c4.787 0 8.66 3.938 8.66 8.75z"
          fill="#F79E1B"
        />
      </G>
    </Svg>
      </Box>
  );
};

export const IC_American_Express = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <Rect width={48} height={48} rx={24} fill="#330497" />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={48}
        height={48}
      >
        <Rect width={48} height={48} rx={24} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Path fill="url(#pattern0_0_5755)" d="M5 19H43V29H5z" />
        <Mask
          id="b"
          style={{
            maskType: "alpha"
          }}
          maskUnits="userSpaceOnUse"
          x={5}
          y={19}
          width={38}
          height={10}
        >
          <Path fill="url(#pattern1_0_5755)" d="M5 19H43V29H5z" />
        </Mask>
        <G mask="url(#b)">
          <Path fill="#fff" d="M5 19H43V29H5z" />
        </G>
      </G>
      <Defs>
        <Pattern
          id="pattern0_0_5755"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_0_5755" transform="scale(.00267 .0097)" />
        </Pattern>
        <Pattern
          id="pattern1_0_5755"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_0_5755" transform="scale(.00267 .0097)" />
        </Pattern>
        <Image
          id="image0_0_5755"
          width={375}
          height={103}
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
      </Box>
  );
};

export const IC_ATM_Locator = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 53 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={24} cy={24} r={24} fill="#5200FF" />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={48}
        height={48}
      >
        <Circle cx={24} cy={24} r={24} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Path opacity={0.48} fill="#005267" d="M0 24H22V48H0z" />
        <Circle opacity={0.48} cx={41} cy={9} r={15} fill="#005267" />
        <Rect
          x={6}
          y={10.5}
          width={36}
          height={39.5}
          rx={2.5}
          fill="url(#paint0_linear_0_7442)"
        />
        <Rect x={9.5} y={14.5} width={29} height={6} rx={1} fill="#330497" />
        <Path
          d="M11.5 16.5h25V36a2 2 0 01-2 2h-21a2 2 0 01-2-2V16.5z"
          fill="url(#paint1_linear_0_7442)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.5 16.5h21V30a6 6 0 00-6 6h-9a6 6 0 00-6-6V16.5z"
          fill="url(#paint2_linear_0_7442)"
        />
        <Path
          opacity={0.48}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.99 15.457a4.5 4.5 0 108.127.223l-8.128-.223z"
          fill="#330497"
        />
      </G>
      <G opacity={0.8} filter="url(#filter0_d_0_7442)">
        <Circle cx={35} cy={35} r={11} fill="#330497" />
      </G>
      <Circle
        cx={34}
        cy={34}
        r={4}
        stroke="#E8F2FF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M37.108 36.858L40 39.75"
        stroke="#E8F2FF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_0_7442"
          x1={6}
          y1={10.5}
          x2={6}
          y2={50}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#DDF5FA" />
          <Stop offset={1} stopColor="#A1D5E2" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_0_7442"
          x1={11.5}
          y1={16.5}
          x2={11.5}
          y2={38}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#E7F2FF" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_0_7442"
          x1={13.5}
          y1={16.5}
          x2={13.5}
          y2={36}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#EFFCFF" />
          <Stop offset={1} stopColor="#A1D5E2" />
        </LinearGradient>
      </Defs>
    </Svg>
      </Box>
  );
};

export const IC_Budget = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={24} cy={24} r={24} fill="#5200FF" />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={48}
        height={48}
      >
        <Circle cx={24} cy={24} r={24} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Rect
          opacity={0.12}
          x={-5}
          y={20}
          width={30}
          height={33}
          rx={2}
          fill="#000"
        />
        <Circle
          opacity={0.12}
          cx={34}
          cy={8}
          r={12}
          stroke="#000"
          strokeWidth={6}
        />
        <Rect
          x={8}
          y={15}
          width={39}
          height={28}
          rx={3}
          fill="url(#paint0_linear_0_7370)"
        />
        <Rect
          x={11}
          y={12}
          width={39}
          height={28}
          rx={3}
          fill="url(#paint1_linear_0_7370)"
        />
        <G filter="url(#filter0_d_0_7370)">
          <Rect
            x={15}
            y={8}
            width={38}
            height={28}
            rx={3}
            fill="url(#paint2_linear_0_7370)"
          />
        </G>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M47 10a2 2 0 012 2v20a2 2 0 01-2 2H24a7 7 0 00-7-7V17a7 7 0 007-7h23z"
          fill="url(#paint3_linear_0_7370)"
        />
        <G opacity={0.8} filter="url(#filter1_d_0_7370)">
          <Circle cx={35} cy={22} r={9} fill="#330497" />
        </G>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.5 18.423V17.5h-1v.93c-1.371.16-2.313.968-2.313 2.064 0 1.032.642 1.624 2.025 1.936l.288.063v1.954c-.565-.109-.922-.402-1.063-.82H32c.115 1.109 1.046 1.824 2.5 1.952v.921h1v-.926c1.47-.155 2.5-.979 2.5-2.151 0-1.019-.648-1.585-2.031-1.89l-.469-.105v-1.87c.536.105.879.39.983.79h1.377c-.126-1.097-1-1.793-2.36-1.925zm-1 1.146c-.534.12-.896.431-.896.849 0 .365.286.612.896.783v-1.633zm1 3.145v1.738c.634-.111 1.05-.447 1.05-.896 0-.41-.335-.676-1.05-.842z"
          fill="#E8F2FF"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_0_7370"
          x1={8.09971}
          y1={15}
          x2={8.09971}
          y2={42.8568}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#6BB5C5" />
          <Stop offset={1} stopColor="#409DB5" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_0_7370"
          x1={11.0997}
          y1={12}
          x2={11.0997}
          y2={39.8568}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#B6ECF8" />
          <Stop offset={1} stopColor="#6CB4C7" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_0_7370"
          x1={15}
          y1={8}
          x2={15}
          y2={36}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#DDF5FA" />
          <Stop offset={1} stopColor="#A1D5E2" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_0_7370"
          x1={49}
          y1={10}
          x2={17}
          y2={10}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.00996708} stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" />
        </LinearGradient>
      </Defs>
    </Svg>
      </Box>
  );
};

export const IC_Drivers_License = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
  <Svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={24} cy={24} r={24} fill="url(#paint0_linear_0_7388)" />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={48}
        height={48}
      >
        <Circle cx={24} cy={24} r={24} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Rect
          opacity={0.12}
          x={27}
          y={23}
          width={30}
          height={33}
          rx={2}
          fill="#000"
        />
        <Circle
          opacity={0.12}
          cx={7}
          cy={9}
          r={12}
          stroke="#000"
          strokeWidth={6}
        />
        <Rect x={10} y={8.5} width={40} height={31} rx={3} fill="#FF4000" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 11.5a3 3 0 013-3h34a3 3 0 013 3v21a3 3 0 01-3 3H13a3 3 0 01-3-3v-21z"
          fill="url(#paint1_linear_0_7388)"
        />
        <Rect x={15} y={14.5} width={12} height={14} rx={1} fill="#E6C5BA" />
        <Path
          d="M32 16.5h6M42 16.5h7"
          stroke="#FF4000"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M32 21.5h17M32 25.5h12"
          stroke="#E6C5BA"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_0_7388"
          x1={-24}
          y1={24}
          x2={24}
          y2={72}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FF5D00" />
          <Stop offset={1} stopColor="#FF4000" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_0_7388"
          x1={10.0738}
          y1={8.5}
          x2={10.0738}
          y2={35.4004}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#F6EAE4" />
        </LinearGradient>
      </Defs>
    </Svg>
      </Box>
  );
};

export const IC_History = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 53 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={24} cy={25} r={24} fill="#5200FF" />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={1}
        width={48}
        height={48}
      >
        <Circle cx={24} cy={25} r={24} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Path opacity={0.48} fill="#005267" d="M26 25H48V49H26z" />
        <Circle opacity={0.48} cx={7} cy={10} r={15} fill="#005267" />
        <Rect
          x={11.5}
          y={21}
          width={32}
          height={39.5}
          rx={2.5}
          fill="url(#paint0_linear_0_7425)"
        />
        <Rect
          x={6.5}
          y={16}
          width={32}
          height={39.5}
          rx={2.5}
          fill="url(#paint1_linear_0_7425)"
        />
        <Rect x={11.5} y={23} width={11} height={10} rx={1} fill="#fff" />
        <Path
          d="M15 30.25h4"
          stroke="#0BB8E4"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 38.5h18M12 42.5h11.5"
          stroke="#330497"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <G opacity={0.8} filter="url(#filter0_d_0_7425)">
        <Circle cx={35} cy={14} r={11} fill="#330497" />
      </G>
      <Path
        d="M33.538 12.362l-3.714-.112-.242-3.71M31.694 17.751a5 5 0 10-.853-6.528"
        stroke="#E8F2FF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_0_7425"
          x1={11.5818}
          y1={21}
          x2={11.5818}
          y2={60.298}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#8DD5E5" />
          <Stop offset={1} stopColor="#5DA8BB" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_0_7425"
          x1={6.5}
          y1={16}
          x2={6.5}
          y2={55.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#DDF5FA" />
          <Stop offset={1} stopColor="#A1D5E2" />
        </LinearGradient>
      </Defs>
    </Svg>
      </Box>
  );
};

export const IC_ID_Card = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
<Svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={24} cy={24} r={24} fill="url(#paint0_linear_0_7112)" />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={48}
        height={48}
      >
        <Circle cx={24} cy={24} r={24} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Rect
          opacity={0.12}
          x={-9}
          y={-5}
          width={30}
          height={33}
          rx={2}
          fill="#000"
        />
        <Circle
          opacity={0.12}
          cx={37}
          cy={40}
          r={12}
          stroke="#000"
          strokeWidth={6}
        />
        <Rect x={10} y={8.5} width={40} height={31} rx={3} fill="#227955" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 11.5a3 3 0 013-3h34a3 3 0 013 3v21a3 3 0 01-3 3H13a3 3 0 01-3-3v-21z"
          fill="url(#paint1_linear_0_7112)"
        />
        <Rect x={15} y={14.5} width={12} height={14} rx={1} fill="#B7D4C7" />
        <Path
          d="M32 16.5h18"
          stroke="#4A9475"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          opacity={0.32}
          d="M32 21.5h17M32 25.5h12"
          stroke="#4A9475"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_0_7112"
          x1={-24}
          y1={24}
          x2={24}
          y2={72}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#19B600" />
          <Stop offset={1} stopColor="#268B61" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_0_7112"
          x1={10}
          y1={8.5}
          x2={10}
          y2={35.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#D5E8E0" />
        </LinearGradient>
      </Defs>
    </Svg>
      </Box>
  );
};
export const IC_Identity = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 53 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={29} cy={25} r={24} fill="#5200FF" />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={5}
        y={1}
        width={48}
        height={48}
      >
        <Circle cx={29} cy={25} r={24} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Rect
          opacity={0.12}
          x={32}
          y={24}
          width={30}
          height={33}
          rx={2}
          fill="#000"
        />
        <Circle
          opacity={0.12}
          cx={12}
          cy={10}
          r={12}
          stroke="#000"
          strokeWidth={6}
        />
        <Rect x={15} y={11.5} width={40} height={31} rx={3} fill="#330497" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 14.5a3 3 0 013-3h34a3 3 0 013 3v21a3 3 0 01-3 3H18a3 3 0 01-3-3v-21z"
          fill="url(#paint0_linear_0_7352)"
        />
        <Rect x={20} y={17.5} width={12} height={14} rx={1} fill="#fff" />
        <Path
          d="M37 19.5h6M47 19.5h7"
          stroke="#330497"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          opacity={0.48}
          d="M37 24.5h17M37 28.5h12"
          stroke="#330497"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <G opacity={0.8} filter="url(#filter0_d_0_7352)">
        <Circle cx={16} cy={12} r={9} fill="#330497" />
      </G>
      <Path
        d="M12 12.183l2.546 2.567L20 9.25"
        stroke="#E8F2FF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_0_7352"
          x1={15}
          y1={11.5}
          x2={15}
          y2={38.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#DDF5FA" />
          <Stop offset={1} stopColor="#A1D5E2" />
        </LinearGradient>
      </Defs>
    </Svg>
      </Box>
  );
};
export const IC_Invite = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={24} cy={24} r={24} fill="#5200FF" />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={48}
        height={48}
      >
        <Circle cx={24} cy={24} r={24} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Rect
          opacity={0.12}
          x={23}
          y={-9}
          width={30}
          height={33}
          rx={2}
          fill="#000"
        />
        <Circle
          opacity={0.12}
          cx={9}
          cy={40}
          r={12}
          stroke="#000"
          strokeWidth={6}
        />
        <Path
          d="M8 18a6 6 0 016-6h20a6 6 0 016 6v29a2 2 0 01-2 2H10a2 2 0 01-2-2V18z"
          fill="url(#paint0_linear_0_7322)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 14.54a.54.54 0 01.54-.54h5.175a2.69 2.69 0 012.093 1c.51.632 1.28 1 2.093 1h8.198a2.69 2.69 0 002.093-1c.511-.632 1.28-1 2.093-1h5.174a.54.54 0 01.541.54V52a1 1 0 01-1 1H11a1 1 0 01-1-1V14.54z"
          fill="#fff"
        />
        <Path
          opacity={0.32}
          d="M16 41.25h16M16 44.25h9.5"
          stroke="#330497"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Rect x={18} y={21} width={12} height={12} rx={6} fill="#fff" />
      </G>
      <G opacity={0.8} filter="url(#filter0_d_0_7322)">
        <Circle cx={24} cy={28} r={9} fill="#330497" />
      </G>
      <Path
        d="M24.5 24.5l-4 3.5 4 3.5"
        stroke="#E8F2FF"
        strokeWidth={1.22727}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={20.5} cy={28} r={1.5} fill="#E8F2FF" />
      <Circle cx={25} cy={24} r={1.5} fill="#E8F2FF" />
      <Circle cx={25} cy={32} r={1.5} fill="#E8F2FF" />
      <Defs>
        <LinearGradient
          id="paint0_linear_0_7322"
          x1={8.08181}
          y1={12}
          x2={8.08181}
          y2={48.8108}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#B6ECF8" />
          <Stop offset={1} stopColor="#6CB4C7" />
        </LinearGradient>
      </Defs>
    </Svg>
      </Box>
  );
};
export const IC_Passport = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={24} cy={24} r={24} fill="url(#paint0_linear_0_7096)" />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={48}
        height={48}
      >
        <Circle cx={24} cy={24} r={24} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Rect
          opacity={0.12}
          x={5}
          y={16}
          width={30}
          height={33}
          rx={2}
          fill="#000"
        />
        <Circle
          opacity={0.12}
          cx={38}
          cy={8}
          r={12}
          stroke="#000"
          strokeWidth={6}
        />
        <Rect
          x={9}
          y={12}
          width={30}
          height={36}
          rx={2}
          fill="url(#paint1_linear_0_7096)"
        />
        <Rect
          x={9}
          y={12}
          width={28}
          height={36}
          rx={2}
          fill="url(#paint2_linear_0_7096)"
        />
        <Path
          opacity={0.48}
          d="M17 18h12"
          stroke="#330497"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Circle
          cx={23}
          cy={33}
          r={8}
          stroke="#330497"
          strokeWidth={1.37143}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Ellipse
          cx={23}
          cy={33}
          rx={4}
          ry={8}
          stroke="#330497"
          strokeWidth={1.37143}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M16 29.5s3.25 1 7 1 7-1 7-1M16 36.5s3.25-1 7-1 7 1 7 1"
          stroke="#330497"
          strokeWidth={1.37143}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_0_7096"
          x1={0}
          y1={24}
          x2={48}
          y2={24}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_0_7096"
          x1={9}
          y1={12}
          x2={9}
          y2={48}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#A5CEFF" />
          <Stop offset={1} stopColor="#7493BD" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_0_7096"
          x1={9.8016}
          y1={12.7937}
          x2={9.8016}
          y2={46.7325}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FBFDFF" />
          <Stop offset={1} stopColor="#CADCF4" />
        </LinearGradient>
      </Defs>
    </Svg>
      </Box>
  );
};
export const IC_Piggy_Bank = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
   <Svg
      viewBox="0 0 53 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={24} cy={24} r={24} fill="#5200FF" />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={48}
        height={48}
      >
        <Circle cx={24} cy={24} r={24} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Rect
          opacity={0.12}
          x={23}
          y={24}
          width={30}
          height={33}
          rx={2}
          fill="#000"
        />
        <Circle
          opacity={0.12}
          cx={14}
          cy={8}
          r={12}
          stroke="#000"
          strokeWidth={6}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.307 17.955a.531.531 0 01-.708-.265c-.781-1.736-3.404-7.549-3.794-8.222-.46-.793 2.186-.617 4.329.743 2.142 1.36 5.776 4.77 4.609 5.522-.907.584-3.38 1.738-4.436 2.222z"
          fill="#3E7583"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M42.527 39.565h7.515l-.613 5.148a2.685 2.685 0 01-1.869 2.246l.053-1.262v-.026a.268.268 0 00-.537.004l-.057 1.393a2.69 2.69 0 01-.255.012h-1.317l.195-1.356.002-.025a.268.268 0 00-.23-.279l-.025-.002a.268.268 0 00-.278.23l-.203 1.415a2.684 2.684 0 01-2.381-2.667v-4.83zM24.292 39.565h7.514l-.612 5.148a2.684 2.684 0 01-1.693 2.185l.055-1.2v-.025a.268.268 0 00-.536 0l-.063 1.373c-.14.022-.283.034-.428.034h-1.16l.216-1.352.003-.025a.268.268 0 00-.533-.06l-.229 1.433a2.684 2.684 0 01-2.534-2.68v-4.83z"
          fill="#619BAA"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.266 38.54c-1.912-2.319-9.477-11.32-9.477-11.32l3.937-8.589 4.476 1.674c2.823-4.65 7.936-7.757 13.774-7.757H38.59c8.893 0 16.103 7.21 16.103 16.103 0 6.673-4.06 12.399-9.844 14.841l-.252 2.116a2.684 2.684 0 01-2.218 2.33l.044-1.168v-.026a.268.268 0 00-.536.005l-.046 1.225H40.3l.154-1.18.002-.026a.269.269 0 00-.234-.275l-.025-.002a.268.268 0 00-.275.234l-.154 1.18a2.685 2.685 0 01-2.072-2.614v-.537H26.822l-.101.854a2.685 2.685 0 01-2.038 2.293l.043-1.131v-.026a.268.268 0 00-.537.005l-.046 1.224-.087.002h-1.454l.154-1.18.002-.027a.269.269 0 00-.234-.275l-.026-.002a.268.268 0 00-.275.234l-.158 1.214a2.685 2.685 0 01-2.246-2.648V43.08a16.169 16.169 0 01-5.553-4.54z"
          fill="url(#paint0_linear_0_7126)"
        />
        <Rect
          x={30.0769}
          y={15.8462}
          width={15.2308}
          height={3.38462}
          rx={1.69231}
          fill="#330497"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.886 16.345a.531.531 0 01-.708-.265c-.782-1.736-3.405-7.549-3.795-8.223-.459-.793 2.186-.617 4.329.744 2.143 1.36 5.776 4.77 4.61 5.522-.908.584-3.38 1.737-4.436 2.222z"
          fill="#569CAF"
        />
        <Ellipse
          cx={16.7837}
          cy={21.1975}
          rx={0.71569}
          ry={1.96815}
          transform="rotate(25 16.784 21.198)"
          fill="#3E7583"
        />
        <Ellipse
          cx={7.0486}
          cy={23.0616}
          rx={2.08027}
          ry={4.73073}
          transform="rotate(27 7.049 23.062)"
          fill="#3E7583"
        />
        <Ellipse
          cx={6.41209}
          cy={22.6903}
          rx={0.357845}
          ry={1.6103}
          transform="rotate(25 6.412 22.69)"
          fill="#569CAF"
        />
        <Ellipse
          cx={7.48557}
          cy={23.2269}
          rx={0.357845}
          ry={1.6103}
          transform="rotate(25 7.486 23.227)"
          fill="#569CAF"
        />
        <Path
          d="M12.906 29.112s3.077.357 4.67-1.312M19.378 17.902s1.257.852 1.257 2.104"
          stroke="#3E7583"
          strokeWidth={0.71569}
          strokeLinecap="round"
        />
      </G>
      <G opacity={0.9} filter="url(#filter0_d_0_7126)">
        <Circle cx={38.0673} cy={10.5673} r={8.56731} fill="#FEA200" />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.543 7.162v-.878h-.952v.884c-1.305.154-2.202.922-2.202 1.966 0 .982.611 1.546 1.928 1.842l.274.061v1.86c-.537-.104-.878-.383-1.012-.781H35.21c.11 1.056.996 1.736 2.38 1.858v.877h.952v-.882c1.399-.147 2.38-.93 2.38-2.047 0-.97-.617-1.51-1.934-1.8l-.446-.099v-1.78c.51.1.837.372.936.752h1.31c-.12-1.044-.95-1.707-2.246-1.833zm-.952 1.09c-.508.115-.853.412-.853.81 0 .347.273.582.853.744V8.253zm.952 2.995v1.655c.604-.106 1-.426 1-.853 0-.39-.319-.644-1-.802z"
        fill="#E8F2FF"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45.308 17.539c0 .934-.803 1.692-1.792 1.692H31.869c-.99 0-1.792-.758-1.792-1.692 0-.203.038-.397.107-.577.25.652.91 1.117 1.685 1.117h11.647c.775 0 1.435-.465 1.685-1.116.069.179.107.373.107.576z"
        fill="#330497"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_0_7126"
          x1={4.78931}
          y1={12.5479}
          x2={4.78931}
          y2={47.9745}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#DDF5FA" />
          <Stop offset={1} stopColor="#7DBCCC" />
        </LinearGradient>
      </Defs>
    </Svg>
      </Box>
  );
};
export const IC_Setting = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={24} cy={24} r={24} fill="#5200FF" />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={48}
        height={48}
      >
        <Circle cx={24} cy={24} r={24} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Rect
          opacity={0.12}
          x={29}
          y={31}
          width={30}
          height={33}
          rx={2}
          stroke="#000"
          strokeWidth={6}
        />
        <Circle
          opacity={0.12}
          cx={9}
          cy={9}
          r={12}
          stroke="#000"
          strokeWidth={6}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36.464 20.96l-2.194-.28a11.032 11.032 0 00-.664-1.602l1.355-1.744c.548-.706.484-1.702-.142-2.31l-1.838-1.837a1.739 1.739 0 00-2.316-.148l-1.742 1.355a10.99 10.99 0 00-1.604-.664l-.279-2.19A1.747 1.747 0 0025.307 10h-2.614c-.883 0-1.628.662-1.733 1.537l-.28 2.193a10.86 10.86 0 00-1.603.664l-1.743-1.355c-.705-.547-1.701-.484-2.31.143l-1.837 1.836a1.74 1.74 0 00-.148 2.317l1.355 1.743a10.9 10.9 0 00-.664 1.603l-2.19.279c-.878.105-1.54.85-1.54 1.733v2.614c0 .883.662 1.628 1.537 1.733l2.193.28c.18.556.403 1.092.664 1.602l-1.355 1.744c-.548.706-.484 1.702.143 2.31l1.837 1.837a1.74 1.74 0 002.316.147l1.743-1.355c.51.262 1.046.484 1.603.664l.279 2.189c.105.88.85 1.542 1.733 1.542h2.614c.883 0 1.628-.661 1.733-1.536l.28-2.194c.556-.18 1.092-.404 1.602-.664l1.744 1.355c.706.548 1.702.484 2.31-.142l1.837-1.838a1.738 1.738 0 00.148-2.316l-1.355-1.743c.262-.51.484-1.046.664-1.603l2.189-.279a1.747 1.747 0 001.54-1.733v-2.614a1.745 1.745 0 00-1.535-1.733zM24 29.833A5.84 5.84 0 0118.167 24 5.84 5.84 0 0124 18.167 5.84 5.84 0 0129.833 24 5.84 5.84 0 0124 29.833z"
          fill="url(#paint0_linear_0_7341)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_0_7341"
          x1={10}
          y1={10}
          x2={10}
          y2={38}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#DDF5FA" />
          <Stop offset={1} stopColor="#A1D5E2" />
        </LinearGradient>
      </Defs>
    </Svg>
      </Box>
  );
};
export const IC_Subscription = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 51 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={24} cy={26} r={24} fill="#5200FF" />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={2}
        width={48}
        height={48}
      >
        <Circle cx={24} cy={26} r={24} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Rect
          opacity={0.12}
          x={23}
          y={-7}
          width={30}
          height={33}
          rx={2}
          fill="#000"
        />
        <Circle
          opacity={0.12}
          cx={9}
          cy={42}
          r={12}
          stroke="#000"
          strokeWidth={6}
        />
        <Rect
          x={13}
          y={14}
          width={22}
          height={24}
          rx={2}
          fill="url(#paint0_linear_0_7298)"
        />
        <Rect x={16} y={17} width={16} height={9} rx={1} fill="#fff" />
        <Path
          d="M16 30.25h14M16 34.25h7.5"
          stroke="#330497"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Rect
          x={-13}
          y={14}
          width={22}
          height={24}
          rx={2}
          fill="url(#paint1_linear_0_7298)"
        />
        <Rect x={-10} y={17} width={16} height={9} rx={1} fill="#68AFC0" />
        <Path
          d="M-10 30.25H4"
          stroke="#330497"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Rect
          x={39}
          y={14}
          width={22}
          height={24}
          rx={2}
          fill="url(#paint2_linear_0_7298)"
        />
        <Rect x={42} y={17} width={16} height={9} rx={1} fill="#68AFC0" />
        <Path
          d="M42 30.25h14"
          stroke="#330497"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <G opacity={0.8} filter="url(#filter0_d_0_7298)">
        <Circle cx={35} cy={12} r={9} fill="#330497" />
      </G>
      <Path
        d="M33.804 10.66l-3.04-.092-.197-3.034M32.295 15.07a4.09 4.09 0 10-.698-5.34"
        stroke="#E8F2FF"
        strokeWidth={1.22727}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_0_7298"
          x1={13}
          y1={14}
          x2={13}
          y2={38}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#DDF5FA" />
          <Stop offset={1} stopColor="#A1D5E2" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_0_7298"
          x1={-12.8349}
          y1={14.3601}
          x2={-12.8349}
          y2={38}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#88D3E4" />
          <Stop offset={1} stopColor="#58ABC0" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_0_7298"
          x1={39.1651}
          y1={14.3601}
          x2={39.1651}
          y2={38}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#88D3E4" />
          <Stop offset={1} stopColor="#58ABC0" />
        </LinearGradient>
      </Defs>
    </Svg>
      </Box>
  );
};
export const IC_Top_Up = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={24} cy={25} r={24} fill="#5200FF" />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={1}
        width={48}
        height={48}
      >
        <Circle cx={24} cy={25} r={24} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Path opacity={0.48} fill="#005267" d="M0 1H22V25H0z" />
        <Circle opacity={0.48} cx={41} cy={40} r={15} fill="#005267" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.958 21.266a2.5 2.5 0 012.39-1.766h24.88a2.5 2.5 0 012.359 1.672l3.13 8.918c.188.532.283 1.092.283 1.656V37H6v-5.356a5 5 0 01.22-1.468l2.738-8.91z"
          fill="url(#paint0_linear_0_6798)"
        />
        <Rect x={9} y={22} width={30} height={20} rx={2.5} fill="#fff" />
        <Circle
          cx={24}
          cy={32}
          r={4}
          stroke="#0BB8E4"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 31.5A2.5 2.5 0 018.5 29h8.616a4 4 0 012.746 1.092l1.392 1.314a4 4 0 005.492 0l1.392-1.314A4 4 0 0130.884 29H39.5a2.5 2.5 0 012.5 2.5V54a2.5 2.5 0 01-2.5 2.5h-31A2.5 2.5 0 016 54V31.5z"
          fill="url(#paint1_linear_0_6798)"
        />
      </G>
      <G opacity={0.8} filter="url(#filter0_d_0_6798)">
        <Circle cx={24} cy={14} r={11} fill="#330497" />
      </G>
      <Path
        d="M24 9.5v9M19.5 14h9"
        stroke="#E8F2FF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_0_6798"
          x1={6.09204}
          y1={19.5}
          x2={6.09204}
          y2={36.9105}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#9ED6E2" />
          <Stop offset={1} stopColor="#6CB4C7" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_0_6798"
          x1={6}
          y1={29}
          x2={6}
          y2={56.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#DDF5FA" />
          <Stop offset={1} stopColor="#A1D5E2" />
        </LinearGradient>
      </Defs>
    </Svg>
      </Box>
  );
};
export const IC_Top_Up1 = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={24} cy={25} r={24} fill="#5200FF" />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={1}
        width={48}
        height={48}
      >
        <Circle cx={24} cy={25} r={24} fill="#fff" />
      </Mask>
      <G mask="url(#a)" fill="#005267">
        <Path opacity={0.48} d="M0 1H22V25H0z" />
        <Circle opacity={0.48} cx={41} cy={40} r={15} />
      </G>
      <G opacity={0.8} filter="url(#filter0_d_2043_13706)">
        <Circle cx={24} cy={14} r={11} fill="#330497" />
      </G>
      <Path
        d="M24 9.5v9M19.5 14h9"
        stroke="#E8F2FF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs></Defs>
    </Svg>
      </Box>
  );
};
export const IC_Transaction = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 53 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={29} cy={25} r={24} fill="#5200FF" />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={5}
        y={1}
        width={48}
        height={48}
      >
        <Circle cx={29} cy={25} r={24} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Path opacity={0.48} fill="#005267" d="M31 1H53V25H31z" />
        <Circle opacity={0.48} cx={12} cy={40} r={15} fill="#005267" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5 25.395a2.5 2.5 0 011.824-2.407l23.5-6.597A2.5 2.5 0 0139 18.798v34.02a2.5 2.5 0 01-2.675 2.494l-23.5-1.649A2.5 2.5 0 0110.5 51.17V25.395z"
          fill="url(#paint0_linear_0_7403)"
        />
        <Rect
          x={10.5}
          y={23.5}
          width={37}
          height={30}
          rx={2.5}
          fill="url(#paint1_linear_0_7403)"
        />
        <Path
          d="M16.5 33.75H27M16.5 37.75H24"
          stroke="#330497"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Rect x={33.5} y={31} width={12} height={9.5} rx={2} fill="#fff" />
        <Circle
          cx={38.25}
          cy={35.75}
          r={1.75}
          stroke="#0BB8E4"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <G opacity={0.8} filter="url(#filter0_d_0_7403)">
        <Circle cx={18} cy={14} r={11} fill="#330497" />
      </G>
      <Path
        d="M20.888 9.868l-.693-.288.693.288zm0-.575l-.693.287.693-.287zm-.406-.405l-.288.692h.001l.287-.693zm-.287-.057v-.75.75zm-4.95 0v-.75.75zm-.75.75h-.75.75zm.75.75v.75-.75zm3.139 0l.53.53a.75.75 0 00-.53-1.28v.75zm1.81-.75l1.387.574c.073-.178.114-.372.114-.574h-1.5zm0 0h1.5c0-.202-.04-.397-.113-.575l-1.386.575zm0 0l1.387-.574a1.498 1.498 0 00-.326-.487l-1.06 1.06zm.001 0l1.06-1.061a1.498 1.498 0 00-.487-.326l-.573 1.387zm0 0l.574-1.386a1.498 1.498 0 00-.574-.114v1.5zm-4.95 0h4.95v-1.5h-4.95v1.5zm0 0v-1.5a1.5 1.5 0 00-1.5 1.5h1.5zm0 0h-1.5a1.5 1.5 0 001.5 1.5v-1.5zm3.139 0h-3.14v1.5h3.14v-1.5zm-4.553 6.364l5.083-5.084-1.06-1.06-5.084 5.083 1.06 1.06zm0 0l-1.061-1.061a1.5 1.5 0 000 2.121l1.06-1.06zm0 0l-1.061 1.06a1.5 1.5 0 002.121 0l-1.06-1.06zm6.364-6.364l-6.364 6.364 1.06 1.06 6.364-6.364-1.06-1.06zm0 0l1.06 1.06c.143-.143.252-.309.326-.487l-1.386-.573zM15.436 17.956l.692.287-.692-.287zm0 .574l.693-.287-.693.287zm.406.406l.287-.693-.287.693zm.287.057v.75-.75zm4.95 0v.75-.75zm.75-.75h.75-.75zm-.75-.75v-.75.75zm-3.14 0l-.53-.53a.75.75 0 00.53 1.28v-.75zm5.084-5.084l-.53-.53.53.53zm-6.894 5.834l-1.386-.575a1.497 1.497 0 00-.114.575h1.5zm0 0h-1.5c0 .202.04.396.114.574l1.385-.575zm0 0l-1.387.574c.074.177.183.343.326.486l1.06-1.06zm0 0l-1.061 1.06c.143.143.309.252.487.326l.573-1.386zm0 0l-.575 1.386c.178.073.373.114.575.114v-1.5zm4.95 0h-4.95v1.5h4.95v-1.5zm0 0v1.5a1.5 1.5 0 001.5-1.5h-1.5zm0 0h1.5a1.5 1.5 0 00-1.5-1.5v1.5zm-3.14 0h3.14v-1.5h-3.14v1.5zm4.554-6.364l-5.084 5.083 1.06 1.061 5.084-5.084-1.06-1.06zm0 0l1.06 1.06a1.5 1.5 0 000-2.121l-1.06 1.06zm0 0l1.06-1.061a1.5 1.5 0 00-2.121 0l1.06 1.06zm-6.364 6.364l6.364-6.364-1.061-1.061-6.364 6.364 1.06 1.06zm0 0l-1.061-1.061a1.498 1.498 0 00-.325.487l1.386.573z"
        fill="#E8F2FF"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_0_7403"
          x1={10.5729}
          y1={15.5}
          x2={10.5729}
          y2={55.2955}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#B6ECF8" />
          <Stop offset={1} stopColor="#6CB4C7" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_0_7403"
          x1={10.5}
          y1={23.5}
          x2={10.5}
          y2={53.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#DDF5FA" />
          <Stop offset={1} stopColor="#A1D5E2" />
        </LinearGradient>
      </Defs>
    </Svg>
      </Box>
  );
};
export const IC_Magnifier = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={32} cy={32} r={32} fill="#5200FF" />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={64}
        height={64}
      >
        <Circle cx={32} cy={32} r={32} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Rect
          x={4}
          y={-2}
          width={28}
          height={35}
          rx={2}
          fill="url(#paint0_linear_0_6813)"
        />
        <Path
          d="M9 22.75h17.5M9 17.25h17.5M9 11.75h17.5M9 6.25h17.5M9 28.25h14.5"
          stroke="#330497"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.094 18.355s6.158-2.95 9.579-3.355C31.093 14.595 38 16 38 16v18a5 5 0 01-5 5H16s-2.423-6.844-2.017-10.84c.405-3.996 4.11-9.805 4.11-9.805z"
          fill="url(#paint1_linear_0_6813)"
        />
        <Path
          d="M14 30.25h11.5M17 22.25h14.5"
          stroke="#330497"
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Circle opacity={0.48} cx={61.6667} cy={33} r={20} fill="#005267" />
        <Circle
          cx={30.1611}
          cy={30.6614}
          r={16}
          transform="rotate(-45 30.161 30.661)"
          fill="#fff"
          fillOpacity={0.24}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.433 17.933c-7.03 7.03-7.03 18.427 0 25.456 6.552 6.552 16.897 6.997 23.964 1.337l6.442 6.441 2.828-2.828-6.441-6.442c5.66-7.067 5.215-17.412-1.337-23.963-7.03-7.03-18.426-7.03-25.456 0zm2.829 2.829c5.467-5.468 14.331-5.468 19.799 0 5.467 5.467 5.467 14.331 0 19.799-5.468 5.467-14.332 5.467-19.8 0-5.467-5.468-5.467-14.332 0-19.8z"
          fill="url(#paint2_linear_0_6813)"
        />
        <Rect
          x={44.3032}
          y={51.8745}
          width={10}
          height={18}
          rx={4}
          transform="rotate(-45 44.303 51.874)"
          fill="url(#paint3_linear_0_6813)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_0_6813"
          x1={4}
          y1={-2}
          x2={4}
          y2={33}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#DDF5FA" />
          <Stop offset={1} stopColor="#A1D5E2" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_0_6813"
          x1={13.9246}
          y1={14.9094}
          x2={13.9246}
          y2={38.9999}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#DDF5FA" />
          <Stop offset={1} stopColor="#A1D5E2" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_0_6813"
          x1={4.70532}
          y1={30.6614}
          x2={36.5251}
          y2={62.4812}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FCFEFF" />
          <Stop offset={1} stopColor="#CAF4FF" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_0_6813"
          x1={44.3032}
          y1={51.8745}
          x2={44.3032}
          y2={69.8745}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#3FD7EE" />
          <Stop offset={1} stopColor="#259AB8" />
        </LinearGradient>
      </Defs>
    </Svg>
      </Box>
  );
};
export const IC_Bell_V2 = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={20} cy={20} r={20} fill="url(#paint0_linear_0_7190)" />
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
        <Circle cx={20} cy={20} r={20} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Rect
          opacity={0.08}
          x={-5}
          y={24}
          width={24}
          height={24}
          rx={1.66667}
          stroke="#000"
          strokeWidth={5}
        />
        <Circle
          opacity={0.08}
          cx={34}
          cy={7}
          r={12}
          stroke="#000"
          strokeWidth={5}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.511 9.038c.6-.158 1.217.192 1.378.783l.31 1.143c3.222-.304 6.29 1.717 7.154 4.898l1.289 4.732c1.154.4 1.938 1.138 2.242 2.255.735 2.7-2.089 4.866-6.8 6.227l-.654.18-.339.088c-4.932 1.24-8.62.796-9.37-1.965-.304-1.117.001-2.143.797-3.058l-1.286-4.732c-.866-3.181.765-6.442 3.71-7.765l-.312-1.143c-.16-.59.195-1.198.795-1.356l1.086-.287zm3.185 13.846c-4.1 1.081-6.366 2.706-6.02 3.979.346 1.273 3.134 1.564 7.233.482 4.1-1.082 6.366-2.707 6.02-3.98-.346-1.272-3.134-1.563-7.233-.481zm.173.755l.57-.154c.328 1.432-.557 2.879-2.02 3.265a2.83 2.83 0 01-3.125-1.22c1.185-.74 2.741-1.375 4.575-1.891z"
          fill="#fff"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_0_7190"
          x1={0}
          y1={20}
          x2={40}
          y2={20}
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
export const IC_Card_V2 = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={20} cy={20} r={20} fill="url(#paint0_linear_0_7178)" />
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
        <Circle cx={20} cy={20} r={20} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Rect
          opacity={0.08}
          x={-5}
          y={24}
          width={24}
          height={24}
          rx={1.66667}
          stroke="#000"
          strokeWidth={5}
        />
        <Circle
          opacity={0.08}
          cx={34}
          cy={7}
          r={12}
          stroke="#000"
          strokeWidth={5}
        />
        <G filter="url(#filter0_d_0_7178)">
          <Rect
            x={9}
            y={12}
            width={24}
            height={19}
            rx={3}
            fill="url(#paint1_linear_0_7178)"
          />
        </G>
        <Rect x={7} y={10} width={24} height={19} rx={3} fill="#fff" />
        <Path
          d="M10 14h18"
          stroke="#330497"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Circle opacity={0.4} cx={15.5} cy={23.5} r={2.5} fill="#330497" />
        <Circle cx={11.5} cy={23.5} r={2.5} fill="#330497" />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_0_7178"
          x1={0}
          y1={20}
          x2={40}
          y2={20}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_0_7178"
          x1={9}
          y1={12}
          x2={9}
          y2={31}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#BEEDF7" />
          <Stop offset={1} stopColor="#75BDD0" />
        </LinearGradient>
      </Defs>
    </Svg>
      </Box>
  );
};
export const IC_FaceID_V2 = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={20} cy={20} r={20} fill="url(#paint0_linear_0_7201)" />
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
        <Circle cx={20} cy={20} r={20} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Rect
          opacity={0.08}
          x={-5}
          y={24}
          width={24}
          height={24}
          rx={1.66667}
          stroke="#000"
          strokeWidth={5}
        />
        <Circle
          opacity={0.08}
          cx={34}
          cy={7}
          r={12}
          stroke="#000"
          strokeWidth={5}
        />
        <Rect x={9} y={9} width={22} height={22} rx={6} fill="#fff" />
        <Path
          d="M16.762 16.821a.729.729 0 00-.728.729v1.4a.729.729 0 101.457 0v-1.4a.729.729 0 00-.729-.729zM23.238 16.821a.729.729 0 00-.73.729v1.4a.729.729 0 101.458 0v-1.4a.729.729 0 00-.729-.729zM16.597 22.81a.728.728 0 000 1.03A4.782 4.782 0 0020 25.25c1.285 0 2.495-.501 3.403-1.41a.73.73 0 00-.93-1.115l-.1.085a3.331 3.331 0 01-2.373.982 3.331 3.331 0 01-2.372-.982.728.728 0 00-1.03 0zM20.437 16.821a.729.729 0 00-.728.729v2.946c0 .214-.047.248-.249.248a.729.729 0 100 1.457c1.01 0 1.706-.697 1.706-1.705V17.55a.729.729 0 00-.729-.729zM16.675 11.09h-1.584a4.006 4.006 0 00-4 4.001v2.46a.729.729 0 101.457-.001V15.09a2.547 2.547 0 012.543-2.543h1.584a.729.729 0 100-1.458zM11.819 21.721a.729.729 0 00-.729.73v2.458a4.005 4.005 0 004.001 4h1.584a.729.729 0 100-1.457h-1.584a2.547 2.547 0 01-2.543-2.543V22.45a.729.729 0 00-.73-.729zM24.909 11.09h-1.584a.729.729 0 100 1.458h1.584a2.547 2.547 0 012.544 2.543v2.46a.729.729 0 101.457 0v-2.46a4.006 4.006 0 00-4.001-4zM28.181 21.721a.729.729 0 00-.728.73v2.458a2.547 2.547 0 01-2.544 2.543h-1.584a.729.729 0 100 1.458h1.584a4.005 4.005 0 004.001-4.001V22.45a.729.729 0 00-.729-.729z"
          fill="#330497"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_0_7201"
          x1={0}
          y1={20}
          x2={40}
          y2={20}
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
export const IC_Help_V2 = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={20} cy={20} r={20} fill="url(#paint0_linear_0_7274)" />
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
        <Circle cx={20} cy={20} r={20} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Rect
          opacity={0.08}
          x={-5}
          y={24}
          width={24}
          height={24}
          rx={1.66667}
          stroke="#000"
          strokeWidth={5}
        />
        <Circle
          opacity={0.08}
          cx={34}
          cy={7}
          r={12}
          stroke="#000"
          strokeWidth={5}
        />
        <Circle cx={20} cy={20} r={11} fill="#fff" />
        <Path
          d="M20 22.25v0c0-1.054.601-2.004 1.425-2.662.774-.617 1.575-1.473 1.575-2.37 0-1.735-1.246-2.968-3-2.968s-3 1.233-3 2.968"
          stroke="#330497"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Circle cx={20} cy={25.5} r={1.25} fill="#330497" />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_0_7274"
          x1={0}
          y1={20}
          x2={40}
          y2={20}
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
export const IC_Logout_V2 = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={20} cy={20} r={20} fill="url(#paint0_linear_0_7285)" />
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
        <Circle cx={20} cy={20} r={20} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Rect
          opacity={0.08}
          x={-5}
          y={24}
          width={24}
          height={24}
          rx={1.66667}
          stroke="#000"
          strokeWidth={5}
        />
        <Circle
          opacity={0.08}
          cx={34}
          cy={7}
          r={12}
          stroke="#000"
          strokeWidth={5}
        />
        <Rect
          x={11.75}
          y={10.75}
          width={16.5}
          height={18.5}
          rx={2.25}
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 13.711a3 3 0 013.629-2.933l8 1.714A3 3 0 0125 15.425V29.29a3 3 0 01-3.629 2.933l-8-1.714A3 3 0 0111 27.575V13.71z"
          fill="#fff"
        />
        <Path
          d="M15 21.5h5M18 18.5l3 3-3 3"
          stroke="#330497"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_0_7285"
          x1={0}
          y1={20}
          x2={40}
          y2={20}
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
export const IC_Password_V2 = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg

      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={20} cy={20} r={20} fill="url(#paint0_linear_0_7218)" />
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
        <Circle cx={20} cy={20} r={20} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Rect
          opacity={0.08}
          x={-5}
          y={24}
          width={24}
          height={24}
          rx={1.66667}
          stroke="#000"
          strokeWidth={5}
        />
        <Circle
          opacity={0.08}
          cx={34}
          cy={7}
          r={12}
          stroke="#000"
          strokeWidth={5}
        />
        <Rect x={12.5} y={16.5} width={15} height={15} rx={7} fill="#fff" />
        <Circle cx={20} cy={22.5} r={2} fill="#330497" />
        <Rect
          x={19.2}
          y={23.5}
          width={1.6}
          height={4}
          rx={0.8}
          fill="#330497"
        />
        <Path
          d="M15 23v-9a5 5 0 019.777-1.48"
          stroke="#fff"
          strokeWidth={1.6}
          strokeLinecap="round"
        />
        <Path
          d="M27.114 14.296l1.91-1.021M27.742 17.184l2.141.352"
          stroke="#fff"
          strokeWidth={1.4}
          strokeLinecap="round"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_0_7218"
          x1={0}
          y1={20}
          x2={40}
          y2={20}
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
export const IC_PIN_V2 = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
     <Svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={20} cy={20} r={20} fill="url(#paint0_linear_0_7232)" />
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
        <Circle cx={20} cy={20} r={20} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Rect
          opacity={0.08}
          x={-5}
          y={24}
          width={24}
          height={24}
          rx={1.66667}
          stroke="#000"
          strokeWidth={5}
        />
        <Circle
          opacity={0.08}
          cx={34}
          cy={7}
          r={12}
          stroke="#000"
          strokeWidth={5}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.5 14.25a2 2 0 100-4 2 2 0 000 4zm0 5.5a2 2 0 100-4 2 2 0 000 4zm7.5-7.5a2 2 0 11-4 0 2 2 0 014 0zm-2 7.5a2 2 0 100-4 2 2 0 000 4zm7.5-7.5a2 2 0 11-4 0 2 2 0 014 0zm-2 7.5a2 2 0 100-4 2 2 0 000 4zm-9 3.5a2 2 0 11-4 0 2 2 0 014 0zm3.5 2a2 2 0 100-4 2 2 0 000 4zm2 3.5a2 2 0 11-4 0 2 2 0 014 0zm3.5-3.5a2 2 0 100-4 2 2 0 000 4z"
          fill="#fff"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_0_7232"
          x1={0}
          y1={20}
          x2={40}
          y2={20}
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
export const IC_Privacy_V2 = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={20} cy={20} r={20} fill="url(#paint0_linear_0_7264)" />
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
        <Circle cx={20} cy={20} r={20} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Rect
          opacity={0.08}
          x={-5}
          y={24}
          width={24}
          height={24}
          rx={1.66667}
          stroke="#000"
          strokeWidth={5}
        />
        <Circle
          opacity={0.08}
          cx={34}
          cy={7}
          r={12}
          stroke="#000"
          strokeWidth={5}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.327 13.653a2.64 2.64 0 012.1-2.938l3.075-.615 3.129-.783a5.28 5.28 0 012.54-.005l3.211.788 3 .61a2.64 2.64 0 012.092 2.935l-1.477 11.081a5.28 5.28 0 01-3.154 4.156l-2.863 1.227a5.28 5.28 0 01-4.16 0l-2.863-1.227a5.28 5.28 0 01-3.154-4.156l-1.476-11.073z"
          fill="#fff"
        />
        <Path
          d="M16.05 19.269l3.079 2.931 4.621-4.4"
          stroke="#330497"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_0_7264"
          x1={0}
          y1={20}
          x2={40}
          y2={20}
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
export const IC_Profile_V2 = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={20} cy={20} r={20} fill="url(#paint0_linear_0_7168)" />
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
        <Circle cx={20} cy={20} r={20} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Rect
          opacity={0.08}
          x={-5}
          y={24}
          width={24}
          height={24}
          rx={1.66667}
          stroke="#000"
          strokeWidth={5}
        />
        <Circle
          opacity={0.08}
          cx={34}
          cy={7}
          r={12}
          stroke="#000"
          strokeWidth={5}
        />
        <Rect x={9} y={9} width={22} height={22} rx={4} fill="#fff" />
        <Circle
          cx={20}
          cy={16.5715}
          r={2.85714}
          fill="#330497"
          stroke="#330497"
          strokeWidth={1.02857}
          strokeLinejoin="round"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.286 24.653c0-.779.336-1.525 1.028-1.883.934-.483 2.502-1.056 4.686-1.056s3.752.573 4.686 1.056c.692.358 1.028 1.104 1.028 1.883 0 .902-.73 1.633-1.632 1.633h-8.164a1.633 1.633 0 01-1.632-1.633z"
          fill="#330497"
          stroke="#330497"
          strokeWidth={1.02857}
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_0_7168"
          x1={0}
          y1={20}
          x2={40}
          y2={20}
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
export const IC_Terms_V2 = ({ className }: IconsProps) => {
  return (
      <Box className={cn(className)}>
    <Svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={20} cy={20} r={20} fill="url(#paint0_linear_0_7250)" />
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
        <Circle cx={20} cy={20} r={20} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Rect
          opacity={0.08}
          x={-5}
          y={24}
          width={24}
          height={24}
          rx={1.66667}
          stroke="#000"
          strokeWidth={5}
        />
        <Circle
          opacity={0.08}
          cx={34}
          cy={7}
          r={12}
          stroke="#000"
          strokeWidth={5}
        />
        <G filter="url(#filter0_d_0_7250)">
          <Rect
            x={12}
            y={11}
            width={17}
            height={20}
            rx={2}
            fill="url(#paint1_linear_0_7250)"
          />
        </G>
        <Rect x={10} y={9} width={17} height={20} rx={2} fill="#fff" />
        <Path
          d="M14 13h9M14 17h9"
          stroke="#330497"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          opacity={0.4}
          d="M14 21h6M14 25h2.5"
          stroke="#330497"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_0_7250"
          x1={0}
          y1={20}
          x2={40}
          y2={20}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5506FD" />
          <Stop offset={1} stopColor="#330497" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_0_7250"
          x1={12}
          y1={11}
          x2={12}
          y2={31}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#BEEDF7" />
          <Stop offset={1} stopColor="#75BDD0" />
        </LinearGradient>
      </Defs>
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
  IC_Activity_Active, IC_Home_Active, IC_Invest_Active, IC_Profile_Active, IC_Activity_Inactive, IC_Home_Inactive, IC_Invest_Inactive, IC_Profile_Inactive, IC_Swap, IC_Bell_V2, IC_Card_V2, IC_FaceID_V2, IC_Help_V2, IC_Logout_V2, IC_Password_V2, IC_PIN_V2, IC_Privacy_V2, IC_Profile_V2, IC_Terms_V2
};

export function getIconByString(icon: string) {
    return icon && icon in IconsMap ? IconsMap[icon as keyof typeof IconsMap] : null;
}