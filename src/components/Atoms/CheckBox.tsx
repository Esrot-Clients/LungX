import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import colors from '../../constants/colors';
import { SubTitle } from './Typography';
import fonts from '../../constants/fontsSize';

interface Props {
    label?: string;
    isChecked?: number;
    onPress?: (value: boolean) => void;
}


export default function CheckBoxComponent({
    label,
    isChecked,
    onPress
}: Props) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const handleToggle = () =>{
        setToggleCheckBox(!toggleCheckBox)
        onPress && onPress(toggleCheckBox)
  }
  return (
    <View style={{alignItems: 'center', flexDirection: 'row'}}>
      <CheckBox
        tintColors={{true: colors.green, false: 'black'}}
        disabled={false}
        value={toggleCheckBox}
        onValueChange={handleToggle}
      />
      <SubTitle size={fonts.font12}>{label}</SubTitle>
    </View>
  );
}

const styles = StyleSheet.create({});
