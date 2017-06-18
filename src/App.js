import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import {Button, Checkbox, Container, Dropdown, Form, Grid, Header, Icon, Input, Radio, Segment } from 'semantic-ui-react';
import $ from 'jquery';

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

const advancedPlanet = (props) => (
  <Input label="~" fluid placeholder='urbit-planet' />
)

class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      planets: null,
      email: '',
      chosenPlanet: ''
    }
  }

  render() {
    return(
      <Grid.Row>
        <Segment>
          <Grid.Row>
            <p><strong>Claim an Urbit planet from the star <em>~woldev</em> for $1.</strong></p>
            <Form fluid>
            <Form.Field>
            <Input label="Email" fluid type='email' name='email' placeholder='joe@schmoe.com' />
            </Form.Field>

                <Form.Field>
                  Choose your planet
                </Form.Field>
                <Form.Field>
                  <Radio
                    label='nidpet-narbel'
                    name='radioGroup'
                    value='this'
                    checked={true}
                    // onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Radio
                    label='losdef-doztyc'
                    name='radioGroup'
                    value='that'
                    checked={false}
                  />
                </Form.Field>
                <Form.Field>
                  <Radio
                    label='tapwet-samteb'
                    name='radioGroup'
                    value='this'
                    checked={true}
                  />
                </Form.Field>

            <Form.Field>
              <Button color="green">Claim <b>{'this'}</b> for $1</Button>
            </Form.Field>
            <Form.Field>
              <Button color="yellow" basic>See More Planets</Button>
            </Form.Field>
            <Form.Field>
              <Checkbox toggle label="Advanced" />
            </Form.Field>
            </Form>
          </Grid.Row>
        </Segment>
      </Grid.Row>
    )
  }
}

const App = () => {
    return (
      <Container>
        <Grid centered>
        <HeaderContent/>
        <MainContent/>
        <FooterContent />
        </Grid>
      </Container>
    );
}

export default App;
