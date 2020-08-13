import React, { useState, useEffect  } from 'react';
//import { Picker } from 'react-native'
import {  Text, View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button} from 'native-base';


export default function HomeScreen({ navigation }) {
    const [ ownerNameState, setOwnerNameState] = useState('torvalds');
    const [ repoNameState, setRepoNameState] = useState('linux');
    return (

        <Container>

        <Content>
          <Form>
            <Item>
              <Input placeholder="Github Owner Name" onChangeText={text => setRepoNameState(text)} />
            </Item>
            <Item last>
              <Input placeholder="Repo Name" onChangeText={text => setRepoNameState(text)} />
            </Item>
            <Button style= {{ margin: 10 }} block primary           onPress={() => navigation.navigate('Pull',{ownerName:ownerNameState,repoName:repoNameState})} >
                <Text>Submit</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
  