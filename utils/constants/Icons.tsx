// @ts-nocheck
import { Box } from "@/components/ui/box";
import { cn } from "@/components/ui/cn";
import Svg, { Path, G, Mask, Rect, Defs, ClipPath, Circle, LinearGradient, Stop} from "react-native-svg";

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

export const IC_Search = ({ className }: IconsProps) => {
    return (
        <Box className={cn(className)}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.914 16c.547 0 .934-.42.934-.96a.914.914 0 00-.269-.673l-3.964-3.973a6.446 6.446 0 001.33-3.922C12.945 2.912 10.033 0 6.472 0 2.921 0 0 2.904 0 6.472c0 3.56 2.912 6.473 6.472 6.473a6.451 6.451 0 003.763-1.212l3.99 3.99a.96.96 0 00.69.277zm-8.442-4.452c-2.777 0-5.075-2.298-5.075-5.076 0-2.777 2.298-5.075 5.075-5.075 2.778 0 5.076 2.298 5.076 5.075 0 2.778-2.298 5.076-5.076 5.076z"
        fill="#969AA0"
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

  export const IconsMap = {
    IC_Email, IC_Bitcoin, IC_Ethereum, IC_Xrp, IC_PieGraph, IC_Search, IC_NotificationSettings,
    IC_ProfileSettings, IC_CreditCard, IC_Phone, IC_GreenVi, IC_Mail, IC_Eye, IC_Lock, IC_Person,
    IC_ArrowLeft, IC_Settings, IC_DisplaySetting, IC_LanguageSetting, IC_ThemeSettings, IC_UserPreferencesSettings,
    IC_AddCard, IC_CardAdded, IC_EyeOff, IC_ChevronRight, IC_IDCard, IC_Passport
};

export function getIconByString(icon: string) {
    return icon && icon in IconsMap ? IconsMap[icon as keyof typeof IconsMap] : null;
}