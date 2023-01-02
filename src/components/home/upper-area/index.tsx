import React from 'react';
import {View, Text} from 'react-native';
import {makeStyles, withTheme} from 'react-native-elements';

const UpperArea = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.text}>30 * </Text>
        <Text style={styles.text}>10</Text>
      </View>
      <Text style={styles.text2}>340</Text>
    </View>
  );
};

const useStyles = makeStyles(() => {
  return {
    container: {
      flex: 1, //don't remove
      padding: 16,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      backgroundColor: '#0d0d0d',
    },
    text: {
      fontSize: 20,
      top: 10,
      left: -5,
    },
    text2: {
      fontSize: 60,
    },
  };
});

export default withTheme(UpperArea, '');
