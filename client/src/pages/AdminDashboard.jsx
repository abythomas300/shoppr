import AdminHeader from "../components/layout/AdminHeader"
import Footer from "../components/layout/Footer";
import { useEffect, useState} from "react";
import axios from "axios";

function StatCard({ title, value, subtitle, wide }) {
  return (
    <div className={`bg-base-100 rounded-box border border-base-300 shadow-sm p-6 flex flex-col gap-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default ${wide ? "col-span-2" : ""}`}>
      <p className="text-sm font-semibold text-base-content/60 uppercase tracking-wider">{title}</p>
      <p className="text-4xl font-bold text-base-content transition-colors duration-300 hover:text-primary">{value ?? "N/A"}</p>
      {subtitle && <p className="text-sm text-base-content/80">{subtitle}</p>}
    </div>
  );
}

function AdminDashboard() {
    
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASE_URL = 'http://localhost:3000'

  useEffect(()=>{
        // API Call: For getting application stats
        const getStats = async()=>{
            try {
                const {data} = await axios.get(`${BASE_URL}/admin/status`, {withCredentials: true} )
                console.log("API Response --> ", data.stats) // test
                setLoading(false)
                setStats(data.stats)
            } catch(error) {
                console.log("Error: Cannot get stats")
                setError(error.name)
                setLoading(false)
            }
         }
         getStats()
  }, [])


  return (
    <>
    <AdminHeader/>

    <div className="min-h-screen bg-linear-to-br from-base-200 to-base-300 p-6">
      <div className="max-w-4xl mx-auto">

        <div className="bg-base-100 rounded-box border p-4 mb-8 text-center border-primary">
          <h1 className="text-2xl font-bold tracking-widest uppercase">Shoppr Overview</h1>
          <p className="text-lg text-base-content/50 mt-1">Welcome back, Admin. Here's what's happening.</p>
        </div>

        {/* Loader */}
        {loading && (
          <div className="flex justify-center py-20">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="alert alert-error">
            <span>Error: {error}</span>
          </div>
        )}

        {/* Stat Card */}
        {!loading && !error && stats && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <StatCard
              title="Active Users"
              value={stats.totalUsers}
              subtitle="Currently active user across the globe"
            />
            <StatCard
              title="Total Products"
              value={stats.totalProducts}
              subtitle="Products currently available in catalogue"
            />
            <StatCard
              title="Total Orders"
              value={stats.totalOrders}
              subtitle="Orders placed so far"
            />
            <StatCard
              title="Categories"
              value={stats.categoryCount}
              subtitle="Variey of products"
            />
            <StatCard
              title="Orders Worth"
              value={`Rs. ${stats.totalOrderWorth?.toLocaleString("en-IN")}`}
              subtitle="Total revenue from orders"
              wide={true}
            />
          </div>
        )}

      </div>
    </div>

    <Footer/>

    </>
  );
}

export default AdminDashboard