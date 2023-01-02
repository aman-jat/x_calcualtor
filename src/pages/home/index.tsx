import React from 'react';
import {View, Dimensions, Text} from 'react-native';
import {makeStyles, withTheme} from 'react-native-elements';
import Button from '../../components/button';
import {buttons, buttons2} from './data';
import UpperArea from '../../components/home/upper-area';
import LowerArea from '../../components/home/lower-area';

const Home = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <UpperArea />
      <LowerArea />
    </View>
  );
};

const useStyles = makeStyles(() => {
  return {
    container: {
      flex: 1,
    },
  };
});

export default withTheme(Home, '');
