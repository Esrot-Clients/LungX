import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

import * as Typography from '../Atoms/Typography';

import colors from '../../constants/colors';
import metrics from '../../constants/layout';

interface Props {
  patientId: string;
  date: string;
  onPress?: () => void;
  showView?: boolean;
}

const PatientDetailsCard: React.FC<Props> = ({
  patientId,
  date,
  onPress,
  showView,
}) => {
  return (
    <View style={styles.PatientDetailsContainer}>
      <TouchableOpacity disabled={showView} onPress={onPress}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Typography.Title>Patient ID : AB1234D47</Typography.Title>
            <Typography.SubTitle>Date : 27-03-2023</Typography.SubTitle>
          </View>
          {showView ? (
            <View
              style={{
                alignItems: 'flex-end',
                flex: 1,
                justifyContent: 'center',
              }}>
              <TouchableOpacity onPress={onPress}>
                <Typography.Title color={colors.green}>View</Typography.Title>
              </TouchableOpacity>
            </View>
          ) : null}
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

export default PatientDetailsCard;
