import project1_img from '../assets/project_1.png'
import project2_img from '../assets/project_2.png'
import project3_img from '../assets/project_3.png'
import project4_img from '../assets/project_4.png'
import project5_img from '../assets/project_5.png'

const mywork_data = [
    {
        w_no:1,
        w_name:"CareerBridge-Job Portal",
        w_img:project1_img,
        w_desc:"CareerBridge is a full-stack job portal that connects job seekers with recruiters. It features authentication with JWT, job postings, recruiter profiles, skill endorsements, and portfolio uploads",
        github:"https://github.com/Lovish-Singlaa/CareerBridge-Job-Portal-Frontend.git",
        url:"https://careerbridge-job-portal-frontend.onrender.com/",
        tech_stack:["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS", "HTML", "CSS"]
    },
    {
        w_no:2,
        w_name:"Face Recognition Attendance System",
        w_img:project2_img,
        w_desc:"A team project automating attendance with facial recognition using OpenCV and dlib. I built the MERN stack web app for managing and displaying employee attendance records.",
        url:"https://face-recognition-kshe.onrender.com/",
        github:"https://github.com/Lovish-Singlaa/Face-Recognition.git",
        tech_stack: ['React', 'Node.js', 'OpenCV', 'dlib', 'MongoDB']
    },
    {
        w_no:3,
        w_name:"AI Mock Interviewer",
        w_img:project5_img,
        w_desc:"A web application that allows users to practice mock interviews with AI-generated questions. It provides a platform for users to prepare for job interviews by practicing with AI-generated questions and receiving feedback on their performance.",
        url:"https://ai-mock-interviewer-xi.vercel.app/",
        github:"https://github.com/Lovish-Singlaa/AI-Mock-Interviewer.git",
        tech_stack: ['Next.js', 'Gemini API', 'MongoDB', 'Speech-to-Text', 'Tailwind CSS']
    },
    {
        w_no:4,
        w_name:"Farely-Taxi Booking",
        w_img:project3_img,
        w_desc:"A taxi booking application that enables users to select pickup and drop-off locations while displaying the route on an integrated map. It calculates fare based on distance and provides address suggestions using the Mapbox API.",
        url:"https://farely-taxi-booking.vercel.app/",
        github:"https://github.com/Lovish-Singlaa/Farely-taxi-booking.git",
        tech_stack: ['React', 'Mapbox API', 'JavaScript', 'CSS']
    },
    {
        w_no:5,
        w_name:"Firebase-Contact App",
        w_img:project4_img,
        w_desc:"A web application for storing and managing contacts using React and Firebase. It allows users to add, edit, and delete contacts while syncing data in real-time. Firebase authentication ensures secure access and seamless data storage.",
        url:"https://firebase-contact-xi.vercel.app/",
        github:"https://github.com/Lovish-Singlaa/Firebase-Contact.git",
        tech_stack: ['React', 'Firebase', 'JavaScript', 'CSS']
    },
    // {
    //     w_no:6,
    //     w_name:"Web design",
    //     w_img:project6_img,
    //     w_desc:"this is project made by me to test my skills in web development. it is the full stack project utilising various technologies"
    // },
]
 
export default mywork_data;