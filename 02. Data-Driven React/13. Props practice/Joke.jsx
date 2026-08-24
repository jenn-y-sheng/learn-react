export default function Joke(props) {
  return (
    <>
      {props.setup && <p>{props.setup}</p>}
      <h1>{props.punchline}</h1>
      <hr />
    </>
  )
}