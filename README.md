# Simple Voting App Practice

## Project Overview
This project is a simple proof of concept (POC) to create a basic voting system. The idea is to simulate an electronic voting machine, where users can input their vote by selecting numbers, and those votes will be recorded and displayed. This project will use **Bootstrap** for the front-end design, **Node.js with Express** for the back-end API, and **JSON** to store the voting data.

The goal is to create a straightforward voting environment that covers both the front-end user interaction and back-end data handling, keeping everything simple and functional for learning and practice purposes.

## Project Goals
Focus on the following objectives, which will guide us step by step towards the completion of this POC:

### Features Checklist:
- [ x ] **Set up project structure** (folders for front-end and back-end)
- [ x ] **Create a simple front-end interface using HTML and Bootstrap**:
  - Number pad for entering the vote
  - Buttons for "Correct" and "Confirm"
  - A display for showing vote status (e.g., invalid, confirmed)
- [ x ] **Implement the front-end logic using JavaScript**:
  - Capture number input
  - Enable correction of input before confirmation
  - Send vote to back-end when "Confirm" is pressed
- [ x ] **Set up a basic Node.js server with Express**:
  - Handle vote submission through a RESTful API
  - Store votes in a JSON file for simplicity
- [ x ] **Integrate front-end and back-end**:
  - Connect the front-end to the back-end API for submitting and storing votes
  - Display vote counts in real time or after submission
- [ ] **Optional: Implement basic error handling and feedback**:
  - Show feedback for invalid votes or errors in the voting process
- [ ] **Test and finalize the voting system**

## Technologies Used

### Frontend:
- **HTML5**: For structuring the interface of the voting machine.
- **CSS3**: To style the layout, buttons, and tables.
- **Bootstrap**: To quickly implement a responsive and clean design without writing custom CSS.
- **JavaScript**: To handle the vote input logic, error handling, and interactivity.

### Backend:
- **Node.js**: To create the server and handle requests.
- **Express.js**: A web framework to build the API that will handle vote submissions.

### Data:
- **JSON (local file)**: To store votes in a simple and manageable format for this POC.
