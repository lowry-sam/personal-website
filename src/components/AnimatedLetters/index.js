import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span className='text-wave'>
      {strArray.map((char, i) => (
        <span id='text-animate' key={char + i} style={{ '--i': i }} className={`${letterClass} _${i + idx}`}>
          <h1>{char === " " ? "\u00A0" : char}</h1>
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters