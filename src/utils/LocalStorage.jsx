
const employees = [
    {
        "id": 1,
        "firstName": "Aarav",
        "email": "e@e.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Complete Report",
                "taskDescription": "Prepare the monthly sales report.",
                "taskDate": "2025-01-27",
                "category": "Sales",
                "active": true,
                "newTask": false,
                "failed": false
            },
            {
                "taskTitle": "Team Meeting",
                "taskDescription": "Discuss project updates with the team.",
                "taskDate": "2025-01-28",
                "category": "Meetings",
                "active": false,
                "newTask": true,
                "failed": false
            },
            {
                "taskTitle": "Fix Bug #1234",
                "taskDescription": "Resolve the login issue on the dashboard.",
                "taskDate": "2025-01-29",
                "category": "Development",
                "active": true,
                "newTask": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstName": "Ishaan",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Update Documentation",
                "taskDescription": "Revise and update project documentation.",
                "taskDate": "2025-01-30",
                "category": "Documentation",
                "active": true,
                "newTask": true,
                "failed": false
            },
            {
                "taskTitle": "Test New Feature",
                "taskDescription": "Run tests on the new payment gateway integration.",
                "taskDate": "2025-01-28",
                "category": "Testing",
                "active": false,
                "newTask": false,
                "failed": true
            },
            {
                "taskTitle": "Design Mockups",
                "taskDescription": "Create UI mockups for the client dashboard.",
                "taskDate": "2025-01-31",
                "category": "Design",
                "active": true,
                "newTask": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "failed": 1
        }
    },
    {
        "id": 3,
        "firstName": "Vivaan",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Code Review",
                "taskDescription": "Review pull requests from the team.",
                "taskDate": "2025-01-29",
                "category": "Development",
                "active": false,
                "newTask": false,
                "failed": false
            },
            {
                "taskTitle": "Create Presentation",
                "taskDescription": "Prepare a presentation for the client meeting.",
                "taskDate": "2025-01-30",
                "category": "Client Work",
                "active": true,
                "newTask": true,
                "failed": false
            },
            {
                "taskTitle": "Organize Files",
                "taskDescription": "Sort and organize project files.",
                "taskDate": "2025-01-27",
                "category": "Administration",
                "active": false,
                "newTask": false,
                "failed": true
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "failed": 1
        }
    },
    {
        "id": 4,
        "firstName": "Advait",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Optimize Database",
                "taskDescription": "Improve the performance of the database queries.",
                "taskDate": "2025-01-29",
                "category": "Database",
                "active": true,
                "newTask": false,
                "failed": false
            },
            {
                "taskTitle": "Research Trends",
                "taskDescription": "Study the latest industry trends for innovation.",
                "taskDate": "2025-01-28",
                "category": "Research",
                "active": true,
                "newTask": true,
                "failed": false
            },
            {
                "taskTitle": "Client Feedback",
                "taskDescription": "Follow up on client feedback and suggestions.",
                "taskDate": "2025-01-30",
                "category": "Client Work",
                "active": false,
                "newTask": false,
                "failed": true
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "failed": 1
        }
    },
    {
        "id": 5,
        "firstName": "Dhruv",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Prepare Budget",
                "taskDescription": "Create a budget plan for the next quarter.",
                "taskDate": "2025-01-30",
                "category": "Finance",
                "active": true,
                "newTask": true,
                "failed": false
            },
            {
                "taskTitle": "Develop API",
                "taskDescription": "Build an API for user authentication.",
                "taskDate": "2025-01-31",
                "category": "Development",
                "active": false,
                "newTask": false,
                "failed": true
            },
            {
                "taskTitle": "Deploy Application",
                "taskDescription": "Deploy the latest version of the web app.",
                "taskDate": "2025-01-27",
                "category": "Deployment",
                "active": true,
                "newTask": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "failed": 1
        }
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
]

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
}
