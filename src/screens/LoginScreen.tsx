import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from 'react';
import Textinput from '../components/Atoms/Textinput';
import {BtnContain} from '../components/Atoms/Buttons';
import metrics from '../constants/layout';
import {AuthContext} from '../context/AuthContext';
import TextinputwithIcon from '../components/Molecules/TextInputWithIcon';
import colors from '../constants/colors';
import LoadingScreen from '../components/Atoms/LoginScreen';
import { Title } from '../components/Atoms/Typography';

export default function LoginScreen({  navigation }: any) {
  const {DoctorLogin, loadingactivity}: any = useContext(AuthContext);

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handleEmail = (text: string) => {
    setemail(text);
  };

  const handlePassword = (text: string) => {
    setpassword(text);
  };

  return (
    <View style={styles.container}>
      {loadingactivity ? <LoadingScreen /> : null}
      <TextinputwithIcon
        label="Email"
        placeholder="Enter email"
        iconName="account-reactivate-outline"
        onChangeText={handleEmail}
      />
      <TextinputwithIcon
        label="Password"
        password={true}
        placeholder="Enter password"
        onChangeText={handlePassword}
        onSubmitEditing={() => DoctorLogin(email, password)}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: metrics.screenWidth * 0.9,
          paddingVertical: 10,
          paddingLeft: 5,
        }}>
        <Text
          style={{
            color: colors.green,
            fontSize: 12,
            fontFamily: 'Montserrat-Medium',
          }}
          onPress={() => { navigation.navigate('Forgot Password Email')}}>
          Forgot Password?
        </Text>
      </View>

      <View style={{width: metrics.screenWidth * 0.5, marginVertical: 20}}>
        <BtnContain
          label="Login"
          icon="login"
          color={colors.green}
          onPress={() => {
            DoctorLogin(email, password);
          }}
        />

        
      </View>

      <Text
        style={[
          {
            marginTop: 25,
            marginVertical: 0,
          },
        ]}>
        Don't have an account?
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
        <Title color={colors.green}>
            Sign Up
        </Title>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
