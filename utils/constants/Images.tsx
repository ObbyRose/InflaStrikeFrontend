// @ts-nocheck
import { Box } from "@/components/ui/box";
import { cn } from "@/components/ui/cn";
import Svg, { Path, G, Mask, Rect, Defs, ClipPath, LinearGradient, Stop, Circle, Ellipse } from "react-native-svg";

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

export const IM_ProcessingVerification = ({ className }: ImageProps) => {
  return (
      <Box className={cn(className)}>
        <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 208 200"
      fill="none"
    >
      <Path
        d="M44.778 96.163S37.208 93.58 10.82 104"
        stroke="#ADB8CC"
        strokeWidth={1.5}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M139.821 142c-3.027 0-5.974-.346-8.802-1h17.604c-2.829.654-5.775 1-8.802 1zm38.95-39a38.853 38.853 0 01-5.993 20.794V82.206A38.852 38.852 0 01178.771 103z"
        fill="#4A3EF6"
      />
      <Mask id="a" fill="#fff">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M139.821 142c21.511 0 38.949-17.461 38.949-39 0-21.54-17.438-39-38.949-39-21.512 0-38.95 17.46-38.95 39 0 21.539 17.438 39 38.95 39zm0-9c16.547 0 29.961-13.431 29.961-30 0-16.569-13.414-30-29.961-30-16.548 0-29.962 13.431-29.962 30 0 16.569 13.414 30 29.962 30z"
        />
      </Mask>
      <Path
        d="M177.27 103c0 20.712-16.768 37.5-37.449 37.5v3c22.341 0 40.449-18.134 40.449-40.5h-3zm-37.449-37.5c20.681 0 37.449 16.787 37.449 37.5h3c0-22.366-18.108-40.5-40.449-40.5v3zm-37.45 37.5c0-20.713 16.768-37.5 37.45-37.5v-3c-22.342 0-40.45 18.134-40.45 40.5h3zm37.45 37.5c-20.682 0-37.45-16.788-37.45-37.5h-3c0 22.366 18.108 40.5 40.45 40.5v-3zm28.461-37.5c0 15.742-12.744 28.5-28.461 28.5v3c17.377 0 31.461-14.105 31.461-31.5h-3zm-28.461-28.5c15.717 0 28.461 12.758 28.461 28.5h3c0-17.395-14.084-31.5-31.461-31.5v3zM111.359 103c0-15.742 12.745-28.5 28.462-28.5v-3c-17.378 0-31.462 14.105-31.462 31.5h3zm28.462 28.5c-15.717 0-28.462-12.758-28.462-28.5h-3c0 17.395 14.084 31.5 31.462 31.5v-3z"
        fill="#ADB8CC"
        mask="url(#a)"
      />
      <Ellipse
        cx={139.821}
        cy={103}
        rx={29.9615}
        ry={30}
        fill="#000"
        fillOpacity={0.197626}
      />
      <Path
        d="M166.235 131.75a1.002 1.002 0 010-1.415l1.412-1.413a.998.998 0 011.413 0l4.237 4.242-2.825 2.828-4.237-4.242z"
        stroke="#ADB8CC"
        strokeWidth={1.5}
      />
      <Rect
        width={13.991}
        height={29.9807}
        rx={2}
        transform="rotate(-45.037 251.743 -131.569)"
        stroke="#ADB8CC"
        strokeWidth={1.5}
      />
      <Rect
        x={52.9321}
        y={71}
        width={43.9435}
        height={52}
        rx={4}
        fill="#fff"
        fillOpacity={0.15}
      />
      <Mask
        id="b"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={52}
        y={71}
        width={45}
        height={52}
      >
        <Rect
          x={52.9321}
          y={71}
          width={43.9435}
          height={52}
          rx={4}
          fill="#fff"
        />
      </Mask>
      <G mask="url(#b)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M81.06 94.8c-1.681 1.687-3.74 2.541-6.116 2.541-2.376 0-4.434-.854-6.115-2.54-1.682-1.685-2.535-3.748-2.535-6.13 0-2.383.853-4.445 2.535-6.131 1.68-1.686 3.738-2.54 6.115-2.54 2.376 0 4.434.855 6.116 2.54 1.681 1.686 2.534 3.748 2.534 6.13 0 2.383-.852 4.445-2.534 6.13zm8.728 10.607c.144.808.242 1.574.29 2.275.049.686.073 1.401.073 2.126 0 1.88-.596 3.402-1.77 4.523-1.162 1.108-2.697 1.669-4.564 1.669H66.525c-1.868 0-3.403-.562-4.564-1.669-1.175-1.122-1.771-2.643-1.771-4.522 0-.722.024-1.437.072-2.126.048-.703.146-1.469.29-2.276a17.98 17.98 0 01.559-2.286 11.33 11.33 0 01.937-2.134 8.04 8.04 0 011.414-1.847 6.227 6.227 0 012.032-1.28 6.999 6.999 0 012.593-.47c.367 0 .722.15 1.406.597.427.28.92.598 1.465.947.47.3 1.108.582 1.894.837.769.249 1.548.375 2.318.375s1.55-.126 2.317-.375c.787-.255 1.425-.537 1.895-.837.55-.353 1.043-.671 1.465-.947.684-.447 1.039-.597 1.405-.597.934 0 1.806.158 2.594.47.79.314 1.473.744 2.032 1.28a8.05 8.05 0 011.414 1.847c.39.688.706 1.406.938 2.133.224.704.412 1.473.558 2.287z"
          fill="#fff"
          fillOpacity={0.400281}
        />
      </G>
      <Rect
        x={116.85}
        y={97}
        width={45.9409}
        height={2}
        rx={1}
        fill="#fff"
        fillOpacity={0.304058}
      />
      <Rect
        x={116.85}
        y={89}
        width={45.9409}
        height={2}
        rx={1}
        fill="#fff"
        fillOpacity={0.304058}
      />
      <Rect
        x={116.85}
        y={105}
        width={45.9409}
        height={2}
        rx={1}
        fill="#fff"
        fillOpacity={0.304058}
      />
      <Rect
        x={116.85}
        y={113}
        width={22.9705}
        height={2}
        rx={1}
        fill="#fff"
        fillOpacity={0.304058}
      />
      <Path
        d="M41.301 111l-10.82 2.86c-4.614 1.399-4.384 7.934-3.668 12.304.366 2.234 2.663 3.408 4.758 2.554 4.056-1.654 11.109-4.767 20.202-9.718 0 0 19.15-18.613 26.266-12.928 7.115 5.686 4.855 15.428-12.02 28.928-8.877 8-7.899 10.574-20.502 21.254-12.603 10.68-24.932 5.642-28.132 3.668"
        stroke="#ADB8CC"
        strokeWidth={1.5}
      />
      <Path
        clipRule="evenodd"
        d="M76.037 110.233c4.501 4.054-1.118 10.766-3.522 8.313l-4.333-3.929s-2.372-1.803-1.381-2.842c.99-1.04 5.394-5.003 9.236-1.542z"
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
        d="M173.277 38.5l.999-3M176.908 42.024l2.825-1.414M168.198 38.828L166.786 36"
        stroke="#ADB8CC"
        strokeWidth={1.5}
        strokeLinecap="square"
      />
    </Svg>
      </Box>
  );
};

