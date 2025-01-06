import React from 'react'
import '../styles/myStyles.css'
import style from '../styles/newStyles.module.css'

function StyleSheet(props) {
  return (
    <div>
      <div className={style.success}>Success</div>
    </div>
  )
}

export default StyleSheet