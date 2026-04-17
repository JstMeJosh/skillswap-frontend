import { useState, useEffect } from "react";
import axios from "axios";
import { Loader } from "lucide-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SwapForm from "./components/SwapForm";
import SwapList from "./components/SwapList";
import EditModal from "./components/EditModal";
import Footer from "./components/Footer";

function App() {
  const [swaps, setSwaps] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSwap, setSelectedSwap] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchSwaps = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/swaps`);
      setSwaps(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSwaps();
  }, []);

  const handleEditClick = (swap) => {
    setSelectedSwap(swap);
    setIsModalOpen(true);
  };
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header Section */}
      <header className="bg-white border-b border-slate-200 py-6 mb-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-extrabold text-blue-600 tracking-tight">
            Skill<span className="text-slate-800">Swap</span>
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Exchange knowledge, build community.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4">
        {/* Form Section */}
        <section className="mb-12">
          <SwapForm onSwapAdded={fetchSwaps} />
        </section>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader className="w-12 h-12 text-blue-600 animate-spin" />
          </div>
        ) : (
          <>
            {/* List Section */}
            <SwapList
              swaps={swaps}
              onSwapDeleted={fetchSwaps}
              onEdit={handleEditClick}
            />
            {swaps.length === 0 && (
              <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
                <p className="text-red-500 font-medium">
                  No swaps yet. Be the first to post!
                </p>
              </div>
            )}
          </>
        )}
        <EditModal
          key={selectedSwap?._id}
          isOpen={isModalOpen}
          swap={selectedSwap}
          onClose={() => setIsModalOpen(false)}
          onUpdate={fetchSwaps}
        />
      </main>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
