import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { Component } from "react";
//import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleClickBtn = buttonType => {
    console.log(buttonType);
    switch (buttonType) {
      case "good":
        /*this.setState(prevState => ({
          good: prevState.good += 1,
        }));*/
        console.log(this.state.good)
        break;
      case "neutral":
        /* this.setState(prevState => ({
           neutral: prevState.neutral += 1,
         }));*/
        console.log(this.state.neutral)
        break;
      case "bad":
        /*this.setState(prevState => ({
          bad: prevState.bad += 1,
        }));*/
        console.log(this.state.bad)
        break;
      default:
        console.log("Empty action received.");
    }
  }
        
/*   
countTotalFeedback() {
    let total = 0;
    let array=[this.state.good,this.state.neutral,this.state.bad]
    array.forEach(item => {
      total += item;
    }); 
    return total;
  }
    
    countPositiveFeedbackPercentage() {
      let num = ((this.state.good / this.countTotalFeedback()) * 100); {
        if (this.countTotalFeedback() === 0) {
          return 0;
        } else
          return num.toFixed(0);
      }
 }*/

  
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
        <FeedbackOptions onLeaveFeedback={this.handleClickBtn} options={["bad", "neutral", "good"]} />
        <GlobalStyle/>
    </Layout>
  );
  }
  
};

/*<Section>
  title="Please leave feedback">
          <FeedbackOptions/>
            <Statistics/>
<Section/>   тільки додаешь умови до фідбек та статистику
А в файлі Section
const Section = ({ title, children }) => (
  <div className='section'>
    <h2 className='section-title'>{title}</h2>
    {children}
  </div>
); */

/*
 <!-- FeedbackBtns / 
 <Statistics />-->*/