# Quizard - Multi-Level Online Quiz Application

Quizard is a modern, browser-based quiz app designed for academic and professional learning. It supports multiple user types (School, College, Job), subject-specific quizzes, and dynamic question pools. The app is fully responsive, mobile-friendly, and includes features like result download and local score tracking.

## Features

- **Landing Page**: Select user type (School, College, Job)
- **Sub-Category Selection**: Choose class, course, or work profile
- **Subject Selection**: Academic subjects based on selected path (e.g., DSA for CSE, Mathematics for School)
- **API Topic Selection**: For College/Job, fetch questions from Open Trivia DB
- **Question Pool**: Nested JSON structure for local questions, fallback to API or default questions
- **Quiz Flow**:
  - One question at a time
  - Countdown timer
  - Immediate feedback (correct/incorrect)
  - Score tracking
- **Result Page**:
  - Final score and performance grade
  - Detailed answer breakdown
  - Downloadable result report (.txt)
- **Responsive Design**: Mobile-friendly, modern UI
- **Local Storage**: Scores saved per user type and sub-category

## How to Use

1. **Open `index.html` in your browser**
2. **Select your path** (School, College, Job)
3. **Choose sub-category and subject**
4. **(Optional) Select API topic for College/Job**
5. **Set number of questions and enter your name**
6. **Start the quiz and answer questions**
7. **View results and download your report**

## Project Structure

- `index.html` - Main HTML file
- `style.css` - Modern, responsive styles
- `script.js` - All quiz logic and data
- `README.md` - This documentation

## Customization

- Add more questions/subjects in `script.js` under `questionPool`
- Update styles in `style.css` for branding
- Extend API integration for more topics

## Troubleshooting

- If the quiz does not proceed, check the browser console for debug messages
- Ensure all dropdowns are selected and name is entered
- For development, use Chrome/Edge/Firefox for best compatibility

## License

MIT License

---
Created with ❤️ by Quizard Team