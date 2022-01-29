import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import posed from 'react-native-pose';
const { width, height } = Dimensions.get("screen");

const GridItem = posed.View({
  RIGHT: { rotate: "45deg" },
  LEFT: { rotate: "-45deg" }
});

const LINE_WIDTH = 3;

const RATIO = 400/width;
const ITEMS_PER_ROW = 7;
const SIZE = width / ITEMS_PER_ROW;
const ROWS = Math.round((RATIO * 400) / SIZE);
const TOTAL_ITEMS = ITEMS_PER_ROW * ROWS;

const POSITIONS = ["LEFT", "RIGHT"];
const getRandomPosition = (arr = POSITIONS) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const Grid = ({items}) =>
  items.map (({key,position}) => (
    <GridItem pose = {position} key={key} style={styles.gridItem}>
      <View style = {styles.gridItemDiagonal}/>
      {/* <View>
            <TouchableOpacity style={styles.btn_back} onPress={() => { navigation.navigate('PatientExercise') }} >
                <Text style={styles.btn_text} >Zurück</Text>
            </TouchableOpacity>

      </View> */}
    </GridItem>
  ));


export default class App extends React.Component {
  animationInterval = null;
  constructor(props) {
    super(props);
    this.state = {
      items: this.constructGrid()
    };
    
  }

  constructGrid = () => {
   return [...Array(TOTAL_ITEMS).keys()].map(index => ({
      key: index,
      position: getRandomPosition()
    }));
  };

  componentDidMount() {
    // this.animationInterval = setInterval (() => {
    //  this.setState({
    //    items: this.constructGrid()
    //  });
    // }, 0);
  }

  componentWillUnmount() {
   clearInterval(this.animationInterval);
   this.animationInterval = null; 
  }

  render() {
  return (
    <View style={styles.container}>
      <Grid items = {this.state.items} />

    </View>
  );
}
}

const styles = StyleSheet.create({
  gridItem: {   
    
    
    width: SIZE,
    height: SIZE,
    alignItems: 'center',
    justifyContent: 'center'
  },

  gridItemDiagonal: {
    width: LINE_WIDTH,
    height: Math.sqrt(2) * SIZE,
    backgroundColor: '#333'
  },
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#B6E0EA',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
//   btn_back: {
//         // width: 300,
//         // height: 50,
//         // justifyContent: 'center',
//         // alignItems: 'center',
//         // borderRadius: 10,
//         // borderColor: 'black',
//         // borderWidth: 1,
//         // marginTop: 130,

//         fontWeight: 'bold',
//         paddingTop: 20,
//         flexDirection: 'row',
//         textAlign: 'right',
//         justifyContent: 'flex-end'
//     },
//     btn_text: {
//         fontSize: 15,
//         fontWeight: 'bold',
//         color: 'black',
//         textAlign: 'right',
//         marginLeft: 600
//     }
});
