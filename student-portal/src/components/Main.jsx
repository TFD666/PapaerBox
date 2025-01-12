import React, { useState } from 'react';
import '../assets/css/Main.css';
import { subjectLinks } from './data'; // Import subject links

const semesters = [
  "CHE110", "CSE111", "CSE326", "ECE249", "ECE279", "INT108", "MTH174", "PES318",
  "CSE101", "CSE121", "CSE320", "INT306", "MEC135", "PHY110", "MTH401", "PEL130",
  "CSE202", "CSE205", "CSE211", "CSE306", "CSE307", "PEL134", "MTH302", "CSE322",
  "CSE310", "CSE316", "CSE325", "CSE408", "INT330", "INT362", "INT426", "PEA305",
  "ERT432", "INT233", "INT234", "PEA306", "PEV113"
];


function Main({ searchQuery }) {
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleClick = (semester) => {
    setSelectedSemester(semester);
  };

  const closePopup = () => {
    setSelectedSemester(null);
    setOpenDropdown(null);
  };

  const handleFolderClick = (folder) => {
    setOpenDropdown(openDropdown === folder ? null : folder);
  };

  // Filter semesters based on the search query
  const filteredSemesters = semesters.filter((semester) =>
    semester.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <section className="semesters">
        {filteredSemesters.map((semester, index) => (
          <div className="semester" key={index} onClick={() => handleClick(semester)}>
            {semester}
          </div>
        ))}
      </section>
      {selectedSemester && (
        <div className="popupp">
          <div className="popupp-content">
            <span className="close" onClick={closePopup}>&times;</span>
            <h2>{selectedSemester}</h2>
            <div className="folders">
              <div className="folder" onClick={() => handleFolderClick('studyMaterials')}>
                <i className="fas fa-folder"></i>
                Study Materials
                <div className={`dropdown-menu ${openDropdown === 'studyMaterials' ? 'show' : ''}`}>
                  <div className="dropdown-item">Unit 1</div>
                  <div className="dropdown-item">Unit 2</div>
                  <div className="dropdown-item">Unit 3</div>
                  <div className="dropdown-item">Unit 4</div>
                  <div className="dropdown-item">Unit 5</div>
                  <div className="dropdown-item">Unit 6</div>
                </div>
              </div>
              <div className="folder" onClick={() => handleFolderClick('previousYearPapers')}>
                <i className="fas fa-folder-open"></i>
                Previous Year Papers
                <div className={`dropdown-menu ${openDropdown === 'previousYearPapers' ? 'show' : ''}`}>
                  <div className="dropdown-item">Mid Term</div>
                  <div className="dropdown-item">End Term</div>
                </div>
              </div>
              <div className="folder" onClick={() => handleFolderClick('syllabus')}>
                <i className="fas fa-folder"></i>
                Syllabus
                <div className="dropdown-menu">
                  <a href={subjectLinks[selectedSemester]} target="_blank" rel="noopener noreferrer" className="dropdown-item">
                    View Syllabus
                  </a>
                </div>
              </div>
              <div className="folder" onClick={() => handleFolderClick('assignments')}>
                <i className="fas fa-folder-open"></i>
                Sample Papers
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Main;
