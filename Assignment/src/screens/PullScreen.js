import React, { useState, useEffect  } from 'react';
import {Platform, StyleSheet, Text, View,FlatList,ScrollView,Button} from 'react-native';
import { Container, Header, Conten,Body, Card, CardItem } from 'native-base';
 import axios from 'axios';

 function handleClick(url) {
    axios.get(url)
    .then(res=>{

         
        console.log(res['data'][0]['id'])
       setDataState(res['data'])
        //this.setState({data : res['data']})

    })
    .catch(e=>{
        console.log("Error occured ",e);
    } )
  }

export default function SettingsScreen({ route,navigation }) {
  const { ownerName } = route.params;
  const { repoName } = route.params;
  const [ ownerNameState, setOwnerNameState] = useState(ownerName);
  const [ repoNameState, setRepoNameState] = useState(repoName);
  const [ dataState, setDataState] = useState("");
  const url = "https://api.github.com/repos/"+ownerName+"/"+repoName+"/"+"pulls";
//   useEffect(() => {    
        // name = 'torvalds'
        // repoName = 'linux'

        // https://api.github.com/repos/torvalds/linux/pulls

    //    console.log(url);


//    });


    useEffect(() => {
        axios.get(url)
        .then(res=>{
            console.log(res['data'][0]['id'])
        setDataState(res['data'])
            //this.setState({data : res['data']})

        })
        .catch(e=>{
            console.log("Error occured ",e);
        } )
    }, []);
    return (
    <View style={styles.container}>
 
        <ScrollView>

            <View>
              <FlatList 
                  data = {dataState}
                  
                 //extraData={ownerNameState}
                  renderItem={i => {          

                    return (

                      <View style={{flex : 1 ,justifyContent: 'center'}}>


                          <Card style={{marginLeft:15 , marginRight:15 , flex:1 }}>
                             
                            <View  style={{paddingTop:3, flexDirection:'row'  , marginBottom:10 , flex:1 }}>

                              <Text style={{fontWeight:'bold', flex:0.3 ,fontSize:16,color:'#003569'  }}> Title: </Text>                          
                              <Text style={{fontSize:14,color:'#003569' , flex: 1, flexWrap: 'wrap' }}>{i.title}</Text>

                            </View>

                            <View  style={{paddingTop:3, flexDirection:'row'  , marginBottom:10 , flex:1 }}>

                              <Text style={{fontWeight:'bold', flex:0.3 ,fontSize:16,color:'#003569'  }}> NodeId: </Text>                          
                              <Text style={{fontSize:14,color:'#003569' , flex: 1, flexWrap: 'wrap' }}>{i.nodeid} </Text>

                            </View>

                            <View  style={{paddingTop:3, flexDirection:'row'  , marginBottom:10 , flex:1 }}>

                              <Text style={{fontWeight:'bold', flex:0.3 ,fontSize:16,color:'#003569'  }}> Created at </Text>                          
                              <Text style={{fontSize:14,color:'#003569' , flex: 1, flexWrap: 'wrap' }}>{i.created_at} </Text>

                            </View>


                            <View  style={{paddingTop:3, flexDirection:'row'  , marginBottom:10 , flex:1 }}>

                              <Text style={{fontWeight:'bold', flex:0.5 ,fontSize:16,color:'#003569'  }}> Updated at </Text>                          
                              <Text style={{fontSize:14,color:'#003569' , flex: 1, flexWrap: 'wrap' }}>{i.created_at} </Text>

                            </View>




                          </Card>

                          
                      </View>
                      

                    )}}
                  >
                </FlatList>

              </View>

        </ScrollView>

 
 
    </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });