

export const convertBirthday = (birthday: string) => {
    const parts = birthday.split(" / ");
    const [month, day, year] = parts.map(Number);
    return new Date(year, month - 1, day);
};

export const formatNumber = (num: number, decimals = 2) => {
    const roundedNum = parseFloat(num.toFixed(decimals));
    return new Intl.NumberFormat('en-US').format(roundedNum);
};