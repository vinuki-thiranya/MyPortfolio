import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function StyleGuide() {
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
        <h1 className="text-4xl font-bold text-white mb-8">Style Guide</h1>
        
        <div className="space-y-12">
          {/* Colors */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Color Palette</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="w-full h-20 bg-black rounded mb-4 border border-gray-700"></div>
                <h3 className="text-white font-semibold">Primary Background</h3>
                <p className="text-gray-400 text-sm">#000000</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="w-full h-20 bg-gray-900 rounded mb-4 border border-gray-700"></div>
                <h3 className="text-white font-semibold">Secondary Background</h3>
                <p className="text-gray-400 text-sm">#111111</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="w-full h-20 bg-[#64ffd9] rounded mb-4"></div>
                <h3 className="text-white font-semibold">Accent Color</h3>
                <p className="text-gray-400 text-sm">#64ffd9</p>
              </div>
            </div>
          </section>

          {/* Typography */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Typography</h2>
            <div className="space-y-4">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h1 className="text-4xl font-bold text-white mb-2">Heading 1</h1>
                <p className="text-gray-400 text-sm">4xl font-bold</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-semibold text-white mb-2">Heading 2</h2>
                <p className="text-gray-400 text-sm">2xl font-semibold</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <p className="text-gray-300 mb-2">Body text in gray color for readability</p>
                <p className="text-gray-400 text-sm">base font-normal</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}