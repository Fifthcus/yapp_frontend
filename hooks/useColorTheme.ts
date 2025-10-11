import { Colors } from "@/assets/styles/colors/styles";
import { useColorScheme } from "react-native";

const useColorTheme = () => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];
  return theme;
};

export default useColorTheme;