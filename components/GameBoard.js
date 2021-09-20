import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, ImageBackground  } from 'react-native';
import Square from "./Square";
import { connect } from "react-redux";


const GameBoard = (props) =>{
const [timeLeft, setTimeLeft] = useState(20)

useEffect(() => {
    if(!timeLeft) return 
    const timerId = setInterval(() => {
        //happens every 1000ms
        setTimeLeft(timeLeft -1)
    },1000)
    return () => clearInterval(timerId)
}, [timeLeft])
    return (
        <ImageBackground  style={styles.container}
        source={require('../assets/bg.png')}
        >
          <Text style={styles.header}>Whack-A-Mole app!</Text>
          <Text style={styles.time}>You have {timeLeft} seconds left</Text>
          <Text style={styles.score}>{props.score}</Text>
          <Text>Moles Whacked!</Text>
          <View style={styles.game}>
            <Square > </Square>
            <Square > </Square>
            <Square > </Square>
            <Square > </Square>
            <Square > </Square>
            <Square > </Square>
            <Square > </Square>
            <Square > </Square>
            <Square > </Square>
            <Square > </Square>
            <Square > </Square>
            <Square > </Square>
          </View>
        </ImageBackground>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    game:{
      flexDirection:'row',
      flexWrap:'wrap',
      width:300,
      paddingTop:20,
      alignItems:'center'
    },
    header: {
        fontWeight: 'bold',
        fontSize:50,
        marginBottom: 10,
        marginTop: 100
      },
      time:{
        fontSize:25,   
      },
      score:{
        fontSize:25,
        marginTop:20,
        fontWeight: 'bold',
        color:'blue'
      }
})

const mapStateToProps = state => {
    return{
        score:state.score
    }
}
export default connect(mapStateToProps)(GameBoard)