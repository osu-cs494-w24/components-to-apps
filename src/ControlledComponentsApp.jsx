import { useState } from 'react'

export default function App() {
  const [ name, setName ] = useState("")
  console.log("== name:", name)
  return (
    <form onSubmit={event => {
      /*
        http://localhost:5174/
        http://localhost:5174/?name="Hess"
      */
      event.preventDefault()
      alert(`Hello, ${name}!`)
    }}>
      <label>
        Name
        <input
          value={name}
          onChange={event => setName(event.target.value)}
          type="text"
          name="name"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}
