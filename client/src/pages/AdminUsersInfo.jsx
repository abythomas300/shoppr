import { useState, useEffect } from "react";
import axios from "axios";
import AdminHeader from "../components/layout/AdminHeader";
import Footer from "../components/layout/Footer";

const BASE_URL = "http://localhost:3000";

function AdminUsersInfo() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    // API call: for getting user info
    const getUserInfo = async ()=>{
        try {
            const {data} = await axios.get(`${BASE_URL}/admin/all-users`)
            console.log(data.users) // test
            setUsers(data.users)
            setLoading(false)
        } catch(error) {
            setLoading(false)
            setError(error.name)
        }
    }
    getUserInfo()
  }, [])

//   const handleStatusChange = (userId, newStatus) => {
//     // TODO: Logic for status user status change
//     // axios.patch(`${BASE_URL}/endpoint/${userId}`, { status: newStatus }, { withCredentials: true })

//     // Optimistically update UI
//     setUsers((prev) =>
//       prev.map((u) => (u._id === userId ? { ...u, status: newStatus } : u))
//     );
//   };

  const getStatusColor = (status) => {
    switch (status) {
      case "active":     
        return "text-success border-success";
      case "restrict":  
        return "text-warning border-warning";
      case "terminate": 
        return "text-red-500 border-red-500";
      default:           
        return "bg-success text-success-content border-success";
    }
  };

  return (
    <>
    <AdminHeader/>

    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="bg-base-100 rounded-box border p-4 mb-6 text-center border-primary">
          <h1 className="text-2xl font-bold tracking-widest border-primary">Users <span className="font-semibold">{`(${users.length})`}</span> </h1>
        </div>

        {/* Loading */}
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

        {/* Empty */}
        {!loading && !error && users.length === 0 && (
          <div className="text-center text-base-content/50 py-20">No users found.</div>
        )}

        {/* Table */}
        {!loading && !error && users.length > 0 && (
          <div className="rounded-box border overflow-x-auto border-primary">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Username</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Role</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="">
                {users.map((user, index) => (
                  <tr key={user._id || user.id} className="hover:bg-base-300">
                    <td className="text-base-content/60">{index + 1}</td>
                    <td className="font-medium">{user.username}</td>
                    <td>{user.firstName || user.first_name || "—"}</td>
                    <td>{user.lastName || user.last_name || "—"}</td>
                    <td className="text-sm hover:text-blue-400 "><a href={`mailto:${user.email}`}>{user.email}</a></td>
                    <td className="text-sm">{user.phone || "—"}</td>
                    <td>
                      <span className={`badge badge-lg border-2 ${user.role === 'user' ? 'text-blue-400': 'text-red-400'}`}>
                        {user.role}
                      </span>
                    </td>
                    <td>

                        <div className="dropdown dropdown-start">
                            <div className={`${getStatusColor(user.status ?? 'active')} btn m-1 `} tabIndex={0} role="button"> {user.status ?? "Active"} </div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-24 p-2 shadow-sm">
                                <li onClick={console.log("Active button clicked")} className={getStatusColor('active')} ><a href="">Active</a></li>
                                <li onClick={console.log("Active button clicked")} className={getStatusColor('restrict')} ><a href="">Restrict</a></li>
                                <li onClick={console.log("Active button clicked")} className={getStatusColor('terminate')} ><a href="">Terminate</a></li>
                            </ul>
                        </div>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>

    <Footer/>
    </>
  );
}

export default AdminUsersInfo