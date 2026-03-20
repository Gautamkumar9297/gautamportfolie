import React, { useEffect, useState } from "react";
import "../styles/CompetitiveCoding.css";
import { profiles } from '../constants/codingProfiles';
import { animateCounter } from '../utils/animations';

function CompetitiveCoding() {
  const [counts, setCounts] = useState(profiles.map(() => 0));
  const [loading, setLoading] = useState(true);
  const [actualCounts, setActualCounts] = useState(profiles.map(p => p.questionsSolved));

  useEffect(() => {
    // Fetch real data from APIs
    const fetchProfileData = async () => {
      const updatedCounts = [...actualCounts];

      for (let i = 0; i < profiles.length; i++) {
        const profile = profiles[i];

        try {
          if (profile.platform === 'LeetCode' && profile.apiEndpoint) {
            const response = await fetch(profile.apiEndpoint);
            const data = await response.json();
            updatedCounts[i] = data.totalSolved || 0;
          } else if (profile.platform === 'CodeChef' && profile.apiEndpoint) {
            const response = await fetch(profile.apiEndpoint);
            const data = await response.json();
            updatedCounts[i] = data.problemsSolved || 0;
          }
          // For platforms without API, keep default values
          // You can manually update these in codingProfiles.js
        } catch (error) {
          console.error(`Error fetching ${profile.platform} data:`, error);
          // Keep default value on error
        }
      }

      setActualCounts(updatedCounts);
      setLoading(false);
    };

    fetchProfileData();
  }, []);

  useEffect(() => {
    if (!loading) {
      // Animate counters after data is loaded
      actualCounts.forEach((target, index) => {
        let count = 0;
        const increment = Math.ceil(target / 50);

        const interval = setInterval(() => {
          count += increment;
          if (count >= target) {
            count = target;
            clearInterval(interval);
          }
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = count;
            return newCounts;
          });
        }, 30);
      });
    }
  }, [loading, actualCounts]);

  return (
    <div className="coding-profiles-container">
      <h1 className="page-title">Competitive Coding Profiles</h1>
      <p className="profiles-subtitle">
        {loading ? 'Loading stats...' : `Total Problems Solved: ${actualCounts.reduce((a, b) => a + b, 0)}+`}
      </p>

      <div className="profiles-list">
        {profiles.map((profile, index) => (
          <a
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-card"
            key={profile.platform}
          >
            <img
              src={profile.logo}
              alt={profile.platform}
              className="platform-logo"
            />
            <h2>{profile.platform}</h2>
            <p className="username">@{profile.username}</p>
            <div className="questions-solved">
              {loading ? (
                <div className="loading-spinner">Loading...</div>
              ) : (
                <>
                  Questions Solved: <strong>{counts[index]}</strong>
                </>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default CompetitiveCoding;
