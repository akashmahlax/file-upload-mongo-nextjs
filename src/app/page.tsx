
// MONGODB_URI=mongodb+srv://akashmahla:qs2xxPiTKQ2EY6qF@cluster0.9gner.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

import { FileUpload } from "@/components/file-upload"
import { FileList } from "@/components/file-list"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-green-500">File Upload App</h1>
      <div>
          <h2 className="text-xl font-bold mb-4">Instructions</h2>
          <p className="mb-4">
            This is a simple file upload app. You can upload any file and it will be saved in the database.
          </p>
          <p className="mb-4 text-red-400">
            You can also view the list of files that you have uploaded.you can also access the .env.local mongouri commented in app/pages.tsx 
          </p>
        </div>
      <div className="grid gap-8 md:grid-cols-2">
        
        <FileUpload />
        <FileList />
      </div>
    </main>
  )
}

