// navigation flow of whole application

import {View, TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import React, {useContext} from 'react';
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
import LoginScreen from '../screens/LoginScreen';
import {AuthContext} from '../context/AuthContext';
import RegistrationScreen from '../screens/RegistrationScreen';
import SentReportDetails from '../screens/SentReportDetails';
import ReceivedReportDetails from '../screens/ReceivedReportDetails';
import OutPatientsDetailsScreen from '../screens/OutPatientsDetailsScreen';
import SearchDoctorScreen from '../screens/SearchDoctorScreen';
import ForgotPasswordEmailScreen from '../screens/ForgotPasswordEmailScreen';
import ForgotPasswordTokenScreen from '../screens/ForgotPasswordTokenScreen';

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
  const {isAuthenticated, apploading}: any = useContext(AuthContext);

  if (apploading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: colors.green}}>Loading...</Text>
        <ActivityIndicator size="large" color={colors.green} />
      </View>
    );
  }

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        {isAuthenticated === false ? (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Registration"
              component={RegistrationScreen}
              options={{
                headerShown: true,

                headerTitle: '',
                headerTitleStyle: {
                  color: '#000',
                  fontFamily: 'Montserrat-Medium',
                  fontSize: 20,
                },
                headerLeft: () => (
                  <View
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                      marginLeft: 15,
                    }}>
                    <TouchableOpacity>
                      <MaterialCommunityIcons
                        name="arrow-left"
                        size={25}
                        color={'#000'}
                      />
                    </TouchableOpacity>
                  </View>
                ),
              }}
            />
            <Stack.Screen
              name="Forgot Password Email"
              component={ForgotPasswordEmailScreen}
              options={{headerShown: true}}
            />

            <Stack.Screen
              name="Forgot Password Token"
              component={ForgotPasswordTokenScreen}
              options={{headerShown: true}}
            />
          </>
        ) : (
          <Stack.Screen
            name="Main"
            component={TabNavigation}
            options={{headerShown: false}}
          />
        )}
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
            iconName = focused ? 'home-outline' : 'home-outline';
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
      <BottomTab.Screen
        name="Patients list"
        component={PatientsFlowStack}
        options={{
          headerTitle: '',
          headerLeft: () => (
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                marginLeft: 15,
              }}>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={25}
                  color={'#000'}
                />
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
                  <MaterialCommunityIcons
                    name="stethoscope"
                    size={18}
                    color={'#000'}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="battery-30"
                    size={18}
                    color={'#000'}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ),
        }}
      />

      <BottomTab.Screen
        name="Annotations"
        component={AnnotationFlowStack}
        options={{
          headerTitle: '',
          headerLeft: () => (
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                marginLeft: 15,
              }}>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={25}
                  color={'#000'}
                />
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
                  <MaterialCommunityIcons
                    name="stethoscope"
                    size={18}
                    color={'#000'}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="battery-30"
                    size={18}
                    color={'#000'}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ),
        }}
      />

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

function PatientsFlowStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Patient list"
        component={PatientDetailsStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Add Patient"
        component={AddPatientScreen}
        options={{
          headerLeft: () => (
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                marginLeft: 15,
              }}></View>
          ),
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Out Patient Details"
        component={OutPatientsDetailsScreen}
        options={{
          headerTitle: 'Overall Report',
          headerLeft: () => (
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                marginLeft: 15,
              }}></View>
          ),
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen
        name="Search Doctor"
        component={SearchDoctorScreen}
        options={{
          headerTitle: 'Select Doctor',
          headerLeft: () => (
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                marginLeft: 15,
              }}></View>
          ),
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

function PatientDetailsStack() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: 'none',
          fontSize: fonts.font14,
          fontWeight: '500',
        },
        tabBarInactiveTintColor: colors.black,
        tabBarActiveTintColor: colors.red,

        tabBarIndicatorStyle: {
          backgroundColor: colors.red,
          height: 3,
        },
      }}>
      <TopTab.Screen name="Out Patients" component={OutPatientDetails} />
      <TopTab.Screen name="In Patients" component={InPatientDetails} />
    </TopTab.Navigator>
  );
}

function AnnotationFlowStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Annotationdetails"
        component={AnnotationDetailsStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Sent Report Details"
        component={SentReportDetails}
        options={{
          headerTitle: 'Overall report',
          headerLeft: () => (
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                marginLeft: 15,
              }}></View>
          ),
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Received Report Details"
        component={ReceivedReportDetails}
        options={{
          headerTitle: 'Received report',
          headerLeft: () => (
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                marginLeft: 15,
              }}></View>
          ),
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

function AnnotationDetailsStack() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarContentContainerStyle: {},
        tabBarLabelStyle: {
          textTransform: 'none',
          fontSize: fonts.font14,
          fontWeight: '500',
        },
        tabBarInactiveTintColor: colors.black,
        tabBarActiveTintColor: colors.red,
        tabBarIndicatorStyle: {
          backgroundColor: colors.red,
          height: 3,
        },
      }}>
      <TopTab.Screen name="Sent" component={SentReport} />
      <TopTab.Screen name="Received" component={ReceivedReport} />
    </TopTab.Navigator>
  );
}
