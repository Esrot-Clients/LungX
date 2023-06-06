import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import metrics from '../../constants/layout';
import fonts from '../../constants/fontsSize';
import colors from '../../constants/colors';
import { Title } from '../Atoms/Typography';


interface Props {
  placeholder?: string;
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onSubmitEditing?: () => void;
  height?: number;
  width?: number;
}

const UnderLineTextinput: React.FC<Props> = ({
  placeholder,
  label,
  value,
  height,
  width,
  onChangeText,
  onSubmitEditing,
}) => {
  
  return (
    <View style={{marginVertical: 10,}}>
      <TextInput
        style={[
          styles.textinput,
          {
            height: height ? height : 55,
            width: width ? width : metrics.screenWidth * 0.9,
          },
        ]}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        placeholder={placeholder}
        placeholderTextColor="gray"
        autoCapitalize="none"
        multiline={height ? true : false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textinput: {
    borderColor: colors.green,
    borderRadius: 8,
    borderBottomWidth: 1,
    marginVertical: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    fontSize: fonts.font12,
    color: colors.black,

  },
});

export default UnderLineTextinput;