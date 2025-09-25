// Multi-Level Quiz Application
// All logic runs in browser, no backend required

const app = document.getElementById('app');

// Question pool: nested JSON by type, sub-category, and subject
const questionPool = {
    School: {
        '6th': {
            'Mathematics': [
                {
                    question: 'What is 15 × 12?',
                    options: ['180', '170', '190', '160'],
                    answer: '180'
                },
                {
                    question: 'What is the LCM of 6 and 8?',
                    options: ['24', '48', '12', '16'],
                    answer: '24'
                }
            ],
            'Science': [
                {
                    question: 'Which planet is known as the Red Planet?',
                    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
                    answer: 'Mars'
                },
                {
                    question: 'What do plants need to make their own food?',
                    options: ['Sunlight, water, carbon dioxide', 'Only water', 'Only sunlight', 'Only carbon dioxide'],
                    answer: 'Sunlight, water, carbon dioxide'
                }
            ]
        },
        '7th': {
            'Mathematics': [
                {
                    question: 'What is the square root of 144?',
                    options: ['12', '14', '10', '16'],
                    answer: '12'
                },
                {
                    question: 'What is 2/3 + 1/4?',
                    options: ['11/12', '3/7', '5/6', '7/8'],
                    answer: '11/12'
                }
            ],
            'Science': [
                {
                    question: 'What is the chemical formula for water?',
                    options: ['H2O', 'CO2', 'O2', 'H2SO4'],
                    answer: 'H2O'
                },
                {
                    question: 'Which organ pumps blood in the human body?',
                    options: ['Heart', 'Liver', 'Kidney', 'Brain'],
                    answer: 'Heart'
                }
            ],
            'English': [
                {
                    question: 'What is the plural of "child"?',
                    options: ['childs', 'children', 'childes', 'child'],
                    answer: 'children'
                }
            ],
            'Social Studies': [
                {
                    question: 'Who wrote the national anthem of India?',
                    options: ['Rabindranath Tagore', 'Bankim Chandra', 'Sarojini Naidu', 'Jawaharlal Nehru'],
                    answer: 'Rabindranath Tagore'
                }
            ]
        },
        '9th': {
            'Mathematics': [
                {
                    question: 'What is the value of x in 2x + 5 = 15?',
                    options: ['5', '10', '3', '7'],
                    answer: '5'
                }
            ],
            'Physics': [
                {
                    question: 'What is the unit of force?',
                    options: ['Newton', 'Joule', 'Watt', 'Pascal'],
                    answer: 'Newton'
                }
            ]
        },
        '10th': {
            'Mathematics': [
                {
                    question: 'What is the formula for the area of a circle?',
                    options: ['πr²', '2πr', 'πd', 'r²'],
                    answer: 'πr²'
                }
            ],
            'Physics': [
                {
                    question: 'What is the speed of light?',
                    options: ['3×10⁸ m/s', '3×10⁶ m/s', '3×10¹⁰ m/s', '3×10⁴ m/s'],
                    answer: '3×10⁸ m/s'
                }
            ]
        },
        '7th': [
            {
                question: 'Who wrote the national anthem of India?',
                options: ['Rabindranath Tagore', 'Bankim Chandra', 'Sarojini Naidu', 'Jawaharlal Nehru'],
                answer: 'Rabindranath Tagore'
            },
            {
                question: 'What is H2O commonly known as?',
                options: ['Salt', 'Water', 'Oxygen', 'Hydrogen'],
                answer: 'Water'
            }
        ],
        '8th': {
            'Mathematics': [
                {
                    question: 'What is the value of π (pi) approximately?',
                    options: ['3.14', '2.71', '1.41', '4.16'],
                    answer: '3.14'
                },
                {
                    question: 'If a = 5 and b = 3, what is a² + b²?',
                    options: ['34', '25', '9', '64'],
                    answer: '34'
                }
            ],
            'Science': [
                {
                    question: 'Which is the largest continent?',
                    options: ['Africa', 'Asia', 'Europe', 'Australia'],
                    answer: 'Asia'
                },
                {
                    question: 'What is the boiling point of water?',
                    options: ['50°C', '100°C', '150°C', '200°C'],
                    answer: '100°C'
                }
            ],
            'English': [
                {
                    question: 'What is the past tense of "go"?',
                    options: ['went', 'gone', 'goes', 'going'],
                    answer: 'went'
                }
            ],
            'Social Studies': [
                {
                    question: 'What is the capital of India?',
                    options: ['Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
                    answer: 'Delhi'
                }
            ]
        }
    },
    College: {
        'CSE': {
            'Data Structures & Algorithms': [
                {
                    question: 'What is the time complexity of binary search?',
                    options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
                    answer: 'O(log n)'
                },
                {
                    question: 'Which data structure uses LIFO principle?',
                    options: ['Queue', 'Stack', 'Array', 'Linked List'],
                    answer: 'Stack'
                }
            ],
            'Python Programming': [
                {
                    question: 'What does CPU stand for?',
                    options: ['Central Processing Unit', 'Computer Personal Unit', 'Central Power Unit', 'Control Processing Unit'],
                    answer: 'Central Processing Unit'
                },
                {
                    question: 'Which keyword is used to define a function in Python?',
                    options: ['function', 'def', 'define', 'func'],
                    answer: 'def'
                }
            ]
        },
        ECE: [
            {
                question: 'What is Ohm’s Law?',
                options: ['V=IR', 'P=VI', 'E=mc^2', 'F=ma'],
                answer: 'V=IR'
            },
            {
                question: 'Which device amplifies signals?',
                options: ['Resistor', 'Transistor', 'Capacitor', 'Inductor'],
                answer: 'Transistor'
            }
        ],
        BBA: [
            {
                question: 'What is SWOT analysis?',
                options: ['Strengths, Weaknesses, Opportunities, Threats', 'Sales, Work, Output, Targets', 'System, Web, Office, Team', 'None'],
                answer: 'Strengths, Weaknesses, Opportunities, Threats'
            },
            {
                question: 'Who is known as the father of management?',
                options: ['Peter Drucker', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
                answer: 'Peter Drucker'
            }
        ]
    },
    Job: {
        Developer: [
            {
                question: 'Which is not a JavaScript framework?',
                options: ['React', 'Angular', 'Django', 'Vue'],
                answer: 'Django'
            },
            {
                question: 'What does API stand for?',
                options: ['Application Programming Interface', 'Apple Programming Interface', 'Advanced Program Integration', 'None'],
                answer: 'Application Programming Interface'
            }
        ],
        'Manager': {
            'Project Management': [
                {
                    question: 'What is KPI?',
                    options: ['Key Performance Indicator', 'Knowledge Process Integration', 'Known Project Issue', 'None'],
                    answer: 'Key Performance Indicator'
                },
                {
                    question: 'What does SCRUM stand for in project management?',
                    options: ['Software Construction and Release Using Methods', 'It is not an acronym', 'System Control and Resource Management', 'Software Component Reuse Management'],
                    answer: 'It is not an acronym'
                }
            ],
            'Team Leadership': [
                {
                    question: 'Which skill is most important for managers?',
                    options: ['Communication', 'Coding', 'Design', 'Testing'],
                    answer: 'Communication'
                }
            ]
        },
        'HR': {
            'Recruitment & Selection': [
                {
                    question: 'What does HR stand for?',
                    options: ['Human Resource', 'High Risk', 'Hourly Rate', 'None'],
                    answer: 'Human Resource'
                },
                {
                    question: 'Which is a recruitment process?',
                    options: ['Interview', 'Invoice', 'Inventory', 'Investment'],
                    answer: 'Interview'
                }
            ]
        }
    }
};

// Sub-categories for each type
const subCategories = {
    School: ['6th', '7th', '8th', '9th', '10th', '11th', '12th'],
    College: ['CSE', 'ECE', 'BBA', 'MBA', 'Mechanical', 'Civil'],
    Job: ['Developer', 'Manager', 'HR', 'Marketing', 'Finance', 'Operations']
};

// Academic subjects for each sub-category
const academicSubjects = {
    School: {
        '6th': ['Mathematics', 'Science', 'English', 'Social Studies', 'Hindi', 'Computer Basics'],
        '7th': ['Mathematics', 'Science', 'English', 'Social Studies', 'Hindi', 'Computer Science'],
        '8th': ['Mathematics', 'Science', 'English', 'Social Studies', 'Hindi', 'Computer Science'],
        '9th': ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Social Studies', 'Computer Science'],
        '10th': ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Social Studies', 'Computer Science'],
        '11th': ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Economics', 'Computer Science'],
        '12th': ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Economics', 'Computer Science']
    },
    College: {
        'CSE': ['Data Structures & Algorithms', 'Python Programming', 'Java Programming', 'Database Management', 'Computer Networks', 'Operating Systems', 'Software Engineering', 'Machine Learning'],
        'ECE': ['Digital Electronics', 'Analog Electronics', 'Signal Processing', 'Communication Systems', 'Microprocessors', 'Control Systems', 'VLSI Design', 'Embedded Systems'],
        'BBA': ['Business Management', 'Marketing', 'Finance', 'Human Resources', 'Operations Management', 'Business Economics', 'Accounting', 'Business Law'],
        'MBA': ['Strategic Management', 'Financial Management', 'Marketing Management', 'Operations Research', 'Business Analytics', 'Leadership', 'Project Management', 'Entrepreneurship'],
        'Mechanical': ['Thermodynamics', 'Fluid Mechanics', 'Machine Design', 'Manufacturing Processes', 'Heat Transfer', 'Mechanics of Materials', 'CAD/CAM', 'Automotive Engineering'],
        'Civil': ['Structural Engineering', 'Geotechnical Engineering', 'Transportation Engineering', 'Water Resources', 'Construction Management', 'Environmental Engineering', 'Surveying', 'Concrete Technology']
    },
    Job: {
        'Developer': ['Frontend Development', 'Backend Development', 'Full Stack Development', 'Mobile App Development', 'DevOps', 'Cloud Computing', 'API Development', 'Database Design'],
        'Manager': ['Project Management', 'Team Leadership', 'Strategic Planning', 'Risk Management', 'Quality Management', 'Change Management', 'Performance Management', 'Communication Skills'],
        'HR': ['Recruitment & Selection', 'Performance Management', 'Employee Relations', 'Compensation & Benefits', 'Training & Development', 'HR Analytics', 'Labor Law', 'Organizational Behavior'],
        'Marketing': ['Digital Marketing', 'Content Marketing', 'Social Media Marketing', 'SEO/SEM', 'Brand Management', 'Market Research', 'Sales Strategy', 'Customer Analytics'],
        'Finance': ['Financial Analysis', 'Investment Banking', 'Risk Management', 'Corporate Finance', 'Financial Planning', 'Taxation', 'Auditing', 'Portfolio Management'],
        'Operations': ['Supply Chain Management', 'Quality Control', 'Process Optimization', 'Logistics', 'Inventory Management', 'Lean Manufacturing', 'Six Sigma', 'Production Planning']
    }
};

// Available topics for API-based quizzes
const apiTopics = {
    College: [
        { id: 9, name: 'General Knowledge' },
        { id: 17, name: 'Science & Nature' },
        { id: 18, name: 'Computers' },
        { id: 19, name: 'Mathematics' },
        { id: 22, name: 'Geography' },
        { id: 23, name: 'History' },
        { id: 27, name: 'Animals' }
    ],
    Job: [
        { id: 9, name: 'General Knowledge' },
        { id: 18, name: 'Computers' },
        { id: 19, name: 'Mathematics' },
        { id: 25, name: 'Art' },
        { id: 26, name: 'Celebrities' },
        { id: 28, name: 'Vehicles' },
        { id: 29, name: 'Comics' }
    ]
};

// Question count options
const questionCounts = [5, 10, 15, 20];

// State
let userType = null;
let subCategory = null;
let selectedSubject = null;
let selectedTopic = null;
let questionCount = 10;
let userName = '';
let questions = [];
let currentQuestion = 0;
let score = 0;
let answers = [];
let timer = null;
let timeLeft = 15;
let quizStartTime = null;
let quizEndTime = null;

// Utility: Save score in localStorage
function saveScore() {
    if (!userType || !subCategory) return;
    const key = `quiz_score_${userType}_${subCategory}`;
    localStorage.setItem(key, score);
}

// Utility: Fetch questions from Open Trivia DB (enhanced for College/Job)
async function fetchTriviaQuestions(amount = 10, categoryId = null) {
    try {
        let url = `https://opentdb.com/api.php?amount=${amount}&type=multiple`;
        if (categoryId) {
            url += `&category=${categoryId}`;
        }
        
        const res = await fetch(url);
        const data = await res.json();
        
        if (data.results && data.results.length > 0) {
            return data.results.map(q => ({
                question: decodeHTMLEntities(q.question),
                options: shuffle([q.correct_answer, ...q.incorrect_answers].map(opt => decodeHTMLEntities(opt))),
                answer: decodeHTMLEntities(q.correct_answer),
                category: q.category,
                difficulty: q.difficulty
            }));
        }
    } catch (error) {
        console.error('Failed to fetch trivia questions:', error);
    }
    
    // Fallback to local questions if API fails
    return getLocalQuestions();
}

// Get local questions with specified count
function getLocalQuestions() {
    console.log('Getting local questions for:', { userType, subCategory, selectedSubject });
    let localQuestions = [];
    
    try {
        // Try to get subject-specific questions first
        if (selectedSubject && questionPool[userType] && questionPool[userType][subCategory] && questionPool[userType][subCategory][selectedSubject]) {
            localQuestions = questionPool[userType][subCategory][selectedSubject];
            console.log('Found subject-specific questions:', localQuestions.length);
        } 
        // Fallback to general category questions
        else if (questionPool[userType] && questionPool[userType][subCategory]) {
            const categoryData = questionPool[userType][subCategory];
            
            // If it's an object with subjects, get all questions from all subjects
            if (typeof categoryData === 'object' && !Array.isArray(categoryData)) {
                localQuestions = [];
                Object.values(categoryData).forEach(subjectQuestions => {
                    if (Array.isArray(subjectQuestions)) {
                        localQuestions.push(...subjectQuestions);
                    }
                });
                console.log('Found mixed subject questions:', localQuestions.length);
            } 
            // If it's already an array (old structure)
            else if (Array.isArray(categoryData)) {
                localQuestions = categoryData;
                console.log('Found array questions:', localQuestions.length);
            }
        }
        
        // Final fallback - create some default questions
        if (localQuestions.length === 0) {
            console.log('No questions found, using default questions');
            localQuestions = [
                {
                    question: `Sample question for ${userType} - ${subCategory}${selectedSubject ? ` - ${selectedSubject}` : ''}`,
                    options: ['Option A', 'Option B', 'Option C', 'Option D'],
                    answer: 'Option A'
                },
                {
                    question: 'What is 2 + 2?',
                    options: ['3', '4', '5', '6'],
                    answer: '4'
                },
                {
                    question: 'Which is the largest planet in our solar system?',
                    options: ['Earth', 'Jupiter', 'Saturn', 'Mars'],
                    answer: 'Jupiter'
                }
            ];
        }
        
        // Repeat questions if we need more than available
        const repeatedQuestions = [];
        for (let i = 0; i < questionCount; i++) {
            repeatedQuestions.push({...localQuestions[i % localQuestions.length]});
        }
        
        console.log('Final questions count:', repeatedQuestions.length);
        return shuffle(repeatedQuestions);
        
    } catch (error) {
        console.error('Error getting local questions:', error);
        // Return some default questions as fallback
        return [
            {
                question: 'Default question - What is 1 + 1?',
                options: ['1', '2', '3', '4'],
                answer: '2'
            }
        ];
    }
}

// Utility: Decode HTML entities from API responses
function decodeHTMLEntities(text) {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
}

// Shuffle array
function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

// Render landing page
function renderLanding() {
    app.innerHTML = `
        <div class="header">
            <h1>Quizard</h1>
            <div class="subtitle">1,000+ quizzes to challenge you and your friends on all topics!</div>
        </div>
        <div class="select-group">
            <label for="userType">Select your category:</label>
            <select id="userType">
                <option value="">-- Choose your path --</option>
                <option value="School">🎓 School Student</option>
                <option value="College">🎯 College Student</option>
                <option value="Job">💼 Professional</option>
            </select>
        </div>
        <div id="subCategoryGroup" class="select-group" style="display:none;"></div>
        <div id="subjectGroup" class="select-group" style="display:none;"></div>
        <div id="topicGroup" class="select-group" style="display:none;"></div>
        <div id="questionCountGroup" class="select-group" style="display:none;"></div>
        <div id="nameGroup" class="select-group" style="display:none;">
            <label for="userName">Enter your name:</label>
            <input type="text" id="userName" placeholder="Your full name" maxlength="50">
        </div>
        <button id="startBtn" class="start-btn" style="display:none;">🚀 Start Playing</button>
    `;
    document.getElementById('userType').addEventListener('change', handleTypeChange);
    document.getElementById('startBtn').addEventListener('click', startQuiz);
}

// Handle type selection
function handleTypeChange(e) {
    userType = e.target.value;
    subCategory = null;
    selectedSubject = null;
    selectedTopic = null;
    console.log('User type changed to:', userType);
    
    const subGroup = document.getElementById('subCategoryGroup');
    const subjectGroup = document.getElementById('subjectGroup');
    const topicGroup = document.getElementById('topicGroup');
    const countGroup = document.getElementById('questionCountGroup');
    const nameGroup = document.getElementById('nameGroup');
    const startBtn = document.getElementById('startBtn');
    
    if (!userType) {
        subGroup.style.display = 'none';
        subjectGroup.style.display = 'none';
        topicGroup.style.display = 'none';
        countGroup.style.display = 'none';
        nameGroup.style.display = 'none';
        startBtn.style.display = 'none';
        return;
    }
    
    // Show sub-category dropdown
    const subOptions = subCategories[userType].map(sub => `<option value="${sub}">${sub}</option>`).join('');
    subGroup.innerHTML = `
        <label for="subCategory">Select ${userType === 'School' ? 'Class' : userType === 'College' ? 'Course' : 'Work Profile'}:</label>
        <select id="subCategory">
            <option value="">-- Select --</option>
            ${subOptions}
        </select>
    `;
    subGroup.style.display = 'block';
    document.getElementById('subCategory').addEventListener('change', handleSubCategoryChange);
    
    // Reset other sections
    subjectGroup.style.display = 'none';
    topicGroup.style.display = 'none';
    countGroup.style.display = 'none';
    nameGroup.style.display = 'none';
    startBtn.style.display = 'none';
}

function handleSubCategoryChange(e) {
    subCategory = e.target.value;
    selectedSubject = null;
    selectedTopic = null;
    console.log('Sub-category changed to:', subCategory);
    
    const subjectGroup = document.getElementById('subjectGroup');
    const topicGroup = document.getElementById('topicGroup');
    const countGroup = document.getElementById('questionCountGroup');
    const nameGroup = document.getElementById('nameGroup');
    const startBtn = document.getElementById('startBtn');
    
    if (!subCategory) {
        subjectGroup.style.display = 'none';
        topicGroup.style.display = 'none';
        countGroup.style.display = 'none';
        nameGroup.style.display = 'none';
        startBtn.style.display = 'none';
        return;
    }
    
    // Show subject selection based on user type and sub-category
    const subjects = academicSubjects[userType][subCategory];
    if (subjects && subjects.length > 0) {
        const subjectOptions = subjects.map(subject => `<option value="${subject}">${subject}</option>`).join('');
        subjectGroup.innerHTML = `
            <label for="subjectSelect">Select Subject:</label>
            <select id="subjectSelect">
                <option value="">-- Choose Subject --</option>
                ${subjectOptions}
            </select>
            <button type="button" id="continueBtn" style="display:none; margin-top: 10px; padding: 8px 16px; background: #667eea; color: white; border: none; border-radius: 6px; cursor: pointer;">Continue</button>
        `;
        subjectGroup.style.display = 'block';
        
        const subjectSelect = document.getElementById('subjectSelect');
        const continueBtn = document.getElementById('continueBtn');
        
        subjectSelect.addEventListener('change', (e) => {
            selectedSubject = e.target.value;
            console.log('Subject selected:', selectedSubject);
            if (selectedSubject) {
                continueBtn.style.display = 'block';
            } else {
                continueBtn.style.display = 'none';
            }
        });
        
        continueBtn.addEventListener('click', () => {
            if (selectedSubject) {
                console.log('Continue button clicked, proceeding...');
                showTopicSelection();
            }
        });
        
        console.log('Subject dropdown created with', subjects.length, 'options');
    } else {
        // If no subjects defined, proceed to topic selection
        selectedSubject = null;
        showTopicSelection();
    }
    
    // Reset other sections
    topicGroup.style.display = 'none';
    countGroup.style.display = 'none';
    nameGroup.style.display = 'none';
    startBtn.style.display = 'none';
}

function handleSubjectChange(e) {
    selectedSubject = e.target.value;
    console.log('Subject selected:', selectedSubject);
    
    if (selectedSubject) {
        console.log('Proceeding to show topic selection...');
        showTopicSelection();
    } else {
        // Reset subsequent sections
        const topicGroup = document.getElementById('topicGroup');
        const countGroup = document.getElementById('questionCountGroup');
        const nameGroup = document.getElementById('nameGroup');
        const startBtn = document.getElementById('startBtn');
        
        topicGroup.style.display = 'none';
        countGroup.style.display = 'none';
        nameGroup.style.display = 'none';
        startBtn.style.display = 'none';
        console.log('Reset subsequent sections');
    }
}

function showTopicSelection() {
    const topicGroup = document.getElementById('topicGroup');
    
    // Show topic selection for College/Job users, or skip for School users
    if (userType === 'College' || userType === 'Job') {
        const topics = apiTopics[userType];
        if (topics && topics.length > 0) {
            const topicOptions = topics.map(topic => `<option value="${topic.id}">${topic.name}</option>`).join('');
            topicGroup.innerHTML = `
                <label for="topicSelect">Select API Topic (Optional):</label>
                <select id="topicSelect">
                    <option value="">Use ${selectedSubject || 'Subject'} Questions</option>
                    ${topicOptions}
                </select>
            `;
            topicGroup.style.display = 'block';
            document.getElementById('topicSelect').addEventListener('change', handleTopicChange);
            
            // Immediately show question count selection since topic is optional
            selectedTopic = null; // Default to local questions
            showQuestionCountSelection();
        } else {
            // No API topics available, skip to question count
            selectedTopic = null;
            showQuestionCountSelection();
        }
    } else {
        // For School users, skip topic selection and go to question count
        selectedTopic = null;
        showQuestionCountSelection();
    }
}

function handleTopicChange(e) {
    selectedTopic = e.target.value || null;
    showQuestionCountSelection();
}

function showQuestionCountSelection() {
    console.log('Showing question count selection...');
    const countGroup = document.getElementById('questionCountGroup');
    const nameGroup = document.getElementById('nameGroup');
    
    if (!countGroup || !nameGroup) {
        console.error('Question count group or name group not found!');
        return;
    }
    
    // Show question count selection
    const countOptions = questionCounts.map(count => `<option value="${count}">${count} Questions</option>`).join('');
    countGroup.innerHTML = `
        <label for="questionCountSelect">Number of Questions:</label>
        <select id="questionCountSelect">
            ${countOptions}
        </select>
    `;
    countGroup.style.display = 'block';
    console.log('Question count group displayed');
    
    // Set default question count
    questionCount = questionCounts[1]; // Default to 10
    const questionCountSelect = document.getElementById('questionCountSelect');
    if (questionCountSelect) {
        questionCountSelect.value = questionCount;
        questionCountSelect.addEventListener('change', (e) => {
            questionCount = parseInt(e.target.value);
            console.log('Question count changed to:', questionCount);
            updateStartButton();
        });
    }
    
    // Show name input
    nameGroup.style.display = 'block';
    console.log('Name group displayed');
    
    const userNameInput = document.getElementById('userName');
    if (userNameInput) {
        // Remove any existing event listeners by cloning the node
        const newUserNameInput = userNameInput.cloneNode(true);
        userNameInput.parentNode.replaceChild(newUserNameInput, userNameInput);
        newUserNameInput.addEventListener('input', updateStartButton);
    }
    
    updateStartButton();
}

function updateStartButton() {
    console.log('Updating start button...');
    const startBtn = document.getElementById('startBtn');
    const nameInput = document.getElementById('userName');
    const currentName = nameInput ? nameInput.value.trim() : '';
    
    console.log('Current name:', currentName);
    
    if (!startBtn) {
        console.error('Start button not found!');
        return;
    }
    
    let topicText;
    if (selectedTopic) {
        topicText = apiTopics[userType]?.find(t => t.id == selectedTopic)?.name || 'API Topic';
    } else if (selectedSubject) {
        topicText = selectedSubject;
    } else {
        topicText = userType === 'School' ? `${subCategory} Level` : 'Mixed Topics';
    }
    
    // Show quiz setup summary only if name is provided
    const existingSummary = document.querySelector('.setup-summary');
    if (existingSummary) {
        existingSummary.remove();
    }
    
    if (currentName.length >= 2) {
        const summary = document.createElement('div');
        summary.className = 'setup-summary';
        summary.innerHTML = `
            <strong>Quiz Setup for ${currentName}:</strong><br>
            📚 ${userType} - ${subCategory}${selectedSubject ? ` - ${selectedSubject}` : ''}<br>
            🎯 ${topicText}<br>
            📝 ${questionCount} Questions
        `;
        
        startBtn.parentNode.insertBefore(summary, startBtn);
        startBtn.style.display = 'block';
        startBtn.textContent = `🚀 Start Quiz`;
        console.log('Start button shown');
    } else {
        startBtn.style.display = 'none';
        console.log('Start button hidden - name too short');
    }
}

// Start quiz
async function startQuiz() {
    // Get user name
    userName = document.getElementById('userName').value.trim();
    if (!userName || userName.length < 2) {
        alert('Please enter your name to start the quiz!');
        return;
    }
    
    console.log('Starting quiz with:', { userType, subCategory, selectedSubject, selectedTopic, questionCount });
    
    currentQuestion = 0;
    score = 0;
    answers = [];
    quizStartTime = new Date();
    
    // Show loading message for API calls
    if ((userType === 'College' || userType === 'Job') && selectedTopic) {
        app.innerHTML = `
            <div class="header"><h2>Loading Questions...</h2></div>
            <div class="loading-container">
                <div class="loading-spinner"></div>
                <p>Fetching fresh questions from Open Trivia DB...</p>
            </div>
        `;
        
        // Fetch from API for College/Job users with selected topic and count
        questions = await fetchTriviaQuestions(questionCount, selectedTopic);
    } else {
        // Use local questions for all users (School always, College/Job when no API topic selected)
        questions = getLocalQuestions();
    }
    
    // Ensure we have questions before starting
    if (!questions || questions.length === 0) {
        app.innerHTML = `
            <div class="header"><h2>Error</h2></div>
            <div style="text-align: center; padding: 20px;">
                <p>Unable to load questions. Please try again.</p>
                <button onclick="location.reload()">Retry</button>
            </div>
        `;
        return;
    }
    
    renderQuiz();
}

// Render quiz question
function renderQuiz() {
    if (currentQuestion >= questions.length) {
        saveScore();
        renderResult();
        return;
    }
    const q = questions[currentQuestion];
    const progress = ((currentQuestion) / questions.length) * 100;
    const categoryInfo = q.category ? `<div class="category-info">📚 ${q.category} ${q.difficulty ? `• ${q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1)}` : ''}</div>` : '';
    
    app.innerHTML = `
        <div class="header"><h3>Question ${currentQuestion + 1} of ${questions.length}</h3></div>
        <div class="progress-bar">
            <div class="progress-fill" style="width: ${progress}%"></div>
        </div>
        <div class="quiz-stats">
            <div class="stat-item">
                <span class="stat-number">${currentQuestion + 1}</span>
                <span class="stat-label">Question</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">${score}</span>
                <span class="stat-label">Score</span>
            </div>
            <div class="stat-item">
                <span class="stat-number" id="timer">${timeLeft}</span>
                <span class="stat-label">Seconds</span>
            </div>
        </div>
        ${categoryInfo}
        <div class="quiz-question">${q.question}</div>
        <div class="options">
            ${q.options.map(opt => `<button class="option-btn" data-opt="${opt}">${opt}</button>`).join('')}
        </div>
    `;
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', handleAnswer);
    });
    startTimer();
}

