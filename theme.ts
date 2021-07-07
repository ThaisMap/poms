const theme = {
  colors: {
    background: '#001B49',
    primary: '#30C5FF',
    text: '#ADE8F4',
  },
  fonts: {
    numeric: 'OdibeeSans_400Regular',
    regular: 'OpenSans_400Regular',
    semibold: 'OpenSans_600SemiBold',
  },
  spacing: (size: number = 1) => {
    return size * 8;
  },
};

export default theme;
