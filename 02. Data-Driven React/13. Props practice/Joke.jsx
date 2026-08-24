export default function Joke(props) {
  return (
    <>
      <p>{props.setup}</p>
      <h1>{props.punchline}</h1>
      <hr />
    </>
  )
}