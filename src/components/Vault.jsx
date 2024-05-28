import React, { useState, useEffect } from 'react';

const NotesSharingPage = () => {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch notes from backend (replace with actual API call)
  useEffect(() => {
    // Sample notes data, replace this with actual data fetching from backend
    const fetchedNotes = [
      { id: 1, title: 'Mathematics Notes', filename: 'math_notes.pdf', fileUrl: '/files/math_notes.pdf' },
      { id: 2, title: 'Physics Notes', filename: 'physics_notes.pdf', fileUrl: '/files/physics_notes.pdf' },
      { id: 3, title: 'Chemistry Notes', filename: 'chemistry_notes.pdf', fileUrl: '/files/chemistry_notes.pdf' },
    ];
    setNotes(fetchedNotes);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="notes-sharing-page container mx-auto p-4">
      <header className="header flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-xl font-bold">Notes Sharing</h1>
      </header>
      <main className="notes-main mt-6">
        <section className="search-bar bg-white p-4 rounded-lg shadow-md mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Search notes by title"
          />
        </section>
        <section className="notes-list bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Shared Notes</h2>
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note) => (
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
                </div>
              </div>
            ))
          ) : (
            <p>No notes found.</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default NotesSharingPage;
