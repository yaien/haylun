const Main = props => {
  return (
    <main>
      {props.children}
      <style jsx>{`
        main {
          padding: 0.125rem;
        }
      `}</style>
    </main>
  )
}

export default Main
