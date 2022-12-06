import React from 'react'

const BoldParagraph = ({firstWord, theRest}) => {
  return (
    <p>
        <b>{firstWord}</b> {theRest}
    </p>
  )
}

export default BoldParagraph