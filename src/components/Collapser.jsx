import PropTypes from 'prop-types'
import { useState } from 'react'

export function Collapser({ classType, title, text }, i) {
  const [selected, setSelected] = useState(null)

  function toggle(i) {
    if (selected == i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  const rotation = {
    transform: selected == i ? 'rotate(180deg)' : '',
    transition: '200ms linear',
  }

  return (
    <div className={classType + '__info__part'}>
      <div className={classType + '__info__part__collapser'}>
        <h2>{title}</h2>
        <i
          className="fa-solid fa-chevron-up fa-xl"
          onClick={() => toggle(i)}
          style={rotation}
        ></i>
      </div>
      <p
        className={
          selected == i
            ? classType + '__info__part__show'
            : classType + '__info__part__hide'
        }
      >
        {text}
      </p>
    </div>
  )
}

Collapser.propTypes = {
  classType: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.node,
}
