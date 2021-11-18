import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    login_header: {
      fontSize: 20,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 20
    },
  
    Main_view: {
      flexDirection: 'row'
    },

    credential_input: {
      width: 250,
      height: 50,
      borderColor: 'gray',
      borderWidth: 1,
      margin: 10,
      padding: 10,
      borderRadius: 10
    },

    credential_button_signup: {
      borderColor: 'blue',
      borderWidth: 1,
      marginTop: 50,
      padding: 10,
      borderRadius: 10,
      backgroundColor: 'blue',
      width: 250,
      alignItems: 'center',
    },

    credential_button_text_signup: {
      color: 'white',
      fontSize: 17,
    },

    credential_button_login: {
      borderColor: 'blue',
      borderWidth: 1,
      margin: 20,
      marginTop: 30,
      padding: 10,
      borderRadius: 10,
      backgroundColor: 'white',
      width: 250,
      alignItems: 'center',
    },

    credential_button_text_login: {
      color: 'blue',
      fontSize: 17,
    },

    signout_button: {
      borderColor: 'blue',
      borderWidth: 1,
      marginRight: 20,
      padding: 10,
      borderRadius: 10,
      backgroundColor: 'white',
      width: 75,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-end',
      
    },

    plus_image:{
      resizeMode: 'contain',
      width: 50,
      height: 50,
    },

    create_schedule_wrap:{
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 80
    },

    assign_data_input:{
      width: 250,
      height: 50,
      borderColor: 'gray',
      borderWidth: 1,
      margin: 10,
      padding: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20
    },

    date_view: {
      width: 130,  
      marginTop: 20,
      alignSelf: 'center',
    },

    time_view: {
      width: 89, 
      marginTop: 20,
      alignSelf: 'center',
    },

    done_button: {
      borderColor: 'blue',
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      backgroundColor: 'blue',
      width: 75,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 70,
      alignSelf: 'flex-end',
      marginLeft: 170
    },

    done_text:{
      color: 'white',
    },

    cancel_button:{
      borderColor: 'red',
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      backgroundColor: 'white',
      width: 75,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 80,
      alignSelf: 'flex-start',
    },

    cancel_text:{
      color: 'red',
    },

    button_container:{
      flexDirection: 'row',
    },

    task_container:{
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center'
    }

  });

export default styles