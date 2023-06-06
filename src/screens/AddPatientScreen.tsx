import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import Textinput from '../components/Atoms/Textinput';
import metrics from '../constants/layout';
import CheckBoxComponent from '../components/Atoms/CheckBox';
import {SubTitle, Title} from '../components/Atoms/Typography';
import fonts from '../constants/fontsSize';
import colors from '../constants/colors';
import SymptomsCard from '../components/Molecules/SymptomsCard';
import DropdownComponent from '../components/Molecules/Dropdown';
import { BtnContain } from '../components/Atoms/Buttons';

const data = [
  {label: 'Out-patient', value: 'Out-patient'},
  {label: 'In-patient', value: 'In-patient'},
];

export default function AddPatientScreen() {
  const [course, setcourse] = useState('');
  const [type, settype] = useState('');

  const [name, setname] = useState('')

  const [text, setText] = useState('');

  const handleFirstDropdown = (value: any) => {
    console.log(`Course value is ${value}`);
    setcourse(value);
  };

  const handleTextChange = (newText: string) => {
    // Split the text into lines
    const lines = newText.split('\n');
  
    // Format each line with a bullet point and indentation
    const formattedText = lines.map((line) => `• ${line}`).join('\n');
  
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

      <View style={{width: metrics.screenWidth * 0.9}}>
      <Title color={colors.green}>
        Tick all Symptoms that apply
      </Title>
      </View>



      <View style={{width: metrics.screenWidth * 0.9, marginVertical: 15}}>
      <Title color={colors.black}>
        Chief Complaints
      </Title>
      </View>

      <SymptomsCard title='Cough'/>
      <SymptomsCard title='Breathlessness'/>
      <SymptomsCard title='Fever'/>
      <SymptomsCard title='Weight loss'/>

      <View style={{width: metrics.screenWidth * 0.9, marginVertical: 15}}>
      <Title color={colors.black}>
        Chronic Disease
      </Title>
      </View>
      <SymptomsCard title='Asthma'/>
      <SymptomsCard title='Hypertension'/>
      <SymptomsCard title='Diabeties'/>
      <SymptomsCard title='Heart Disease'/>


      <View style={{width: metrics.screenWidth * 0.9, marginVertical: 15}}>
      <Title color={colors.black}>
        Lifestyle habits
      </Title>
      </View>

      <SymptomsCard title='Alcohol'/>
      <SymptomsCard title='Smoking'/>


      <View style={{width: metrics.screenWidth * 0.9, marginVertical: 15}}>
      <Title color={colors.black}>
        Additional Notes
      </Title>
      </View>

      <Textinput onChangeText={handleTextChange} multiline={true} height={150}/>


      <View style={{marginVertical: 20, alignItems: 'center'}}>
            <View style={{width: metrics.screenWidth * 0.4}}>
              <BtnContain
                label="Start Recording"
                color={colors.green}
                onPress={() => {}}
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
