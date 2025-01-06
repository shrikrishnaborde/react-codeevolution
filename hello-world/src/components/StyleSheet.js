import React from 'react'
import '../styles/myStyles.css'

function StyleSheet(props) {
  const classes = props.primary ? 'primary': '';
  return (
    <div className={`${classes} font-xl`}>Sharanya</div>
  )
}

export default StyleSheet