import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();

/*
    1. npx create-react-app nazwa-apki
    2. npm install node-sass
    3. npm install eslint --save-dev
    4. npm install -D husky lint-staged

    .huskyrc.json
        {
        "hooks": {
            "pre-commit": "lint-staged"
        }

    .lintstagedrc.json
        {
            "*.+(js|jsx)": ["eslint --fix", "git add"],
            "*.+(json|scss|css|md)": ["prettier --write", "git add"]
        }

    5. package.json

        task-runners
*/
