import { useState, useEffect } from "react"
import FileUpload from "../components/FileUpload"

interface File {
  _id: string
  filename: string
  contentType: string
}

export default function Home() {
  const [files, setFiles] = useState<File[]>([])

  useEffect(() => {
    fetchFiles()
  }, [])

  const fetchFiles = async () => {
    try {
      const response = await fetch("/api/files")
      if (response.ok) {
        const data = await response.json()
        setFiles(data)
      } else {
        throw new Error("Failed to fetch files")
      }
    } catch (error) {
      console.error("Error fetching files:", error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">File Upload App</h1>
      <FileUpload />
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Uploaded Files</h2>
        <ul className="space-y-2">
          {files.map((file) => (
            <li key={file._id} className="flex items-center space-x-2">
              <span className="text-blue-600">{file.filename}</span>
              <span className="text-gray-500 text-sm">({file.contentType})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

