import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { IoLogoYoutube } from "react-icons/io";

const Checkbox = ({ id, value, checked, onChange }) => {
  return (
    <label className="flex items-center mb-2">
      <input
        type="checkbox"
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
        className="mr-2"
      />
      {value}
    </label>
  );
};

const PastContext = () => {
  const { darkMode } = useContext(ThemeContext);
  const [contests, setContests] = useState([]);
  const [filteredContests, setFilteredContests] = useState([]);
  const [expandedContestId, setExpandedContestId] = useState(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState(new Set());

  useEffect(() => {
    const fetchedContests = [
      { id: 1, name: "Leetcode Biweekly Contest 123", platform: "Leetcode", startTime: "2025-03-20T14:00:00", endTime: "2025-03-20T16:00:00", questions: ["Question 1", "Question 2", "Question 3"] },
      { id: 2, name: "CodeChef March Cook-Off", platform: "CodeChef", startTime: "2025-03-22T18:30:00", endTime: "2025-03-22T20:30:00", questions: ["Problem A", "Problem B", "Problem C"] },
      { id: 3, name: "Codeforces Round #900", platform: "Codeforces", startTime: "2025-03-25T15:00:00", endTime: "2025-03-25T17:00:00", questions: ["Task 1", "Task 2", "Task 3"] },
    ];
    setContests(fetchedContests);
    setFilteredContests(fetchedContests);
  }, []);

  useEffect(() => {
    if (selectedPlatforms.size === 0) {
      setFilteredContests(contests);
    } else {
      setFilteredContests(contests.filter((contest) => selectedPlatforms.has(contest.platform)));
    }
  }, [selectedPlatforms, contests]);

  const toggleExpand = (id) => {
    setExpandedContestId(expandedContestId === id ? null : id);
  };

  const handleFilterChange = (platform) => {
    setSelectedPlatforms((prev) => {
      const updatedSet = new Set(prev);
      if (updatedSet.has(platform)) {
        updatedSet.delete(platform);
      } else {
        updatedSet.add(platform);
      }
      return new Set(updatedSet); // Force state update
    });
  };

  return (
    <div className={`min-h-[93vh] ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} flex justify-center`}>
      <div className="w-full flex p-2">
        {/* Sidebar Filters */}
        <aside className="w-1/5 p-6 border-r border-gray-300 dark:border-gray-700">
          <p className="text-xl font-semibold mb-2">Filters</p>
          <Checkbox id="leetcode" value="Leetcode" checked={selectedPlatforms.has("Leetcode")} onChange={() => handleFilterChange("Leetcode")} />
          <Checkbox id="codechef" value="CodeChef" checked={selectedPlatforms.has("CodeChef")} onChange={() => handleFilterChange("CodeChef")} />
          <Checkbox id="codeforces" value="Codeforces" checked={selectedPlatforms.has("Codeforces")} onChange={() => handleFilterChange("Codeforces")} />
        </aside>

        {/* Main Content */}
        <main className="w-4/5 p-6">
          <h1 className="text-center text-2xl font-bold mb-4">Past Contests</h1>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 dark:border-gray-700">
              <thead className="bg-gray-200 dark:bg-gray-800">
                <tr className="text-left">
                  <th className="p-3 border-b">Contest Name</th>
                  <th className="p-3 border-b">Start Time</th>
                  <th className="p-3 border-b">End Time</th>
                  <th className="p-3 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredContests.map((contest) => (
                  <React.Fragment key={contest.id}>
                    <tr className="border-b hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer" onClick={() => toggleExpand(contest.id)}>
                      <td className="p-3">{contest.name}</td>
                      <td className="p-3">{new Date(contest.startTime).toLocaleString()}</td>
                      <td className="p-3">{new Date(contest.endTime).toLocaleString()}</td>
                      <td className="p-3">Ended</td>
                    </tr>
                    {expandedContestId === contest.id && (
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <td colSpan="4" className="p-4">
                          <p className="font-semibold mb-2">Questions:</p>
                          <ul>
                            {contest.questions.map((question, index) => (
                              <li key={index} className="ml-4 flex justify-between mx-6">
                                <span>{question}</span>
                                <span>
                                  <Link to="/sdsad">
                                    <IoLogoYoutube className="text-red-600 text-lg hover:text-red-800" />
                                  </Link>
                                </span>
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PastContext;
