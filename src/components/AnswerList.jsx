import React from "react";
import {Answer} from "./index";

const AnswerList = (props) => {
  const answer = props.answers.map((value,index) => {
    return <Answer content={value.content} key={index.toString()} />
  })

  return (
    <div className="c-grid__answer">
      {answer}
    </div>
  )
}

export default AnswerList;