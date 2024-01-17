const starWarsOptions = {
  rey: "Rey",
  luke: "Luke Skywalker",
  leia: "Leia Organa",
  finn: "Finn (FN-2187)",
  kylo: "Kylo Ren"
}

const petOptions = {
  cat: "Cat",
  dog: "Dog",
  fish: "Fish",
  iguana: "Iguana"
}


export default function App() {
  return (
    <form>
      <select>
        <option value="rey">Rey</option>
        <option value="luke">Luke Skywalker</option>
        <option value="leia">Leia Organa</option>
        <option value="finn">Finn (FN-2187)</option>
        <option value="kylo">Kylo Renn</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  )
}
