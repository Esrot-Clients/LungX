import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import colors from '../constants/colors';
import {Title} from '../components/Atoms/Typography';
import metrics from '../constants/layout';
import fonts from '../constants/fontsSize';
import ComplaintsCard from '../components/Molecules/ComplaintsCard';
import Textinput from '../components/Atoms/Textinput';
import DropdownComponent from '../components/Molecules/Dropdown';
import {BtnContain} from '../components/Atoms/Buttons';

export default function SentReportDetails({navigation}: any) {
  const data = [
    {label: 'Out-patient', value: 'Out-patient'},
    {label: 'In-patient', value: 'In-patient'},
  ];

  const [course, setcourse] = useState('');
  const [type, settype] = useState('');

  const [name, setname] = useState('');

  const [text, setText] = useState('');

  const handleFirstDropdown = (value: any) => {
    console.log(`Course value is ${value}`);
    setcourse(value);
  };

  const handleTextChange = (newText: string) => {
    // Split the text into lines
    const lines = newText.split('\n');

    // Format each line with a bullet point and indentation
    const formattedText = lines.map(line => `• ${line}`).join('\n');

    setText(formattedText);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginHorizontal: 10}}>
          <Title color={colors.black} size={fonts.font12}>
            Choose Patient Status :
          </Title>
        </View>
        <DropdownComponent
          dropdowndata={data}
          width={metrics.screenWidth / 2.5}
          onDropdownChange={handleFirstDropdown}
          placeholder="Status"
        />
      </View>

      <Textinput label={'Patient name'} />
      <Textinput label={'Patient ID'} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: metrics.screenWidth * 0.9,
        }}>
        <Textinput width={metrics.screenWidth * 0.43} label="Weight(kg)" />
        <Textinput width={metrics.screenWidth * 0.43} label="Temperature(C)" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: metrics.screenWidth * 0.9,
        }}>
        <Textinput
          width={metrics.screenWidth * 0.43}
          label="Oxygen saturation(SpO2)"
        />
        <Textinput
          width={metrics.screenWidth * 0.43}
          label="Blood Pressure(mm/hg)"
        />
      </View>
      <ComplaintsCard />

      <View style={styles.symptomsDetails}>
        <Title color={colors.green} size={fonts.font12}>
          Anterior Recordings and Tags
        </Title>
      </View>

      <View style={styles.symptomsDetails}>
        <Title color={colors.green} size={fonts.font12}>
          Posterior Recordings and Tags
        </Title>
      </View>

      <View
        style={{
          marginVertical: 20,
          alignItems: 'flex-start',
          width: metrics.screenWidth * 0.9,
        }}>
        <View style={{width: metrics.screenWidth * 0.5}}>
          <BtnContain
            label="Go to annotations"
            icon='arrow-left'
            color={colors.green}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  symptomsDetails: {
    display: 'flex',
    flexDirection: 'row',
    width: metrics.screenWidth * 0.9,
    marginVertical: 8,
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: colors.green,
    padding: 10,
    paddingHorizontal: 30,
  },
});
