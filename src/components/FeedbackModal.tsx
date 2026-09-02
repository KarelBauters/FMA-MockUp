import React from "react";

export default function FeedbackModal({ onClose }: { onClose: () => void }) {
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const fd = new FormData(e.target as HTMLFormElement);
    const msg = fd.get("message");
    alert("Feedback submitted: " + msg);
    onClose();
  };
  return (
    <div className="modal">
      <div className="modal-inner">
        <h3>Send feedback</h3>
        <form onSubmit={submit}>
          <textarea name="message" placeholder="What did you expect to find?"></textarea>
          <button type="submit">Send</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
}
