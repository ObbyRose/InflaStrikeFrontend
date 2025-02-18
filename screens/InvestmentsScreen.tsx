import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import { Props } from 'types/NavigationTypes';
import ButtonsTrain from '@/components/ButtonsTrain';
import { Percent, Scroll } from 'lucide-react-native';
import { FontAwesome } from '@expo/vector-icons';
import FullInvestmentsInfo from '@/components/investments-page/FullInvestmentInfo';
import { Button } from '@/components/ui/button';
import OngoingCards from '@/components/investments-page/OngoingCards';
import AvailableCards from '@/components/investments-page/AvailableCards';
import ExpiredCards from '@/components/investments-page/ExpiredCards';

const InvestmentsScreen: React.FC<Props> = ({ navigation }) => {
  const [currentCategory, setCurrentCategory] = React.useState<string>('Available');
  const [currentInvestmentID, setCurrentInvestmentID] = React.useState<number | undefined>(
    undefined
  );

  const available: any[] = [
    {
      id: 1,
      name: 'Best Blockchains',
      amountFrom: 'from 1 BT',
      period: '3 months',
      currentValue: 60000,
      image: '',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
      estimationArriving: 20000,
      Percentages: 10,
      securityBelt: 15000,
      cashOut: 22000,
    },
    {
      id: 2,
      name: 'Meme coins',
      amountFrom: 'from 1 BT',
      period: '3 months',
      currentValue: 60000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
      estimationArriving: 20000,
      Percentages: 10,
      securityBelt: 15000,
      cashOut: 22000,
      image: '',
    },
    {
      id: 3,
      name: 'Real world assets',
      amountFrom: 'from 1 BT',
      period: '3 months',
      currentValue: 60000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
      estimationArriving: 20000,
      Percentages: 10,
      securityBelt: 15000,
      cashOut: 22000,
      image: '',
    },
  ];

  const ongoing: any[] = [
    {
      id: 4,
      name: 'Best Blockchains',
      amount: '3 BTC',
      paid: 180000,
      timeRemain: '3 month',
      currentValue: 185000,
      percentage: 0.3,
    },
  ];

  const expired: any[] = [
    {
      id: 5,
      name: 'Best Blockchains',
      amount: '3 BTC',
      paid: 180000,
      period: '3 month',
      arrival: 185000,
      percentage: 0.3,
    },
  ];

  const currentInvestment = available.find((investment) => investment.id === currentInvestmentID);

  return (
    <>
      <View>
        <ButtonsTrain
          buttons={['Available', 'Ongoing', 'Expired']}
          activeButton={currentCategory}
          handlePress={(category: string) => setCurrentCategory(category)}
        />
        {currentCategory === 'Available' && (
          <ScrollView className=" flex">
            {available.map((investment) => {
              return (
                <AvailableCards
                  key={investment.id}
                  investment={investment}
                  setCurrentInvestmentID={setCurrentInvestmentID}
                />
              );
            })}
          </ScrollView>
        )}
        {currentCategory === 'Ongoing' && (
          <ScrollView>
            {ongoing.map((investment) => (
              <OngoingCards key={investment.id} investment={investment} />
            ))}
          </ScrollView>
        )}
        {currentCategory === 'Expired' && (
          <ScrollView>
            {expired.map((investment) => (
              <ExpiredCards key={investment.id} investment={investment} />
            ))}
          </ScrollView>
        )}
      </View>
      <FullInvestmentsInfo
        currentInvestment={currentInvestment}
        handleBackPress={() => setCurrentInvestmentID(0)}
        handleSubmitPress={() =>
          ongoing.push(available.find((investment) => investment.id === currentInvestmentID))
        }
      />
    </>
  );
};

export default InvestmentsScreen;
