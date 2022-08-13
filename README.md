# sonarImplementation
How to integrate sonar on local for quality gates

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


To run sonar in sonar directory::

On Linux: bin/linux-x86-64/sonar.sh start
On macOS: bin/macosx-universal-64/sonar.sh start
On Windows: bin/windows-x86-64/StartSonar.bat



1. Install sonar 9
2. Install jdk11
3. Set path for jdk installed
4. Now inside sonar folder , go to confirm -> sonar.properties 
5. check for sonar port property , set your port and uncomment line (ie, sonar.search.port=9002)
6. In wrapper.conf, give java path
7. To start sonar now : for macOS: {sh sonar.sh console}for windowsOS: {sonar.sh start}

Here we are all done with sonar n Jdk installation

1. Now in your working repo, Create a sonarqube-scanner file parallel to src folder in your repo
2. Install sonarqube-scanner npm pcg
3. Set your configurations der like given in example
4. Inside your project directory , node sonarqube-scanner
5. Now as mentioned in sonarqube-scanner file, hit http://localhost:9000/account/security
6. Generate token for your project
7. Mention created token in sonarqube-scanner config file
8. In the dashboard opened in browser, go to tab “project” and select your project and now we are all set to work with sonarHappy Working :) 


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
