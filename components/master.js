import Nav from "./nav"
import Main from "./main"

const Master = props => {
  return (
    <div>
      <Nav></Nav>
      <Main>{props.children}</Main>
      <style jsx global>{`
        html,
        body {
          margin: 0;
          width: 100%;
          height: 100%;
          font-family: "Poppins", sans-serif;
        }
      `}</style>
    </div>
  )
}

export default Master
