function SwitchButton() {
  const isOn = true
  return (
    <button>
      {isOn ? 'ON' : 'OFF'}
    </button>
  )
}

export default function App() {
  return (
    <>
    <p>
      <button>This is a button</button>
    </p>
    <p>
      <a
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
