import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text
} from "native-base";
import styles from "./styles";

import {NativeModules, findNodeHandle} from 'react-native';
const Tealeaf = NativeModules.RNCxa;

class HeaderNoLeft extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header noLeft>
          <Left>
            <Button
              hasText
              transparent
              onPress={() => this.props.navigation.goBack()}
            >
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button
              hasText
              transparent
              onPress={() => this.props.navigation.goBack()}
            >
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>

        <Content 
          scrollEnabled={false}
          contentContainerStyle={{width: '100%'}}
          padder>
          <Text>
            Header with noLeft prop, eliminates Left component for Android
          </Text>
        </Content>
      </Container>
    );
  }
}

export default HeaderNoLeft;
