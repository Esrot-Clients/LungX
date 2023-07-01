import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from 'react-native';
import React, {useContext, useState} from 'react';
import Textinput from '../components/Atoms/Textinput';
import metrics from '../constants/layout';
import CheckBoxComponent from '../components/Atoms/CheckBox';
import {SubTitle, Title} from '../components/Atoms/Typography';
import fonts from '../constants/fontsSize';
import colors from '../constants/colors';
import SymptomsCard from '../components/Molecules/SymptomsCard';
import DropdownComponent from '../components/Molecules/Dropdown';
import {BtnContain} from '../components/Atoms/Buttons';
import CheckBox from '@react-native-community/checkbox';
import LungXinstance from '../api/server';
import {AuthContext} from '../context/AuthContext';
import LoadingScreen from '../components/Atoms/LoginScreen';

const data = [
  {label: 'Out-patient', value: 'Out-patient'},
  {label: 'In-patient', value: 'In-patient'},
];

const ChiefComplaintsData = [
  {
    id: 1,
    title: 'Cough',
    isChecked: false,
    optionid: 1,
    options: [
      {
        id: 1,
        title: '1 - 7 days',
        isChecked: false,
      },
      {
        id: 2,
        title: '> 7 days',
        isChecked: false,
      },
      {
        id: 3,
        title: '> 1 week',
        isChecked: false,
      },
      {
        id: 4,
        title: '> 1 month',
        isChecked: false,
      },
    ],
  },
  {
    id: 2,
    title: 'Breathlessness',
    isChecked: false,
    optionid: 2,
    options: [
      {
        id: 1,
        title: '1 - 7 days',
        isChecked: false,
      },
      {
        id: 2,
        title: '> 7 days',
        isChecked: false,
      },
      {
        id: 3,
        title: '> 1 week',
        isChecked: false,
      },
      {
        id: 4,
        title: '> 1 month',
        isChecked: false,
      },
    ],
  },
  {
    id: 3,
    title: 'Cold',
    isChecked: false,
    optionid: 2,
    options: [
      {
        id: 1,
        title: '1 - 7 days',
        isChecked: false,
      },
      {
        id: 2,
        title: '> 7 days',
        isChecked: false,
      },
      {
        id: 3,
        title: '> 1 week',
        isChecked: false,
      },
      {
        id: 4,
        title: '> 1 month',
        isChecked: false,
      },
    ],
  },
  {
    id: 4,
    title: 'Fever',
    isChecked: false,
    optionid: 2,
    options: [
      {
        id: 1,
        title: '1 - 7 days',
        isChecked: false,
      },
      {
        id: 2,
        title: '> 7 days',
        isChecked: false,
      },
      {
        id: 3,
        title: '> 1 week',
        isChecked: false,
      },
      {
        id: 4,
        title: '> 1 month',
        isChecked: false,
      },
    ],
  },
  {
    id: 5,
    title: 'Weight loss',
    isChecked: false,
    optionid: 2,
    options: [
      {
        id: 1,
        title: '1 - 7 days',
        isChecked: false,
      },
      {
        id: 2,
        title: '> 7 days',
        isChecked: false,
      },
      {
        id: 3,
        title: '> 1 week',
        isChecked: false,
      },
      {
        id: 4,
        title: '> 1 month',
        isChecked: false,
      },
    ],
  },
];

