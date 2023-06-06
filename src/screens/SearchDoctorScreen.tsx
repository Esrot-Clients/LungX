import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import DoctorDetailsCard from '../components/Molecules/DoctorDetailCard';
import {BtnContain} from '../components/Atoms/Buttons';
import colors from '../constants/colors';
import metrics from '../constants/layout';
import SearchBar from '../components/Molecules/SearchBar';

export default function SearchDoctorScreen({navigation}: any) {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 4]}
        renderItem={({item}) => <DoctorDetailsCard />}
        keyExtractor={item => item.toString()}
        ListHeaderComponent={()=> <SearchBar placeholder="Search for doctor"/>}
        ListFooterComponent={() => (
          <View style={{marginVertical: 20, alignItems: 'center'}}>
            <View style={{width: metrics.screenWidth * 0.4}}>
              <BtnContain
                label="Add Patient"
                color={colors.green}
                onPress={() => navigation.navigate('Home')}
              />
            </View>
          </View>
        )}
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
