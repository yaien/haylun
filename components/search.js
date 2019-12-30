const Search = () => {
  return (
    <div className="search">
      <form>
        <div className="field">
          <input type="search" name="search" placeholder="Estoy Buscando" required />
        </div>
        <div className="append">
          <button type="submit">
            <i className="fa fa-search" />
          </button>
        </div>
      </form>

      <style jsx>
        {`
          .search {
            margin: 0rem 0.5rem;
            flex-grow: 1;
          }
          .search form {
            overflow: hidden;
            border: 1px solid #b3d92b;
            display: flex;
            border-radius: 0.5rem;
          }

          .search .field {
            flex-grow: 1;
          }

          .search input {
            appearance: none;
            border: none;
            height: 100%;
            margin: 0;
            font-size: 1.2rem;
            padding: 0.5rem;
            color: #b3d92b;
            width: 100%;
            box-sizing: border-box;
          }

          .search append {
          }
          .search button {
            cursor: pointer;
            appearance: none;
            border: none;
            box-sizing: border-box;
            background-color: #fff;
            height: 100%;
            color: #b3d92b;
            font-size: 1rem;
          }
        `}
      </style>
    </div>
  )
}

export default Search
