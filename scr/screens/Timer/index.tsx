import React, { useState } from 'react';
import { styles } from './styles';
import { View, Text, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../../../theme';

export default function Timer() {
  const { primary } = theme.colors;
  const [timeLeft, setTimeLeft] = useState(1500);
  const [pomsCompleted, setPomsCompleted] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(true);

  const iconPlayPause = isRunning ? 'pause' : 'play-arrow';
  const iconSound = isSoundOn ? 'music-off' : 'music-note';

  const onPressSound = () => {
    setIsSoundOn(!isSoundOn);
  };

  const onPressPlay = () => {
    setIsRunning(!isRunning);
    setHasStarted(true);
    setTimeLeft(timeLeft - 1);
  };

  const onPressStop = () => {
    setPomsCompleted(pomsCompleted + 1);
    setIsRunning(false);
    setTimeLeft(timeLeft - 1);
    setHasStarted(false);
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
        <MaterialIcons name={iconSound} size={48} color={primary} />
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
