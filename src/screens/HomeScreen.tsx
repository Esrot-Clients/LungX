import { StyleSheet, Text, TouchableOpacity, View, PermissionsAndroid } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../constants/colors'
import metrics from '../constants/layout'
import { Title } from '../components/Atoms/Typography'
import fonts from '../constants/fontsSize'

import { BleManager } from 'react-native-ble-plx'
import { BtnContain } from '../components/Atoms/Buttons'
import useBLE from '../hooks/useBLE'
import DeviceModal from '../components/DeviceConnectionModal'

export default function HomeScreen({ navigation }: any) {
  const [isConnected, setIsConnected] = useState(false);

  const { requestPermissions, scanForPeripherals, allDevices, connectToDevice, connectedDevice } = useBLE();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);


  const scanForDevices =async () => {
    requestPermissions((isGranted: boolean) => {
      console.log(isGranted)
      if( isGranted ){
       scanForPeripherals()
      }

    }
    )
  }

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const openModal = async () => {
    scanForDevices();
    setIsModalVisible(true);
  };




  
  return (
    <View style={{alignItems: 'center', flex: 1}}>
      <Text>HomeScreen</Text>

      <BtnContain width={metrics.screenWidth * 0.95} onPress={openModal}label='Connect Device'/>
      <DeviceModal
        closeModal={hideModal}
        visible={isModalVisible}
        connectToPeripheral={connectToDevice}
        devices={allDevices}
      />

      

      <TouchableOpacity style={styles.IconContainer} activeOpacity={0.8} onPress={()=> navigation.navigate('Add Patient')}>
        <MaterialCommunityIcons name='plus-circle-outline' color={colors.green} size={metrics.screenWidth * 0.5}/>
        <Title size={fonts.font24} color={colors.green}>ADD PATIENT</Title>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  IconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.faintgray,
    borderRadius: 10,
    marginHorizontal: 20,
    paddingVertical: 30
  }
})