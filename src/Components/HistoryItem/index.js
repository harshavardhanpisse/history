import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onClickDelete = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="history-item">
      <div className="item-container">
        <p className="time"> {timeAccessed}</p>
        <div className="details-delete-container">
          <div className="details-container">
            <img className="logo" src={logoUrl} alt="domain logo" />
            <p className="title"> {title}</p>
            <p className="domain-url"> {domainUrl} </p>
          </div>
          <button
            className="button"
            type="button"
            onClick={onClickDelete}
            data-testid="delete"
          >
            <img
              className="delete"
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