const ChronicDiseasesData = [
  {
    id: 1,
    title: 'Asthma',
    isChecked: false,
    optionid: 2,
    options: [
      {
        id: 1,
        title: '< 1 Year',
        isChecked: false,
      },
      {
        id: 2,
        title: '< 5 Years',
        isChecked: false,
      },
      {
        id: 3,
        title: '< 10 Years',
        isChecked: false,
      },
      {
        id: 4,
        title: '> 10 Years',
        isChecked: false,
      },
    ],
  },
  {
    id: 2,
    title: 'Hypertension',
    isChecked: false,
    optionid: 2,
    options: [
      {
        id: 1,
        title: '< 1 Year',
        isChecked: false,
      },
      {
        id: 2,
        title: '< 5 Years',
        isChecked: false,
      },
      {
        id: 3,
        title: '< 10 Years',
        isChecked: false,
      },
      {
        id: 4,
        title: '> 10 Years',
        isChecked: false,
      },
    ],
  },
  {
    id: 3,
    title: 'Diabetes',
    isChecked: false,
    optionid: 2,
    options: [
      {
        id: 1,
        title: '< 1 Year',
        isChecked: false,
      },
      {
        id: 2,
        title: '< 5 Years',
        isChecked: false,
      },
      {
        id: 3,
        title: '< 10 Years',
        isChecked: false,
      },
      {
        id: 4,
        title: '> 10 Years',
        isChecked: false,
      },
    ],
  },
  {
    id: 4,
    title: 'Heart Disease',
    isChecked: false,
    optionid: 2,
    options: [
      {
        id: 1,
        title: '< 1 Year',
        isChecked: false,
      },
      {
        id: 2,
        title: '< 5 Years',
        isChecked: false,
      },
      {
        id: 3,
        title: '< 10 Years',
        isChecked: false,
      },
      {
        id: 4,
        title: '> 10 Years',
        isChecked: false,
      },
    ],
  },
];

const LifeStyleHabitsData = [
  {
    id: 1,
    title: 'Alcohol',
    isChecked: false,
    optionid: 2,
    options: [
      {
        id: 1,
        title: '< 1 Year',
        isChecked: false,
      },
      {
        id: 2,
        title: '< 5 Years',
        isChecked: false,
      },
      {
        id: 3,
        title: '< 10 Years',
        isChecked: false,
      },
      {
        id: 4,
        title: '> 10 Years',
        isChecked: false,
      },
    ],
  },
  {
    id: 2,
    title: 'Smoking',
    isChecked: false,
    optionid: 2,
    options: [
      {
        id: 1,
        title: '< 1 Year',
        isChecked: false,
      },
      {
        id: 2,
        title: '< 5 Years',
        isChecked: false,
      },
      {
        id: 3,
        title: '< 10 Years',
        isChecked: false,
      },
      {
        id: 4,
        title: '> 10 Years',
        isChecked: false,
      },
    ],
  },
];

