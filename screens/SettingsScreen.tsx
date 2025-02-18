import React, { useState } from 'react';
import OutlinedCard from '@/components/OutlinedCard';
import LanguageSelector from '@/components/settings/LanguageSelector';
import CurrencySelector from '@/components/settings/CurrencySelector';
import ThemeSelector from '@/components/settings/ThemeSelector';

const SettingsScreen = () => {
  const [currency, setCurrency] = useState("Usd");
  const [theme, setTheme] = useState("System");

  return (
    <OutlinedCard title='Settings' className='gap-6 m-auto w-[90%]'>
      <LanguageSelector />
      <CurrencySelector currency={currency} setCurrency={setCurrency} />
      <ThemeSelector theme={theme} setTheme={setTheme} />
    </OutlinedCard>
  );
};

export default SettingsScreen;
