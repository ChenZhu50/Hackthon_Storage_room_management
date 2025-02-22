// src/ClubList.tsx
import React, { useEffect, useState } from 'react';
import { Club } from './types';

const ClubList: React.FC = () => {
  const [clubs, setClubs] = useState<Club[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await fetch('/api/clubs'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Club[] = await response.json();
        setClubs(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClubs();
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
