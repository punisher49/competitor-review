import React, {Component} from 'react';
// import './Search.css'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: '',
      results: {},
      loading: false,
      message: '',
    };
    this.cancel = '';
  }
  fetchSearchResults = (updatedPageNo, query) => {
    const searchUrl = 'http://localhost:5000/aeons'
    if(this.cancel) {
      this.cancel.cancel()
    }//if
    this.cancel = axios.CancelToken.source();
    axios.get(searchUrl, {
      CancelToken: this.cancel.token
    })//axios.get
    .then(res =>
    console.log(res.data.filter(x => console.log(x.productPriceAud)) ) )
    .catch(error => {
      if(axios.isCancel(error) || error){
        this.setState({
          loading: false,
          message: 'Failed to fetch the data'
        })
      }
    });//catch error
  }//fetchSearchResults
  handleOnInputChange = (event) => {
    const query = event.target.value
    this.setState({query: query, loading: false, message: ''}, () => {
      this.fetchSearchResults(query)
    });
  }
  render(){
    const {query} = this.state
    return(
      <div>
      <form className="form-inline my-2 my-lg-0">
        <input
            className="form-control mr-sm-2"
            name="query"
            value={query}
            id="search-input"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={this.handleOnInputChange}
            />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search
        </button>
      </form>
      </div>



    )
  }
}
export default Search
