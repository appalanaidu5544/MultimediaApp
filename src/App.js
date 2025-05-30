import React from 'react'
import UploadComponent from './components/UploadComponent'
import SearchComponent from './components/SearchComponent'

const App = () => {
  return (
    <div className="app-container">
      <h1>Multimedia Upload & Search</h1>
      <UploadComponent />
      <SearchComponent />
    </div>
  )
}

export default App
