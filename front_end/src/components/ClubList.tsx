// src/ClubList.tsx
import React, { useEffect, useState } from 'react';
import { Club } from './types';

const sampleClubs: Club[] = [
  {
    id: 1,
    name: "Chess Club",
    description: "A club for chess enthusiasts.",
    supplies: [
      { id: 1, name: "Chess Boards", quantity: 10 },
      { id: 2, name: "Chess Pieces", quantity: 20 },
      { id: 3, name: "Mystery Item", quantity: 30}
    ]
  },
  {
    id: 2,
    name: "Science Club",
    description: "A club for science lovers.",
    supplies: [
      { id: 4, name: "Microscopes", quantity: 5 },
      { id: 5, name: "Test Tubes", quantity: 50 }
    ]
  },
  {
    id: 3,
    name: "Art Club",
    description: "A club for artists and art lovers.",
    supplies: [
      { id: 6, name: "Paint Brushes", quantity: 15 },
      { id: 7, name: "Canvas", quantity: 30 }
    ]
  },
  {
    id: 4,
    name: "Robotics Club",
    description: "A club for robotics enthusiasts.",
    supplies: [
      { id: 8, name: "Arduino Kits", quantity: 10 },
      { id: 9, name: "Servo Motors", quantity: 25 }
    ]
  }
];

const ClubList: React.FC = () => {
  const [clubs, setClubs] = useState<Club[]>(sampleClubs); // Use sample data
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [editingClub, setEditingClub] = useState<Club | null>(null);
  const [newClubName, setNewClubName] = useState<string>('');
  const [newClubDescription, setNewClubDescription] = useState<string>('');

  useEffect(() => {
    // Simulate loading state
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a delay

    return () => clearTimeout(timer);
  }, []);

  const handleAddClub = () => {
    const newClub: Club = {
      id: clubs.length + 1, // Simple ID generation
      name: newClubName,
      description: newClubDescription,
      supplies: [] // Initialize with no supplies
    };
    setClubs([...clubs, newClub]);
    setNewClubName('');
    setNewClubDescription('');
  };

  const handleEditClub = (club: Club) => {
    setEditingClub(club);
    setNewClubName(club.name);
    setNewClubDescription(club.description);
  };

  const handleUpdateClub = () => {
    if (editingClub) {
      const updatedClubs = clubs.map(club => 
        club.id === editingClub.id 
          ? { ...club, name: newClubName, description: newClubDescription } 
          : club
      );
      setClubs(updatedClubs);
      setEditingClub(null);
      setNewClubName('');
      setNewClubDescription('');
    }
  };

  const handleDeleteClub = (id: number) => {
    const updatedClubs = clubs.filter(club => club.id !== id);
    setClubs(updatedClubs);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Clubs List</h1>
      <div>
        <input 
          type="text" 
          placeholder="Club Name" 
          value={newClubName} 
          onChange={(e) => setNewClubName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Club Description" 
          value={newClubDescription} 
          onChange={(e) => setNewClubDescription(e.target.value)} 
        />
        {editingClub ? (
          <button onClick={handleUpdateClub}>Update Club</button>
        ) : (
          <button onClick={handleAddClub}>Add Club</button>
        )}
      </div>
      <table>
        <thead>
          <tr>
            <th>Club Name</th>
            <th>Description</th>
            <th>Supplies</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clubs.map((club) => (
            <tr key={club.id}>
              <td>{club.name}</td>
              <td>{club.description}</td>
              <td>
                <table>
                  <thead>
                    <tr>
                      <th>Supply Name</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {club.supplies.map((supply) => (
                      <tr key={supply.id}>
                        <td>{supply.name}</td>
                        <td>{supply.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
              <td>
                <button onClick={() => handleEditClub(club)}>Edit</button>
                <button onClick={() => handleDeleteClub(club.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClubList;
