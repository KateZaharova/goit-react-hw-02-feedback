import { Component } from "react"
import {Button} from "./FeedbackBtn/FeedbackBtn.styled";

export class FeedbackOptions extends Component{
    render() {
        const { onLeaveFeedback, options} = this.props;
        return (
      <div>
                <h2>Please leave feedback</h2>
                {options.map((item) =>{
                    return (
                    <Button key={item} onClick={onLeaveFeedback(item)}>{item}</Button>
                    )
         })}       
      </div>
    )
    }
}

