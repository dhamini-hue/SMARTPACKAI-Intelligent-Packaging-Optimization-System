import { useState } from 'react'
import InputForm from './components/InputForm'
import ResultDashboard from './components/ResultDashboard'
import { Package, ArrowLeft } from 'lucide-react'

function App() {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleOptimize = async (formData) => {
    setLoading(true)
    setError(null)
    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'
      const response = await fetch(`${baseUrl}/api/optimize-packaging`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (!response.ok) {
        throw new Error('Failed to fetch optimization result')
      }
      
      const data = await response.json()
      setResult(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-slate-900 via-brand-900 to-slate-900 text-white font-sans overflow-x-hidden">
      {/* Header Container */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-brand-400 to-brand-600 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/30">
              <Package size={24} className="text-white" />
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
              SMARTPACK<span className="text-brand-400">AI</span>
            </h1>
          </div>
          {result && (
            <button 
              onClick={() => setResult(null)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all font-medium text-sm backdrop-blur-md"
            >
              <ArrowLeft size={16} /> New Optimization
            </button>
          )}
        </header>

        <main className="relative z-10 transition-all duration-500 ease-in-out pb-20">
          {error && (
            <div className="p-4 mb-6 bg-red-500/20 border border-red-500/50 rounded-xl text-red-100 flex items-center justify-center backdrop-blur-md">
              <span className="font-semibold">Error:</span>&nbsp;{error}
            </div>
          )}
          
          {!result ? (
            <div className="max-w-3xl mx-auto animate-fade-in-up">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  Intelligent Packaging <br className="hidden md:block"/> Optimization System
                </h2>
                <p className="text-slate-400 text-lg">
                  Minimize volumetric weight, reduce shipping cost, and ensure product safety.
                </p>
              </div>
              <InputForm onSubmit={handleOptimize} loading={loading} />
            </div>
          ) : (
            <ResultDashboard result={result} />
          )}
        </main>
      </div>
      
      {/* Background Orbs */}
      <div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-600/20 blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none"></div>
    </div>
  )
}

export default App
