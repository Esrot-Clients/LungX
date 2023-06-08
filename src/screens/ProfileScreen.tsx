import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import UnderLineTextinput from '../components/Molecules/UnderLineTextInput';
import {AuthContext} from '../context/AuthContext';
import UserInfoCard from '../components/Molecules/UserInfoCard';
import {BtnContain} from '../components/Atoms/Buttons';
import metrics from '../constants/layout';
import TextinputwithEditButton from '../components/Molecules/TextInputWithEdit';
import colors from '../constants/colors';
import LungXinstance from '../api/server';

export default function ProfileScreen() {
  const {user, DoctorLogout}: any = useContext(AuthContext);
  const [name, setname] = useState('Pratyush Motha');
  const [phno, setphno] = useState('9331231231');
  const [email, setemail] = useState('ipratyushmotha@gmail.com');
  const [address, setaddress] = useState('Kolkata, West Bengal, India');

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


  const handleUpdateuser = async () => {
    try{
      const response = await LungXinstance.patch('api/update_user_info/',{
        first_name : "Pratyush"
      })

      console.log(JSON.stringify(response, null, 2))

    }
    catch(err: any){
      console.log(err.response)
    }
  }

  const handleGetPatientData = async () => {
    try{
      const response = await LungXinstance.get('api/user_profile/')
      console.log(JSON.stringify(response.data, null, 2))

    }
    catch(err: any){
      console.log(err.response)
    }
  }
  return (
    <View style={styles.container}>
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
        onUpdate={() => {}}
        handleonChangeText={handlepTextInput}
        onCancel={() => {}}
      />
      <TextinputwithEditButton
        label="Email address"
        value={email}
        onUpdate={() => {}}
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
