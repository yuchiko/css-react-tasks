import React from 'react';
import { Button, Header, Icon } from 'semantic-ui-react';
import styles from './style.module.css';

const PageHeader = ({ onFormSubmit }) => (
  <div className={styles.header}>
    <div className='d_flex ai_center'>
      <a
        href="#back"
        className={styles.back_link}>
        <Icon name={'angle left'} />
      </a>
      <Header
        as={'h2'}
        className='atomic m_0'>
        Add Block
      </Header>
    </div>
    <Button
      secondary
      size='large'
      floated='right'
      onClick={onFormSubmit}>
      Add
		</Button>
  </div>
);

export default PageHeader;