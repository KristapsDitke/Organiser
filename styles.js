import { 
  StyleSheet
 } from 'react-native';

const Styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    appSection: {
      // flexDirection: "row",
    },
    appActionBox:{
      // border: 1,
      // backgroundColor: '#f0fc',
    },
    headBox:{
      height: 80,
      width: '100%',
      paddingTop: 28,
      backgroundColor: 'coral',
      marginTop: 25,
      marginBottom:20,
  },
  headTitle:{
     textAlign: 'center',
     color: '#fff',
     fontSize: 25,
     fontWeight: 'bold',
  },
  calBox:{
    // borderWidth: 10,
    paddingTop: 8,
    paddingHorizontal: 8,
    backgroundColor: '#CCCDEA',
    borderRadius: 10
  },
    calList:{
      maxHeight: 180, 
      flexGrow: 0,
      marginBottom: 10,
    },
    calHeadBox:{
      // height: 30,
      // width: '100%',
      // padding: 18,
      borderTopRightRadius: 8,
      borderTopLeftRadius: 8,
      backgroundColor: 'coral',
      // marginTop: 25,
      marginBottom:10,
    },
    calHeadText:{
      width: 40, 
      padding: 9,
      color: '#fff',
      fontSize: 12,
      fontWeight: 'bold',
    },
    calDay:{
      margin: 2,
      padding: 4,
      fontWeight: 'bold',
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: '#A4A9FA',
      textAlign: 'center'
    },
    calDayNextMonth:{
      margin: 2,
      padding: 4,
      fontWeight: 'bold',
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: '#D59961',
      textAlign: 'center'
    },
    calToday:{
      color: 'white',
      margin: 5,
      padding: 3,
      fontWeight: 'bold',
      backgroundColor: '#1F224E',
      textAlign: 'center'
    },
    namesLeft:{
      flex:2,
      margin: 3,
      marginRight: 0,
      padding: 5,
      fontWeight: 'bold',
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      backgroundColor: '#CCCDEA',
      textAlign: 'center'
    },
    namesRight:{
      flex: 4,
      margin: 3,
      marginLeft: 0,
      padding: 5,
      paddingLeft: 20,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
      backgroundColor: '#CCCDEA',
      textAlign: 'left'
    },
    inputBox:{
      // flex: 1,
      alignItems: 'center',
    },
    input:{
      padding: 3,
      margin: 3,
      width: '100%',
      height: 45
    },
    inputPressObjectBox:{
      // flex: 1,
      flexDirection: "row",
    },
    inputPressObject:{
      backgroundColor:'coral',
      borderBottomWidth: 3,
      borderLeftWidth: 2,
      borderColor: 'gray',
      borderRadius: 5,
      margin: 2,
      paddingHorizontal: 8,
      // width: 108,
      alignItems: 'center',
    },
    title:{
      fontWeight: 'bold',
      fontSize: 15,
      padding: 5,
      
    },
    listBox: {
      alignItems: 'center',
      borderWidth: 2,
      borderRadius: 10,
      marginTop: 25,
      padding: 10,
      borderColor: 'coral',
      backgroundColor: '#A4A9FA',
    },
    listItemBox:{
      flex: 1,
      
      flexDirection: "row",
    },
    whiteText:{
      color: 'white',
      fontWeight: 'bold',
      padding: 4
    }
  });

  export default Styles