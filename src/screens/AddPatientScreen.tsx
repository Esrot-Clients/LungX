import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
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

const data = [
  {label: 'Out-patient', value: 'Out-patient'},
  {label: 'In-patient', value: 'In-patient'},
];

const Data = [
  {
    type: 'Chief Complaints',
    data: [
      {
        id: 1,
        title: 'Cough',
        isChecked: false,
        questionObject: [
          {
            id: 1,
            question: 'Since How Long ?',
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
        ],
      },
      {
        id: 2,
        title: 'Breathlessness',
        isChecked: false,
        questionObject: [
          {
            id: 1,
            question: 'Since How Long ?',
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
        ],
      },
      {
        id: 3,
        title: 'Sputum',
        isChecked: false,
        questionObject: [
          {
            id: 1,
            question: 'Colour of Sputum ?',
            options: [
              {
                id: 1,
                title: 'White',
                isChecked: false,
              },
              {
                id: 2,
                title: 'Yellow',
                isChecked: false,
              },
              {
                id: 3,
                title: 'Red',
                isChecked: false,
              },
              {
                id: 4,
                title: 'Pink',
                isChecked: false,
              },
            ],
          },
          {
            id: 2,
            question: 'Quantity of the sputum',
            options: [
              {
                id: 1,
                title: 'Scanity',
                isChecked: false,
              },
              {
                id: 2,
                title: 'Milo',
                isChecked: false,
              },
              {
                id: 3,
                title: 'Copious',
                isChecked: false,
              },
            ],
          },
          {
            id: 3,
            question: 'Since How Long ?',
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
        ],
      },
      {
        id: 4,
        title: 'Cold',
        isChecked: false,
        questionObject: [
          {
            id: 1,
            question: 'Since How Long ?',
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
        ],
      },
    ],
  },
  {
    type : 'Chronic Disease',
    data: [
      {
        id: 12,
        title: 'Asthma',
        isChecked: false,
        questionObject: [
          {
            id: 1,
            question: 'Since How Long ?',
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
        ],
      },
      {
        id: 2,
        title: 'Hypertension',
        isChecked: false,
        questionObject: [
          {
            id: 1,
            question: 'Since How Long ?',
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
        ],
      },
      {
        id: 3,
        title: 'Sputum',
        isChecked: false,
        questionObject: [
          {
            id: 1,
            question: 'Colour of Sputum ?',
            options: [
              {
                id: 1,
                title: 'White',
                isChecked: false,
              },
              {
                id: 2,
                title: 'Yellow',
                isChecked: false,
              },
              {
                id: 3,
                title: 'Red',
                isChecked: false,
              },
              {
                id: 4,
                title: 'Pink',
                isChecked: false,
              },
            ],
          },
          {
            id: 2,
            question: 'Quantity of the sputum',
            options: [
              {
                id: 1,
                title: 'Scanity',
                isChecked: false,
              },
              {
                id: 2,
                title: 'Milo',
                isChecked: false,
              },
              {
                id: 3,
                title: 'Copious',
                isChecked: false,
              },
            ],
          },
          {
            id: 3,
            question: 'Since How Long ?',
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
        ],
      },
      {
        id: 4,
        title: 'Cold',
        isChecked: false,
        questionObject: [
          {
            id: 1,
            question: 'Since How Long ?',
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
        ],
      },
    ],
  }
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

export default function AddPatientScreen() {
  const [course, setcourse] = useState('');
  const [type, settype] = useState('');


  const [formdata, setformdata] = useState(Data)
  const [ChiefSymptomsData, setChiefSymptomsData] =
    useState(ChiefComplaintsData);
  const [ChronicSymptomsData, setChronicSymptomsData] =
    useState(ChronicDiseasesData);

  const [name, setname] = useState('');

  const [text, setText] = useState('');

  const handleFirstDropdown = (value: any) => {
    console.log(`Course value is ${value}`);
    setcourse(value);
  };

  const handleTextChange = (newText: string) => {
    // Split the text into lines
    const lines = newText.split('\n');

    // Format each line with a bullet point and indentation
    const formattedText = lines.map(line => `• ${line}`).join('\n');

    setText(formattedText);
  };

  const handleQuestionSelect = ( questionID: number) => {
    console.log(questionID)
    const UpdatedData = formdata.map(item => {
      const UpdatedQuestion = item.data.map(question =>{
        if(question.id === questionID){
          return { ...question, isChecked: !question.isChecked} 
        }else{
          return {...question}
        }
      })
      console.log(UpdatedQuestion)
      return {...item, data: UpdatedQuestion}
    });
    setformdata(UpdatedData);
  }


  const handleOptionSelect = (
    optionID: number,
    indexOfOptioninQuestion: number,
  ) => {
    console.log(optionID)
    const UpdatedData = formdata.map((item, index) => {
      const UpdatedQuestion = item.data.map(question =>{
        if(question.isChecked === true && index === indexOfOptioninQuestion ){
          const UpdatedOption = question.questionObject.map(option => {
            const UpdatedSelection = option.options.map(
              selection => {
                if(selection.id === optionID){
                  return { ...selection, isChecked: !selection.isChecked} 
                }else{
                  return {...selection, isChecked: false}
                }
              }
            )
            return {...option, options: UpdatedSelection}
          }
        )
          return { ...question, questionObject: UpdatedOption}
        }
        else {
          return {...question}
        }
      })
      return {...item, data: UpdatedQuestion}
    });
    setformdata(UpdatedData);
  }


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

  const handleChiefOptionSelect = (
    optionID: number,
    indexOfOptioninQuestion: number,
  ) => {
    console.log('index of option', indexOfOptioninQuestion);
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

    console.log(UpdatedOptions);
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

  return (
    <ScrollView contentContainerStyle={styles.container}>
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

      <Textinput label={'Patient name'} />
      <Textinput label={'Patient ID'} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: metrics.screenWidth * 0.9,
        }}>
        <Textinput width={metrics.screenWidth * 0.43} label="Weight(kg)" />
        <Textinput width={metrics.screenWidth * 0.43} label="Temperature(C)" />
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
        />
        <Textinput
          width={metrics.screenWidth * 0.43}
          label="Blood Pressure(mm/hg)"
        />
      </View>

      <View style={{width: metrics.screenWidth * 0.9}}>
        <Title color={colors.green}>Tick all Symptoms that apply</Title>
      </View>



      {formdata.map((item) => (
        <>
          <View style={{width: metrics.screenWidth * 0.9, marginVertical: 15}}>
            <Title color={colors.black}>{item.type}</Title>
          </View>
          {item.data.map((questionitem )=> (
            <View style={{display: 'flex', marginVertical: 10}}>
              <View style={styles.SymptomsCard}>
                <View style={{flex: 0.5}}>
                  <SubTitle size={fonts.font12}>{questionitem.title}</SubTitle>
                </View>
                <View style={{flex: 0.5, alignItems: 'flex-end'}}>
                <View
                              style={{
                                alignItems: 'center',
                                flexDirection: 'row',
                              }}>
                              <CheckBox
                                value={questionitem.isChecked}
                                tintColors={{true: '#00D100', false: 'black'}}
                                onValueChange={() => {handleQuestionSelect(questionitem.id)}}
                              />
                              <SubTitle size={fonts.font12}>
                                {'Yes'}
                              </SubTitle>
                            </View>
                </View>
              </View>
              {questionitem.isChecked === true ? (
                <View style={styles.optionsCard}>
                  {questionitem.questionObject.map((item, index) => (
                    <View style={{paddingLeft: 20, paddingTop: 10}}>
                      <SubTitle size={fonts.font12}>{item.question}</SubTitle>
                      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                        {item.options.map(option => (
                          <View
                            key={option.id}
                            style={{
                              width: '50%',
                              alignItems: 'flex-start',
                              paddingLeft: 15,
                            }}>
                            <View
                              style={{
                                alignItems: 'center',
                                flexDirection: 'row',
                              }}>
                              <CheckBox
                                value={option.isChecked}
                                tintColors={{true: '#00D100', false: 'black'}}
                                onValueChange={() => {handleOptionSelect(option.id, index )}}
                              />
                              <SubTitle size={fonts.font12}>
                                {option.title}
                              </SubTitle>
                            </View>
                          </View>
                        ))}
                      </View>
                    </View>
                  ))}
                </View>
              ) : null}
            </View>
          ))}
        </>
      ))}

      {/* {ChiefSymptomsData.map((questionitem, index) => (
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
                        paddingLeft: 15,
                      }}>
                      <View
                        style={{alignItems: 'center', flexDirection: 'row'}}>
                        <CheckBox
                          value={options.isChecked}
                          tintColors={{true: '#00D100', false: 'black'}}
                          onValueChange={() =>
                            handleChiefOptionSelect(options.id, index)
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
      ))} */}

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

      <SymptomsCard title="Alcohol" />
      <SymptomsCard title="Smoking" />

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
            onPress={() => {}}
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
});
