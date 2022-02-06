import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ButtonComp from '../../../component/button';
import LifeCycleMethods from './lifeCycleMethods';

class MountingPhaseDemo extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    // console.log('ConstructorCalled===>');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount====>');
  }
  // componentDidMount() {
  //   console.log('componentDidMountCalled===>');
  // }

  render() {
    // console.log('RenderCalled===>');
    return (
      <View style={styles.container}>
        <Text>MountingPhaseCounter: {this.state.counter}</Text>
        <LifeCycleMethods counter={this.state.counter} />
        <ButtonComp
          buttonText="Button"
          btnStyle={styles.button}
          buttonPressed={() => this.setState({counter: this.state.counter + 1})}
        />
      </View>
    );
  }
}
export default MountingPhaseDemo;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {width: '80%'},
});
