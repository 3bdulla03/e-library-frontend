const Search = ({ searchQuery, handleChange, handleSubmit }) => {

    return(
        <>
    
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="search"
            value={searchQuery}
            placeholder="Search Books"
            onChange={handleChange}
        ></input>
        <button type="submit">Search</button>
        </form>
        </>
    )
}

export default Search