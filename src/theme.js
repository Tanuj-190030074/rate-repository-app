import { Platform } from "react-native";

const mainColor = '#e1e4e8';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textLabel: '#ffffff',
    primary: '#0366d6',
    appTab: '#24292e',
    textAppTab: '#ffffff',
    main: mainColor,
    item: '#ffffff',
    textError: '#d73a4a'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  button: {
    padding: 10,
    margin: 5,
    textAlign: 'center',
    borderRadius: 3
  },
  separator: {
    height: 10,
    backgroundColor: mainColor
  },
};

export default theme;