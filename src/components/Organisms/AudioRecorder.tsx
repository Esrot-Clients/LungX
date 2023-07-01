import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RNFetchBlob from "rn-fetch-blob";
import { AudioEncoderAndroidType, AudioSourceAndroidType, OutputFormatAndroidType } from 'react-native-audio-recorder-player';
import Button from '../Button';
import AudioRecorderPlayer, { AudioSet } from 'react-native-audio-recorder-player';

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 20,
  },
  txtRecordCounter: {
    marginTop: 32,
    color: 'white',
    fontSize: 20,
    textAlignVertical: 'center',
    fontWeight: '200',
    fontFamily: 'Helvetica Neue',
    letterSpacing: 3,
  },
  viewRecorder: {
    marginTop: 40,
    width: '100%',
    alignItems: 'center',
  },
  recordBtnWrapper: {
    flexDirection: 'row',
  },
  viewPlayer: {
    marginTop: 20,
    alignSelf: 'stretch',
    alignItems: 'center',
    marginVertical: 5,
  },
  viewBarWrapper: {
    marginTop: 28,
    marginHorizontal: 28,
    alignSelf: 'stretch',
  },
  viewBar: {
    backgroundColor: '#ccc',
    height: 4,
    alignSelf: 'stretch',
  },
  viewBarPlay: {
    backgroundColor: 'white',
    height: 4,
    width: 0,
  },
  txtCounter: {
    marginTop: 12,
    color: 'white',
    fontSize: 20,
    textAlignVertical: 'center',
    fontWeight: '200',
    fontFamily: 'Helvetica Neue',
    letterSpacing: 3,
  },
  btn: {
    borderColor: 'white',
    borderWidth: 1,
  },
  txt: {
    color: 'white',
    fontSize: 14,
    marginHorizontal: 8,
    marginVertical: 4,
  },
});

const AudioRecorder = ({title}: any) => {
  const [recordSecs, setRecordSecs] = useState(0);
  const [recordTime, setRecordTime] = useState('00:00:00');
  const [currentPositionSec, setCurrentPositionSec] = useState(0);
  const [currentDurationSec, setCurrentDurationSec] = useState(0);
  const [playTime, setPlayTime] = useState('00:00:00');
  const [duration, setDuration] = useState('00:00:00');
  const [audioRecorderPlayer, setAudioRecorderPlayer] = useState<AudioRecorderPlayer>(new AudioRecorderPlayer());

  useEffect(() => {
    audioRecorderPlayer.setSubscriptionDuration(0.1);
    return () => {
      audioRecorderPlayer.stopPlayer();
      audioRecorderPlayer.stopRecorder();
    };
  }, []);


  const dirs = RNFetchBlob.fs.dirs;
  const path = Platform.select({
    // ios: undefined,
    // android: undefined,

    // Discussion: https://github.com/hyochan/react-native-audio-recorder-player/discussions/479
    // ios: 'https://firebasestorage.googleapis.com/v0/b/cooni-ebee8.appspot.com/o/test-audio.mp3?alt=media&token=d05a2150-2e52-4a2e-9c8c-d906450be20b',
    // ios: 'https://staging.media.ensembl.fr/original/uploads/26403543-c7d0-4d44-82c2-eb8364c614d0',
    // ios: 'hello.m4a',
    android: `${dirs.CacheDir}/${title}.mp4`,
  });

  const onStartRecord = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);

        if (
          granted['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
          granted['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
          granted['android.permission.RECORD_AUDIO'] === PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log('Permissions granted');
        } else {
          console.log('All required permissions not granted');
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }

    const audioSet: AudioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      OutputFormatAndroid: OutputFormatAndroidType.AAC_ADTS,
    };

    const uri = await audioRecorderPlayer.startRecorder(
      path,
      audioSet,
      true // isLooping
    );

    audioRecorderPlayer.addRecordBackListener((e) => {
      setRecordSecs(e.currentPosition);
      setRecordTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
    });
    console.log(`uri: ${uri}`);
  };

  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setRecordSecs(0);
    console.log(result);
  };

  const onStartPlay = async () => {
    console.log('onStartPlay');

    try {
      const msg = await audioRecorderPlayer.startPlayer();

      audioRecorderPlayer.addPlayBackListener((e) => {
        setCurrentPositionSec(e.currentPosition);
        setCurrentDurationSec(e.duration);
        setPlayTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
        setDuration(audioRecorderPlayer.mmssss(Math.floor(e.duration)));
      });
    } catch (err) {
      console.log('startPlayer error', err);
    }
  };

  const onStopPlay = async () => {
    console.log('onStopPlay');
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
  };

  const onStatusPress = (e: any) => {
    const touchX = e.nativeEvent.locationX;
    console.log(`touchX: ${touchX}`);

    const playWidth =
      (currentPositionSec / currentDurationSec) * (screenWidth - 56);
    console.log(`currentPlayWidth: ${playWidth}`);

    const currentPosition = Math.round(currentPositionSec);

    if (playWidth && playWidth < touchX) {
      const addSecs = Math.round(currentPosition + 1000);
      audioRecorderPlayer.seekToPlayer(addSecs);
      console.log(`addSecs: ${addSecs}`);
    } else {
      const subSecs = Math.round(currentPosition - 1000);
      audioRecorderPlayer.seekToPlayer(subSecs);
      console.log(`subSecs: ${subSecs}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.txtRecordCounter}>{recordTime}</Text>
      <View style={styles.viewRecorder}>
        <View style={styles.recordBtnWrapper}>
          <Button
            style={styles.btn}
            onPress={onStartRecord}
            textStyle={styles.txt}
          >
            Record
          </Button>
          <Button
            style={[styles.btn, { marginLeft: 12 }]}
            onPress={onStopRecord}
            textStyle={styles.txt}
          >
            Stop
          </Button>
        </View>
      </View>
      <View style={styles.viewPlayer}>
        <TouchableOpacity
          style={styles.viewBarWrapper}
          onPress={onStatusPress}
        >
          <View style={styles.viewBar}>
            <View
              style={[
                styles.viewBarPlay,
                { width: (currentPositionSec / currentDurationSec) * (screenWidth * 0.9 - 56) || 0 },
              ]}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.txtCounter}>{`${playTime} / ${duration}`}</Text>
        <View style={styles.playBtnWrapper}>
          <Button
            style={styles.btn}
            onPress={onStartPlay}
            textStyle={styles.txt}
          >
            Play
          </Button>
          <Button
            style={[styles.btn, { marginLeft: 12 }]}
            onPress={onStopPlay}
            textStyle={styles.txt}
          >
            Stop
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AudioRecorder;
