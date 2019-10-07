import React from 'react';
import { Input, Header, Grid, Form, Container, Select, TextArea, Message, GridColumn } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';
import { STATUSES, DATE_FORMAT } from '../../constants/';
import PageHeader from '../../components/PageHeader/';

class AddBlockForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      age: 0
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleCalendarChange = this.handleCalendarChange.bind(this);
  }

  handleCalendarChange(event, {value}) {
    this.setState({ date: value });
  }

  render() {
    return (
      <Container>
        <PageHeader></PageHeader>
        <Form>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Form.Field required>
                  <label>Block name</label>
                  <input />
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Field required>
                  <label>Block's size</label>
                  <input />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Form.Field required>
                  <label>Select your crop</label>
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Header
              as={'h3'}
              className='atomic fw_400'>
              Block’s structure
            </Header>
            <Grid.Row columns={3}>
              <Grid.Column>
                <Form.Field required>
                  <label>No. Rows</label>
                  <input />
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Field required>
                  <label>Row spacing</label>
                  <Input
                    type='number'
                    placeholder='in meters'
                    label='m'
                    labelPosition='right'/>
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Field required>
                  <label>Tree spacing</label>
                  <Input
                    type='number'
                    placeholder='in meters'
                    label='m'
                    labelPosition='right' />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns='equal'>
              <Grid.Column>
                <Form.Field label='Trees/Ha' control='input' readOnly/>
              </Grid.Column>
              <Grid.Column>
                <Form.Field label='Trees/Vines' control='input' readOnly/>
              </Grid.Column>
              <Grid.Column only='computer'>
                <Form.Field required>
                  <label>Actual No. of Trees</label>
                  <input />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row only='mobile tablet'>
              <Grid.Column width='8'>
                <Form.Field required>
                  <label>Actual No. of Trees</label>
                  <input />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns='equal'>
              <Grid.Column>
                <Form.Field>
                  <label>Date of Planting</label>
                  <DateInput
                    name='date'
                    placeholder={DATE_FORMAT}
                    dateFormat={DATE_FORMAT}
                    value={this.state.date}
                    icon='calendar outline'
                    iconPosition='right'
                    onChange={this.handleCalendarChange}
                  />
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Field label='Age' readOnly control='input' type='number' value={this.state.age}/>
              </Grid.Column>
              <Grid.Column only='computer'>
                <Form.Field required>
                  <label>Farm Status</label>
                  <Select placeholder='Select your farm status' options={STATUSES} />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row only='mobile tablet'>
              <Grid.Column width='8'>
                <Form.Field required>
                  <label>Farm Status</label>
                  <Select placeholder='Select your farm status' options={STATUSES} />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Form.Field>
                  <label>Commets & Notes</label>
                  <TextArea/>
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </Container>
    )
  }
}


export default AddBlockForm;