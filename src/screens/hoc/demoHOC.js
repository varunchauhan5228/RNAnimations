import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

const ShowScoreHOC = (Player) => {
  const CalculateScore = () => {
    const [countScore, setCountScore] = useState(0);
    const hitRun = () => {
      setCountScore(countScore + 1);
    };
    return (
      <View style={styles.container}>
        <Player run={countScore} hitRun={() => hitRun()} />
      </View>
    );
  };
  return CalculateScore;
};
export default ShowScoreHOC;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
