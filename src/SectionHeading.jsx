import React from 'react'
import LinkTo from './LinkTo'

const SectionHeading = ({ text }) => {
  return (
    <div>
        <h2>{text}</h2>
        <LinkTo external href="#top" text="Top"/>
    </div>
  )
}

export default SectionHeading