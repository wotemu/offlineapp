import React from "react";

class HistoricalSites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      contacts: []
    };
  }

  componentWillMount() {
    localStorage.getItem("contacts") &&
      this.setState({
        contacts: JSON.parse(localStorage.getItem("contacts")),
        isLoading: false
      });
  }

  componentDidMount() {
    const date = localStorage.getItem("contactsDate");
    const contactsDate = date && new Date(parseInt(date));
    const now = new Date();

    const dataAge = Math.round((now - contactsDate) / (1000 * 60)); // in minutes
    const tooOld = dataAge >= 1;

    if (tooOld) {
      this.fetchData();
    } else {
      console.log(
        `Using data from localStorage that are ${dataAge} minutes old.`
      );
    }
  }

  fetchData() {
    this.setState({
      isLoading: true,
      contacts: []
    });

    fetch("https://randomuser.me/api/?results=5&nat=us,dk,fr,gb")
      .then(response => response.json())
      .then(parsedJSON =>
        parsedJSON.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          username: `${user.login.username}`,
          location: `${user.location.city}`
        }))
      )
      .then(contacts =>
        this.setState({
          contacts,
          isLoading: false
        })
      )
      .catch(error => console.log("parsing failed", error));
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("contacts", JSON.stringify(nextState.contacts));
    localStorage.setItem("contactsDate", Date.now());
  }

  render() {
    const { isLoading, contacts } = this.state;
    return (
      <div>
        <header>
          <h1>
            Fetch toursit Data{" "}
            <button
              className="btn btn-sm btn-danger"
              onClick={e => {
                this.fetchData();
              }}
            >
              Fetch now
            </button>
          </h1>
        </header>
        <div className={`content ${isLoading ? "is-loading" : ""}`}>
          <div className="panel-group">
            {!isLoading && contacts.length > 0
              ? contacts.map(contact => {
                  const { username, name, location } = contact;
                  return (
                    <div key={username} title={name}>
                      <p>
                        <span>{name} from </span> &nbsp;
                        {location}
                      </p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className="loader">
            <div className="icon" />
          </div>
        </div>
      </div>
    );
  }
}
export default HistoricalSites;
