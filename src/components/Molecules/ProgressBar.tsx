import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import metrics from '../../constants/layout';

const ProgressBar = ({step = 1}) => {
  const stepArr = [
    'Anterior',
    'Posterior',
    'Tag Anterior',
    'Tag Posterior',
    'Report',
  ];
  return (
    <View style={styles.container}>
      {stepArr.map((element, index) => (
        <View style={styles.singleStep}>
          <View
            style={{
              height: metrics.screenHeight * 0.045,
              //   backgroundColor: step < index + 1 ? 'red' : 'green',
              width: metrics.screenWidth * 0.1,
              borderRadius: 100,
              borderWidth: 2,
              borderColor: step < index + 1 ? 'red' : 'green',
            }}
          />
          
          <Text style={styles.singleTxt}>{`${element}`}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  singleStep: {
    alignItems: 'center',
  },
  singleTxt: {
    fontSize: 13,
    color: 'black',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default ProgressBar;
