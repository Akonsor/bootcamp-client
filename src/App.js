import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      employees: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3005/getSogetiEmployees')
    .then(employees => employees.json())
    .then(_employees => {
      console.log(_employees)
      this.setState({
        employees: _employees
      })
    })
    .catch(err => console.log(err))
  }

  render(){
    return (
      <div className="App container">
      <div className="jumbotron">
          <h1 className="display-4">GOAT Starting 5</h1>
          <p className="lead">Top athletes IMO, including myself.</p>
          <hr className="my-4"/>
          <p>Name a better 5.</p>
        </div>
        <div className="dropdown mb-3">
        <a className="btn btn-secondary dropdown-toggle" href="\#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown button
        </a>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="/#">Action</a>
          <a className="dropdown-item" href="/#">Another action</a>
          <a className="dropdown-item" href="/#">Something else here</a>
        </div>
      </div>
        <div className ="row">
        { this.state.employees.map((employee, index) => {
          return (
            <div className="media col-12 mb-4 p-3 directory-entry" key = {index}>
              <img src={employee.img} className="mr-3 directory-image" alt="..."/>
              <button type="button" className="btn btn-outline-primary">View</button>
                <div className="media-body">
                  <h5 className="mt-0">{employee.name}</h5>
                  {employee.location}
              </div>
          </div>
          )
        })
      }
      </div>
      </div>
    );
  }
}

export default App;
