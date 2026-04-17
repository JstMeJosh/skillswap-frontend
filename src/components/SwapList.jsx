import React, { useState } from "react";
import axios from "axios";
import { Pencil, Trash2, Send, AlertCircle } from "lucide-react";
import { toast } from "react-toastify";
const SwapList = ({ swaps = [], onSwapDeleted, onEdit }) => {
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const deleteSwap = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/swaps/${id}`);
      toast.warn("🗑️ Swap removed.");
      if (onSwapDeleted) {
        onSwapDeleted();
      }
      setDeleteConfirm(null);
    } catch (err) {
      console.error("Delete failed", err);
      toast.error("Failed to delete swap. Please try again.");
    }
  };
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-800">Available Swaps</h2>
        <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
          {swaps.length} Deals Found
        </span>
      </div>

      {/* THE GRID: 1 column on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {swaps.map((swap) => (
          <div
            key={swap._id}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 truncate">
                {swap.title}
              </h3>

              <div className="space-y-3 mb-4">
                <div className="flex items-center text-sm">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded mr-2 font-medium">
                    Offers
                  </span>
                  <span className="text-slate-600">{swap.skillOffered}</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded mr-2 font-medium">
                    Wants
                  </span>
                  <span className="text-slate-600">{swap.skillWanted}</span>
                </div>
              </div>

              <i className="text-slate-500 text-sm italic line-clamp-3">
                {swap.description || "No further details provided."}
              </i>
            </div>

            <div className="flex gap-2 mt-6">
              <button
                onClick={() => onEdit(swap)}
                className="flex-1 py-2 flex items-center justify-center gap-1 text-xs font-semibold text-slate-600 border border-slate-100 rounded-lg hover:bg-slate-300 transition-colors"
              >
                <Pencil size={18} />
                Edit
              </button>
              <button
                onClick={() => setDeleteConfirm(swap._id)}
                className="flex-1 py-2 flex items-center justify-center gap-1 text-xs font-semibold text-red-600 border border-red-200 rounded-lg hover:bg-red-100 transition-colors"
              >
                <Trash2 size={18} />
                Delete
              </button>
              <button
                onClick={() => {
                  const phoneNumber = "2349122656254";
                  const message = `Hi! I'm interested in your skill swap: "${swap.title}"`;
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, "_blank");
                }}
                className="flex-1 py-2 flex items-center justify-center gap-1 text-xs font-semibold text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <Send size={18} />
                Contact
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Delete Confirmation Toast */}
      {deleteConfirm && (
        <div className="fixed bottom-20 left-4 right-4 max-w-sm bg-white rounded-lg shadow-lg border border-red-200 p-4 animate-in fade-in">
          <div className="flex items-start gap-3">
            <AlertCircle
              className="text-red-600 flex-shrink-0 mt-0.5"
              size={20}
            />
            <div className="flex-1">
              <p className="font-semibold text-slate-900 text-sm">
                Delete swap?
              </p>
              <p className="text-slate-600 text-xs mt-1">
                This action cannot be undone.
              </p>
              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => deleteSwap(deleteConfirm)}
                  className="px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
                <button
                  onClick={() => setDeleteConfirm(null)}
                  className="px-3 py-1 bg-slate-200 text-slate-700 text-xs font-semibold rounded hover:bg-slate-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SwapList;
