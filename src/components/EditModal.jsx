import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const EditModal = ({ swap, isOpen, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    title: swap?.title || "",
    skillOffered: swap?.skillOffered || "",
    skillWanted: swap?.skillWanted || "",
    description: swap?.description || "",
  });
  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!swap || !swap._id) {
      toast.error("Error: No swap selected");
      return;
    }
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/api/swaps/${swap._id}`, formData);
      onUpdate();
      onClose();
      toast.info("📝 Swap updated successfully");
    } catch (err) {
      console.error("Update failed", err);
      toast.error("Failed to update swap. Please try again.");
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 transform transition-all">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Edit Swap</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 text-2xl"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Title
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Offers
              </label>
              <input
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.skillOffered}
                onChange={(e) =>
                  setFormData({ ...formData, skillOffered: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Wants
              </label>
              <input
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.skillWanted}
                onChange={(e) =>
                  setFormData({ ...formData, skillWanted: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Description
            </label>
            <textarea
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none h-28"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditModal;
