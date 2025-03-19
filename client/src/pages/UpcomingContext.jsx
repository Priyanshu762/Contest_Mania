import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Checkbox = ({ id, value, checked, onChange }) => {
  return (
    <label className="flex items-center mb-2 cursor-pointer">
      <input
        type="checkbox"
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
        className="mr-2 cursor-pointer"
      />
      {value}
    </label>
  );
};

const UpcomingContext = () => {
  const { darkMode } = useContext(ThemeContext);
  const [contests, setContests] = useState([]);
  const [filteredContests, setFilteredContests] = useState([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState(new Set());
  const [selectedTimes, setSelectedTimes] = useState(new Set());
  const [sortOrder, setSortOrder] = useState("early"); // "early" or "late"

  const platforms = [
    { id: "leetcode", value: "Leetcode" },
    { id: "codechef", value: "CodeChef" },
    { id: "codeforces", value: "Codeforces" },
  ];

  const times = [
    { id: "1", value: "6:00 AM - 12:00 PM", range: [6, 12] },
    { id: "2", value: "12:00 PM - 6:00 PM", range: [12, 18] },
    { id: "3", value: "6:00 PM - 12:00 AM", range: [18, 24] },
  ];

  useEffect(() => {
    const fetchedContests = [
      {
        id: 1,
        name: "Leetcode Biweekly Contest 123",
        platform: "Leetcode",
        startTime: "2025-03-20T07:00:00",
        endTime: "2025-03-20T09:00:00",
      },
      {
        id: 2,
        name: "CodeChef March Cook-Off",
        platform: "CodeChef",
        startTime: "2025-03-22T13:30:00",
        endTime: "2025-03-22T15:30:00",
      },
      {
        id: 3,
        name: "Codeforces Round #900",
        platform: "Codeforces",
        startTime: "2025-03-25T19:00:00",
        endTime: "2025-03-25T21:00:00",
      },
    ];
    setContests(fetchedContests);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setFilteredContests((prev) => [...prev]);
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    let filtered = contests;

    // Apply platform filter
    if (selectedPlatforms.size > 0) {
      filtered = filtered.filter((contest) => selectedPlatforms.has(contest.platform));
    }

    // Apply time filter
    if (selectedTimes.size > 0) {
      filtered = filtered.filter((contest) => {
        const contestHour = new Date(contest.startTime).getHours();
        return [...selectedTimes].some((timeRange) => contestHour >= timeRange[0] && contestHour < timeRange[1]);
      });
    }

    // Sort by time (early or late)
    filtered = [...filtered].sort((a, b) => {
      return sortOrder === "early"
        ? new Date(a.startTime) - new Date(b.startTime)
        : new Date(b.startTime) - new Date(a.startTime);
    });

    setFilteredContests(filtered);
  }, [selectedPlatforms, selectedTimes, sortOrder, contests]);

  const handlePlatformChange = (platform) => {
    setSelectedPlatforms((prev) => {
      const updatedSet = new Set(prev);
      if (updatedSet.has(platform)) updatedSet.delete(platform);
      else updatedSet.add(platform);
      return new Set(updatedSet);
    });
  };

  const handleTimeChange = (range) => {
    setSelectedTimes((prev) => {
      const updatedSet = new Set(prev);
      if (updatedSet.has(range)) updatedSet.delete(range);
      else updatedSet.add(range);
      return new Set(updatedSet);
    });
  };

  const resetFilters = () => {
    setSelectedPlatforms(new Set());
    setSelectedTimes(new Set());
    setSortOrder("early");
  };

  return (
    <div className={`min-h-[93vh] ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} flex justify-center`}>
      <div className="w-full flex p-2">
        {/* Sidebar Filters */}
        <aside className="w-1/5 p-6 border-r border-gray-300 dark:border-gray-700">
          {/* Platform Filter */}
          <div className="mb-6">
            <p className="text-xl font-semibold mb-2">Platform</p>
            {platforms.map((item) => (
              <Checkbox key={item.id} id={item.id} value={item.value} checked={selectedPlatforms.has(item.value)} onChange={() => handlePlatformChange(item.value)} />
            ))}
          </div>

          {/* Time Filter */}
          <div className="mb-6">
            <p className="text-xl font-semibold mb-2">Time</p>
            {times.map((item) => (
              <Checkbox key={item.id} id={item.id} value={item.value} checked={[...selectedTimes].some((range) => range[0] === item.range[0])} onChange={() => handleTimeChange(item.range)} />
            ))}
          </div>

          {/* Extra Sorting Filters */}
          <div className="mb-6">
            <p className="text-xl font-semibold mb-2">Sort By</p>
            <Checkbox id="early" value="Early Start" checked={sortOrder === "early"} onChange={() => setSortOrder("early")} />
            <Checkbox id="late" value="Late Start" checked={sortOrder === "late"} onChange={() => setSortOrder("late")} />
          </div>

          {/* Reset Filters Button */}
          <button onClick={resetFilters} className="w-full p-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
            Reset Filters
          </button>
        </aside>

        {/* Main Content */}
        <main className="w-4/5 p-6">
          <h1 className="text-center text-2xl font-bold mb-4">Upcoming Contests</h1>

          {/* Contests Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 dark:border-gray-700">
              <thead className="bg-gray-200 dark:bg-gray-800">
                <tr className="text-left">
                  <th className="p-3 border-b">Contest Name</th>
                  <th className="p-3 border-b">Start Time</th>
                  <th className="p-3 border-b">End Time</th>
                  <th className="p-3 border-b">Remaining Time</th>
                </tr>
              </thead>
              <tbody>
  {filteredContests.map((contest) => {
    const contestStartTime = new Date(contest.startTime);
    const now = new Date();
    const timeDiff = contestStartTime - now;

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return (
      <tr key={contest.id} className="border-b hover:bg-gray-100 dark:hover:bg-gray-700 transition">
        <td className="p-3">{contest.name}</td>
        <td className="p-3">{contestStartTime.toLocaleString()}</td>
        <td className="p-3">{new Date(contest.endTime).toLocaleString()}</td>
        <td className="p-3 font-bold text-red-600">
          {timeDiff > 0 ? `${hours}h ${minutes}m ${seconds}s` : "Started"}
        </td>
      </tr>
    );
  })}
</tbody>

            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UpcomingContext;
