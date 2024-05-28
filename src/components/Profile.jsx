import React from 'react';

const ProfilePage = () => {
  // Sample user data, replace this with actual data fetching later
  const user = {
    profilePicture: 'https://via.placeholder.com/150',
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'This is a short bio about John Doe.',
    notesShared: [
      { id: 1, title: 'Note 1', description: 'Description of Note 1' },
      { id: 2, title: 'Note 2', description: 'Description of Note 2' },
    ],
    classroomsJoined: [
      { id: 1, name: 'Classroom 1' },
      { id: 2, name: 'Classroom 2' },
    ],
    projectsShared: [
      { id: 1, name: 'Project 1' },
      { id: 2, name: 'Project 2' },
    ],
  };

  return (
    <div className="profile-page container mx-auto p-4">
      <header className="profile-header flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          <img className="w-16 h-16 rounded-full" src={user.profilePicture} alt="Profile" />
          <h1 className="text-xl font-bold">{user.name}</h1>
        </div>
        <button className="btn btn-primary">Edit Profile</button>
      </header>
      <main className="profile-details mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Profile Information</h2>
          <div className="mb-2">
            <label className="block text-gray-700">Name:</label>
            <p className="text-gray-900">{user.name}</p>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Email:</label>
            <p className="text-gray-900">{user.email}</p>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Bio:</label>
            <p className="text-gray-900">{user.bio || 'No bio available'}</p>
          </div>
          {/* Add more fields as necessary */}
        </section>
        <section className="account-actions bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Account Actions</h2>
          <button className="btn btn-secondary w-full mb-2">Change Password</button>
          <button className="btn btn-danger w-full">Logout</button>
        </section>
        <section className="notes-shared bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Notes Shared</h2>
          {user.notesShared.length > 0 ? (
            user.notesShared.map((note) => (
              <div key={note.id} className="mb-2">
                <h3 className="text-md font-semibold">{note.title}</h3>
                <p className="text-gray-700">{note.description}</p>
              </div>
            ))
          ) : (
            <p>No notes shared yet.</p>
          )}
        </section>
        <section className="classrooms-joined bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Classrooms Joined</h2>
          {user.classroomsJoined.length > 0 ? (
            user.classroomsJoined.map((classroom) => (
              <div key={classroom.id} className="mb-2">
                <h3 className="text-md font-semibold">{classroom.name}</h3>
              </div>
            ))
          ) : (
            <p>No classrooms joined yet.</p>
          )}
        </section>
        <section className="projects-shared bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Projects Shared</h2>
          {user.projectsShared.length > 0 ? (
            user.projectsShared.map((project) => (
              <div key={project.id} className="mb-2">
                <h3 className="text-md font-semibold">{project.name}</h3>
              </div>
            ))
          ) : (
            <p>No projects shared yet.</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
