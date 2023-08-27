import { FeedbackBtns } from "./FeedbackBtn/FeedbackBtns";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { Component } from "react";


export class App extends Component {
  render() {
    return (
    <Layout
      
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
      <FeedbackBtns />
      <GlobalStyle/>
    </Layout>
  );
  }
  
};