// Timer logic
function startTimer() {
    timeLeft = 20; // Increased timer for API questions which might be more complex
    document.getElementById('timer').textContent = timeLeft;
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        const timerElement = document.getElementById('timer');
        if (timerElement) {
            timerElement.textContent = timeLeft;
            // Change color when time is running out
            if (timeLeft <= 5) {
                timerElement.style.color = '#dc2626';
            } else if (timeLeft <= 10) {
                timerElement.style.color = '#f59e0b';
            }
        }
        if (timeLeft <= 0) {
            clearInterval(timer);
            showAnswer(null);
        }
    }, 1000);
}

// Handle answer selection
function handleAnswer(e) {
    clearInterval(timer);
    const selected = e.target.getAttribute('data-opt');
    showAnswer(selected);
}

// Show correct/incorrect and move to next
function showAnswer(selected) {
    const q = questions[currentQuestion];
    let correct = false;
    document.querySelectorAll('.option-btn').forEach(btn => {
        const opt = btn.getAttribute('data-opt');
        if (opt === q.answer) {
            btn.classList.add('correct');
        }
        if (selected && opt === selected) {
            btn.classList.add(opt === q.answer ? 'correct' : 'incorrect');
            if (opt === q.answer) correct = true;
        }
        btn.disabled = true;
    });
    answers.push({
        question: q.question,
        selected,
        correct: q.answer,
        isCorrect: selected === q.answer
    });
    if (selected === q.answer) score++;
    setTimeout(() => {
        currentQuestion++;
        renderQuiz();
    }, 1200);
}

