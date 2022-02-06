import React from 'react';
import {ActivityIndicator, View, Platform} from 'react-native';
import styles from './style';

const Loader = (props) => {
  const {loading} = props;

  return loading ? (
    <View style={styles.loaderContainer}>
      <View style={styles.indicator}>
        <ActivityIndicator
          size="large"
          animating={loading}
          color={'#FFF'}
          style={{
            left: Platform.OS === 'ios' ? 1.3 : 0,
            top: Platform.OS === 'ios' ? 1 : 0,
          }}
        />
      </View>
    </View>
  ) : null;
};

export default Loader;
