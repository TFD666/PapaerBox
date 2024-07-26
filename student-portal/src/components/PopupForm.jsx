import React from 'react';
import '../assets/css/PopupForm.css';
import '../App.js';

function PopupForm({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
<<<<<<< HEAD
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Upload Form</h2>
        <form>
          <label>
            Subject:
            <input type="text" name="subject" placeholder="Enter subject" required />
=======
    <div id="popupForm" className="popup-formm">
      <div className="form-container">
        <span className="close" onClick={closeForm}>&times;</span>
        <h2>Upload Paper</h2>
        <form action="#" method="POST" enctype="multipart/form-data">
          <label htmlFor="semester"><b>Semester</b></label>
          <select id="semester" name="semester" required>
            <option value="sem1" >Semester 1</option>
            <option value="sem2" >Semester 2</option>
            <option value="sem3" >Semester 3</option>
          </select>
          <label htmlFor="subject"><b>Subject</b></label>
          <input type="text" id="subject" name="subject" placeholder="Type to search..." required />
          <label htmlFor="paperType"><b>Paper Type</b></label>
          <select id="paperType" name="paperType" required>
            <option style={{ backgroundColor: '#141414' }} value="midterm">Midterm</option>
            <option style={{ backgroundColor: '#141414' }} value="final">Final</option>
            <option value="assignment">Assignment</option>
          </select>
          <label htmlFor="file" className="custum-file-upload">
            <div className="icon">
              <svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill=""></path>
                </g>
              </svg>
            </div>
            <div className="text">
              <span>Click to upload image</span>
            </div>
            <input id="file" type="file" />
>>>>>>> 548ed15 (commit)
          </label>

          <label>
            Semester:
            <select name="semester" required>
              <option value="sem1">Semester 1</option>
              <option value="sem2">Semester 2</option>
              <option value="sem3">Semester 3</option>
              <option value="sem1">Semester 4</option>
              <option value="sem2">Semester 5</option>
              <option value="sem3">Semester 6</option>
              <option value="sem1">Semester 7</option>
              <option value="sem2">Semester 8</option>
            </select>
          </label>

          <label>
            Type of Notes:
            <select name="notesType" required>
              <option value="study-material">Study Material</option>
              <option value="papers">Papers</option>
            </select>
          </label>
 <label>
            Description:
            <textarea name="description" placeholder="Enter description" required></textarea>
          </label>

          <form class="file-upload-form">
  <label for="file" class="file-upload-label">
    <div class="file-upload-design">
      <svg viewBox="0 0 640 512" height="1em">
        <path
          d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
        ></path>
      </svg>
      <p>Drag and Drop</p>
      <p>or</p>
      <span class="browse-button">Browse file</span>
    </div>
    <input id="file" type="file" />
  </label>
</form>

          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
}

export default PopupForm;
