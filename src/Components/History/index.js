import {Component} from 'react'

import HistoryItem from '../HistoryItem'

import './index.css'

class History extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
      historyList: props.initialHistoryList,
    }
  }

  deleteHistoryItem = id => {
    const {historyList} = this.state

    this.setState({
      historyList: historyList.filter(item => item.id !== id),
    })
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderNoItemsView = () => (
    <div className="no-items-container">
      <p className="no-items-title"> There is no history to show </p>
    </div>
  )

  render() {
    const {historyList, searchInput} = this.state
    const filteredList = historyList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const count = filteredList.length

    return (
      <div className="app-container">
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="app-logo"
            alt="app logo"
          />
          <div className="search-input-container">
            <div className="icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                className="search-icon"
                alt="search"
              />
            </div>
            <input
              type="search"
              placeholder="Search history"
              className="search-input"
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        {count === 0 ? (
          this.renderNoItemsView()
        ) : (
          <ul className="history-list-container">
            {filteredList.map(eachItem => (
              <HistoryItem
                historyDetails={eachItem}
                key={eachItem.id}
                onDeleteHistory={this.deleteHistoryItem}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default History
