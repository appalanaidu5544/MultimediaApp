import {useState} from 'react'
import API from '../utils/api'
import './index.css'

const SearchComponent = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = async () => {
    try {
      const response = await API.get(`/files/search?query=${query}`)
      setResults(response.data)
    } catch (error) {
      console.error('Search failed:', error.response.data)
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search files..."
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map(file => (
          <li key={file._id}>
            <a href={file.url} target="_blank" rel="noopener noreferrer">
              {file.fileType}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchComponent
