import {useState} from 'react'
import API from '../utils/api'
import './index.css'

const UploadComponent = () => {
  const [file, setFile] = useState(null)
  const [tags, setTags] = useState('')

  const handleUpload = async () => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('tags', tags)

    try {
      const response = await API.post('/files/upload', formData)
      console.log('Uploaded successfully:', response.data)
    } catch (error) {
      console.error('Upload failed:', error.response.data)
    }
  }

  return (
    <div>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <input
        type="text"
        placeholder="Tags"
        onChange={e => setTags(e.target.value)}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  )
}

export default UploadComponent
