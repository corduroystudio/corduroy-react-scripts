import React, { Component } from "react";
import styles from "./App.scss";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles["app-header"]}>
          <h1 className={styles["app-title"]}>
            Corduroy Studio - React App Starter
          </h1>
        </header>
        <p className={styles["app-intro"]}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
