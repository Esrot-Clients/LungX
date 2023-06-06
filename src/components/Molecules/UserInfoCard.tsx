import * as React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import metrics from '../../constants/layout';
import colors from '../../constants/colors';
import * as Typography from '../Atoms/Typography';
import fonts from '../../constants/fontsSize';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useNavigation } from '@react-navigation/native';

const user = {
  firstname: 'Pratyush',
  lastname: 'Motha',
  username: 'pratyushmotha',
  email: 'ipratyushmotha@gmail.com',
  phone: '7668532731',
};

const UserInfoCard = ({
    onPress
}: any) => {

  return (
    <View style={styles.AvatarContainer}>
      <Image
        style={{width: 100, height: 100, borderRadius: 100}}
        source={{
          uri: 'https://img.freepik.com/premium-vector/cute-astronaut-working-as-programmer_332004-204.jpg?w=740',
        }}
      />
      <View style={styles.InfoContainer}>
        <Typography.Title size={fonts.font16} color={colors.red}>
            Basic Information
        </Typography.Title>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  AvatarContainer: {
    width: metrics.screenWidth,
    marginTop: 20,
    alignItems: 'center',
  },
  InfoContainer: {
     marginTop: 5,
  },
});

export default UserInfoCard;