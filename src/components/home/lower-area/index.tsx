import React from 'react';
import {View, Dimensions, Text} from 'react-native';
import {makeStyles, withTheme} from 'react-native-elements';
import {buttons, buttons2} from '../../../pages/home/data';
import Button from '../../button';

const LowerArea = () => {
  const styles = useStyles();
  const DeviceWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.buttonContainer,
          {
            flex: 3,
          },
        ]}>
        {buttons.map((data, index) => {
          return (
            <Button
              key={data.value}
              data={data}
              containerStyle={{
                width: DeviceWidth / 4,
                height: DeviceWidth / 4,
              }}
              outerContainerStyle={{
                backgroundColor: '#2F3646',
              }}
              textStyle={{
                fontSize: typeof data.value === 'number' ? 30 : 24,
                color: index > 2 ? '#a6a6a6' : '#BB4FD2',
              }}></Button>
          );
        })}
      </View>
      <View
        style={[
          styles.buttonContainer,
          {
            flex: 1,
          },
        ]}>
        {buttons2.map(data => {
          const divider = data.value === 'result' ? 2 : 4;
          return (
            <Button
              key={data.value}
              data={data}
              containerStyle={{
                width: DeviceWidth / 4,
                height: DeviceWidth / divider,
              }}
              outerContainerStyle={{
                backgroundColor: '#BB4FD2',
              }}
              textStyle={{
                color: '#BB4FD2',
              }}></Button>
          );
        })}
      </View>
    </View>
  );
};

const useStyles = makeStyles(() => {
  return {
    container: {
      flexDirection: 'row',
    },
    buttonContainer: {
      flexDirection: 'row',
      height: '100%',
      alignContent: 'flex-end',
      flexWrap: 'wrap',
    },
  };
});

export default withTheme(LowerArea, '');
