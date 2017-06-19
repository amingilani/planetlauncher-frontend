import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import {Button, Checkbox, Container, Form, Grid, Header, Icon, Input, Radio, Segment } from 'semantic-ui-react';

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
      email: '',
      chosenPlanet: '',
      page: 0,
      advanced: false,
      planets: [
        '~motmeg-morryt',
        '~lavdux-hodwyn',
        '~ponnyx-ramsug',
        '~nisnym-tobpur',
        '~tanseg-racpem',
        '~hapmus-sonryg',
        '~bitsep-nilwyn',
        '~lophes-lashex',
        '~ponsem-padmex',
        '~roswer-fittes',
        '~dildyr-nopheb',
        '~nocwyt-divfep',
        '~samlev-nibweb',
        '~tapwet-samteb',
        '~nossed-tagnyl',
        '~sovben-mogrup',
        '~locsel-hobnem',
        '~fodhes-dacwer',
        '~timleg-nissec',
        '~wolzod-rapbyl',
        '~nibdeg-tadret',
        '~fabryd-wolled',
        '~sovfen-donrul',
        '~rabseb-tiltyn',
        '~dasdeb-lissef',
        '~nolsyx-ligned',
        '~hapheb-hidrep',
        '~ripbyt-mirper',
        '~nidpet-narbel',
        '~racsyx-fodrys',
        '~losdef-doztyc',
      ]
    }
  }

  paginatePlanets () {
    const planets = this.state.planets;
    const page = this.state.page;
    const pageSize = 3;
    return planets.slice(page * pageSize, (page + 1) * pageSize);
  }

  nextPage (event) {
    let newState = Object.assign({}, this.state);
    newState.page += 1;
    this.setState(newState);
    event.preventDefault();
  }

  lastPage (event) {
    let newState = Object.assign({}, this.state);
    newState.page -= 1;
    this.setState(newState);
    event.preventDefault();
  }

  handlePlanetRadioClick(event) {
    const chosenPlanet = event.target.innerHTML
    let newState = Object.assign({}, this.state);
    newState.chosenPlanet = chosenPlanet;
    this.setState(newState);
  }

  handleEmailChange(event) {
    const email = event.target.value
    let newState = Object.assign({}, this.state);
    newState.email = email;
    this.setState(newState);
  }

  render() {
    const planetRadios = this.paginatePlanets().map((planet) => {
      const chosenPlanet = this.state.chosenPlanet;
      return (
        <Form.Field key={planet}>
          <Radio
            label={planet}
            name='radioGroup'
            value={planet}
            checked={planet === chosenPlanet}
            onClick={this.handlePlanetRadioClick.bind(this)}
          />
        </Form.Field>
      )
    })

    return(
      <Grid.Row>
        <Segment>
          <Grid.Row>
            <p><strong>Claim an Urbit planet from the star <em>~woldev</em> for $1.</strong></p>
            <Form>
            <Form.Field>
            <Input label="Email" onChange={this.handleEmailChange.bind(this)} value={this.state.email} fluid type='email' name='email' placeholder='joe@schmoe.com' />
            </Form.Field>

            <Form.Field>
              Choose your planet:
            </Form.Field>
              {planetRadios}
            <Form.Field>
              <Button.Group>
                <Button onClick={this.lastPage.bind(this)} disabled={this.state.page === 0} labelPosition='left' icon='left chevron' content='Last' />
                <Button  icon="bitcoin" color="green" content="Get for $1" />
                <Button onClick={this.nextPage.bind(this)} labelPosition='right' icon='right chevron' content='More' />
              </Button.Group>
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
