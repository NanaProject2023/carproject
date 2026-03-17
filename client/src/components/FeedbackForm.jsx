import { useState, useEffect } from "react";
import "./FeedbackForm.css";


export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [allFeedback, setAllFeedback] = useState([]);

  // Load feedback from JSON
  const loadFeedback = async () => {
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}assets/feedback.json`);
      const data = await res.json();
      setAllFeedback(data);
    } catch (err) {
      console.error("Error loading feedback:", err);
    }
  };

  useEffect(() => {
    loadFeedback();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      id: Date.now(),
      name,
      feedback,
    };

    // Add locally (not saved to file)
    setAllFeedback((prev) => [newFeedback, ...prev]);

    setName("");
    setFeedback("");
  };

  return (
    <div className="feedback-container">
      <form onSubmit={handleSubmit} className="feedback-form">
        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <textarea
          placeholder="Your feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>

      <button onClick={loadFeedback} className="load-btn" id="reloadButton">
        Reload Feedback
      </button>

      <div className="feedback-list">
        {allFeedback.map((item) => (
          <div key={item.id} className="feedback-card">
            <strong>{item.name}</strong>
            <p>{item.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}