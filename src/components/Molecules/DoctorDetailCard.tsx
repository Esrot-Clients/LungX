import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

import * as Typography from '../Atoms/Typography';

import colors from '../../constants/colors';
import metrics from '../../constants/layout';

interface Props {
  patientId?: string;
  date?: string;
  onPress?: () => void;
  showView?: boolean;
}

const DoctorDetailsCard: React.FC<Props> = ({
  patientId,
  date,
  onPress,
  showView,
}) => {
  return (
    <View style={styles.PatientDetailsContainer}>
      <TouchableOpacity  onPress={onPress}>
        <View style={{flexDirection: 'row'}}>
        <Image
        style={{width: 50, height: 50, borderRadius: 100}}
        source={{
          uri: 'https://img.freepik.com/premium-vector/cute-astronaut-working-as-programmer_332004-204.jpg?w=740',
        }}
      />
          <View style={{marginLeft: 10}}>
            <Typography.Title>Doctor Name : Dr Karan</Typography.Title>
            <Typography.SubTitle>Doctor ID : AB1234D47</Typography.SubTitle>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  PatientDetailsContainer: {
    width: metrics.screenWidth * 0.9,
    paddingVertical: 10,
    marginVertical: 5,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.green,
    borderRadius: 8,
  },
});

export default DoctorDetailsCard;
