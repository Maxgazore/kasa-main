import PropTypes from 'prop-types'
import { useState } from 'react'

export function Collapser({ classType, title, text }) {
  const [selected, setSelected] = useState(false)

  //fonction qui change l'état de selected si on clique sur l'icone
  function toggle() {
    setSelected(!selected)
  }

  //Transformation de l'icone si selected est vrai
  const rotation = {
    transform: selected ? 'rotate(180deg)' : '',
    transition: '200ms linear',
  }

  return (
    <div className={classType + '__info__part'}>
      <div className={classType + '__info__part__collapser'}>
        <h2>{title}</h2>
        <i
          className="fa-solid fa-chevron-up fa-xl"
          onClick={() => toggle()}
          style={rotation}
        ></i>
      </div>
      {/*Affiche une liste si text est un tableau*/}
      {Array.isArray(text) ? (
        <ul
          className={
            selected
              ? classType + '__info__part__show'
              : classType + '__info__part__hide'
          }
        >
          {text.map((equipement, index) => (
            <li key={index}>{equipement}</li>
          ))}
        </ul>
      ) : (
        <p
          className={
            selected
              ? classType + '__info__part__show'
              : classType + '__info__part__hide'
          }
        >
          {text}
        </p>
      )}
    </div>
  )
}

Collapser.propTypes = {
  classType: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.node,
}
