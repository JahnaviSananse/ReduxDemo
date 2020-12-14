// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, { Fragment, Component } from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Button,
//   Text
// } from 'react-native';


// class App extends Component {
//   state = { count: 0 };
//   decrementCount() {
//     let { count } = this.state;
//     count++;
//     this.setState({
//       count
//     })
//   }
//   incrementCount() {
//     let { count } = this.state;
//     count++;
//     this.setState({
//       count
//     })
//   }
//   render() {
//     const { count } = this.state;
//     return (
//       <View styles={styles.container}>
//         <Button
//           title="increment"
//           onPress={() => this.incrementCount()}
//         />
//         <Text>{count}</Text>
//         <Button
//           title="decrement"
//           onPress={() => this.decrementCount()}
//         />
//       </View>
//     );
//   }
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });

// export default App;


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { setText } from './redux/demo/demo.actions';

const App = ({ demo, updateText }) => {

  return (
    <>
      <TextInput
        style={{ fontSize:20,height: 60, borderColor: 'black', borderWidth: 2, marginTop: '50%' }}
        onChangeText={text => updateText(text)}
        value={demo}
      />
      <Text style={{ fontSize:20,marginTop:10}}>
          You are typing : {demo}
      </Text>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = state => ({
  demo: state.demo.currentItem,
});

const mapDispatchToProps = dispatch => ({

  updateText: (item) => dispatch(setText(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)