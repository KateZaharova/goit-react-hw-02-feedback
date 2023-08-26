import {Button, ListBtn, ListItemBtn} from "../FeedbackBtn/FeedbackBtn.styled";

let clicks=5;

export const FeedbackBtns = () => {
  return (
    <div>
      
      <ListBtn>

        <ListItemBtn>
      <h2>Please leave feedback</h2>
      <Button type="button">Good</Button>
      <Button type="button">Neutral</Button>
      <Button type="button">Bad</Button>
        </ListItemBtn>
        <ListItemBtn>
      <h2>Statistics</h2>
          <p>Neutral: {clicks}</p>
      <p>Good: </p>
      <p>Bad: </p>
      </ListItemBtn>
      
      
      </ListBtn>
      

    </div>
    
    )
}