// Generate PDF/Text report
function generateReport() {
    quizEndTime = new Date();
    const duration = Math.round((quizEndTime - quizStartTime) / 1000 / 60); // minutes
    const percentage = Math.round((score / questions.length) * 100);
    
    let topicText;
    if (selectedTopic) {
        topicText = apiTopics[userType]?.find(t => t.id == selectedTopic)?.name || 'API Topic';
    } else if (selectedSubject) {
        topicText = selectedSubject;
    } else {
        topicText = userType === 'School' ? `${subCategory} Level` : 'Mixed Topics';
    }
    
    let report = `
QUIZ RESULT REPORT
==================

Participant: ${userName}
Date: ${quizEndTime.toLocaleDateString()}
Time: ${quizEndTime.toLocaleTimeString()}

QUIZ DETAILS:
-------------
Category: ${userType} - ${subCategory}${selectedSubject ? ` - ${selectedSubject}` : ''}
Topic: ${topicText}
Total Questions: ${questions.length}
Duration: ${duration} minutes

PERFORMANCE:
------------
Correct Answers: ${score}
Incorrect Answers: ${questions.length - score}
Score: ${score}/${questions.length} (${percentage}%)
Grade: ${percentage >= 90 ? 'A+' : percentage >= 80 ? 'A' : percentage >= 70 ? 'B' : percentage >= 60 ? 'C' : percentage >= 50 ? 'D' : 'F'}

DETAILED RESULTS:
----------------
`;

    answers.forEach((answer, index) => {
        report += `
Question ${index + 1}: ${answer.question}
Your Answer: ${answer.selected || 'No answer provided'}
Correct Answer: ${answer.correct}
Result: ${answer.isCorrect ? '✓ Correct' : '✗ Incorrect'}
`;
    });

    report += `
\nGenerated by Quizard - Multi-Level Online Quiz Application
Report generated on ${new Date().toLocaleString()}
`;

    return report;
}

