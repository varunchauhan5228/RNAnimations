import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class LifeCycleMethods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter,
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.counter !== state.counter) {
      return {counter: props.counter};
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log('shouldComponentUpdate===>', nextProps, nextState);
    return true; // component will be render behalf of return true/false
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.log('getSnapshotBeforeUpdate===>', prevProps, prevState);
    return 40;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //This is also a good place to do network requests as long as you compare the current props to previous props
    // console.log('componentDid-Update===>', prevProps, prevState, snapshot);
  }

  render() {
    // console.log('Child-RenderCalled===>');
    return (
      <View style={styles.container}>
        <Text>ChildComponentCounter: {this.state.counter}</Text>
      </View>
    );
  }
}
export default LifeCycleMethods;

const styles = StyleSheet.create({
  container: {},
});
