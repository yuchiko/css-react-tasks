import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Header, Segment } from 'semantic-ui-react';
import styles from './App.module.css';
import mockUp from './mockup.png'
function App() {
  return (
      <div className={styles.App}>
        <Segment>
          <Header as="h1">TieUp Farming - CSS Task</Header>
          <hr/>
          <p>Please slice below mockup in the next page using Semantic UI and build single Component in React.</p>
          <ol>
            <li>Decide how it should look on Desktop.</li>
            <li>Decide how hover, active and selected elements should look.</li>
            <li>Correct visual inaccuracies.</li>
            <li>Use css modules.</li>
          </ol>
          <p>Please fork the following repository: https://github.com/tieup-farming/ccs-task in order to start.</p>
          <p>Share your solution in your own Github account <strong>(DO NOT PUSH ANY PULL REQUEST OR BRANCH)</strong>
          </p>
        </Segment>
        <img src={mockUp} alt="TieUp Farming - CSS Task"/>
        <Header as="h3">Good luck!</Header>
      </div>
  );
}

export default App;
