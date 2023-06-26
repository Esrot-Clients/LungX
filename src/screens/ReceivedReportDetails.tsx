import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import {SubTitle, Title} from '../components/Atoms/Typography';
import metrics from '../constants/layout';
import fonts from '../constants/fontsSize';
import Textinput from '../components/Atoms/Textinput';
import ReceivedReportCollapsibleCard from '../components/Molecules/ReceivedReportCollapsibleCard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constants/colors';
import CheckBox from '@react-native-community/checkbox';

export default function ReceivedReportDetails() {
  const [showSessionCard, setShowSessionCard] = useState(false);
  const [patientGender, setpatientGender] = useState('male');


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


  const DailyReportContainer = (props: any) => (
    <View style={styles.PatientDetailsContainer}>
      <TouchableOpacity disabled>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Title color={colors.green} >{'Vitals'}</Title>
          </View>
          <View
            style={{
              alignItems: 'flex-end',
              flex: 1,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                setShowSessionCard(!showSessionCard);
              }}>
              <MaterialCommunityIcons
                name="plus"
                size={fonts.font22}
                color={colors.green}
              />
            </TouchableOpacity>
          </View>
        </View>
        {showSessionCard ? (
              <><View style={{ flexDirection: 'row', marginVertical: 10 }}>
            <View style={{ flex: 0.5 }}>
              <Title size={fonts.font12}>
                Temperature (C)
              </Title>
            </View>
            <View style={{ flex: 0.2, }}>
              <Title size={fonts.font12}>:</Title>
            </View>
            <View style={{ flex: 0.33, alignItems: 'flex-end' }}>
              <Title size={fonts.font12}>99.5</Title>
            </View>
          </View><View style={{ flexDirection: 'row', marginVertical: 10 }}>
              <View style={{ flex: 0.5 }}>
                <Title size={fonts.font12}>
                  Temperature (C)
                </Title>
              </View>
              <View style={{ flex: 0.2, }}>
                <Title size={fonts.font12}>:</Title>
              </View>
              <View style={{ flex: 0.33, alignItems: 'flex-end' }}>
                <Title size={fonts.font12}>99.5</Title>
              </View>
            </View></>

                
              
            )
  
         : null}
      </TouchableOpacity>
    </View>
  );


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.InfoContainer}>
        <Title>Doctor name: Dr. Karan</Title>

        <SubTitle size={fonts.font12}>Doctor ID : ABC1234EF7</SubTitle>

        <SubTitle size={fonts.font12}>Speciality : Pulmonologist</SubTitle>

        <SubTitle size={fonts.font12}>
          Hospital Name : Apollo Hyderabad
        </SubTitle>

        <View style={{alignItems: 'flex-end'}}>
          <Title>Patient Status: Out Patient</Title>
        </View>
      </View>

      <Textinput label={'Patient name'} editable={false} />
      <Textinput label={'Patient ID'} editable={false} />

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
        <Textinput width={metrics.screenWidth * 0.43} label="Weight(kg)" />
      </View>

      {/* <ReceivedReportCollapsibleCard /> */}
      <DailyReportContainer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  InfoContainer: {
    width: metrics.screenWidth * 0.85,
  },
  PatientDetailsContainer: {
    width: metrics.screenWidth * 0.9,
    paddingVertical: 10,
    marginVertical: 5,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: colors.green,
    borderRadius: 8,
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
