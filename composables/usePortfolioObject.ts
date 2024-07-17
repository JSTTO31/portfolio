


export type PortfolioType = {
    id: string,
    title: string,
    paragraph: string,
    location: string,
    icons: string[],
    available: string[],
    source_frontend: string,
    source_backend: string,
    live_demo: string,
    images_count: number,
    active_image: number,
}


export default () => {
    const portfolios : PortfolioType[] = [
        {
            id: 'arellano-connect',
            title: 'Arellano Connect: Building Alumni Connections with Communication and Job Opportunities',
            paragraph: 'Arellano Connect is a platform that strengthens the Arellano University alumni community. It facilitates seamless communication, networking, and offers job opportunities, enhancing graduates\' career prospects. Awarded first runner-up at the Arellano Colloquium, Arellano Connect is dedicated to fostering a supportive alumni network.',
            location: '/portfolios/arellano-connect',
            images_count: 11,
            active_image: 9,
            icons: ['mdi-vuejs', 'mdi-nuxt', 'mdi-vuetify', 'mdi-laravel'],
            available: ['lx', 'lg'],
            source_frontend: '',
            source_backend: '',
            live_demo: 'https://alumni-frontend-production.up.railway.app'
        },
        {
            id: 'efficiently',
            title: 'Efficiently: Your Ultimate Tool for Relaxation, Task Management, Scheduling, Pomodoro, and Text Editing',
            paragraph: 'Efficiently is your all-in-one productivity app designed to enhance your workflow and well-being. With features like relaxing backgrounds, comprehensive task management, efficient schedule management, a Pomodoro timer, and a versatile text editor, Efficiently helps you stay organized and focused throughout your day.',
            location: '/portfolios/efficiently',
            images_count: 10,
            active_image: 1,
            icons: ['mdi-vuejs', 'mdi-nuxt', 'mdi-vuetify', 'mdi-nodejs'],
            available: ['lx', 'lg'],
            source_frontend: 'https://github.com/JSTTO31/productivity',
            source_backend: 'https://github.com/JSTTO31/productivity-api',
            live_demo: 'https://productivity-pink.vercel.app'
        },
        {
            id: 'swift',
            title: 'Swift: Real-Time Chat and Calls for Easy, Instant, and Seamless Communication',
            paragraph: 'Swift is a cutting-edge communication app that offers real-time chat and calls for easy, instant, and seamless connectivity. Stay connected with friends, family, and colleagues through high-quality video and voice calls, instant messaging, and a user-friendly interface designed for effortless communication. Enhance your communication experience with Swift\'s reliable and fast connection, ensuring you never miss an important conversation.',
            location: '/portfolios/swift',
            images_count: 3,
            active_image: 2,
            icons: ['mdi-vuejs', 'mdi-nuxt', 'mdi-vuetify', 'mdi-nodejs'],
            available: ['lx', 'lg'],
            source_frontend: 'https://github.com/JSTTO31/chat-system',
            source_backend: 'https://github.com/JSTTO31/chat-system-backend',
            live_demo: 'https://swift-sigma-seven.vercel.app'
        },
        
        {
            id: 'douglas-engelbart',
            title: 'Douglas Engelbart: The Visionary Inventor – A Comprehensive Biography App',
            paragraph: 'Douglas Engelbart: The Visionary Inventor – A Comprehensive Biography App offers an in-depth look into the life and achievements of Douglas Engelbart, the pioneering inventor behind the computer mouse and hypertext. Discover his groundbreaking contributions to computing technology through detailed articles, interactive timelines, and rare archival footage. This app provides a rich educational resource for students, historians, and tech enthusiasts, making it an essential tool for understanding the legacy of one of the greatest innovators in the history of computing',
            location: '/portfolios/douglas',
            images_count: 4,
            active_image: 1,
            icons: ['mdi-vuejs', 'mdi-vuetify'],
            available: ['lx', 'lg'],
            source_frontend: 'https://github.com/JSTTO31/DouglassEgelbartBiography',
            source_backend: '',
            live_demo: 'https://douglas-engelbart-biography.onrender.com'
        },
            {
            id: 'inventive-attendance',
            title: 'Inventive OJT Attendance System: Simplifying Attendance Tracking and Management for Internships',
            paragraph: 'The Inventive OJT Attendance System is a robust solution developed during my internship to streamline and automate attendance tracking for on-the-job training programs. This system ensures accurate timekeeping, simplifies attendance management, and enhances overall efficiency. With features like real-time updates, user-friendly interfaces, and comprehensive reporting, the Inventive OJT Attendance System is designed to meet the needs of both trainees and administrators.',
            location: '/portfolios/attendance',
            images_count: 7,
            active_image: 7,
            icons: ['mdi-vuejs', 'mdi-vuetify', 'mdi-laravel'],
            available: ['lx', 'lg'],
            source_frontend: 'https://github.com/JSTTO31/AttendanceSystemInventive',
            source_backend: 'https://github.com/JSTTO31/InventiveAttendanceBackend',
            live_demo: 'private',
        },
        {
            id: 'questify',
            title: 'Questify: Interactive Mock Exam and Icebreaker App for Dynamic Learning Experiences',
            paragraph: 'Questify is an innovative app developed during my internship at Inventive Media, designed to facilitate engaging mock exams and icebreaker activities. This user-friendly platform allows administrators to effortlessly create and manage questions, while users can easily participate and respond. Questify enhances learning experiences with interactive features, making it an essential tool for educators and trainers seeking dynamic and effective assessment solutions.',
            location: '/portfolios/questify',
            images_count: 11,
            active_image: 8,
            icons: ['mdi-vuejs', 'mdi-vuetify', 'mdi-laravel'],
            available: ['lx', 'lg'],
            source_frontend: 'https://github.com/JSTTO31/questify-frontend',
            source_backend: 'https://github.com/JSTTO31/questify-backend',
            live_demo: 'private',
        },
    ]


    return portfolios
}