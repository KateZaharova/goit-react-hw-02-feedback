import {Button} from "./FeedbackBtn/FeedbackBtn.styled";

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div>
    <h2>Please leave feedback</h2>
    {options.map((item) =>{
      return (
        <Button key={item} onClick={() => onLeaveFeedback(item)}>{item}</Button>
      )
    })}       
    </div>
  )  
}



