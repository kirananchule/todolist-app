import React from 'react'


class Search extends React.Component {

    constructor(props) {
        super(props)
        this.changeHandler = this.changeHandler.bind(this)
    }
    changeHandler() {
        this.props.onSearch(this.refs.searchRef.value);
    }

    render() {
        return(
        <div>
            <input type="text" ref="searchRef" onChange={this.changeHandler }></input><span>search-Todo</span>
       </div>

        )
    }
}

export default Search;