import {StyleSheet, Text, ToastAndroid, View} from 'react-native';
import React, {useContext, useState} from 'react';
import UnderLineTextinput from '../components/Molecules/UnderLineTextInput';
import {AuthContext} from '../context/AuthContext';
import UserInfoCard from '../components/Molecules/UserInfoCard';
import {BtnContain} from '../components/Atoms/Buttons';
import metrics from '../constants/layout';
import TextinputwithEditButton from '../components/Molecules/TextInputWithEdit';
import colors from '../constants/colors';
import LungXinstance from '../api/server';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from '../components/Atoms/LoginScreen';

export default function ProfileScreen() {

  const [loading, setloading] = useState(false);
  const {user, setUser, DoctorLogout}: any = useContext(AuthContext);
  const [name, setname] = useState(user?.first_name);
  const [phno, setphno] = useState(user?.mobile);
  const [email, setemail] = useState(user?.email);
  const [address, setaddress] = useState(user?.address);

  const handleTextInput = (text: string) => {
    console.log(text);
    setname(text);
  };
  const handlepTextInput = (text: string) => {
    console.log(text);
    // setphno(text)
  };

  const handleeTextInput = (text: string) => {
    console.log(text);
    // setemail(text)
  };

  const handleaTextInput = (text: string) => {
    console.log(text);
    // setaddress(text)
  };

  const handleCancel = (initialValue: string) => {
    // Update the state in the parent component
    setname(initialValue);
  };

  const handleUpdateUserMobileNumber = async (text: string) => {
    try {
      setloading(false)
      const response = await LungXinstance.patch('api/update_user_info/', {
        mobile: text,
      });
      console.log(JSON.stringify(response.data, null, 2));
      setUser({
        ...user,
        mobile: text,
      })
      await AsyncStorage.mergeItem(
        'user',
        JSON.stringify({
          mobile: text,
        }),
      );
      ToastAndroid.show('Phone Number Updated', ToastAndroid.LONG);
      setloading(false)

    } catch (err: any) {
      console.log("Error Occurred",err);
      ToastAndroid.show('Error', ToastAndroid.LONG);
      setloading(false)
    }
  };

  const handleUpdateUserEmailAddress = async (text: string) => {
    try {
      setloading(false)
      const response = await LungXinstance.patch('api/user_profile/', {
        email: text,
      });
      console.log(JSON.stringify(response.data, null, 2));
      setUser({
        ...user,
        email: text,
      })
      await AsyncStorage.mergeItem(
        'user',
        JSON.stringify({
          email: text,
        }),
      );
      ToastAndroid.show('Email Address Updated', ToastAndroid.LONG);
      setloading(false)

    } catch (err: any) {
      console.log("Error Occurred",err);
      ToastAndroid.show('Error', ToastAndroid.LONG);
      setloading(false)
    }
  };

  return (
    <View style={styles.container}>
      {
        loading ? <LoadingScreen /> : null
      }
      <UserInfoCard />
      {/* <UnderLineTextinput />
      <UnderLineTextinput />
      <UnderLineTextinput />
      <UnderLineTextinput />
      <UnderLineTextinput /> */}
      <TextinputwithEditButton
        label="Name"
        value={name}
        onUpdate={handleTextInput}
        handleonChangeText={() => {}}
        onCancel={handleCancel}
      />
      <TextinputwithEditButton
        label="Phone number"
        value={phno}
        onUpdate={handleUpdateUserMobileNumber}
        handleonChangeText={handlepTextInput}
        onCancel={() => {}}
      />
      <TextinputwithEditButton
        label="Email address"
        value={email}
        onUpdate={handleUpdateUserEmailAddress}
        handleonChangeText={handleeTextInput}
        onCancel={() => {}}
      />
      <TextinputwithEditButton
        label="Address"
        value={address}
        onUpdate={() => {}}
        handleonChangeText={handleaTextInput}
        onCancel={() => {}}
      />

      <View style={{width: metrics.screenWidth * 0.4}}>
        <BtnContain
          label="logout"
          icon="logout"
          color={colors.green}
          onPress={() => DoctorLogout()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
});
