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