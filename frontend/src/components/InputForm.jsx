import { useState } from 'react'
import { Box, Weight, MapPin, Shield } from 'lucide-react'

export default function InputForm({ onSubmit, loading }) {
  const [formData, setFormData] = useState({
    length: 20.0,
    width: 15.0,
    height: 10.0,
    weight: 2.5,
    quantity: 1,
    material: 'glass',
    fragility: 'high',
    destination: 'USA'
  })

  const handleChange = (e) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        
        {/* Dimensions Section */}
        <div className="space-y-5">
          <div className="flex items-center gap-2 text-brand-300 font-semibold mb-2">
            <Box size={20} /> Dimensions (cm)
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">Length</label>
              <input type="number" step="0.1" name="length" value={formData.length} onChange={handleChange} required 
              className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">Width</label>
              <input type="number" step="0.1" name="width" value={formData.width} onChange={handleChange} required 
              className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">Height</label>
              <input type="number" step="0.1" name="height" value={formData.height} onChange={handleChange} required 
              className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600" />
            </div>
          </div>
        </div>

        {/* Weight & Quantity */}
        <div className="space-y-5">
          <div className="flex items-center gap-2 text-brand-300 font-semibold mb-2">
            <Weight size={20} /> Metrics
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">Weight (kg)</label>
              <input type="number" step="0.1" name="weight" value={formData.weight} onChange={handleChange} required 
              className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">Quantity</label>
              <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} min="1" required 
              className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 outline-none transition-all" />
            </div>
          </div>
        </div>

        {/* Material & Fragility */}
        <div className="space-y-5">
          <div className="flex items-center gap-2 text-brand-300 font-semibold mb-2">
            <Shield size={20} /> Properties
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">Material</label>
              <select name="material" value={formData.material} onChange={handleChange} className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 outline-none transition-all appearance-none cursor-pointer">
                <option value="glass">Glass</option>
                <option value="electronics">Electronics</option>
                <option value="plastic">Plastic</option>
                <option value="metal">Metal</option>
                <option value="textile">Textile</option>
                <option value="ceramics">Ceramics</option>
                <option value="wood">Wood</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">Fragility</label>
              <select name="fragility" value={formData.fragility} onChange={handleChange} className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 outline-none transition-all appearance-none cursor-pointer">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </div>

        {/* Destination */}
        <div className="space-y-5">
           <div className="flex items-center gap-2 text-brand-300 font-semibold mb-2">
            <MapPin size={20} /> Logistics
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">Destination Country</label>
            <input type="text" name="destination" value={formData.destination} onChange={handleChange} required 
            className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 outline-none transition-all placeholder:text-slate-500" placeholder="e.g. USA, UK, India" />
          </div>
        </div>

      </div>

      <div className="mt-10">
        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-brand-500/25 transition-all transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Optimizing Model...
            </span>
          ) : 'Start Optimization'}
        </button>
      </div>
    </form>
  )
}
