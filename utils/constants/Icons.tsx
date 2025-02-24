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

export const IconsMap = {
    IC_Email, IC_Bitcoin, IC_Ethereum, IC_Xrp, IC_PieGraph, IC_Search,
    IC_EyeOff, IC_Eye, IC_Lock, IC_Person, IC_ArrowLeft,
};

export function getIconByString(icon: string) {
    return icon && icon in IconsMap ? IconsMap[icon as keyof typeof IconsMap] : null;
}