import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import colors from '../constants/colors';
import {SubTitle, Title} from '../components/Atoms/Typography';
import metrics from '../constants/layout';
import fonts from '../constants/fontsSize';
import ComplaintsCard from '../components/Molecules/ComplaintsCard';
import Textinput from '../components/Atoms/Textinput';
import DropdownComponent from '../components/Molecules/Dropdown';
import {BtnContain} from '../components/Atoms/Buttons';
import CheckBox from '@react-native-community/checkbox';

export default function OutPatientsDetailsScreen({navigation}: any) {
  const [patientstatus, setpatientstatus] = useState('Out Patient');
  const [patientname, setpatientname] = useState('');
  const [patientid, setpatientid] = useState('');
  const [patientAge, setpatientAge] = useState('');
  const [patientGender, setpatientGender] = useState('male');
  const [patientWeight, setpatientWeight] = useState('');
  const [patientTemperture, setpatientTemperature] = useState('');
  const [patientOxygenLevel, setpatientPatientOxygenLevel] = useState('');
  const [patientBloodPressure, setpatientBloodPressure] = useState('');

  const PatientGenderCard = () => (
    <View style={{marginVertical: 10}}>
      <Title color={colors.black} size={fonts.font12}>
        Gender
      </Title>
      <View
        style={[
          styles.PatientSelectionContainer,
          {width: metrics.screenWidth * 0.43},
        ]}>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <CheckBox tintColors={{true: colors.green, false: 'black'}} 
          value={patientGender === 'male'}
          />
          <SubTitle size={fonts.font12}>Male</SubTitle>
        </View>

        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <CheckBox tintColors={{true: colors.green, false: 'black'}} 
           value={patientGender === 'female'}
          />
          <SubTitle size={fonts.font12}>Female</SubTitle>
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{alignItems: 'flex-end', width: metrics.screenWidth * 0.9}}>
        <Title color="#000" size={fonts.font12}>Patient Status: {patientstatus}</Title>
      </View>

      <Textinput
        label={'Patient name'}
        editable={false}
        value="Pratyush Motha"
      />
      <Textinput label={'Patient ID'} editable={false} value="ABCD1234" />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: metrics.screenWidth * 0.9,
        }}>
        <Textinput width={metrics.screenWidth * 0.43} label="Age" value="23" />
        <PatientGenderCard />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: metrics.screenWidth * 0.9,
        }}>
        <Textinput
          width={metrics.screenWidth * 0.43}
          label="Weight(kg)"
          value="80"
        />
        <Textinput
          width={metrics.screenWidth * 0.43}
          label="Temperature(C)"
          value="37"
        />
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
          value="92%"
        />
        <Textinput
          width={metrics.screenWidth * 0.43}
          label="Blood Pressure(mm/hg)"
          value="120/60"
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
          justifyContent: 'space-evenly',
          width: metrics.screenWidth * 0.9,
          flexDirection: 'row',
        }}>
        <View style={{width: metrics.screenWidth * 0.4}}>
          <BtnContain
            label="Out Patient"
            icon="arrow-left"
            color={colors.green}
            onPress={() => navigation.goBack()}
          />
        </View>

        <View style={{width: metrics.screenWidth * 0.4}}>
          <BtnContain
            label="Share Report"
            color={colors.green}
            onPress={() => navigation.navigate('Search Doctor')}
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
  PatientSelectionContainer: {
    borderColor: colors.green,
    borderRadius: 8,
    borderWidth: 0.5,
    marginVertical: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    fontSize: fonts.font12,
    color: colors.black,
    flexDirection: 'row',
  },
});
