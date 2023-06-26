import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import metrics from '../constants/layout';

import * as Typography from '../components/Atoms/Typography';
import colors from '../constants/colors';
import fonts from '../constants/fontsSize';
import DropdownComponent from '../components/Molecules/Dropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const data = [
  {label: 'Out-patient', value: 'Out-patient'},
  {label: 'In-patient', value: 'In-patient'},
];

const PatientDetailsCard = ({showView = false}) => {
  return (
    <View style={styles.PatientDetailsContainer}>
      <TouchableOpacity disabled>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Typography.Title>Patient ID : AB1234D47</Typography.Title>
            <View style={{height: 3}} />
            <Typography.Title size={fonts.font12}>
              Patient Name : Pratyush Motha
            </Typography.Title>
          </View>
          {showView ? (
            <View
              style={{
                alignItems: 'flex-end',
                flex: 1,
                justifyContent: 'center',
              }}>
              <TouchableOpacity onPress={() => {}}>
                <Typography.Title color={colors.green}>View</Typography.Title>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default function InPatientDetailsScreen() {
  const [showSessionCard, setShowSessionCard] = useState(false);

  const [InPatientSessionDetails, setInpatientsSessionDetails] = useState([
    {
      day: 'Day 1',
      date: '27-03-2023',
      id: 1,
      session: [
        {
          session: 'Session 1',
          time: '06:30 am',
        },
        {
          session: 'Session 2',
          time: '10:30 am',
        },
        {
          session: 'Session 3',
          time: '02:30 pm',
        },
        {
          session: 'Session 4',
          time: '06:30 pm',
        },
      ],
    },
    {
      day: 'Day 2',
      date: '27-03-2023',
      id: 2,
      session: [
        {
          session: 'Session 1',
          time: '06:30 am',
        },
        {
          session: 'Session 2',
          time: '10:30 am',
        },

      ],
    },
  ]);

  const handleAddSession = (indexOfSessionInDayData: number) => {
    console.log(indexOfSessionInDayData)

    const newSessionData = [...InPatientSessionDetails];
    const sessionNumber = newSessionData[indexOfSessionInDayData].session.length;
    const newSession = {
        session: `Session ${sessionNumber+1}`,
        time: '06:30 am',
      };
    newSessionData[indexOfSessionInDayData].session.push(newSession);
    setInpatientsSessionDetails(newSessionData);
    
  }

  const DailyReportContainer = (props: any) => (
    <View style={styles.PatientDetailsContainer}>
      <TouchableOpacity disabled>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Typography.Title>{props.day}</Typography.Title>
            <View style={{height: 3}} />
            <Typography.SubTitle>Date : {props.date}</Typography.SubTitle>
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
                size={fonts.font26}
                color={colors.green}
              />
            </TouchableOpacity>
          </View>
        </View>
        {showSessionCard ? (
          <>
            {props.session.map((item: any) => (
              <View style={{flexDirection: 'row'}} key={item.id}>
                <View style={{marginVertical: 10}}>
                  <Typography.Title size={fonts.font12}>
                    {item.session}
                  </Typography.Title>
                  <View style={{height: 1}} />
                  <Typography.SubTitle>Time : {item.time}</Typography.SubTitle>
                </View>
                <View
                  style={{
                    alignItems: 'flex-end',
                    flex: 1,
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                       
                    }}>
                    <Typography.Title size={fonts.font12} color={colors.green}>
                      View
                    </Typography.Title>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
            <View>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    alignItems: 'flex-end',
                    flex: 1,
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                        console.log(props.index)
                        handleAddSession(props.index)
                     
                    }}>
                    <Typography.Title size={fonts.font12} color={colors.green}>
                      Add Session
                    </Typography.Title>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </>
        ) : null}
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <PatientDetailsCard />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <View style={{marginHorizontal: 10}}>
          <Typography.Title color={colors.black} size={fonts.font12}>
            Choose Patient Status :
          </Typography.Title>
        </View>
        <DropdownComponent
          dropdowndata={data}
          width={metrics.screenWidth / 3}
          onDropdownChange={() => {}}
          placeholder="Status"
        />
      </View>

      {InPatientSessionDetails.map((item, index) => (
        <View key={item.id}>
          <DailyReportContainer {...item} index={index} />
        </View>
      ))}

      <View>
        <TouchableOpacity onPress={() => {}}>
          <Typography.Title color={colors.green}>View</Typography.Title>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  PatientDetailsContainer: {
    width: metrics.screenWidth * 0.9,
    paddingVertical: 15,
    marginVertical: 5,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: colors.green,
    borderRadius: 8,
  },
});
