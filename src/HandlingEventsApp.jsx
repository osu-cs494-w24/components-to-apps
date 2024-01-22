import { useState } from 'react'

function SwitchButton() {
  // const isOn = false
  const [ isOn, setIsOn ] = useState(true)
  return (
    /*
      function (prev) {
        return !prev
      }
     */
    <button onClick={() => setIsOn(prev => !prev)}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  )
}

export default function App() {
  return (
    <>
      <p>
        <button onClick={() => {
          alert("The button was clicked")
        }}>This is a button</button>
      </p>
      <p>
        <a onClick={(event) => {
          console.log("== event:", event)
          event.preventDefault()
        }}
          href="https://web.engr.oregonstate.edu/~hessro/teaching/cs494-w24"
          target="_blank"
          rel="noreferrer"
        >
          This is a link to the CS 494 website.
        </a>
      </p>
      <p>
        <SwitchButton />
      </p>
    </>
  )
}
