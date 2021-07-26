const scanner = require("sonarqube-scanner");

scanner(
  {
    serverUrl: "http://localhost:9000",
    token: "bfc7b64cc26d36e1d0362cd0a25899a8d797073c",
    options: {
      "sonar.sources": "./src",
      "sonar.projectKey": "sonar",
      "sonar.projectName": "sonar",
      "sonar.verbose": "true",
      "sonar.language": "js",
      "sonar.sourceEncoding": "UTF-8",
      "sonar.exclusions":
        "**/*.test.js, **/static/**, **/app-config/*, **/common/style/**/*",
      "sonar.test.inclusions": "**/*.test.js",
      "sonar.coverage.exclusions":
        "**/*.test.js, **/static/**, **/app-config/*, **/common/style/**/*",
      "sonar.javascript.lcov.reportPaths": "./test-coverage/lcov.info",
    },
  },
  () => process.exit()
);