export const IM_PhoneHandVerified = ({ className }: ImageProps) => {
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
        x={80}
        y={56}
        width={40}
        height={40}
        rx={20}
        fill="url(#paint0_linear_835_5795)"
      />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={90}
        y={66}
        width={20}
        height={20}
      >
        <Path fill="#fff" d="M90 66H110V86H90z" />
      </Mask>
      <G mask="url(#a)" fill="#fff">
        <Path d="M99.375 80.5c1-1 2.5-1 3.5 0l.75.75L106 78.625c-.875-.5-1.625-.5-2.5-.5-.875-.125-1.75-.375-1.75-1.125s1-.5 1.75-1.875c0 0 3.375-9.125-3.625-9.125-6.875 0-3.5 9.125-3.5 9.125.75 1.25 1.75 1 1.75 1.875s-.875.875-1.75 1c-1.375.125-2.625-.125-3.875 2.125C91.75 81.5 91.375 86 91.375 86h10l-2-2c-1-1-1-2.5 0-3.5zM108.625 86s-.125-1.125-.25-2.5L106 86h2.625z" />
        <Path d="M102.875 85.625l-2.5-2.5c-.5-.5-.5-1.25 0-1.75s1.25-.5 1.75 0L103.75 83l4.125-4.5c.5-.5 1.25-.5 1.75-.125.5.5.5 1.25.125 1.75l-5 5.375c-.375.375-.625.5-1 .5s-.625-.125-.875-.375z" />
      </G>
      <Rect
        x={85}
        y={110}
        width={37}
        height={2}
        rx={1}
        fill="#fff"
        fillOpacity={0.304058}
      />
      <Rect
        x={85}
        y={116}
        width={37}
        height={2}
        rx={1}
        fill="#fff"
        fillOpacity={0.304058}
      />
      <Rect x={73} y={107} width={8} height={8} rx={4} fill="#5ACC6D" />
      <Path
        d="M75.133 111l1.334 1.333 2.666-2.666"
        stroke="#fff"
        strokeWidth={0.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Rect x={73} y={119} width={8} height={8} rx={4} fill="#5ACC6D" />
      <Path
        d="M75.133 123l1.334 1.333 2.666-2.666"
        stroke="#fff"
        strokeWidth={0.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Rect x={73} y={131} width={8} height={8} rx={4} fill="#5ACC6D" />
      <Path
        d="M75.133 135l1.334 1.333 2.666-2.666"
        stroke="#fff"
        strokeWidth={0.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Rect
        x={85}
        y={122}
        width={37}
        height={2}
        rx={1}
        fill="#fff"
        fillOpacity={0.304058}
      />
      <Rect
        x={85}
        y={128}
        width={37}
        height={2}
        rx={1}
        fill="#fff"
        fillOpacity={0.304058}
      />
      <Rect
        x={85}
        y={134}
        width={18}
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
      <Defs>
        <LinearGradient
          id="paint0_linear_835_5795"
          x1={100.057}
          y1={115.829}
          x2={139.943}
          y2={75.9431}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#52D9FF" />
          <Stop offset={1} stopColor="#D51AFF" />
        </LinearGradient>
      </Defs>
    </Svg>
      </Box>
  );
};
export const IM_America = ({ className }: ImageProps) => {
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
        x={80}
        y={56}
        width={40}
        height={40}
        rx={20}
        fill="url(#paint0_linear_835_5795)"
      />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={90}
        y={66}
        width={20}
        height={20}
      >
        <Path fill="#fff" d="M90 66H110V86H90z" />
      </Mask>
      <G mask="url(#a)" fill="#fff">
        <Path d="M99.375 80.5c1-1 2.5-1 3.5 0l.75.75L106 78.625c-.875-.5-1.625-.5-2.5-.5-.875-.125-1.75-.375-1.75-1.125s1-.5 1.75-1.875c0 0 3.375-9.125-3.625-9.125-6.875 0-3.5 9.125-3.5 9.125.75 1.25 1.75 1 1.75 1.875s-.875.875-1.75 1c-1.375.125-2.625-.125-3.875 2.125C91.75 81.5 91.375 86 91.375 86h10l-2-2c-1-1-1-2.5 0-3.5zM108.625 86s-.125-1.125-.25-2.5L106 86h2.625z" />
        <Path d="M102.875 85.625l-2.5-2.5c-.5-.5-.5-1.25 0-1.75s1.25-.5 1.75 0L103.75 83l4.125-4.5c.5-.5 1.25-.5 1.75-.125.5.5.5 1.25.125 1.75l-5 5.375c-.375.375-.625.5-1 .5s-.625-.125-.875-.375z" />
      </G>
      <Rect
        x={85}
        y={110}
        width={37}
        height={2}
        rx={1}
        fill="#fff"
        fillOpacity={0.304058}
      />
      <Rect
        x={85}
        y={116}
        width={37}
        height={2}
        rx={1}
        fill="#fff"
        fillOpacity={0.304058}
      />
      <Rect x={73} y={107} width={8} height={8} rx={4} fill="#5ACC6D" />
      <Path
        d="M75.133 111l1.334 1.333 2.666-2.666"
        stroke="#fff"
        strokeWidth={0.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Rect x={73} y={119} width={8} height={8} rx={4} fill="#5ACC6D" />
      <Path
        d="M75.133 123l1.334 1.333 2.666-2.666"
        stroke="#fff"
        strokeWidth={0.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Rect x={73} y={131} width={8} height={8} rx={4} fill="#5ACC6D" />
      <Path
        d="M75.133 135l1.334 1.333 2.666-2.666"
        stroke="#fff"
        strokeWidth={0.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Rect
        x={85}
        y={122}
        width={37}
        height={2}
        rx={1}
        fill="#fff"
        fillOpacity={0.304058}
      />
      <Rect
        x={85}
        y={128}
        width={37}
        height={2}
        rx={1}
        fill="#fff"
        fillOpacity={0.304058}
      />
      <Rect
        x={85}
        y={134}
        width={18}
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
      <Defs>
        <LinearGradient
          id="paint0_linear_835_5795"
          x1={100.057}
          y1={115.829}
          x2={139.943}
          y2={75.9431}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#52D9FF" />
          <Stop offset={1} stopColor="#D51AFF" />
        </LinearGradient>
      </Defs>
    </Svg>
      </Box>
  );
};