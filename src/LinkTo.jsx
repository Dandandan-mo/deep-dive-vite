import React from 'react'

const LinkTo = ({ external, href, text }) => {
  return (
    <a className={external ? "external": "internal"} href={href}>{text}</a>
  )
}

export default LinkTo