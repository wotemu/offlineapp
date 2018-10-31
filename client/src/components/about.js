import React from "react";
import ContactUs from "./contactUs";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentWillMount() {
    localStorage.getItem("contacts") &&
      this.setState({
        contacts: JSON.parse(localStorage.getItem("contacts"))
      });
  }

  fetchData() {
    this.setState({
      contacts: []
    });

    fetch("https://randomuser.me/api/?results=50&nat=us,dk,fr,gb")
      .then(response => response.json())
      .then(parsedJSON =>
        parsedJSON.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          username: `${user.login.username}`
        }))
      )
      .then(contacts =>
        this.setState({
          contacts
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
        <div className={`content ${isLoading ? "is-loading" : ""}`}>
          <div className="panel-group">
            {!isLoading && contacts.length > 0
              ? contacts.map(contact => {
                  const { username, name } = contact;
                  return <ContactUs key={username} title={name} />;
                })
              : null}
          </div>
        </div>
      </div>
    );
  }
}
export default About;
