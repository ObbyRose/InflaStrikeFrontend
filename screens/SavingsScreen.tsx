import { TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Props } from 'types/NavigationTypes'
import { Box } from '@/components/ui/box'
import SliderWithPlusMinus from '@/components/SliderWithPlusMinus'
import ComputedInterests from '@/components/savings/ComputedInterests'
import OutlinedCard from '@/components/OutlinedCard'
import { Text } from '@/components/ui/text'
import ButtonsTrain from '@/components/ButtonsTrain'

const SavingsScreen: React.FC<Props> = ({ navigation }) => {
  const [activeButton, setActiveButton] = useState('New');
  const [percentage,  setPercentage] = useState(0);
  const [enabled, setEnabled] = useState(false)
  const [lossPercentage, setLossPercentage] = useState(-4.3)
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
        <Box>


        </Box>
        <Box>

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
            units={2097}
            valuation={4987}
            percentage={percentage}
            lossPercentage={-4.2}
            isEnabled={enabled}
            onToggle={() => setEnabled(!enabled)}
          />
      </OutlinedCard>
      
    </Box>

    
  )
}

export default SavingsScreen