

export const validateAndConvertBirthday = (birthday: string): Date | null => {
    if (birthday.trim().length !== 14) return null;

    const parts = birthday.split(" / ");
    if (parts.length !== 3) return null;

    const [month, day, year] = parts.map(Number);

    const currentYear = new Date().getFullYear();
    const minYear = 1900;
    const maxYear = currentYear - 18;

    if (month < 1 || month > 12) return null;
    if (day < 1 || day > 31) return null;
    if (year < minYear || year > maxYear) return null;

    const date = new Date(year, month - 1, day);
    if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
        return null;
    }

    return date;
};

export const formatNumber = (num: number, decimals = 2) => {
    const roundedNum = parseFloat(num.toFixed(decimals));
    return new Intl.NumberFormat('en-US').format(roundedNum);
};