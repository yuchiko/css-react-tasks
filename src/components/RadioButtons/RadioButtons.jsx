import React from 'react';
import { Button, Form, Label } from 'semantic-ui-react';
import styles from './style.module.css';

const RadioButtons = ({ value, onChange, name, data }) => {
  const onClick = ({ target }) => {
    onChange({}, { name, value: target.name });
  };

  return (
    <div>
      {data.map((btn) =>
        <Button
          key={btn.key}
          basic
          type="button"
          active={btn.value === value}
          name={btn.value}
          onClick={onClick}
          className={styles.radio_btn}
        >
          {btn.text}
        </Button>)}
    </div>
  );
};

export default RadioButtons;