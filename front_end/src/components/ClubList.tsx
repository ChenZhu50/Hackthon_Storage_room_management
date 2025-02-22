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
      { id: 2, name: "Chess Pieces", quantity: 20 }
    ]
  },
  {
    id: 2,
    name: "Science Club",
    description: "A club for science lovers.",
    supplies: [
      { id: 3, name: "Microscopes", quantity: 5 },
      { id: 4, name: "Test Tubes", quantity: 50 }
    ]
  },
  {
    id: 3,
    name: "Art Club",
    description: "A club for artists and art lovers.",
    supplies: [
      { id: 5, name: "Paint Brushes", quantity: 15 },
      { id: 6, name: "Canvas", quantity: 30 }
    ]
  },
  {
    id: 4,
    name: "Robotics Club",
    description: "A club for robotics enthusiasts.",
    supplies: [
      { id: 7, name: "Arduino Kits", quantity: 10 },
      { id: 8, name: "Servo Motors", quantity: 25 }
    ]
  }
];

const ClubList: React.FC = () => {
  const [clubs, setClubs] = useState<Club[]>(sampleClubs); // Use sample data
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate loading state
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Clubs List</h1>
      <table>
        <thead>
          <tr>
            <th>Club Name</th>
            <th>Description</th>
            <th>Supplies</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClubList;