function downloadReport() {
    const report = generateReport();
    const blob = new Blob([report], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Quiz_Result_${userName.replace(/\s+/g, '_')}_${new Date().getTime()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Render result page
function renderResult() {
    quizEndTime = new Date();
    const percentage = Math.round((score / questions.length) * 100);
    let message = '';
    let emoji = '';
    
    if (percentage >= 90) {
        message = 'Outstanding! You are a quiz master!';
        emoji = '🌟';
    } else if (percentage >= 70) {
        message = 'Great job! Well done!';
        emoji = '🎉';
    } else if (percentage >= 50) {
        message = 'Good effort! Keep practicing!';
        emoji = '👍';
    } else {
        message = 'Do not give up! Try again!';
        emoji = '💡';
    }
    
    const duration = Math.round((quizEndTime - quizStartTime) / 1000 / 60);
    let topicText;
    if (selectedTopic) {
        topicText = apiTopics[userType]?.find(t => t.id == selectedTopic)?.name || 'API Topic';
    } else if (selectedSubject) {
        topicText = selectedSubject;
    } else {
        topicText = userType === 'School' ? `${subCategory} Level` : 'Mixed Topics';
    }
    
    app.innerHTML = `
        <div class="result-container">
            <div class="header">
                <h2>${emoji} Quiz Complete!</h2>
            </div>
            <div class="result-score">${score}/${questions.length}</div>
            <div class="result-message">${message}</div>
            
            <div class="result-summary">
                <h3>Hello ${userName}! 👋</h3>
                <div style="font-size: 1.1rem; margin-bottom: 15px; color: #64748b;">
                    You scored ${percentage}% in ${userType} - ${subCategory}${selectedSubject ? ` - ${selectedSubject}` : ''}<br>
                    <small>📚 ${topicText} • ${questionCount} questions • ${duration} minutes</small>
                </div>
                <div style="background: #f1f5f9; padding: 15px; border-radius: 10px; margin: 15px 0;">
                    <strong>Performance Grade: ${percentage >= 90 ? 'A+ 🏆' : percentage >= 80 ? 'A 🥇' : percentage >= 70 ? 'B 🥈' : percentage >= 60 ? 'C 🥉' : percentage >= 50 ? 'D 📚' : 'F 📖'}</strong>
                </div>
            </div>
            
            <div class="action-buttons" style="margin: 25px 0;">
                <button class="download-btn" onclick="downloadReport()" style="background: linear-gradient(135deg, #10b981, #059669); color: white; border: none; padding: 12px 20px; border-radius: 10px; margin: 5px; cursor: pointer; font-weight: 600;">
                    📥 Download Result
                </button>
                <button class="retry-btn" onclick="location.reload()" style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; padding: 12px 20px; border-radius: 10px; margin: 5px; cursor: pointer; font-weight: 600;">
                    🔄 Take Another Quiz
                </button>
            </div>
            
            <details style="margin: 20px 0; text-align: left;">
                <summary style="cursor: pointer; font-weight: 600; padding: 10px; background: #f1f5f9; border-radius: 8px; margin-bottom: 15px;">
                    📋 View Detailed Results
                </summary>
                <ul class="result-list">
                    ${answers.map((a, i) => `
                        <li class="${a.isCorrect ? 'correct' : 'incorrect'}">
                            <strong>Q${i+1}:</strong> ${a.question}<br>
                            <strong>Your answer:</strong> ${a.selected ? a.selected : '<em>No answer</em>'}<br>
                            <strong>Correct answer:</strong> ${a.correct}
                        </li>
                    `).join('')}
                </ul>
            </details>
        </div>
    `;
}

// Initial render
renderLanding();
