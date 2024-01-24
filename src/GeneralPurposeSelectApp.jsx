import { useState } from "react"

const starWarsOptions = {
  rey: "Rey",
  luke: "Luke Skywalker",
  leia: "Leia Organa",
  finn: "Finn (FN-2187)",
  kylo: "Kylo Ren",
  yoda: "Yoda"
}

const petOptions = {
  cat: "Cat",
  dog: "Dog",
  fish: "Fish",
  iguana: "Iguana"
}

function DropdownMenu(props) {
  // const options = props.options
  const { options, selection, onSelectionChange } = props
  return (
    <select value={selection} onChange={e => {
      onSelectionChange(e.target.value)
    }}>
      {Object.keys(options).map(key => (
        <option key={key} value={key}>{options[key]}</option>
      ))}
    </select>
  )
}


export default function App() {
  const [ starWarsSelection, setStarWarsSelection ] = useState(Object.keys(starWarsOptions)[0])
  const [ petSelection, setPetSelection ] = useState(Object.keys(petOptions)[0])

  console.log("== starWarsSelection:", starWarsSelection)
  console.log("== petSelection:", petSelection)

  // const numbers = [ 1, 2, 333, 4, 5 ]
  // const squares = numbers.map(num => num * num)
  // console.log("== squares:", squares)
  return (
    <form onSubmit={e => {
      e.preventDefault()
      alert(`${starWarsOptions[starWarsSelection]} loves their ${petOptions[petSelection]}`)
    }}>
      {/* <ul>
        {numbers.map(num => <li key={num}>{num * num}</li>)}
      </ul> */}
      <DropdownMenu
        selection={starWarsSelection}
        options={starWarsOptions}
        onSelectionChange={selection => setStarWarsSelection(selection)}
      />
      <DropdownMenu
        selection={petSelection}
        options={petOptions}
        onSelectionChange={selection => setPetSelection(selection)}
      />
      {/* <select>
        <option value="rey">Rey</option>
        <option value="luke">Luke Skywalker</option>
        <option value="leia">Leia Organa</option>
        <option value="finn">Finn (FN-2187)</option>
        <option value="kylo">Kylo Renn</option>
      </select> */}
      <button type="submit">Submit</button>
    </form>
  )
}
