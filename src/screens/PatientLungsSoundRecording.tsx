import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ProgressSteps, {Content} from '@joaosousa/react-native-progress-steps';
import fonts from '../constants/fontsSize';
import colors from '../constants/colors';

import {SubTitle} from '../components/Atoms/Typography';
import {BtnContain} from '../components/Atoms/Buttons';
import metrics from '../constants/layout';
import navigation from '../navigation';

export default function PatientLungsSoundRecording({navigation}: any) {
  const [currrentStep, setCurrentStep] = useState(0);

  

  const handleNextStep = () => {
    setCurrentStep(currrentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currrentStep - 1);
  };

  const ProgressStep = [
    {
      title: <Text style={{textAlign: 'center', fontFamily: 'Montserrat-Regular', fontSize: 12}}>ANTERIOR</Text>,
      content: (
        <Content>
          <View style={{flex: 1}}>
            <View style={{marginVertical: 20, alignItems: 'center'}}>
              <View style={{width: metrics.screenWidth * 0.4}}>
                <BtnContain
                  label="POSTERIOR"
                  color={colors.green}
                  onPress={handleNextStep}
                  icon='arrow-right'
                />
              </View>
            </View>
          </View>
        </Content>
      ),
    },
    {
      title: <Text style={{textAlign: 'center', fontFamily: 'Montserrat-Regular', fontSize: 12}}>POSTERIOR</Text>,
      content: (
        <Content>
  
          <View style={{flex: 1}}>
            <View style={{marginVertical: 20, alignItems: 'center'}}>
              <View style={{width: metrics.screenWidth * 0.4}}>
                <BtnContain
                  label="POSTERIOR"
                  color={colors.green}
                  onPress={handleNextStep}
                  icon='arrow-right'
                />
              </View>
            </View>
          </View>
        </Content>
      ),
    },
    {
      title: <Text style={{textAlign: 'center', fontFamily: 'Montserrat-Regular', fontSize: 12}}>TAG ANTERIOR</Text>,
      content: (
        <Content>
          <View style={{flex: 1}}>
            <View style={{marginVertical: 20, alignItems: 'center'}}>
              <View style={{width: metrics.screenWidth * 0.4}}>
                <BtnContain
                  label="POSTERIOR"
                  color={colors.green}
                  onPress={handleNextStep}
                  icon='arrow-right'
                />
              </View>
            </View>
          </View>
        </Content>
      ),
    },
    {
      title: <Text style={{textAlign: 'center', fontFamily: 'Montserrat-Regular', fontSize: 12}}>TAG POSTERIOR</Text>,
      content: (
        <Content>
                      <View style={{flex: 1}}>
            <View style={{marginVertical: 20, alignItems: 'center'}}>
              <View style={{width: metrics.screenWidth * 0.4}}>
                <BtnContain
                  label="POSTERIOR"
                  color={colors.green}
                  onPress={handleNextStep}
                  icon='arrow-right'
                />
              </View>
            </View>
          </View>
        </Content>
      ),
    },
    {
      title: <Text style={{textAlign: 'center', fontFamily: 'Montserrat-Regular', fontSize: 12}}>Report</Text>,
      content: (
        <Content>
          <View style={{flex: 1}}>
            <View style={{marginVertical: 20, alignItems: 'center'}}>
              <View style={{width: metrics.screenWidth * 0.4}}>
                <BtnContain
                  label="POSTERIOR"
                  color={colors.green}
                  onPress={handleNextStep}
                  icon='arrow-right'
                />
              </View>
            </View>
          </View>
        </Content>
      ),
    },
  ];

  return (
    <View style={styles.container}>
      <ProgressSteps
        currentStep={currrentStep}
        orientation="horizontal"
        steps={ProgressStep}
        colors={{
          title: {
            text: {
              normal: '#94d2bd',
              active: '#005f73',
              completed: colors.black,
            },
          },
          marker: {
            text: {
              normal: '#94d2bd',
              active: colors.black,
              completed: '#f4f3ee',
            },
            line: {
              normal: colors.red,
              active: colors.green,
              completed: colors.green,
            },
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
