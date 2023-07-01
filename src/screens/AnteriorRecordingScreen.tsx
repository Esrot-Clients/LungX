import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import ProgressSteps, {Content} from '@joaosousa/react-native-progress-steps';
import fonts from '../constants/fontsSize';
import colors from '../constants/colors';

import {SubTitle} from '../components/Atoms/Typography';
import {BtnContain} from '../components/Atoms/Buttons';
import metrics from '../constants/layout';

import AudioRecorder from '../components/Organisms/AudioRecorder';

import CheckBox from '@react-native-community/checkbox';
import ProgressBar from '../components/Molecules/ProgressBar';

const LungsPositionData = [
  {
    id: 1,
    title: 'POSITION 0',
    isChecked: false,
    soundTrack: 'Position1'
  },
  {
    id: 2,
    title: 'POSITION 1',
    isChecked: false,
    soundTrack: 'Position2'
  },
  // {
  //   id: 3,
  //   title: 'POSITION 2',
  //   isChecked: false,
  // },
  // {
  //   id: 4,
  //   title: 'POSITION 3',
  //   isChecked: false,
  // },
  // {
  //   id: 5,
  //   title: 'POSITION 4',
  //   isChecked: false,
  // },
  // {
  //   id: 6,
  //   title: 'POSITION 5',
  //   isChecked: false,
  // },
  // {
  //   id: 7,
  //   title: 'POSITION 6',
  //   isChecked: false,
  // },
];

export default function AnteriorRecordingScreen({navigation}: any) {
  const [currrentStep, setCurrentStep] = useState(0);
  const [LungsData, setLungsData] = useState(LungsPositionData);


  const handleQuestionSelect = (questionID: number) => {
    console.log(questionID);
    const UpdatedData = LungsData.map(item => {
      if (item.id === questionID) {
        return {...item, isChecked: !item.isChecked};
      } else {
        return {...item};
      }
    });
    console.log(UpdatedData);
    setLungsData(UpdatedData);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <ProgressBar step={1}/>
      <View style={styles.innercontainer}>
        <Image
          style={{
            width: metrics.screenWidth * 0.9,
            height: metrics.screenHeight * 0.3,
            borderRadius: 5,
            marginVertical: 10,
          }}
          resizeMode="contain"
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lungs_diagram_detailed.svg/1200px-Lungs_diagram_detailed.svg.png',
          }}
        />
        {LungsData.map(item => (
          <View key={item.id} style={{display: 'flex'}}>
            <View style={styles.SymptomsCard} key={item.id}>
              <View style={{flex: 0.5}}>
                <SubTitle size={fonts.font12}>{item.title}</SubTitle>
              </View>
              <View style={{flex: 0.5, alignItems: 'flex-end'}}>
                <View style={{alignItems: 'center', flexDirection: 'row'}}>
                  <CheckBox
                    tintColors={{true: colors.green, false: 'black'}}
                    value={item.isChecked}
                    onValueChange={() => handleQuestionSelect(item.id)}
                  />
                  <SubTitle size={fonts.font10}>Record</SubTitle>
                </View>
              </View>
            </View>
            {item.isChecked === true ? <AudioRecorder title={item.soundTrack} /> : null}
          </View>
        ))}


        <View style={{marginVertical: 20, alignItems: 'flex-end', justifyContent: 'center'}}>
              <View style={{width: metrics.screenWidth * 0.4}}>
                <BtnContain
                  label="POSTERIOR"
                  color={colors.green}
                  onPress={() => navigation.navigate('Posterior')}
                  icon="arrow-right"
                />
              </View>
            </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  innercontainer: {
    flex: 1,
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
    marginVertical: 10,
  },
});
