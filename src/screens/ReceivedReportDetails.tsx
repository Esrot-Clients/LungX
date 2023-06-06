import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SubTitle, Title} from '../components/Atoms/Typography';
import metrics from '../constants/layout';
import fonts from '../constants/fontsSize';
import Textinput from '../components/Atoms/Textinput';
import ReceivedReportCollapsibleCard from '../components/Molecules/ReceivedReportCollapsibleCard';

export default function ReceivedReportDetails() {
  return (
    <View style={styles.container}>
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

      <Textinput label={'Patient name'} />
      <Textinput label={'Patient ID'} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: metrics.screenWidth * 0.9,
        }}>
        <Textinput width={metrics.screenWidth * 0.43} label="Weight(kg)" />
      </View>

      <ReceivedReportCollapsibleCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 10,
  },
  InfoContainer: {
    width: metrics.screenWidth * 0.85,
  },
});
