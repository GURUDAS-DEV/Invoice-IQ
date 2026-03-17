
import React from "react"
import {
  IndianRupee,
  Users,
  Package,
  AlertCircle,
  TrendingUp,
  Plus,
  Scan,
  Sparkles,
  ArrowRight,
  ChevronRight,
  ReceiptText
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="p-6 md:p-8 max-w-1600px mx-auto space-y-8 dark:bg-black">

      {/* Header & Quick Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white dark: tracking-tight">Dashboard</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Here&apos;s your business summary for this month.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1A1D24] border border-gray-200 dark:border-white/10 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors shadow-xs">
            <Plus className="w-4 h-4" />
            Add Supplier
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1A1D24] border border-gray-200 dark:border-white/10 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors shadow-xs">
            <Plus className="w-4 h-4" />
            Add Delivery
          </button>
          <button className="flex items-center gap-2 px-5 py-2 bg-linear-to-r from-[#1E3A8A] to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white rounded-xl text-sm font-medium transition-all shadow-sm hover:shadow-md">
            <Scan className="w-4 h-4" />
            Scan Invoice
          </button>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {/* Stat Card 1 */}
        <div className="bg-white dark:bg-[#1A1D24] border border-gray-100 dark:border-white/10 rounded-2xl p-5 shadow-xs transition-shadow hover:shadow-sm">
          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 mb-4">
            <span className="text-sm font-medium">Total Spend (This Month)</span>
            <div className="p-2 bg-blue-50 dark:bg-blue-500/10 rounded-lg">
              <IndianRupee className="w-4 h-4 text-[#1E3A8A] dark:text-blue-400" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">₹1,20,000</h2>
            <span className="text-xs font-medium text-green-600 dark:text-green-400 flex items-center bg-green-50 dark:bg-green-500/10 px-1.5 py-0.5 rounded-md">
              <TrendingUp className="w-3 h-3 mr-1" />
              +12%
            </span>
          </div>
        </div>

        {/* Stat Card 2 */}
        <div className="bg-white dark:bg-[#1A1D24] border border-gray-100 dark:border-white/10 rounded-2xl p-5 shadow-xs transition-shadow hover:shadow-sm">
          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 mb-4">
            <span className="text-sm font-medium">Active Suppliers</span>
            <div className="p-2 bg-emerald-50 dark:bg-emerald-500/10 rounded-lg">
              <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">8</h2>
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Total registered</span>
          </div>
        </div>

        {/* Stat Card 3 */}
        <div className="bg-white dark:bg-[#1A1D24] border border-gray-100 dark:border-white/10 rounded-2xl p-5 shadow-xs transition-shadow hover:shadow-sm">
          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 mb-4">
            <span className="text-sm font-medium">Items Purchased</span>
            <div className="p-2 bg-purple-50 dark:bg-purple-500/10 rounded-lg">
              <Package className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">545</h2>
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">This month</span>
          </div>
        </div>

        {/* Stat Card 4 */}
        <div className="bg-white dark:bg-[#1A1D24] border border-red-100 dark:border-red-900/30 rounded-2xl p-5 shadow-xs transition-shadow hover:shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-1.5 h-full bg-red-500/80 group-hover:bg-red-500 transition-colors"></div>
          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 mb-4">
            <span className="text-sm font-medium">Price Alerts</span>
            <div className="p-2 bg-red-50 dark:bg-red-500/10 rounded-lg">
              <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">2</h2>
            <span className="text-xs font-medium text-red-600 dark:text-red-400">Needs review</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">

        {/* Left Column (Main Content) */}
        <div className="lg:col-span-2 space-y-6 md:space-y-8">

          {/* Price Alerts */}
          <div className="bg-white dark:bg-[#1A1D24] border border-gray-100 dark:border-white/10 rounded-2xl shadow-xs overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 dark:border-white/10 flex items-center justify-between bg-gray-50/30 dark:bg-white/1">
              <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-500" />
                Price Alerts Detected
              </h3>
              <button className="text-sm font-medium text-[#1E3A8A] dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">View Details</button>
            </div>
            <div className="divide-y divide-gray-100 dark:divide-white/5">

              <div className="p-6 hover:bg-gray-50/50 dark:hover:bg-white/2 transition-colors group">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Rice (25kg Bag)</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Sharmaji Traders</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-400 border border-red-100 dark:border-red-500/20">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +₹20
                  </span>
                </div>
                <div className="flex items-center gap-6 mt-4 text-sm bg-gray-50 dark:bg-white/5 rounded-xl p-3">
                  <div className="flex flex-col">
                    <span className="text-gray-500 dark:text-gray-400 text-xs mb-0.5">Previous Price</span>
                    <span className="font-medium text-gray-900 dark:text-gray-300">₹100</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 dark:text-gray-600 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-gray-500 dark:text-gray-400 text-xs mb-0.5">Current Price</span>
                    <span className="font-bold text-red-600 dark:text-red-400">₹120</span>
                  </div>
                </div>
              </div>

              <div className="p-6 hover:bg-gray-50/50 dark:hover:bg-white/2 transition-colors group">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Mustard Oil (1L)</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Ravi Traders</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-400 border border-red-100 dark:border-red-500/20">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +₹15
                  </span>
                </div>
                <div className="flex items-center gap-6 mt-4 text-sm bg-gray-50 dark:bg-white/5 rounded-xl p-3">
                  <div className="flex flex-col">
                    <span className="text-gray-500 dark:text-gray-400 text-xs mb-0.5">Previous Price</span>
                    <span className="font-medium text-gray-900 dark:text-gray-300">₹150</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 dark:text-gray-600 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-gray-500 dark:text-gray-400 text-xs mb-0.5">Current Price</span>
                    <span className="font-bold text-red-600 dark:text-red-400">₹165</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Recent Deliveries */}
          <div className="bg-white dark:bg-[#1A1D24] border border-gray-100 dark:border-white/10 rounded-2xl shadow-xs overflow-hidden pb-2">
            <div className="px-6 py-5 border-b border-gray-100 dark:border-white/10 flex items-center justify-between">
              <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <ReceiptText className="w-4 h-4 text-gray-400" />
                Recent Deliveries
              </h3>
              <button className="text-sm font-medium text-[#1E3A8A] dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">See Ledger</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50 dark:bg-white/2 text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-white/10">
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Supplier</th>
                    <th className="px-6 py-4">Items</th>
                    <th className="px-6 py-4 text-right">Total Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-white/5 text-sm">
                  <tr className="hover:bg-gray-50 dark:hover:bg-white/2 cursor-default transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">12 Mar</td>
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Sharmaji Traders</td>
                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">5 Items</td>
                    <td className="px-6 py-4 font-medium text-right text-gray-900 dark:text-white">₹6,200</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-white/2 cursor-default transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">10 Mar</td>
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Gupta Traders</td>
                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">3 Items</td>
                    <td className="px-6 py-4 font-medium text-right text-gray-900 dark:text-white">₹3,800</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-white/2 cursor-default transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">8 Mar</td>
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Ravi Traders</td>
                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">4 Items</td>
                    <td className="px-6 py-4 font-medium text-right text-gray-900 dark:text-white">₹4,500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Right Column (Sidebar metrics) */}
        <div className="space-y-6 md:space-y-8">

          {/* AI Monthly Summary */}
          <div className="bg-linear-to-br from-blue-50 to-indigo-50/80 dark:from-blue-900/20 dark:to-indigo-900/10 border border-blue-100 dark:border-blue-800/30 rounded-2xl p-6 shadow-xs relative overflow-hidden group">
            <div className="absolute -top-4 -right-4 p-4 opacity-5 dark:opacity-10 pointer-events-none transition-transform group-hover:scale-110 duration-500">
              <Sparkles className="w-32 h-32 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-1.5 bg-[#1E3A8A] dark:bg-blue-600 rounded-lg shadow-sm">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Smart Summary</h3>
            </div>
            <div className="space-y-3.5 text-sm text-gray-700 dark:text-gray-300 relative z-10 leading-relaxed">
              <p>In March you spent <strong className="text-gray-900 dark:text-white font-semibold">₹1,20,000</strong> across 8 suppliers.</p>
              <p>Rice prices increased twice from Sharmaji Traders. Mustard oil is currently cheaper at Gupta Traders.</p>
              <div className="pt-3 border-t border-blue-200/50 dark:border-blue-800/50 mt-3">
                <p className="font-medium text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 rotate-180" />
                  Estimated savings next month: ₹3,200
                </p>
              </div>
            </div>
            <button className="mt-6 w-full py-2.5 bg-white dark:bg-[#111318] hover:bg-gray-50 dark:hover:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50 rounded-xl text-sm font-medium text-[#1E3A8A] dark:text-blue-400 transition-colors shadow-xs">
              Generate Full Report
            </button>
          </div>

          {/* Supplier Spending Breakdown */}
          <div className="bg-white dark:bg-[#1A1D24] border border-gray-100 dark:border-white/10 rounded-2xl p-6 shadow-xs">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white">Spend by Supplier</h3>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
            <div className="space-y-6">

              <div className="group">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Sharmaji Traders</span>
                  <span className="text-gray-900 dark:text-white font-medium">₹42,000</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-[#1E3A8A] dark:bg-blue-500 h-full rounded-full transition-all duration-1000 ease-out" style={{ width: '45%' }}></div>
                </div>
              </div>

              <div className="group">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Gupta Traders</span>
                  <span className="text-gray-900 dark:text-white font-medium">₹31,500</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-blue-400 dark:bg-blue-400 h-full rounded-full transition-all duration-1000 ease-out" style={{ width: '35%' }}></div>
                </div>
              </div>

              <div className="group">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Ravi Traders</span>
                  <span className="text-gray-900 dark:text-white font-medium">₹18,200</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-slate-300 dark:bg-slate-500 h-full rounded-full transition-all duration-1000 ease-out" style={{ width: '20%' }}></div>
                </div>
              </div>

            </div>
          </div>

          {/* Top Purchased Items */}
          <div className="bg-white dark:bg-[#1A1D24] border border-gray-100 dark:border-white/10 rounded-2xl p-6 shadow-xs">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-6">Top Items Purchased</h3>
            <div className="space-y-5">

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-100 dark:border-orange-500/20">
                  <Package className="w-5 h-5 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">Rice</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">250 kg</p>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-yellow-50 dark:bg-yellow-500/10 flex items-center justify-center shrink-0 border border-yellow-100 dark:border-yellow-500/20">
                  <Package className="w-5 h-5 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">Mustard Oil</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">120 L</p>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-100 dark:border-emerald-500/20">
                  <Package className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">Arhar Dal</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">95 kg</p>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-500/20">
                  <Package className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">Sugar</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">80 kg</p>
                </div>
              </div>

            </div>
          </div>

          {/* Monthly Trend (Mini CSS Chart) */}
          <div className="bg-white dark:bg-[#1A1D24] border border-gray-100 dark:border-white/10 rounded-2xl p-6 shadow-xs">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-semibold text-gray-900 dark:text-white">Trend</h3>
              <span className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 rounded-md">Q1 &#39;26</span>
            </div>

            <div className="flex items-end justify-between h-28 gap-3 px-2">
              <div className="w-full flex flex-col items-center gap-3 group cursor-pointer">
                <div className="w-full bg-blue-100 dark:bg-blue-900/30 rounded-t-lg h-[40%] group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors relative">
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-semibold text-gray-600 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">80k</span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Jan</span>
              </div>
              <div className="w-full flex flex-col items-center gap-3 group cursor-pointer">
                <div className="w-full bg-blue-300 dark:bg-blue-700/50 rounded-t-lg h-[65%] group-hover:bg-blue-400 dark:group-hover:bg-blue-600/60 transition-colors relative">
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-semibold text-gray-700 dark:text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">1.1L</span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Feb</span>
              </div>
              <div className="w-full flex flex-col items-center gap-3 group cursor-pointer">
                <div className="w-full bg-[#1E3A8A] dark:bg-blue-500 rounded-t-lg h-[95%] group-hover:bg-blue-800 dark:group-hover:bg-blue-400 transition-colors relative shadow-sm">
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity">1.2L</span>
                </div>
                <span className="text-xs text-gray-900 dark:text-white font-semibold">Mar</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
