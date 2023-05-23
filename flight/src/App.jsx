import Table from './components/Table'
import React from "react";
import Header from './components/Header';

const App = () => {
  return (
    <div>
    <Header /> {/* Include the Header component */}
    <div className="departures">
      <header>DEPARTURES</header>
      <Table />
    </div>
  </div>
  )
}

export default App
