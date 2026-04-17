import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const SwapForm = ({ onSwapAdded }) => {
  const [title, setTitle] = useState("");
  const [skillOffered, setSkillOffered] = useState("");
  const [skillWanted, setSkillWanted] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the object right here so it's fresh
    const dataToSend = { title, skillOffered, skillWanted, description };

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/swaps`, dataToSend);
      toast.success("🚀 Skill Swap posted!");

      // Clear the form after success
      setTitle("");
      setSkillOffered("");
      setSkillWanted("");
      setDescription("");

      // Trigger refresh in parent component
      if (onSwapAdded) {
        onSwapAdded();
      }
    } catch (error) {
      console.error("Failed to post", error);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 bg-white p-8 rounded-xl shadow-md border border-slate-100">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Create a Swap</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          placeholder="Title (e.g. React Tutoring)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <div className="flex gap-2">
          <input
            className="w-1/2 px-4 py-2 rounded-lg border border-slate-300 focus:outline-none"
            placeholder="I Offer..."
            value={skillOffered}
            onChange={(e) => setSkillOffered(e.target.value)}
            required
          />
          <input
            className="w-1/2 px-4 py-2 rounded-lg border border-slate-300 focus:outline-none"
            placeholder="I Want..."
            value={skillWanted}
            onChange={(e) => setSkillWanted(e.target.value)}
            required
          />
        </div>
        <textarea
          className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none h-24"
          placeholder="Describe your swap..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors shadow-lg shadow-blue-200"
        >
          Post Swap
        </button>
      </form>
    </div>
  );
};

export default SwapForm;
