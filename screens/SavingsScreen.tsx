import { TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Props } from 'types/NavigationTypes'
import { Box } from '@/components/ui/box'
import SliderWithPlusMinus from '@/components/SliderWithPlusMinus'
import ComputedInterests from '@/components/savings/ComputedInterests'
import OutlinedCard from '@/components/OutlinedCard'
import { Text } from '@/components/ui/text'
import ButtonsTrain from '@/components/ButtonsTrain'
import { Button } from '@/components/ui/button'
import DatePicker from '@/components/DatePicker'

const SavingsScreen: React.FC<Props> = ({ navigation }) => {
  const [activeButton, setActiveButton] = useState('New');
  const [percentage,  setPercentage] = useState(0);
  const [enabled, setEnabled] = useState(false)
  const [lossPercentage, setLossPercentage] = useState(-4.3)
  const [units, setUnits] = useState(2098)
  const [valuation, setValuation] = useState(4988);
  const [entryDate, setEntryDate] = useState<Date | null>(new Date());
  const [exitDate, setExitDate] = useState<Date | null>(new Date());
  // slider
  const [sliderValue, setSliderValue] = React.useState(50);
  const maxValue = 100;

  const handlePress = (button: string) => {
    setActiveButton(button);
  };

  return (
    <Box className='bg-white h-full p-5 gap-7'>

      {/* Top Buttons */}
      <ButtonsTrain  
        buttons={['New', 'onGoing', 'Closed', 'Canceled']} 
        activeButton={activeButton}
        handlePress={handlePress}
      />

      {/* Date Inputs */}
      <Box className='flex flex-row justify-between'>
        <Box className="flex flex-wrap gap-2">
        {/* First row */}
        <Box className="flex flex-row items-center gap-x-2">
          <Text className="">Entry date:</Text>
          <DatePicker date={entryDate} setDate={setEntryDate} />
        </Box>
        {/* Second row*/}
        <Text className="text-center -mt-3">{entryDate?.toDateString()}</Text>
        </Box>
        <Box>
          <Box className="flex flex-wrap gap-2">
            {/* First row */}
            <Box className="flex flex-row items-center gap-x-2">
              <Text className="">Exit date:</Text>
              <DatePicker date={exitDate} setDate={setExitDate} />
            </Box>
            {/* Second row*/}
            <Text className="text-center -mt-3">{exitDate?.toDateString()}</Text>
          </Box>
        </Box>
      </Box>


      {/* Slider */}
      <Box>
        <SliderWithPlusMinus
          maxValue={100}
          setSliderValue={setSliderValue}
          sliderValue={sliderValue}
          buttonText="BUY"
        />
      </Box>
      
      {/* Computed interests */}
      <OutlinedCard title="Computed interests" className='flex flex-row items-center gap-4'>
          <ComputedInterests
            units={units}
            valuation={valuation}
            percentage={percentage}
            lossPercentage={lossPercentage}
            isEnabled={enabled}
            onToggle={() => setEnabled(!enabled)}
          />
      </OutlinedCard>

      <Box>
        <Button variant='rounded' action='positive' className='self-center'>
          <Text className='text-white font-semibold'>Validate</Text>
        </Button>
      </Box>
      
    </Box>
  )
}

export default SavingsScreen