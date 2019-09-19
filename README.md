## TieUp Farming - Test Tasks

### Part One. CSS Task. 
Please slice the following mockup using Semantic UI and build single Component in React.<br/>
1. Decide how it should look on Desktop.<br/>
2. Decide how hover, active and selected elements should look.<br/>
3. Correct visual inaccuracies.
4. Use css modules. No !important in classes<br/>

Please fork the following repository: https://github.com/tieup-farming/ccs-task in order to start.
Share your solution in your own Github account <b>(DO NOT PUSH ANY PULL REQUEST OR BRANCH)</b>


![MockUp](src/mockup.png?raw=true)

### Part Two. React Task. 
Please extend previous part with following functionality.
 
1. Add validations to the form fields. It should be generic solution for Semantic UI:<br>
    a) required fields;<br>
    b) Positive floats;<br>
    c) Errors should be displayed near target fields.

2. Add Calendar and possibility to add Date manually.

3. Calculate Trees/Ha, Thees/Vines and Age:<br>
    Trees/Ha = 10000 / rowSpacing / treesSpacing<br>
    Thees/Vines = blockSize * Trees/Ha<br>
    Age = Full years from Date of Planting
    
4. Prepare form data in ready to send single Object.    
## 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

