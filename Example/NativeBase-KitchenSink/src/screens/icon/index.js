import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  List,
  ListItem,
  Content,
  Text
} from "native-base";
import styles from "./styles";

const datas = [
  {
    route: "BasicIcon",
    text: "Basic Icon"
  },
  {
    route: "Icons",
    text: "Icons"
  },
  {
    route: "PlatformSpecificIcon",
    text: "Platform Specific Icon"
  },
  {
    route: "IconFamily",
    text: "Icon Family"
  }
];

class NHIcon extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Icons</Title>
          </Body>
          <Right />
        </Header>

        <Content 
          horizontal
          scrollEnabled={false}
          contentContainerStyle={{width: '100%'}}>
          <List
            dataArray={datas}
            keyExtractor={(item, index) => String(index)}
            renderRow={data =>
              <ListItem
                button
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Text>
                    {data.text}
                  </Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" style={{ color: "#999" }} />
                </Right>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default NHIcon;
