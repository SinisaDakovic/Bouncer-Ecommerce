import React from 'react'

function Search() {
    return (
        <div className="srCon">
            <div className="searchQuery">
                <form id="form">
                    <input type="text" placeholder="Search query..."/>
                    <button type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Search
