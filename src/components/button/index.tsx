import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
import {makeStyles, withTheme} from 'react-native-elements';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  data: {
    title: string;
    value: number | string;
    iconFamily?: string;
    iconName?: any;
  };
  outerContainerStyle: StyleProp<ViewStyle>;
  containerStyle: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const Button = (props: Props) => {
  const {data, outerContainerStyle, containerStyle, textStyle} = props;
  const styles = useStyles();

  const onPress = (value: any) => {
    console.log('pressed', value);
  };

  return (
    <View style={[outerContainerStyle]}>
      <TouchableOpacity
        style={[containerStyle, styles.buttonWrapper]}
        onPress={() => onPress(data.value)}>
        {data.iconFamily ? (
          getIcon(data)
        ) : (
          <Text style={[styles.buttonText]}>{data.title}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const useStyles = makeStyles(() => {
  return {
    buttonWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#0d0d0d',
      borderWidth: 2,
    },
    button: {
      flex: 1,
    },
    buttonText: {
      fontSize: 24,
      color: 'white',
    },
  };
});

export default withTheme(Button, '');

const getIcon = (data: any) => {
  const prop = {
    color: data.color,
    name: data.iconName,
    size: 24,
  };
  switch (data.iconFamily) {
    case 'ionicons':
      return <Ionicons {...prop} size={33} />;
    case 'antdesign':
      return <AntDesign {...prop} size={26} />;
    case 'mcicons':
      return <MCIcons {...prop} size={34} />;
    case 'result':
      return (
        <>
          <AntDesign {...prop} style={{top: 13}} size={34} name="minus" />
          <AntDesign {...prop} style={{top: -13}} size={34} name="minus" />
        </>
      );
    default:
      return <Ionicons name="ios-at-sharp" size={33} />;
  }
};
