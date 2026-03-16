// GitHub Pages compatible data management
// This replaces the Node.js server for static deployment

class GitHubPagesDataManager {
    constructor() {
        this.data = {
            users: [],
            jobs: [],
            applications: [],
            savedJobs: []
        };
        this.loadData();
    }

    // Load data from localStorage (GitHub Pages compatible)
    loadData() {
        try {
            // Try to load from localStorage first
            const savedUsers = localStorage.getItem('jobconnect_users');
            const savedJobs = localStorage.getItem('jobconnect_jobs');
            const savedApplications = localStorage.getItem('jobconnect_applications');
            const savedSavedJobs = localStorage.getItem('jobconnect_savedJobs');

            // Load initial data if not exists
            if (!savedUsers) {
                this.initializeUsers();
            } else {
                this.data.users = JSON.parse(savedUsers);
            }

            if (!savedJobs) {
                this.initializeJobs();
            } else {
                this.data.jobs = JSON.parse(savedJobs);
            }

            if (savedApplications) {
                this.data.applications = JSON.parse(savedApplications);
            }

            if (savedSavedJobs) {
                this.data.savedJobs = JSON.parse(savedSavedJobs);
            }

            console.log('GitHub Pages Data Manager: Data loaded successfully');
        } catch (error) {
            console.error('Error loading data:', error);
            this.initializeData();
        }
    }

    // Initialize with default admin user
    initializeUsers() {
        this.data.users = [
            {
                id: 'admin001',
                name: 'Admin',
                email: 'admin@jobconnect.com',
                password: '37595937',
                phone: '555-0000',
                userType: 'admin',
                createdAt: new Date().toISOString(),
                lastLogin: new Date().toISOString()
            }
        ];
        this.saveUsers();
    }

    // Initialize with sample jobs
    initializeJobs() {
        this.data.jobs = [
            {
                id: 'job001',
                title: 'Senior Software Engineer',
                description: 'We are looking for an experienced software engineer to join our team. You will be responsible for developing and maintaining web applications using modern technologies.',
                requirements: '5+ years of experience in web development, proficiency in JavaScript, React, Node.js, and database management. Strong problem-solving skills and ability to work in a team environment.',
                type: 'Full-time',
                salary: 6000,
                city: 'Hargeisa',
                contact: 'tech@company.com',
                company: 'Tech Solutions Ltd',
                category: 'Technology',
                experience: '6-10 years',
                remote: 'false',
                employerId: 'admin001',
                postedDate: new Date().toISOString(),
                deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                vacancies: 2,
                status: 'active',
                views: 0,
                applicationCount: 0
            },
            {
                id: 'job002',
                title: 'Marketing Manager',
                description: 'We are seeking a creative marketing manager to develop and execute marketing strategies. You will lead our marketing team and manage campaigns across various channels.',
                requirements: '3+ years of marketing experience, strong communication skills, knowledge of digital marketing tools, and ability to analyze market trends.',
                type: 'Full-time',
                salary: 4500,
                city: 'Borama',
                contact: 'marketing@company.com',
                company: 'Growth Agency',
                category: 'Marketing',
                experience: '3-5 years',
                remote: 'true',
                employerId: 'admin001',
                postedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
                deadline: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                vacancies: 1,
                status: 'active',
                views: 0,
                applicationCount: 0
            },
            {
                id: 'job003',
                title: 'Graphic Designer',
                description: 'Creative graphic designer needed for various design projects including branding, web design, and marketing materials.',
                requirements: 'Proficiency in Adobe Creative Suite, strong portfolio, 2+ years of experience, and creative thinking skills.',
                type: 'Part-time',
                salary: 3000,
                city: 'Berbera',
                contact: 'design@studio.com',
                company: 'Creative Studio',
                category: 'Design',
                experience: '0-2 years',
                remote: 'true',
                employerId: 'admin001',
                postedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
                deadline: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                vacancies: 1,
                status: 'active',
                views: 0,
                applicationCount: 0
            },
            {
                id: 'job004',
                title: 'Data Analyst',
                description: 'We need a detail-oriented data analyst to collect, process, and perform statistical analyses on large datasets.',
                requirements: 'Strong analytical skills, proficiency in SQL and Excel, experience with data visualization tools, and attention to detail.',
                type: 'Full-time',
                salary: 5500,
                city: 'Burco',
                contact: 'data@company.com',
                company: 'Data Insights Inc',
                category: 'Technology',
                experience: '3-5 years',
                remote: 'hybrid',
                employerId: 'admin001',
                postedDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
                deadline: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                vacancies: 3,
                status: 'active',
                views: 0,
                applicationCount: 0
            },
            {
                id: 'job005',
                title: 'Customer Service Representative',
                description: 'Friendly customer service representative to handle customer inquiries, resolve issues, and provide excellent service.',
                requirements: 'Excellent communication skills, patience, problem-solving ability, and experience in customer service.',
                type: 'Full-time',
                salary: 2500,
                city: 'Gabilay',
                contact: 'service@company.com',
                company: 'Service Hub',
                category: 'Customer Service',
                experience: 'Entry Level',
                remote: 'true',
                employerId: 'admin001',
                postedDate: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
                deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                vacancies: 10,
                status: 'active',
                views: 0,
                applicationCount: 0
            }
        ];
        this.saveJobs();
    }

    // Initialize all data
    initializeData() {
        this.initializeUsers();
        this.initializeJobs();
        this.data.applications = [];
        this.data.savedJobs = [];
    }

    // Save data to localStorage
    saveUsers() {
        localStorage.setItem('jobconnect_users', JSON.stringify(this.data.users));
    }

    saveJobs() {
        localStorage.setItem('jobconnect_jobs', JSON.stringify(this.data.jobs));
    }

    saveApplications() {
        localStorage.setItem('jobconnect_applications', JSON.stringify(this.data.applications));
    }

    saveSavedJobs() {
        localStorage.setItem('jobconnect_savedJobs', JSON.stringify(this.data.savedJobs));
    }

    // Get data methods
    getUsers() {
        return this.data.users;
    }

    getJobs() {
        return this.data.jobs;
    }

    getApplications() {
        return this.data.applications;
    }

    getSavedJobs() {
        return this.data.savedJobs;
    }

    // Add data methods
    addUser(user) {
        this.data.users.push(user);
        this.saveUsers();
    }

    addJob(job) {
        this.data.jobs.push(job);
        this.saveJobs();
    }

    addApplication(application) {
        this.data.applications.push(application);
        this.saveApplications();
    }

    addSavedJob(savedJob) {
        this.data.savedJobs.push(savedJob);
        this.saveSavedJobs();
    }

    // Update data methods
    updateUser(userId, updatedUser) {
        const index = this.data.users.findIndex(u => u.id === userId);
        if (index !== -1) {
            this.data.users[index] = updatedUser;
            this.saveUsers();
        }
    }

    updateJob(jobId, updatedJob) {
        const index = this.data.jobs.findIndex(j => j.id === jobId);
        if (index !== -1) {
            this.data.jobs[index] = updatedJob;
            this.saveJobs();
        }
    }

    // Delete data methods
    deleteUser(userId) {
        this.data.users = this.data.users.filter(u => u.id !== userId);
        this.saveUsers();
    }

    deleteJob(jobId) {
        this.data.jobs = this.data.jobs.filter(j => j.id !== jobId);
        this.saveJobs();
    }
}

// Initialize the data manager
window.githubDataManager = new GitHubPagesDataManager();
