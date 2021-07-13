import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { View, Text, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../../../theme';
import { Audio } from 'expo-av';

export default function Timer() {
  const { primary } = theme.colors;
  const [timeLeft, setTimeLeft] = useState(5);
  const [pomsCompleted, setPomsCompleted] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(true);

  const iconPlayPause = isRunning ? 'pause' : 'play-arrow';
  const iconSound = isSoundOn ? 'music-off' : 'music-note';

  const [alarm, setAlarm] = useState<Audio.Sound>();

  async function playAlarm() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../../../assets/alarm.mp3')
    );
    setAlarm(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return alarm
      ? () => {
          console.log('Unloading Sound');
          alarm.unloadAsync();
        }
      : undefined;
  }, [alarm]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isRunning) {
        setTimeLeft(timeLeft - 1);
        if (timeLeft <= 1) {
          playAlarm();
          alert('terminou');
          resetStates();
        }
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  const resetStates = () => {
    setIsRunning(false);
    setHasStarted(false);
    setPomsCompleted(pomsCompleted + 1);
    setTimeLeft(5);
  };

  const onPressSound = () => {
    setIsSoundOn(!isSoundOn);
  };

  const onPressPlay = () => {
    setIsRunning(!isRunning);
    setHasStarted(true);
  };

  const onPressStop = () => {
    resetStates();
  };

  const convertSecondsToTimeString = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    seconds = Math.floor(seconds % 60);
    const timeString = [hours, minutes, seconds]
      .map((unit) => String(unit).padStart(2, '0'))
      .join(':');
    return hours > 0 ? timeString : timeString.substring(3);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.sound} onPress={onPressSound}>
        <MaterialIcons name={iconSound} size={36} color={primary} />
      </Pressable>
      <View>
        <Text style={styles.timer}>{convertSecondsToTimeString(timeLeft)}</Text>
        <View style={styles.controles}>
          <Pressable key="play" onPress={onPressPlay}>
            <MaterialIcons name={iconPlayPause} size={80} color={primary} />
          </Pressable>
          {hasStarted && (
            <Pressable key="stop" onPress={onPressStop}>
              <MaterialIcons name="stop" size={80} color={primary} />
            </Pressable>
          )}
        </View>
      </View>
      <Text style={styles.completed}>{pomsCompleted}</Text>
    </View>
  );
}
