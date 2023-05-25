import React from "react"

export default function App() {
  const [starWarsData, setStarWarsData] = React.useState({})

  React.useEffect(() => {
    fetch("https://swapi.dev/api/people/1")
    .then(res => res.json())
    .then(data => setStarWarsData(data))
  }, [])

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <pre style={{fontSize: "1.5rem"}}>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  )
}