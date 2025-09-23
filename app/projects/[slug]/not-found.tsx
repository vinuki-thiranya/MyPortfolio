import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-6">Project Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The project you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center space-x-2 bg-[#64ffd9] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#4fd1c7] transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Back to Portfolio</span>
        </Link>
      </div>
    </div>
  )
}