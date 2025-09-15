import { View } from 'react-native';

import { DimensionValue } from 'react-native';

type SpacerProps = {
  height?: DimensionValue;
  width?: DimensionValue;
};

export default function Spacer({ height = 20, width = '100%' }: SpacerProps) {
  return <View style={{ height, width }} />;
}