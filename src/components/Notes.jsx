import React, { useState, useEffect } from 'react';

const NotesSharingPage = () => {
  const [notes, setNotes] = useState([]);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');

  // Fetch notes from backend (replace with actual API call)
  useEffect(() => {
    // Sample notes data, replace this with actual data fetching from backend
    const fetchedNotes = [
      { id: 1, title: 'Note 1', filename: 'note1.pdf', fileUrl: '/files/note1.pdf' },
      { id: 2, title: 'Note 2', filename: 'note2.pdf', fileUrl: '/files/note2.pdf' },
    ];
    setNotes(fetchedNotes);
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleUploadNote = () => {
    if (file && title) {
      // Upload note logic here (replace with actual API call)
      const newNote = {
        id: notes.length + 1,
        title,
        filename: file.name,
        fileUrl: URL.createObjectURL(file),
      };
      setNotes([...notes, newNote]);
      setTitle('');
      setFile(null);
    }
  };

  const handleDeleteNote = (id) => {
    // Delete note logic here (replace with actual API call)
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="notes-sharing-page container mx-auto p-4">
      <header className="header flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-xl font-bold">Notes Sharing</h1>
      </header>
      <main className="notes-main mt-6">
        <section className="upload-note bg-white p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-lg font-semibold mb-4">Upload New Note</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Title:</label>
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Note title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">File:</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <button
            onClick={handleUploadNote}
            className="btn btn-primary"
          >
            Upload Note
          </button>
        </section>
        <section className="notes-list bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Shared Notes</h2>
          {notes.length > 0 ? (
            notes.map((note) => (
              <div key={note.id} className="note-item mb-4 p-4 border rounded-lg shadow-sm">
                <h3 className="text-md font-semibold">{note.title}</h3>
                <p className="text-gray-700">{note.filename}</p>
                <div className="flex space-x-2 mt-2">
                  <a
                    href={note.fileUrl}
                    download
                    className="btn btn-secondary"
                  >
                    Download
                  </a>
                  <button
                    onClick={() => handleDeleteNote(note.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No notes shared yet.</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default NotesSharingPage;
