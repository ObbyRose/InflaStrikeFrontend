// @ts-nocheck
import { Box } from "@/components/ui/box";
import { cn } from "@/components/ui/cn";
import Svg, { Path, G, Mask, Rect, Defs, ClipPath, LinearGradient, Stop, Circle} from "react-native-svg";

interface ImageProps {
    className?: string;
}

export const IM_Mailbox = ({ className }: ImageProps) => {
    return (
        <Box className={cn(className)}>
        <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      fill="none"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
    >
      <Path
        stroke="#ADB8CC"
        strokeWidth={1.5}
        d="M94.75 136H113.25V185.5H94.75z"
      />
      <Path
        d="M106.75 136h6.5v49.5h-6.5V136zM73.45 53.972h51.988c22.81 0 41.456 18.197 42.012 41l.9 36.903a4 4 0 01-3.901 4.096l-.098.001H73.45v0"
        stroke="#ADB8CC"
        strokeWidth={1.5}
      />
      <Rect
        x={111.45}
        y={116.972}
        width={48}
        height={2}
        rx={1}
        fill="#ADB8CC"
      />
      <Rect
        x={111.45}
        y={110.972}
        width={48}
        height={2}
        rx={1}
        fill="#ADB8CC"
      />
      <Rect
        x={111.45}
        y={122.972}
        width={24}
        height={2}
        rx={1}
        fill="#ADB8CC"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41.45 128.037V85.972c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v42.075"
        fill="#252D3F"
      />
      <Path
        d="M41.45 128.037V85.972c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v42.075"
        stroke="#ADB8CC"
        strokeWidth={1.5}
      />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={24}
        y={53}
        width={81}
        height={87}
      >
        <Path
          d="M24 53.972h47.7c18.225 0 33 14.775 33 33v52.8H24v-85.8z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#a)">
        <Path
          transform="rotate(7 32.22 62.23)"
          fill="#4A3EF6"
          d="M32.2205 62.2302H113.2205V114.2302H32.2205z"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.876 113.965l44.423-30.816 35.059 39.927"
          fill="#3F35D1"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M65.757 98.21a4.4 4.4 0 005.615.69l41.245-26.798L32.22 62.23l33.537 35.98z"
          fill="url(#paint0_linear_835_5770)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M70.828 55.006h6.604l10.207 2.896 13.746 12.209 3.065 11.17v47.665l-17.6-.974-16.022-72.966z"
          fill="#000"
          fillOpacity={0.151161}
        />
      </G>
      <Path
        stroke="#ADB8CC"
        strokeWidth={1.5}
        d="M29.45 127.972H105.45V135.97199999999998H29.45z"
      />
      <Circle
        cx={116.144}
        cy={99.0654}
        r={2.75}
        transform="rotate(6 116.144 99.065)"
        stroke="#ADB8CC"
        strokeWidth={1.5}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M123.45 21.907s2.879 1.945 10.266 5.421c7.386 3.477 12.21 5.774 14.337 9.23-13.379-3.543-25.858-2.717-25.858-2.717l1.255-11.934z"
        fill="#69DB7C"
      />
      <Path
        d="M116.51 95.585l7.579-72.103"
        stroke="#ADB8CC"
        strokeWidth={1.5}
        strokeLinecap="square"
      />
      <Path
        d="M55 150.5v4M57 152.5h-4"
        stroke="#4A3EF6"
        strokeWidth={1.5}
        strokeLinecap="square"
      />
      <Path
        d="M137 166.5v4M139 168.5h-4M51 43.5v4M53 45.5h-4"
        stroke="#DB7F69"
        strokeWidth={1.5}
        strokeLinecap="square"
      />
      <Path
        d="M186.689 102.628a1.939 1.939 0 110-3.878 1.939 1.939 0 010 3.878z"
        stroke="#69DB7C"
        strokeWidth={1.5}
      />
      <Path
        d="M30.23 56.898a6 6 0 00-4.242 7.348M29.454 54a9 9 0 00-6.364 11.023"
        stroke="#ADB8CC"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M157 33.5v4M159 35.5h-4"
        stroke="#ADB8CC"
        strokeWidth={1.5}
        strokeLinecap="square"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_835_5770"
          x1={62.7435}
          y1={47.7076}
          x2={73.3891}
          y2={91.8514}
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

export const IM_PhoneHand = ({ className }: ImageProps) => {
  return (
      <Box className={cn(className)}>
        <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      fill="none"
    >
      <Path
        clipRule="evenodd"
        d="M127.069 94.933a8 8 0 012.928-10.928l19.919-11.5a8 8 0 0110.928 2.928v0a8 8 0 01-2.928 10.928l-19.919 11.5a8 8 0 01-10.928-2.928v0z"
        stroke="#ADB8CC"
        strokeWidth={1.5}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M70 24c-5.523 0-10 4.477-10 10v133c0 5.523 4.477 10 10 10h60c5.523 0 10-4.477 10-10v-20h-9.151a7 7 0 110-14h.5a7.5 7.5 0 010-15H128a8 8 0 010-16h12V34c0-5.523-4.477-10-10-10H70z"
        fill="#252D3F"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M72 32a8 8 0 00-8 8v116a8 8 0 008 8h56a8 8 0 008-8v-9h-5.151a7 7 0 110-14h.5a7.5 7.5 0 010-15H128a8 8 0 010-16h8V40a8 8 0 00-8-8H72z"
        fill="#4A3EF6"
      />
      <Rect
        x={75}
        y={114}
        width={48}
        height={2}
        rx={1}
        fill="#fff"
        fillOpacity={0.304058}
      />
      <Rect
        x={74.8059}
        y={122}
        width={48}
        height={2}
        rx={1}
        fill="#fff"
        fillOpacity={0.304058}
      />
      <Rect
        x={74.8059}
        y={130}
        width={24}
        height={2}
        rx={1}
        fill="#fff"
        fillOpacity={0.304058}
      />
      <Circle cx={100} cy={170} r={4} fill="#fff" fillOpacity={0.16206} />
      <Rect
        x={94}
        y={28}
        width={15}
        height={2}
        rx={1}
        fill="#fff"
        fillOpacity={0.164458}
      />
      <Circle cx={92} cy={29} r={1} fill="#fff" fillOpacity={0.164458} />
      <Path
        d="M35.149 168.23c1.397-2.119 2.096-4.099 2.096-5.94 0-5.134-6.63-25.789-2.593-40.341s10.46-19.016 2.955-48.217c-1.617-8.747 16.352-16.79 22.837 15.913"
        stroke="#ADB8CC"
        strokeWidth={1.5}
      />
      <Path
        d="M44 46.5v4M46 48.5h-4M156 158.5v4M158 160.5h-4"
        stroke="#4A3EF6"
        strokeWidth={1.5}
        strokeLinecap="square"
      />
      <Path
        d="M179.689 89.628a1.94 1.94 0 110-3.878 1.94 1.94 0 010 3.878z"
        stroke="#69DB7C"
        strokeWidth={1.5}
      />
      <Path
        d="M15 108.5v4M17 110.5h-4"
        stroke="#DB7F69"
        strokeWidth={1.5}
        strokeLinecap="square"
      />
      <Path
        d="M37.507 74.006a3.906 3.906 0 012.11-1.757c2.063-.74 4.377.223 5.168 2.151l1.252 3.19c.376.96-.14 2.024-1.16 2.39L39.246 82v0"
        stroke="#ADB8CC"
        strokeWidth={1.5}
      />
      <Rect
        x={120}
        y={102}
        width={39}
        height={16}
        rx={8}
        stroke="#ADB8CC"
        strokeWidth={1.5}
      />
      <Rect
        x={123.849}
        y={118}
        width={32}
        height={15}
        rx={7.5}
        stroke="#ADB8CC"
        strokeWidth={1.5}
      />
      <Rect
        x={123.849}
        y={133}
        width={29}
        height={14}
        rx={7}
        stroke="#ADB8CC"
        strokeWidth={1.5}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M116.098 84.047c-1.136 3.06-2.854 5.72-5.108 7.906-2.565 2.489-5.924 4.466-9.983 5.877a3.12 3.12 0 01-.97.17H100a3.123 3.123 0 01-1.004-.17c-4.064-1.407-7.427-3.384-9.995-5.872-2.255-2.187-3.973-4.845-5.107-7.905-2.064-5.563-1.946-11.69-1.852-16.615l.002-.076c.019-.406.031-.834.038-1.305.034-2.316 1.888-4.232 4.219-4.361 4.86-.27 8.62-1.844 11.833-4.956l.028-.025a2.717 2.717 0 013.677 0l.027.025c3.214 3.112 6.974 4.686 11.834 4.956 2.331.13 4.185 2.045 4.219 4.36.007.476.019.902.038 1.306l.001.032c.094 4.934.211 11.074-1.86 16.653z"
        fill="#69DB7C"
      />
      <Path
        d="M92.992 77.4l4.9 5.2 10.5-11.2"
        stroke="#fff"
        strokeWidth={2.8}
        strokeLinecap="round"
      />
      <Path
        d="M142.5 16.5l1-3M146.135 20.024l2.828-1.414M137.414 16.828L136 14"
        stroke="#ADB8CC"
        strokeWidth={1.5}
        strokeLinecap="square"
      />
      <Path
        d="M97.142 176.267S84.43 189.272 83 193"
        stroke="#ADB8CC"
        strokeWidth={1.5}
      />
    </Svg>
      </Box>
  );
};