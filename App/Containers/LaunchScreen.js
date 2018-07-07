import React, { Component } from "react";
import { ScrollView, Text, Image, View, ListView } from "react-native";
import { Images } from "../Themes";
import { connect } from "react-redux";
// Styles
import styles from "./Styles/LaunchScreenStyles";
import MovieActions from "../Redux/MoviesRedux";
import AlertMessage from "../Components/AlertMessage";

class LaunchScreen extends React.Component {
  constructor(props) {
    super(props);
    /************************************************************
     * STEP 1
     * This is an array of objects with the properties you desire
     * Usually this should come from Redux mapStateToProps
     *************************************************************/

    //memanggil props type getMoviesPopular yang sudah kita deklarasikan diatas
    this.props.getMoviesPopular();

    
  }

  componentWillReceiveProps(newProps) {
    this.forceUpdate();
    if (newProps.movies.error === null && newProps.movies.payload !== null) {
      console.log(newProps.movies.payload.results);
    } else {
      console.log(">> error");
    }
    // console.log(newProps.movies);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>afgahfg</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    // ...redux state to props here
    movies: state.movies
  };
};

//dispatch ke action moviesRequest
const mapDispatchToProps = dispatch => {
  return {
    getMoviesPopular: () => dispatch(MovieActions.moviesRequest())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LaunchScreen);
