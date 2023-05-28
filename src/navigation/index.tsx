// navigation flow of whole application

import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';


import colors from '../constants/colors';
import fonts from '../constants/fontsSize';
import OutPatientDetails from '../screens/OutPatientDetails';
import InPatientDetails from '../screens/InPatientDetails';
import SentReport from '../screens/SentReport';
import ReceivedReport from '../screens/ReceivedReport';
import metrics from '../constants/layout';
import AddPatientScreen from '../screens/AddPatientScreen';

// import EditProfileScreen from '../screens/EditProfileScreen';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
    card: colors.white,
    primary: colors.red,
    text: colors.red,
    border: 'transparent',
  },
};

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={TabNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const TabNavigation = ({navigation}: any) => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({route}: any) => ({
        tabBarIcon: ({focused}) => {
          let iconName = '';
          if (route.name === 'Home') {
            iconName = focused
              ? 'home-outline'
              : 'home-outline';
          } else if (route.name === 'Patients list') {
            iconName = focused
              ? 'clipboard-list-outline'
              : 'clipboard-list-outline';
          } else if (route.name === 'Annotations') {
            iconName = focused ? 'note-edit-outline' : 'note-edit-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account-outline' : 'account-outline';
          }
          return (
            <MaterialCommunityIcons
              name={iconName}
              size={focused ? 30 : 30}
              color={focused ? colors.green : colors.black}
            />
          );
        },
        tabBarLabel(props) {
          const {focused} = props;
          const color = focused ? colors.green : colors.black;
          return (
            <Text
              style={{
                marginTop: -15,
                fontSize: fonts.font10,
                fontWeight: '400',
                color: color,
              }}>
              {route.name}
            </Text>
          );
        },
        tabBarStyle: {
          height: 65,
          paddingBottom: 10,
          borderTopColor: colors.lightgray,
          borderTopWidth: 0.5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Poppins-Regular',
          color: colors.lightgray,
        },
        tabBarHideOnKeyboard: true,
        headerTintColor: '#000',
      })}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: true}}
      />
      <BottomTab.Screen name="Patients list" component={PatientsFlowStack} />

      <BottomTab.Screen name="Annotations" component={AnnotationDetailsStack} />

      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
};


function PatientsFlowStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Patient list" component={PatientDetailsStack} options={{
        headerShown: false
      }}/>
      <Stack.Screen name="Add Patient" component={AddPatientScreen} />
    </Stack.Navigator>
  )
}

function PatientDetailsStack() {
    return (
      <TopTab.Navigator
      screenOptions={{


        tabBarLabelStyle: {
          textTransform:'none',
          fontSize: fonts.font14,
          fontWeight: '500'
        },
        tabBarInactiveTintColor: colors.black,
        tabBarActiveTintColor: colors.red, 

        tabBarIndicatorStyle: {
          backgroundColor: colors.red,
          height: 3,

        },
      }}
      >
        <TopTab.Screen name="Out Patients" component={OutPatientDetails} />
        <TopTab.Screen name="In Patients" component={InPatientDetails} />
      </TopTab.Navigator>
    );
  }


  function AnnotationDetailsStack() {
    return (
      <TopTab.Navigator
      screenOptions={{
        tabBarContentContainerStyle: {
        },
        tabBarLabelStyle: {
          textTransform:'none',
          fontSize: fonts.font14,
          fontWeight: '500'
        },
        tabBarInactiveTintColor: colors.black,
        tabBarActiveTintColor: colors.red, 
        tabBarIndicatorStyle: {
          backgroundColor: colors.red,
          height: 3,
        },
      }}
      
      >
        <TopTab.Screen name="Sent" component={SentReport} />
        <TopTab.Screen name="Received" component={ReceivedReport} />
      </TopTab.Navigator>
    );
  }