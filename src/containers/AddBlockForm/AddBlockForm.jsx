import React from 'react';
import moment from 'moment';
import { Label, Input, Header, Grid, Form, Container, Select, TextArea, Message, GridColumn } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';
import { STATUSES, DATE_FORMAT, CROPS_LIST } from '../../constants/';
import { isPositiveFloat } from '../../helpers/';
import PageHeader from '../../components/PageHeader/';
import RadioButtons from '../../components/RadioButtons';

class AddBlockForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blockName: '',
      blockSize: 0,
      crop: '',
      date: '',
      noRows: '',
      rowSpacing: '',
      treesSpacing: '',
      actualTrees: 0,
      treesVines: 0,
      age: 0,
      status: '',
      treesHa: 0,
      ...this.defaultErrorsState
    };
    this.defaultErrorsState = {
      blockNameError: false,
      blockSizeError: false,
      cropError: false,
      noRowsError: false,
      rowSpacingError: false,
      treesSpacingError: false,
      actualTreesError: false,
      statusError: false
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleCalendarChange = this.handleCalendarChange.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.updateComputedFields = this.updateComputedFields.bind(this);
    this.updateTreesHa = this.updateTreesHa.bind(this)
    this.updateTreesVines = this.updateTreesVines.bind(this)
    this.updateAge = this.updateAge.bind(this)
  }

  onFieldChange(event, data) {
    const { target } = event;
    const { name, value } = data || target;

    this.setState({
      [name]: value
    });
    this.updateComputedFields()
  }

  updateComputedFields() {
    this.updateTreesHa();
    this.updateTreesVines();
  }

  updateTreesHa() {
    const { rowSpacing, treesSpacing } = this.state

    const treesHa = rowSpacing && treesSpacing
      ? 10000 / this.state.rowSpacing / this.state.treesSpacing
      : 0
    this.setState({ treesHa })
    return treesHa
  }

  updateTreesVines() {
    const { blockSize, treesHa } = this.state
    const treesVines = blockSize && treesHa
      ? blockSize * treesHa
      : 0
    this.setState({ treesVines })
    return treesVines
  }

  updateAge(dateValue) {
    const date = moment(dateValue, DATE_FORMAT, true);
    const valid = date.isValid();
    const diff = moment().diff(date, 'years');

    const age = valid && !isNaN(diff) ? diff : 0;
    this.setState({ age })
    return age
  }


  handleCalendarChange(event, {value}) {
    this.setState({ date: value });
    this.updateAge(value);
  }

  handleStatusChange(event, { value }) {
    this.setState({
      statusError: false,
      status: value
    });
  }

  onFormSubmit() {
    const {
      blockName,
      blockSize,
      crop,
      noRows,
      rowSpacing,
      treesSpacing,
      actualTrees,
      status
    } = this.state;

    this.setState({
      ...this.defaultErrorsState
    });
    if (!blockName) this.setState({blockNameError : { content: 'Please enter your block name' }});
    if (!blockSize) {
      this.setState({ blockSizeError: { content: 'Please enter your block size' } });
    } else if(!isPositiveFloat(+blockSize)) {
      this.setState({ blockSizeError: { content: 'Please enter positive float' } });
    }
    if (!crop) this.setState({ cropError: true });

    if (!noRows) this.setState({ noRowsError: { content: 'Please enter your no.rows' } });
    if (!rowSpacing) this.setState({ rowSpacingError: { content: 'Please enter your row spacing' } });
    if (!treesSpacing) this.setState({ treesSpacingError: { content: 'Please enter your tree spacing' } });
    if (!actualTrees) this.setState({ actualTreesError: { content: 'Please enter your actual no. trees' } });
    if (!status) this.setState({ statusError: { content: 'Please pick a status' } });

    // prepared object to send
    console.log({...this.state});
  }

  render() {
    return (
      <Container>
        <PageHeader onFormSubmit={this.onFormSubmit}></PageHeader>
        <Form>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Form.Field required>
                  <Form.Input
                    label='Block name'
                    name='blockName'
                    required
                    onChange={this.onFieldChange}
                    error={this.state.blockNameError}
                    >
                  </Form.Input>
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Field required>
                  <Form.Input
                    label="Block's size"
                    name='blockSize'
                    type='number'
                    required
                    onChange={this.onFieldChange}
                    error={this.state.blockSizeError}
                  >
                  </Form.Input>
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Form.Field
                  required
                  className="label--left">
                  <label>Select your crop</label>
                  <RadioButtons
                    onChange={this.onFieldChange}
                    name='crop'
                    value={this.state.crop}
                    data={CROPS_LIST}
                  />
                  {this.state.cropError ? (
                  <Label pointing prompt>
                    Please select your crop
                  </Label>
                  ) : ''}
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
                  <Form.Input
                    label='No. Rows'
                    name='noRows'
                    required
                    onChange={this.onFieldChange}
                    error={this.state.noRowsError}
                  >
                  </Form.Input>
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Field
                  className={this.state.rowSpacingError ? 'error' : ''}
                  required>
                  <label>Row spacing</label>
                  <Input
                    name='rowSpacing'
                    onChange={this.onFieldChange}
                    type='number'
                    placeholder='in meters'
                    label='m'
                    labelPosition='right'/>
                    {this.state.rowSpacingError ? (
                    <Label pointing prompt>
                      {this.state.rowSpacingError.content}
                    </Label>
                  ) : ''}
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Field
                  className={this.state.treesSpacingError ? 'error' : ''}
                  required>
                  <label>Tree spacing</label>
                  <Input
                    name='treesSpacing'
                    onChange={this.onFieldChange}
                    type='number'
                    placeholder='in meters'
                    label='m'
                    labelPosition='right' />
                  {this.state.treesSpacingError ? (
                    <Label pointing prompt>
                      {this.state.treesSpacingError.content}
                    </Label>
                  ) : ''}
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns='equal'>
              <Grid.Column>
                <Form.Field
                  name='treesHa'
                  value={this.state.treesHa}
                  label='Trees/Ha'
                  control='input'
                  readOnly/>
              </Grid.Column>
              <Grid.Column>
                <Form.Field
                  name='treesVines'
                  value={this.state.treesVines}
                  label='Trees/Vines'
                  control='input'
                  readOnly/>
              </Grid.Column>
              <Grid.Column only='computer'>
                <Form.Field required>
                  <Form.Input
                    label='Actual No. of Trees'
                    name='actualTrees'
                    required
                    onChange={this.onFieldChange}
                    error={this.state.actualTreesError}
                  >
                  </Form.Input>
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row only='mobile tablet'>
              <Grid.Column width='8'>
                <Form.Field required>
                  <Form.Input
                    label='Actual No. of Trees'
                    name='actualTrees'
                    required
                    onChange={this.onFieldChange}
                    error={this.state.actualTreesError}
                  >
                  </Form.Input>
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
                <Form.Field
                  name='age'
                  label='Age'
                  readOnly
                  control='input'
                  type='number'
                  value={this.state.age}/>
              </Grid.Column>
              <Grid.Column only='computer'>
                <Form.Field
                  className={this.state.statusError ? 'error' : ''}
                  required>
                  <label>Farm Status</label>
                  <Select
                    value={this.state.status}
                    placeholder='Select your farm status'
                    onChange={this.handleStatusChange}
                    options={STATUSES} />
                  {this.state.statusError ? (
                    <Label pointing prompt>
                      {this.state.statusError.content}
                    </Label>
                  ) : ''}
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row only='mobile tablet'>
              <Grid.Column width='8'>
                <Form.Field
                  className={this.state.statusError ? 'error' : ''}
                  required>
                  <label>Farm Status</label>
                  <Select
                    value={this.state.status}
                    placeholder='Select your farm status'
                    onChange={this.handleStatusChange}
                    options={STATUSES} />
                  {this.state.statusError ? (
                    <Label pointing prompt>
                      {this.state.statusError.content}
                    </Label>
                  ) : ''}
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