const ShoppingButton = props => {
  return (
    <div className="shopping-button">
      <button onClick={props.onClick}>
        <i className="fa fa-shopping-cart fa-2x" />
        {props.count > 0 && <span>{props.count}</span>}
      </button>
      <style jsx>
        {`
          button {
            background: none;
            border: none;
            margin: 1em;
            cursor: pointer;
            transition: all 0.5s ease;
            outline: none;
            box-sizing: border-box;
            color: #365902;
            position: relative;
          }
          button:hover {
            color: #aaa;
          }

          span {
            background-color: #83a603;
            padding: 0.25em 0.6em;
            border-radius: 1em;
            color: white;
            font-weight: bold;
            font-size: 0.8rem;
            text-align: center;
            vertical-align: center;
            position: absolute;
            top: -20%;
            right: -15%;
            transition: all 0.5s ease;
          }

          button:hover span {
            background-color: #b3d92b;
          }
        `}
      </style>
    </div>
  )
}

export default ShoppingButton