export default function AddPatientScreen({navigation}: any) {
  const {user}: any = useContext(AuthContext);

  const [loading, setloading] = useState(false);
  const [patientstatus, setpatientstatus] = useState('');
  const [patientname, setpatientname] = useState('');
  const [patientid, setpatientid] = useState('');
  const [patientAge, setpatientAge] = useState('');
  const [patientGender, setpatientGender] = useState([
    {
      gender: 'male',
      isChecked: false,
      id: 1,
    },
    {
      gender: 'female',
      isChecked: false,
      id: 2,
    },
  ]);
  const [patientWeight, setpatientWeight] = useState('');
  const [patientTemperture, setpatientTemperature] = useState('');
  const [patientOxygenLevel, setpatientPatientOxygenLevel] = useState('');
  const [patientBloodPressure, setpatientBloodPressure] = useState('');

  const [ChiefSymptomsData, setChiefSymptomsData] =
    useState(ChiefComplaintsData);
  const [ChronicSymptomsData, setChronicSymptomsData] =
    useState(ChronicDiseasesData);

  const [LifeStyleHabits, setLifeStyleHabits] = useState(LifeStyleHabitsData);

  const [text, setText] = useState('');

  const handleFirstDropdown = (value: string) => {
    console.log(`value is ${value}`);
    setpatientstatus(value);
  };

  const handleGenderSelection = (genderID: number) => {
    console.log(genderID);
    const UpdatedDataSelecton = patientGender.map(item => {
      if (genderID === item.id) {
        console.log('success');
        return {...item, isChecked: !item.isChecked};
      } else {
        return {...item, isChecked: false};
      }
    });
    setpatientGender(UpdatedDataSelecton);
  };

  const handleTextChange = (newText: string) => {
    setText(newText);
  };

  const handleChiefSymptomsQuestionSelect = (questionID: number) => {
    const UpdatedData = ChiefSymptomsData.map(question => {
      if (question.id === questionID) {
        return {...question, isChecked: !question.isChecked, optionid: null};
      } else {
        return {...question};
      }
    });
    setChiefSymptomsData(UpdatedData);
  };

  const handleChronicSymptomsQuestionSelect = (questionID: number) => {
    const UpdatedData = ChronicSymptomsData.map(question => {
      if (question.id === questionID) {
        return {...question, isChecked: !question.isChecked, optionid: null};
      } else {
        return {...question};
      }
    });
    setChronicSymptomsData(UpdatedData);
  };

  const handleLifeStyleHabitsQuestionSelect = (questionID: number) => {
    const UpdatedData = LifeStyleHabits.map(question => {
      if (question.id === questionID) {
        return {...question, isChecked: !question.isChecked, optionid: null};
      } else {
        return {...question};
      }
    });
    setLifeStyleHabits(UpdatedData);
  };

  const handleChiefOptionSelect = (
    optionID: number,
    indexOfOptioninQuestion: number,
  ) => {
    const UpdatedOptions = ChiefSymptomsData.map((question, index) => {
      if (question.isChecked === true && index === indexOfOptioninQuestion) {
        const UpdatedSelection = question.options.map(option => {
          if (option.id === optionID) {
            return {...option, isChecked: !option.isChecked};
          } else {
            return {...option, isChecked: false};
          }
        });
        return {...question, options: UpdatedSelection};
      } else {
        return {...question};
      }
    });

    setChiefSymptomsData(UpdatedOptions);
  };

  const handleChronicOptionSelect = (
    optionID: number,
    indexOfOptioninQuestion: number,
  ) => {
    console.log('index of option', indexOfOptioninQuestion);
    const UpdatedOptions = ChronicSymptomsData.map((question, index) => {
      if (question.isChecked === true && index === indexOfOptioninQuestion) {
        const UpdatedSelection = question.options.map(option => {
          if (option.id === optionID) {
            return {...option, isChecked: !option.isChecked};
          } else {
            return {...option, isChecked: false};
          }
        });
        return {...question, options: UpdatedSelection};
      } else {
        return {...question};
      }
    });

    console.log(UpdatedOptions);
    setChronicSymptomsData(UpdatedOptions);
  };

  const handleLifeStyleHabitsOptionSelect = (
    optionID: number,
    indexOfOptioninQuestion: number,
  ) => {
    const UpdatedOptions = LifeStyleHabits.map((question, index) => {
      if (question.isChecked === true && index === indexOfOptioninQuestion) {
        const UpdatedSelection = question.options.map(option => {
          if (option.id === optionID) {
            return {...option, isChecked: !option.isChecked};
          } else {
            return {...option, isChecked: false};
          }
        });
        return {...question, options: UpdatedSelection};
      } else {
        return {...question};
      }
    });

    console.log(UpdatedOptions);
    setLifeStyleHabits(UpdatedOptions);
  };

  const handlePatientDetailSubmission = async () => {
    const filterGenderArray = patientGender.filter(
      item => item.isChecked === true,
    );

    const filterChiefSymptomsArray = ChiefSymptomsData.filter(
      item => item.isChecked === true,
    );
    const filterChronicSymptomsArray = ChronicSymptomsData.filter(
      item => item.isChecked === true,
    );

    const filterLifeStyleHabitsArray = LifeStyleHabits.filter(
      item => item.isChecked === true,
    );
    try {
      setloading(true);
      const response = await LungXinstance.put(`api/patients/`, {
        doctor: user.id,
        patient_name: patientname,
        out_patient: patientstatus === 'Out-patient' ? true : false,
        in_patient: patientstatus === 'In-patient' ? true : false,
        age: patientAge,
        gender: filterGenderArray[0].gender,
        temperature: patientTemperture,
        oxygen_saturation: patientOxygenLevel,
        blood_pressure: patientBloodPressure,
        weight: patientWeight,
        chief_complaints: JSON.stringify(filterChiefSymptomsArray),
        chronic_diseases: JSON.stringify(filterChronicSymptomsArray),
        lifestyle_habits: JSON.stringify(filterLifeStyleHabitsArray),
        additional_notes: text,
      });

      console.log(response.data);
      setloading(false);
    } catch (err: any) {
      setloading(false);
      Alert.alert('Message', 'Error Occurred');
      console.log(err);
    }
  };

  const PatientGenderCard = () => (
    <View style={{marginVertical: 10}}>
      <Title color={colors.black} size={fonts.font12}>
        Gender
      </Title>
      <View
        style={[
          styles.PatientSelectionContainer,
          {width: metrics.screenWidth * 0.43},
        ]}>
        {patientGender.map(item => (
          <View
            key={item.id}
            style={{alignItems: 'center', flexDirection: 'row'}}>
            <CheckBox
              tintColors={{true: colors.green, false: 'black'}}
              onValueChange={() => handleGenderSelection(item.id)}
              value={item.isChecked}
            />
            <SubTitle size={fonts.font12}>{item.gender}</SubTitle>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {loading ? <LoadingScreen /> : null}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginHorizontal: 10}}>
          <Title color={colors.black} size={fonts.font12}>
            Choose Patient Status :
          </Title>
        </View>
        <DropdownComponent
          dropdowndata={data}
          width={metrics.screenWidth / 2.5}
          onDropdownChange={handleFirstDropdown}
          placeholder="Status"
        />
      </View>

      <Textinput
        label={'Patient name'}
        onChangeText={setpatientname}
        value={patientname}
      />

      <Textinput
        label={'Patient ID'}
        onChangeText={setpatientid}
        value={patientid}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: metrics.screenWidth * 0.9,
        }}>
        <Textinput
          width={metrics.screenWidth * 0.43}
          label="Age"
          onChangeText={setpatientAge}
          value={patientAge}
        />
        <PatientGenderCard />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: metrics.screenWidth * 0.9,
        }}>
        <Textinput
          width={metrics.screenWidth * 0.43}
          label="Weight(kg)"
          onChangeText={setpatientWeight}
          value={patientWeight}
        />
        <Textinput
          width={metrics.screenWidth * 0.43}
          label="Temperature(C)"
          onChangeText={setpatientTemperature}
          value={patientTemperture}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: metrics.screenWidth * 0.9,
        }}>
        <Textinput
          width={metrics.screenWidth * 0.43}
          label="Oxygen saturation(SpO2)"
          onChangeText={setpatientPatientOxygenLevel}
          value={patientOxygenLevel}
        />
        <Textinput
          width={metrics.screenWidth * 0.43}
          label="Blood Pressure(mm/hg)"
          onChangeText={setpatientBloodPressure}
          value={patientBloodPressure}
        />
      </View>

      {/* Multiple Selection form  */}

      <View style={{width: metrics.screenWidth * 0.9}}>
        <Title color={colors.green}>Tick all Symptoms that apply</Title>
      </View>

      <View style={{width: metrics.screenWidth * 0.9, marginVertical: 15}}>
        <Title color={colors.black}>Chief Complaints</Title>
      </View>

      {ChiefSymptomsData.map((questionitem, index) => (
        <>
          <View style={{display: 'flex', marginVertical: 10}}>
            <View style={styles.SymptomsCard}>
              <View style={{flex: 0.5}}>
                <SubTitle size={fonts.font12}>{questionitem.title}</SubTitle>
              </View>
              <View style={{flex: 0.5, alignItems: 'flex-end'}}>
                <CheckBoxComponent
                  label="Yes"
                  onPress={() =>
                    handleChiefSymptomsQuestionSelect(questionitem.id)
                  }
                />
              </View>
            </View>

            {questionitem.isChecked === true ? (
              <View style={styles.optionsCard}>
                <View style={{paddingLeft: 20}}>
                  <SubTitle size={fonts.font12}>Since how long ?</SubTitle>
                </View>

                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                  {questionitem.options.map(options => (
                    <View
                      key={options.id}
                      style={{
                        width: '50%',
                        alignItems: 'flex-start',
                        paddingLeft: 12,
                        paddingVertical: 5,
                      }}>
                      <View
                        style={{alignItems: 'center', flexDirection: 'row'}}>
                        <CheckBox
                          value={options.isChecked}
                          tintColors={{true: colors.green, false: 'black'}}
                          onValueChange={() =>
                            handleChiefOptionSelect(options.id, index)
                          }
                        />
                        <SubTitle size={fonts.font10}>{options.title}</SubTitle>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            ) : null}
          </View>
        </>
      ))}

      <View style={{width: metrics.screenWidth * 0.9, marginVertical: 15}}>
        <Title color={colors.black}>Chronic Disease</Title>
      </View>

      {ChronicSymptomsData.map((questionitem, index) => (
        <>
          <View style={{display: 'flex', marginVertical: 10}}>
            <View style={styles.SymptomsCard}>
              <View style={{flex: 0.5}}>
                <SubTitle size={fonts.font12}>{questionitem.title}</SubTitle>
              </View>
              <View style={{flex: 0.5, alignItems: 'flex-end'}}>
                <CheckBoxComponent
                  label="Yes"
                  onPress={() =>
                    handleChronicSymptomsQuestionSelect(questionitem.id)
                  }
                />
              </View>
            </View>

            {questionitem.isChecked === true ? (
              <View style={styles.optionsCard}>
                <View style={{paddingLeft: 20}}>
                  <SubTitle size={fonts.font12}>Since how long ?</SubTitle>
                </View>

                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                  {questionitem.options.map(options => (
                    <View
                      key={options.id}
                      style={{
                        width: '50%',
                        alignItems: 'flex-start',
                        paddingLeft: 15,
                      }}>
                      <View
                        style={{alignItems: 'center', flexDirection: 'row'}}>
                        <CheckBox
                          value={options.isChecked}
                          tintColors={{true: '#00D100', false: 'black'}}
                          onValueChange={() =>
                            handleChronicOptionSelect(options.id, index)
                          }
                        />
                        <SubTitle size={fonts.font12}>{options.title}</SubTitle>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            ) : null}
          </View>
        </>
      ))}

      <View style={{width: metrics.screenWidth * 0.9, marginVertical: 15}}>
        <Title color={colors.black}>Lifestyle habits</Title>
      </View>

      {LifeStyleHabits.map((questionitem, index) => (
        <>
          <View style={{display: 'flex', marginVertical: 10}}>
            <View style={styles.SymptomsCard}>
              <View style={{flex: 0.5}}>
                <SubTitle size={fonts.font12}>{questionitem.title}</SubTitle>
              </View>
              <View style={{flex: 0.5, alignItems: 'flex-end'}}>
                <CheckBoxComponent
                  label="Yes"
                  onPress={() =>
                    handleLifeStyleHabitsQuestionSelect(questionitem.id)
                  }
                />
              </View>
            </View>

            {questionitem.isChecked === true ? (
              <View style={styles.optionsCard}>
                <View style={{paddingLeft: 20}}>
                  <SubTitle size={fonts.font12}>Since how long ?</SubTitle>
                </View>

                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                  {questionitem.options.map(options => (
                    <View
                      key={options.id}
                      style={{
                        width: '50%',
                        alignItems: 'flex-start',
                        paddingLeft: 12,
                        paddingVertical: 5,
                      }}>
                      <View
                        style={{alignItems: 'center', flexDirection: 'row'}}>
                        <CheckBox
                          value={options.isChecked}
                          tintColors={{true: colors.green, false: 'black'}}
                          onValueChange={() =>
                            handleLifeStyleHabitsOptionSelect(options.id, index)
                          }
                        />
                        <SubTitle size={fonts.font10}>{options.title}</SubTitle>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            ) : null}
          </View>
        </>
      ))}

      <View style={{width: metrics.screenWidth * 0.9, marginVertical: 15}}>
        <Title color={colors.black}>Additional Notes</Title>
      </View>

      <Textinput
        onChangeText={handleTextChange}
        multiline={true}
        height={150}
      />

      <View style={{marginVertical: 20, alignItems: 'center'}}>
        <View style={{width: metrics.screenWidth * 0.4}}>
          <BtnContain
            label="Start Recording"
            color={colors.green}
            onPress={() => {
              // handlePatientDetailSubmission();
              navigation.navigate('Anterior');
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  SymptomsCard: {
    flexDirection: 'row',
    width: metrics.screenWidth * 0.9,
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: colors.green,
  },
  optionsCard: {
    width: metrics.screenWidth * 0.9,
    padding: 10,
  },
  PatientSelectionContainer: {
    borderColor: colors.green,
    borderRadius: 8,
    borderWidth: 0.5,
    marginVertical: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    fontSize: fonts.font12,
    color: colors.black,
    flexDirection: 'row',
  },
});
