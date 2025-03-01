import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Text,
  Left,
  Right,
  Body,
  Content,
  List,
  ListItem
} from "native-base";
import styles from "./styles";

const datas = [
  {
    route: "SimpleDeck",
    text: "Simple DeckSwiper"
  },
  {
    route: "AdvancedDeck",
    text: "Advanced DeckSwiper"
  }
];
class NHDeckSwiper extends Component {
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
            <Title>Deck Swiper</Title>
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

export default NHDeckSwiper;
