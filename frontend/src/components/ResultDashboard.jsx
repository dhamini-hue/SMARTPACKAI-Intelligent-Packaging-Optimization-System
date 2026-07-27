import { Box, Layers, ArchiveRestore, ShieldCheck, TrendingDown, Scale } from 'lucide-react'

export default function ResultDashboard({ result }) {

  return (
    <div className="animate-fade-in-up">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Recommendation Card */}
        <div className="col-span-1 lg:col-span-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-500/20 blur-3xl ring-[50px] ring-brand-500/5 rounded-full pointer-events-none"></div>
          
          <h2 className="text-2xl font-bold flex items-center gap-3 mb-8">
            <div className="p-2 bg-brand-500/20 rounded-lg text-brand-400">
              <Box size={28} />
            </div>
            Optimal Box Recommendation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="flex flex-col justify-center">
                <div className="text-sm uppercase tracking-wider text-slate-400 mb-1">Selected Box Type</div>
                <div className="text-3xl font-extrabold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-brand-100">{result.box.name}</div>
                
                <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-4 mt-2">
                  <div className="grid grid-cols-3 gap-2 text-center items-center">
                    <div>
                      <div className="text-xs text-slate-400 uppercase">Length</div>
                      <div className="font-bold text-lg">{result.box.length}cm</div>
                    </div>
                    <div className="text-slate-600 font-light text-2xl">×</div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase">Width</div>
                      <div className="font-bold text-lg">{result.box.width}cm</div>
                    </div>
                    <div className="text-slate-600 font-light text-2xl">×</div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase">Height</div>
                      <div className="font-bold text-lg">{result.box.height}cm</div>
                    </div>
                  </div>
                </div>
             </div>

             <div className="flex flex-col justify-center">
                <div className="bg-brand-900/40 border border-brand-500/30 p-5 rounded-2xl">
                  <div className="flex items-center gap-3 mb-2 text-brand-300 font-semibold">
                    <Scale size={20} /> Volumetric Weight
                  </div>
                  <div className="text-4xl font-bold text-white mb-1">{result.volumetric_weight} <span className="text-lg text-brand-200">kg</span></div>
                  <p className="text-xs text-brand-200/70">Calculated via (L×W×H)/5000 formula</p>
                </div>
             </div>
          </div>
        </div>

        {/* Cost Savings */}
        <div className="col-span-1 backdrop-blur-xl bg-gradient-to-br from-emerald-900/80 to-slate-900/80 border border-emerald-500/20 rounded-3xl p-8 shadow-2xl flex flex-col justify-center items-center text-center">
          <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 mb-6">
            <TrendingDown size={32} />
          </div>
          <div className="text-sm uppercase tracking-widest text-emerald-200/80 mb-2 font-semibold">Estimated Savings</div>
          <div className="text-6xl font-extrabold text-white tracking-tighter mb-4 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            {result.cost_savings}%
          </div>
          <p className="text-sm text-emerald-200/60 leading-relaxed">Cost reduction based on optimized volumetric efficiency vs unoptimized binning.</p>
        </div>

        {/* Space Utilization Progress */}
        <div className="col-span-1 lg:col-span-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
           <h3 className="text-xl font-bold flex items-center gap-3 mb-6">
            <ArchiveRestore size={24} className="text-blue-400" /> Space Utilization Details
           </h3>
           <div className="mb-4 flex justify-between items-end">
             <span className="text-slate-300">Volume utilized internally</span>
             <span className="text-xl font-bold text-blue-300">{result.space_utilization}%</span>
           </div>
           
           <div className="w-full bg-slate-800 rounded-full h-4 mb-8 overflow-hidden shadow-inner flex">
             <div 
              className={`h-4 rounded-full transition-all duration-1000 ease-out ${result.space_utilization > 90 ? 'bg-orange-500' : 'bg-gradient-to-r from-blue-500 to-brand-400'}`}
              style={{ width: `${Math.min(result.space_utilization, 100)}%` }}
             ></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-800/50">
               <div className="font-semibold text-brand-300 flex items-center gap-2 mb-3"><Layers size={18} /> Packing Arrangement</div>
               <p className="text-slate-300 text-sm leading-relaxed">{result.arrangement}</p>
             </div>
             <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-800/50">
                <div className="font-semibold text-orange-300 flex items-center gap-2 mb-3"><ShieldCheck size={18} /> Protective Packaging</div>
                <p className="text-slate-300 text-sm leading-relaxed font-medium">{result.packaging}</p>
             </div>
           </div>
        </div>

      </div>
    </div>
  )
}
