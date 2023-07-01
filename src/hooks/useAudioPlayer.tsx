import AudioRecorderPlayer, {
    AVEncoderAudioQualityIOSType,
    AVEncodingOption,
    AudioEncoderAndroidType,
    AudioSourceAndroidType,
    OutputFormatAndroidType,
  } from 'react-native-audio-recorder-player';
  import type {
    AudioSet,
    PlayBackType,
    RecordBackType,
  } from 'react-native-audio-recorder-player';
  import { useEffect, useState } from 'react';

  
  const useAudioRecorderPlayer = () => {
    const [audioRecorderPlayer, setAudioRecorderPlayer] = useState(null);
    const [recordingPath, setRecordingPath] = useState(null);
    const [isLoggingIn, setisLoggingIn] = useState(false)
    const [isRecording, setIsRecording] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentPosition, setCurrentPosition] = useState(0);
    const [duration, setDuration] = useState(0);
  
    useEffect(() => {
      const initializeAudioRecorderPlayer = async () => {
        const player = new AudioRecorderPlayer();
        player.setSubscriptionDuration(0.1)
        setAudioRecorderPlayer(player);
      };
  
      initializeAudioRecorderPlayer();
  
      return () => {
        if (audioRecorderPlayer) {
          audioRecorderPlayer.stopRecorder();
          audioRecorderPlayer.stopPlayer();
          audioRecorderPlayer.removeRecordBackListener();
        }
      };
    }, []);
  
    const startRecording = async (path) => {
      if (audioRecorderPlayer && !isRecording) {
        setRecordingPath(path);
        setIsRecording(true);
  
        await audioRecorderPlayer.startRecorder(path, {
          sampleRate: 44100,
          channels: 2,
          bitsPerSample: 16,
          quality: 'high',
          encoder: AudioEncoderAndroidType.AAC,
        });
  
        audioRecorderPlayer.addRecordBackListener((e) => {
          setCurrentPosition(e.current_position);
          setDuration(e.duration);
        });
      }
    };
  
    const stopRecording = async () => {
      if (audioRecorderPlayer && isRecording) {
        setIsRecording(false);
        audioRecorderPlayer.stopRecorder();
        audioRecorderPlayer.removeRecordBackListener();
      }
    };
  
    const startPlayback = async () => {
      if (audioRecorderPlayer && !isPlaying && recordingPath) {
        setIsPlaying(true);
  
        await audioRecorderPlayer.startPlayer(recordingPath);
  
        audioRecorderPlayer.addPlayBackListener((e) => {
          setCurrentPosition(e.current_position);
          setDuration(e.duration);
  
          if (e.current_position === e.duration) {
            stopPlayback();
          }
        });
      }
    };
  
    const pausePlayback = async () => {
      if (audioRecorderPlayer && isPlaying) {
        setIsPlaying(false);
        await audioRecorderPlayer.pausePlayer();
      }
    };
  
    const stopPlayback = async () => {
      if (audioRecorderPlayer && isPlaying) {
        setIsPlaying(false);
        await audioRecorderPlayer.stopPlayer();
        audioRecorderPlayer.removePlayBackListener();
      }
    };
  
    return {
      recordingPath,
      isRecording,
      isPlaying,
      currentPosition,
      duration,
      startRecording,
      stopRecording,
      startPlayback,
      pausePlayback,
      stopPlayback,
    };
  };
  
  export default useAudioRecorderPlayer;
  