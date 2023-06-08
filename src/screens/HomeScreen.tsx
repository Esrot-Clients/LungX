import { StyleSheet, Text, TouchableOpacity, View, PermissionsAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../constants/colors'
import metrics from '../constants/layout'
import { Title } from '../components/Atoms/Typography'
import fonts from '../constants/fontsSize'

import { BleManager } from 'react-native-ble-plx'
import { BtnContain } from '../components/Atoms/Buttons'
import useBLE from '../hooks/useBLE'
import DeviceModal from '../components/DeviceConnectionModal'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import RNBluetoothClassic, {
  BluetoothDevice
} from 'react-native-bluetooth-classic';

export default function HomeScreen({ navigation }: any) {
  const [isConnected, setIsConnected] = useState(false);

  const { requestPermissions, scanForPeripherals, allDevices, connectToDevice, connectedDevice } = useBLE();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);


  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerTitleStyle: {
        color: '#000',
        fontFamily: 'Montserrat-Medium',
        fontSize: 20,
      },
      headerTintColor: '#000',
      headerLeft: () => (
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginLeft: 15,
          }}>
          <TouchableOpacity>
            <MaterialCommunityIcons name="arrow-left" size={25} color={'#000'} />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => {}}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginRight: 15,
            }}>
                        <TouchableOpacity>
            <MaterialCommunityIcons name="bell-outline" size={25} color={'#000'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons name="help-circle-outline" size={25} color={'#000'} />
          </TouchableOpacity>

          </View>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);






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

      
      <DeviceModal
        closeModal={hideModal}
        visible={isModalVisible}
        connectToPeripheral={connectToDevice}
        devices={allDevices}
      />

      <View style={{
        width: metrics.screenWidth * 0.85,
      }}>
        <Title size={fonts.font14} color={colors.red}>Add Patients</Title>
        <View style={{flexDirection: 'row', marginTop: 10}}>
        <Title size={fonts.font14} color={colors.green}>Stethoscope</Title>
        <MaterialCommunityIcons name="stethoscope" size={25} color={'#000'} style={{marginLeft: 5}}/>
        </View>
      </View>


<View style={{marginTop: 30}}>
        <BtnContain label='Connect to Devices' onPress={openModal }  color={colors.green}/>

        </View>
      

      
      <View style={{ height: metrics.screenHeight *0.1}}>
        </View>
      <TouchableOpacity style={styles.IconContainer} activeOpacity={0.8} onPress={()=> navigation.navigate('Add Patient')}>
        <MaterialCommunityIcons name='plus-circle-outline' color={colors.green} size={metrics.screenWidth * 0.5}/>
        <Title size={fonts.font20} color={colors.green}>ADD PATIENT</Title>
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  IconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: metrics.screenWidth * 0.85,
    backgroundColor: colors.faintgray,
    borderRadius: 10,
    marginHorizontal: 20,
    paddingVertical: 30
  }
})