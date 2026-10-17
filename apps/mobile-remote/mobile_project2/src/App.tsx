
export type AppProps = {
  title: string
}

function App(props: AppProps) {
  const { title } = props
  return (
    <div className="mobile_project2_container">
      <section>
        {title}
        <p>mobile_project2</p>
        <p>mobile_project2</p>
        <p>mobile_project2</p>
        <p>mobile_project2</p>
        <p>mobile_project2</p>
      </section>
    </div>
  )
}

export default App
