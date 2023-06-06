import {StyleSheet, Text, View, FlatList, TextInput} from 'react-native';
import React from 'react';

import PatientDetailsCard from '../components/Molecules/PatientDetailsCard';
import {BtnContain} from '../components/Atoms/Buttons';
import colors from '../constants/colors';
import metrics from '../constants/layout';
import SearchBar from '../components/Molecules/SearchBar';

export default function OutPatientDetails({ navigation}: any) {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={({item}) => <PatientDetailsCard showView={true} onPress={()=> navigation.navigate('Out Patient Details')} />}
        keyExtractor={item => item.toString()}
        ListHeaderComponent={()=> <SearchBar/>}
        ListFooterComponent={()=>
          <View style={{ marginVertical: 20, alignItems: 'center'}}>
            <View style={{width: metrics.screenWidth * 0.4}}>
          <BtnContain
            label="Add Patient"
            color={colors.green}
            onPress={()=> navigation.navigate('Add Patient')}
          />
          </View>
  
          
        </View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 20,
  },
});
