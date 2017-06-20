import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import {Button, Checkbox, Container, Form, Grid, Header, Icon, Input, Message, Radio, Segment } from 'semantic-ui-react';

const MockupMessage = () => (
  <Message warning icon>
    <Icon name='warning circle' />
    <Message.Content>
      <Message.Header>Whoaa, stop right there</Message.Header>
      This site is just a mockup and was made to get my application to 3rd party
      service providers approved. <br />
      Check back soon! <strong>~silmun-rovlyn</strong>
    </Message.Content>
  </Message>
)


const HeaderContent = () => (
  <Grid.Row>
    <MockupMessage />
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

const AdvancedPlanetSelect = (props) => (
  <Form.Field>
    <p>Enter a valid planet phonetic name (@p)</p>
  <Form.Field>
    <Input label="~" fluid placeholder='urbit-planet' />
  </Form.Field>
  <Form.Field>
    <Button icon="bitcoin" color="green" content="Get for $1" />
  </Form.Field>
  </Form.Field>
)

const SimplePlanetSelect = (props) => (
  <Form.Field>
    <Form.Field>
      Choose your planet:
    </Form.Field>
      {props.planetRadios}
    <Form.Field>
      <Button.Group>
        <Button onClick={props.lastClickHandler} disabled={props.lastDisabled} labelPosition='left' icon='left chevron' content='Last' />
        <Button icon="bitcoin" color="green" content="Get for $1" />
        <Button onClick={props.moreClickHandler} labelPosition='right' icon='right chevron' content='More' />
      </Button.Group>
    </Form.Field>
  </Form.Field>
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

  toggleAdvancedSelect() {
    const advanced = this.state.advanced
    let newState = Object.assign({}, this.state);
    newState.advanced = !advanced;
    this.setState(newState);
  }

  render() {
    const advanced = this.state.advanced;
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
      );
    });

    return(
      <Grid.Row>
        <Segment id="buyform">
          <Grid.Row>
            <p><strong>Claim an Urbit planet from the star <em>~woldev</em> for $1.</strong></p>
            <Form>
            <Form.Field>
            <Input label="Email" onChange={this.handleEmailChange.bind(this)} value={this.state.email} fluid type='email' name='email' placeholder='joe@schmoe.com' />
            </Form.Field>

            {advanced ? <AdvancedPlanetSelect /> : <SimplePlanetSelect
              lastDisabled={this.state.page === 0}
              planetRadios={planetRadios}
              lastClickHandler={this.lastPage.bind(this)}
              moreClickHandler={this.nextPage.bind(this)}
              />}

            <Form.Field>
              <Checkbox toggle onClick={this.toggleAdvancedSelect.bind(this)} checked={this.state.advanced} label="Advanced" />
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
        <Grid centered columns={1}>
        <HeaderContent/>
        <MainContent/>
        <FooterContent />
        </Grid>
      </Container>
    );
}

export default App;
