import React, { Component } from 'react';
import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import {Button, Container, Grid, Header, Icon, Image, Input, Label, Segment } from 'semantic-ui-react';

const HeaderContent = () => (
  <Grid.Row>
    <Header as='h2' icon textAlign='center'>
      <Icon name='star' circular />
      <Header.Content>
        Planet Launcher
      </Header.Content>
      <Header sub>Urbit planets for $1.</Header>
    </Header>
  </Grid.Row>
)

const FooterContent = () => (
  <div>
  <Grid.Row>
    <p>Check out <a href="https://urbit.org">Urbit</a> for an overview.</p>
    </Grid.Row>
    <Grid.Row>
    <p>&copy; Amin Shah Gilani. All Rights Reserved</p>
    </Grid.Row>
    <Grid.Row>
    <p>All payments are in BTC</p>
  </Grid.Row>
  </div>
)



const BuyForm = () => (
  <Grid.Row>
    <Input label="Email" fluid type='email' name='email' placeholder='joe@schmoe.com' />
    <Input label="~" fluid placeholder='urbit-planet' />
    <Button>Claim for $1</Button>
  </Grid.Row>
)

const BuySegment = () => (
  <Grid.Row>
    <Segment>
      Claim an Urbit planet from the star <em>~woldev</em> for $1.
      <BuyForm />
    </Segment>
  </Grid.Row>
)


class App extends Component {
  render() {
    return (
      <Container>
        <Grid centered>
        <HeaderContent/>
        <BuySegment />
        <FooterContent />
        </Grid>
      </Container>
    );
  }
}

export default App;
