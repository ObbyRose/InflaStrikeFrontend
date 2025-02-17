import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@/components/ui/slider';
interface SliderProps {
  maxValue?: number;
}

const SliderWithArrow: React.FC<SliderProps> = ({ maxValue = 32324 }) => {
  return (
    <Slider
      // defaultValue={178}
      minValue={1}
      maxValue={maxValue}
      step={1}
      size="md"
      orientation="horizontal"
      isDisabled={false}
      isReversed={false}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb shape="triangle" />
    </Slider>
  );
};

export default SliderWithArrow;
