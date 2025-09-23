import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"

export default function ImageLicenses() {
  const imageCredits = [
    {
      title: "E-Commerce Platform",
      source: "Unsplash",
      photographer: "CardMapr",
      url: "https://unsplash.com/photos/eTAMPbO55KQ",
      license: "Unsplash License"
    },
    {
      title: "Task Management App",
      source: "Unsplash", 
      photographer: "Eden Constantino",
      url: "https://unsplash.com/photos/OXmym9cuaEY",
      license: "Unsplash License"
    },
    {
      title: "Fitness Tracker",
      source: "Unsplash",
      photographer: "Victor Freitas",
      url: "https://unsplash.com/photos/qZ-U9z4TQ6A",
      license: "Unsplash License"
    }
  ]

  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-[#0a192f] px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center">
          <Link 
            href="/"
            className="flex items-center space-x-2 text-[#64ffd9] hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="text-lg font-semibold">Back to Portfolio</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Image Licenses</h1>
        
        <div className="mb-8">
          <p className="text-gray-300 text-lg leading-relaxed">
            All images used in this portfolio are properly licensed and credited. 
            Most images are sourced from Unsplash under their free license terms.
          </p>
        </div>

        <div className="space-y-6">
          {imageCredits.map((credit, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-white font-semibold text-lg mb-2">{credit.title}</h3>
                  <p className="text-gray-300 mb-1">
                    Photo by <span className="text-[#64ffd9]">{credit.photographer}</span> on {credit.source}
                  </p>
                  <p className="text-gray-400 text-sm">License: {credit.license}</p>
                </div>
                <a
                  href={credit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-[#64ffd9] hover:text-white transition-colors"
                >
                  <span>View Original</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}