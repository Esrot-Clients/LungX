import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CheckBoxComponent from '../Atoms/CheckBox';
import colors from '../../constants/colors';
import fonts from '../../constants/fontsSize';
import metrics from '../../constants/layout';
import {SubTitle} from '../Atoms/Typography';

interface Props {
  title?: string;
  options?: any;
  onSelectSymptom?: (value: number) => void;
  onSelectSymptomOption?: (value: number) => void;
}

export default function SymptomsCard({title, options}: Props) {
  const [activeSymptomsCard, setactiveSymptomsCard] = useState(false);

  const handleActiveStateofCheckbox = (value: boolean) => {
    setactiveSymptomsCard(value);
  };

  return (
    <View style={{display: 'flex', marginVertical: 10}}>
      <View style={styles.SymptomsCard}>
        <View style={{flex: 0.5}}>
          <SubTitle size={fonts.font12}>{title}</SubTitle>
        </View>
        <View style={{flex: 0.5, alignItems: 'flex-end'}}>
          <CheckBoxComponent
            label="Yes"
            onPress={handleActiveStateofCheckbox}
          />
        </View>
      </View>

      {activeSymptomsCard && (
        <View style={styles.optionsCard}>
          <View style={{paddingLeft: 20}}>
            <SubTitle size={fonts.font12}>Since how long ?</SubTitle>
          </View>
          
          <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
            {
              options.map((item: any) => (
                <View
                key={item.id}
                style={{
                  width: '50%',
                  alignItems: 'flex-start',
                }}>
                <CheckBoxComponent label={item.title}  />
              </View>

              ))
            }


          </View>

        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  SymptomsCard: {
    flexDirection: 'row',
    width: metrics.screenWidth * 0.9,
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: colors.green,
  },
  optionsCard: {
    width: metrics.screenWidth * 0.9,
    padding: 10,
  },
});
