import React, { useEffect, useState, useContext } from "react";
import { api } from "../utils/api";
import { toast } from "react-toastify";
import UserDetailContext from "../context/userDetailContext.jsx";

const AdminPanel = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userDetails } = useContext(UserDetailContext);

  // Check if user is admin (from context)
  const isAdmin = userDetails?.isAdmin;

  // Get token from context or localStorage
  const token = userDetails?.token || localStorage.getItem("access_token");

  const fetchProperties = async () => {
    setLoading(true);
    if (!token) {
      toast.error("Unauthorized: No token found.");
      setLoading(false);
      return;
    }

    try {
      const res = await api.get("/api/residency/admin/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProperties(res.data);
    } catch (err) {
      console.error("Fetch error:", err.response?.data || err.message);
      toast.error("Failed to fetch properties");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const approveProperty = async (id) => {
    try {
      await api.post(
        `/api/residency/admin/approve/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Property approved");
      fetchProperties();
    } catch (err) {
      toast.error("Failed to approve property");
    }
  };

  const deleteProperty = async (id) => {
    try {
      await api.delete(`/api/residency/admin/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Property deleted");
      fetchProperties();
    } catch (err) {
      toast.error("Failed to delete property");
    }
  };

  if (!token) return <div>Please log in as admin to access this page.</div>;
  if (!isAdmin) return <div>Access denied. You are not an admin.</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div className="overflow-x-auto !mx-auto max-w-[1440px] rounded-lg shadow border border-gray-200 bg-white  !mt-[100px] !mb-[100px]">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="border-b !px-2 sm:!px-4 !py-2  text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Title
            </th>
            <th className="border-b px-2 sm:!px-4 !py-2  text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Owner
            </th>
            <th className="border-b px-2 sm:!px-4 !py-2  text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Approved
            </th>
            <th className="border-b px-2 sm:!px-4 py-2  text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {properties.map((prop) => (
            <tr key={prop.id} className="hover:bg-gray-50 transition-colors">
              <td className="border-b px-2 sm:!px-4  !py-3 text-sm">
                {prop.title}
              </td>
              <td className="border-b px-2 sm:!px-4  !py-3 text-sm">
                {prop.owner?.email || "-"}
              </td>
              <td className="border-b px-2 sm:!px-4  !py-3 text-sm">
                <span
                  className={
                    prop.approved
                      ? "text-green-600 font-semibold"
                      : "text-yellow-600 font-semibold"
                  }
                >
                  {prop.approved ? "Yes" : "No"}
                </span>
              </td>
              <td className="border-b px-2 sm:!px-4  !py-3 flex flex-col sm:flex-row gap-2 sm:!space-x-2 items-start sm:items-center">
                {!prop.approved && (
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white  !px-4  !py-2 rounded transition-colors text-xs sm:text-sm font-medium shadow"
                    onClick={() => approveProperty(prop.id)}
                  >
                    Approve
                  </button>
                )}
                <button
                  className="bg-red-500 hover:bg-red-600 text-white  !px-4  !py-2 rounded transition-colors text-xs sm:text-sm font-medium shadow"
                  onClick={() => deleteProperty(prop.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
