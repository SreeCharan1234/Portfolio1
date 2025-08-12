"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Trophy, Calendar, MapPin, Users, Award, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import sreeData from "@/data/sree.json";

// Helper function to get hackathon data from JSON
const getHackathonFromJSON = (id: string) => {
  const hackathonMappings: { [key: string]: string } = {
    "microsoft": "Microsoft Hackathon  OR  Code Cubicle",
    "devfest": "DevFest",
    "kriyeta": "Kriyeta 3.0",
    "arena": "Arena",
    "build-a-thon": "Build-a-thon",
    "code-a-haunt": "Code-a-haunt",
    "code-of-duty": "Code of Duty",
    "coding-blocks-lpu": "Coding Blocks LPU"
  };
  
  const eventName = hackathonMappings[id];
  if (!eventName) return null;
  
  return sreeData.hackathons.events.find(event => 
    event.event.toLowerCase().includes(eventName.toLowerCase())
  );
};

// Hackathon data with detailed descriptions
const hackathonsData = {
  "devfest": {
    id: "devfest",
    name: "DevFest Jalandhar",
    title: "Winner – DevFest Jalandhar",
    position: "1st Place",
    description: "Winner of DevFest Jalandhar organized by Google Developer Groups Jalandhar. Awarded monetary rewards and exclusive goodies including event T-shirts.",
    fullDescription: "🏆 Winner – DevFest Jalandhar\n\nOrganized by: Google Developer Groups Jalandhar\n\nTeam: Amit Gupta, Sree Charan✪, Badal Kumar, Rehan Mittal✪\n\nHighlights:\n• Awarded monetary rewards and exclusive goodies including event T-shirts\n• Judges: Gaurav Madaan, Prashant Kumar Parth, Vinay Bhandari\n• Used Google tools to develop innovative solutions\n• Learned from top speakers and mentors: Suraj Pandey, Simar Preet Singh, Amanpreet Kaur, and others\n• Special thanks to the On-Campus Core Team and Dr. Naveen Bilandi",
    images: [
      "/assets/images/hackathons/devfest/main.jpg",
      "/assets/images/hackathons/devfest/1.jpg",
      "/assets/images/hackathons/devfest/2.jpg",
      "/assets/images/hackathons/devfest/3.jpg",
      "/assets/images/hackathons/devfest/4.jpg",
      "/assets/images/hackathons/devfest/5.jpg"
    ],
    date: "November 2023",
    location: "Google Developer Community, Jalandhar",
    team: "Amit Gupta, Sree Charan✪, Badal Kumar, Rehan Mittal✪",
    technologies: ["React", "Node.js", "AI/ML", "IoT", "Google Cloud"],
    achievements: [
      "Winner - 1st Place",
      "Monetary rewards and exclusive goodies",
      "Event T-shirts and certificates",
      "Recognition from Google Developer Groups"
    ],
    prize: "Monetary rewards + Goodies",
    organizer: "Google Developer Groups Jalandhar",
    judges: ["Gaurav Madaan", "Prashant Kumar Parth", "Vinay Bhandari"],
    mentors: ["Suraj Pandey", "Simar Preet Singh", "Amanpreet Kaur"]
  },
  "web-a-thon": {
    id: "web-a-thon",
    name: "Web-a-Thon by OnDemand",
    title: "3rd Place – Web-a-Thon by OnDemand",
    position: "3rd Place",
    description: "Secured 3rd place in Web-a-Thon by OnDemand with a prize of ₹50,000. 24 hours of problem-solving focused on AI-driven agents for real-world healthcare challenges.",
    fullDescription: "💥 3rd Place – Web-a-Thon by OnDemand\n\nPrize: ₹50,000\n\nDuration: 24 hours of problem-solving\n\nProject: AI-driven agents for real-world healthcare challenges\n\nMentor: Mr. Navnit Anand\n\nProof of Innovation: Showcased how AI can revolutionize health tech\n\nTeam: Sree Charan✪, Rehan Mittal✪, Aman Kumar, Amit Gupta\n\nLinks:\n• YouTube: https://lnkd.in/gB9XatuJ\n• GitHub: https://lnkd.in/gzEabQ7V",
    images: [
      "/assets/images/hackathons/other/main.jpg",
      "/assets/images/hackathons/other/1.png",
      "/assets/images/hackathons/other/2.png",
      "/assets/images/hackathons/other/3.jpg"
    ],
    date: "2023",
    location: "OnDemand Platform",
    team: "Sree Charan✪, Rehan Mittal✪, Aman Kumar, Amit Gupta",
    technologies: ["React", "Node.js", "AI/ML", "Healthcare APIs", "Python"],
    achievements: [
      "3rd Place Winner",
      "₹50,000 Prize Money",
      "AI Innovation in Healthcare",
      "24-hour coding marathon completion"
    ],
    prize: "₹50,000",
    organizer: "OnDemand",
    mentor: "Mr. Navnit Anand",
    links: {
      youtube: "https://lnkd.in/gB9XatuJ",
      github: "https://lnkd.in/gzEabQ7V"
    }
  },
  "code-carvan": {
    id: "code-carvan",
    name: "Code Carvan 2.0",
    title: "Winner – Code Carvan 2.0 (CodingBlocks LPU)",
    position: "Winner",
    description: "Winner of Code Carvan 2.0 organized by CodingBlocks LPU with a prize of ₹10,000 + Goodies including Code Help shirts.",
    fullDescription: "🚗 Winner – Code Carvan 2.0 (CodingBlocks LPU)\n\nPrize: ₹10,000 + Goodies (Code Help shirts)\n\nTeam: Sree Charan, Ritik Kumar, Abhishek Roy, Shafe Ahsan\n\nSpecial Guests: Mr. Lakshay Kumar (Adobe), Love Babbar (CodeHelp)\n\nFocus: Innovation, collaboration, and coding excellence",
    images: [
      "/assets/images/hackathons/codingblockslpu/main.jpg",
      "/assets/images/hackathons/codingblockslpu/1.jpg",
      "/assets/images/hackathons/codingblockslpu/2.jpg",
      "/assets/images/hackathons/codingblockslpu/3.jpg"
    ],
    date: "January 2023",
    location: "Lovely Professional University",
    team: "Sree Charan, Ritik Kumar, Abhishek Roy, Shafe Ahsan",
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
    achievements: [
      "Winner - 1st Place",
      "₹10,000 Prize Money",
      "Code Help shirts and goodies",
      "Recognition from industry experts"
    ],
    prize: "₹10,000 + Goodies",
    organizer: "CodingBlocks LPU",
    specialGuests: ["Mr. Lakshay Kumar (Adobe)", "Love Babbar (CodeHelp)"]
  },
  "team-binary-five": {
    id: "team-binary-five",
    name: "Team Binary Five",
    title: "Winner – Team Binary Five (Smart Device Platform)",
    position: "Winner",
    description: "Winner of Team Binary Five challenge focused on Smart Device Platform with a prize of ₹10,000 + Trophy.",
    fullDescription: "🏆 Winner – Team Binary Five (Smart Device Platform)\n\nPrize: ₹10,000 + Trophy\n\nTeam: Abhishek Kumar, Hardik Arora, Sree Charan, Shubham Pandey, Sushil\n\nProject Highlights:\n• AI Bots for communication\n• AI Attendance using face recognition\n• Video conferencing\n• Productivity-enhancing smart platform\n\nThanks to: LPU and supporters",
    images: [
      "/assets/images/hackathons/other/main.jpg"
    ],
    date: "2023",
    location: "University Competition",
    team: "Abhishek Kumar, Hardik Arora, Sree Charan, Shubham Pandey, Sushil",
    technologies: ["AI/ML", "Face Recognition", "WebRTC", "IoT", "React"],
    achievements: [
      "Winner - 1st Place",
      "₹10,000 Prize Money",
      "Trophy and certificates",
      "Smart platform innovation"
    ],
    prize: "₹10,000 + Trophy",
    organizer: "LPU",
    projectHighlights: [
      "AI Bots for communication",
      "AI Attendance using face recognition", 
      "Video conferencing",
      "Productivity-enhancing smart platform"
    ]
  },
  "microsoft": {
    id: "microsoft",
    name: "Code Cubicle by Geek Room @ Microsoft",
    title: "3rd Runner-up – Code Cubicle by Geek Room @ Microsoft",
    position: "3rd Runner-up",
    description: "3rd Runner-up in Code Cubicle by Geek Room @ Microsoft. Built a web scraping + Streamlit app in 7 days with a prize of ₹5,000.",
    fullDescription: "🥉 3rd Runner-up – Code Cubicle by Geek Room @ Microsoft\n\nProject: Web scraping + Streamlit app (built in 7 days)\n\nTeam: Sree Charan, Shivani Satapathy, Abhishek Kumar, Sushil Kumar Verma\n\nPrize: ₹5,000\n\nMentors: Archit Kohli, Harshita Gupta\n\nJudges: Dr. Ankur Arora, Sonu Kumar, Dipali Kulshrestha, Sunchit Dudeja",
    images: [
      "/assets/images/hackathons/microsoft/main.jpg",
      "/assets/images/hackathons/microsoft/1.jpg",
      "/assets/images/hackathons/microsoft/2.jpg",
      "/assets/images/hackathons/microsoft/3.jpg",
      "/assets/images/hackathons/microsoft/4.jpg",
      "/assets/images/hackathons/microsoft/5.jpg",
      "/assets/images/hackathons/microsoft/6.jpg",
      "/assets/images/hackathons/microsoft/7.jpg"
    ],
    date: "October 2023",
    location: "Microsoft India",
    team: "Sree Charan, Shivani Satapathy, Abhishek Kumar, Sushil Kumar Verma",
    technologies: ["Python", "Streamlit", "Web Scraping", "Data Analysis"],
    achievements: [
      "3rd Runner-up",
      "₹5,000 Prize Money",
      "Microsoft Recognition",
      "7-day rapid development"
    ],
    prize: "₹5,000",
    organizer: "Geek Room @ Microsoft",
    mentors: ["Archit Kohli", "Harshita Gupta"],
    judges: ["Dr. Ankur Arora", "Sonu Kumar", "Dipali Kulshrestha", "Sunchit Dudeja"]
  },
  "adobe-gensolve": {
    id: "adobe-gensolve",
    name: "Adobe GenSolve Hackathon",
    title: "Top 5 Percentile – Adobe GenSolve Hackathon",
    position: "Top 5 Percentile",
    description: "Achieved Top 5 Percentile in Adobe GenSolve Hackathon organized by Adobe & GeeksforGeeks. Recognition for innovation, teamwork, and strong performance.",
    fullDescription: "🌟 Top 5 Percentile – Adobe GenSolve Hackathon\n\nOrganizer: Adobe & GeeksforGeeks\n\nSpecial Mention: Abdulla Khan (team member)\n\nRecognition: Innovation, teamwork, and strong performance",
    images: [
      "/assets/images/hackathons/other/main.jpg"
    ],
    date: "2023",
    location: "Adobe & GeeksforGeeks Platform",
    team: "Sree Charan, Abdulla Khan",
    technologies: ["Adobe Tools", "Creative Technologies", "Problem Solving"],
    achievements: [
      "Top 5 Percentile",
      "Innovation Excellence",
      "Teamwork Recognition",
      "Strong Performance Award"
    ],
    organizer: "Adobe & GeeksforGeeks"
  },
  "kriyeta": {
    id: "kriyeta",
    name: "Kriyeta 3.0",
    title: "Technical Innovation Winner",
    position: "Winners",
    description: "Winners of Kriyeta 3.0 for Technical Innovation. Created an innovative solution for sustainable agriculture using IoT and machine learning.",
    fullDescription: "🏆 Winners – Kriyeta 3.0\n\nCategory: Technical Innovation\n\nProject: Innovative solution for sustainable agriculture using IoT and machine learning\n\nTeam: 5 members\n\nAchievements:\n• Overall Winners\n• Best Technical Implementation\n• ₹30,000 Prize Money",
    images: [
      "/assets/images/hackathons/kriyeta3.0/main.jpg",
      "/assets/images/hackathons/kriyeta3.0/1.jpg",
      "/assets/images/hackathons/kriyeta3.0/2.jpg",
      "/assets/images/hackathons/kriyeta3.0/3.jpg",
      "/assets/images/hackathons/kriyeta3.0/4.jpg",
      "/assets/images/hackathons/kriyeta3.0/5.jpg",
      "/assets/images/hackathons/kriyeta3.0/6.jpg",
      "/assets/images/hackathons/kriyeta3.0/7.jpg",
      "/assets/images/hackathons/kriyeta3.0/8.jpg"
    ],
    date: "September 2023",
    location: "Technical Festival",
    team: "5 members",
    technologies: ["IoT", "Python", "React", "MongoDB", "Machine Learning"],
    achievements: [
      "Overall Winners",
      "Best Technical Implementation",
      "₹30,000 Prize Money",
      "Sustainable Agriculture Innovation"
    ],
    prize: "₹30,000"
  },
  "build-a-thon": {
    id: "build-a-thon",
    name: "Build-a-thon",
    title: "Rapid Prototyping Challenge",
    position: "3rd Place",
    description: "Secured 3rd place in Build-a-thon Rapid Prototyping Challenge. Built a rapid prototyping solution for e-commerce platforms in 24 hours.",
    fullDescription: "🏗️ 3rd Place – Build-a-thon\n\nCategory: Rapid Prototyping Challenge\n\nProject: Rapid prototyping solution for e-commerce platforms\n\nDuration: 24 hours\n\nTeam: 2 members\n\nAchievements:\n• 3rd Place\n• Best UI/UX Design\n• Mentorship Program",
    images: [
      "/assets/images/hackathons/build-a-thon/1717163413765.jpg",
      "/assets/images/hackathons/build-a-thon/2.jpg",
      "/assets/images/hackathons/build-a-thon/3.jpg",
      "/assets/images/hackathons/build-a-thon/4.jpg",
      "/assets/images/hackathons/build-a-thon/5.jpg"
    ],
    date: "August 2023",
    location: "Tech Community",
    team: "2 members",
    technologies: ["Next.js", "Node.js", "Stripe", "MongoDB"],
    achievements: [
      "3rd Place",
      "Best UI/UX Design",
      "Mentorship Program",
      "24-hour rapid development"
    ]
  },
  "code-of-duty": {
    id: "code-of-duty",
    name: "Code of Duty",
    title: "Competitive Programming Championship",
    position: "Winner",
    description: "Winner of Code of Duty Competitive Programming Championship with excellent problem-solving skills.",
    fullDescription: "⚔️ Winner – Code of Duty\n\nCategory: Competitive Programming Championship\n\nFocus: Excellent problem-solving skills and algorithmic thinking\n\nParticipation: Solo\n\nAchievements:\n• Championship Winner\n• Fastest Solution Award\n• ₹15,000 Prize Money",
    images: [
      "/assets/images/hackathons/code-of-duty/main.jpg",
      "/assets/images/hackathons/code-of-duty/1.jpg",
      "/assets/images/hackathons/code-of-duty/2.jpg",
      "/assets/images/hackathons/code-of-duty/3.jpg",
      "/assets/images/hackathons/code-of-duty/4.jpg",
      "/assets/images/hackathons/code-of-duty/5.jpg"
    ],
    date: "December 2023",
    location: "University Competition",
    team: "Solo",
    technologies: ["C++", "Algorithms", "Data Structures", "Dynamic Programming"],
    achievements: [
      "Championship Winner",
      "Fastest Solution Award",
      "₹15,000 Prize Money",
      "Excellence in Problem Solving"
    ],
    prize: "₹15,000"
  },
  "code-a-haunt": {
    id: "code-a-haunt",
    name: "Code-a-haunt",
    title: "Halloween Coding Challenge",
    position: "Finalist",
    description: "Finalist in Code-a-haunt Halloween Coding Challenge focusing on creative problem-solving.",
    fullDescription: "🎃 Finalist – Code-a-haunt\n\nCategory: Halloween Coding Challenge\n\nFocus: Creative problem-solving with themed challenges\n\nParticipation: Solo\n\nAchievements:\n• Top 10 Finalist\n• Creative Coding Award\n• Community Recognition",
    images: [
      "/assets/images/hackathons/code-a-haunt/main.jpg"
    ],
    date: "October 2022",
    location: "Online Event",
    team: "Solo",
    technologies: ["JavaScript", "HTML/CSS", "Animation"],
    achievements: [
      "Top 10 Finalist",
      "Creative Coding Award",
      "Community Recognition",
      "Halloween Theme Innovation"
    ]
  },
  "arena": {
    id: "arena",
    name: "Arena",
    title: "Competitive Programming",
    position: "Top Performer",
    description: "Top Performer in Arena competitive programming event. Competed in algorithmic challenges and data structure problems.",
    fullDescription: "🏟️ Top Performer – Arena\n\nCategory: Competitive Programming\n\nFocus: Algorithmic challenges and data structure problems\n\nParticipation: Solo\n\nAchievements:\n• Top 50 Performers\n• Problem Solving Excellence\n• Certificate of Merit",
    images: [
      "/assets/images/hackathons/arena/main.jpg",
      "/assets/images/hackathons/arena/1.jpg",
      "/assets/images/hackathons/arena/2.jpg",
      "/assets/images/hackathons/arena/3.jpg",
      "/assets/images/hackathons/arena/4.jpg",
      "/assets/images/hackathons/arena/5.jpg"
    ],
    date: "March 2023",
    location: "Programming Contest",
    team: "Solo",
    technologies: ["C++", "Algorithms", "Data Structures"],
    achievements: [
      "Top 50 Performers",
      "Problem Solving Excellence",
      "Certificate of Merit",
      "Algorithmic Thinking Award"
    ]
  }
};

export default function HackathonDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const hackathon = hackathonsData[resolvedParams.id as keyof typeof hackathonsData];
  const jsonHackathon = getHackathonFromJSON(resolvedParams.id);

  if (!hackathon) {
    notFound();
  }

  // Use JSON data if available, otherwise fallback to hardcoded data
  const teamMembers = jsonHackathon?.members || [];
  const eventPhotos = jsonHackathon?.event_photos || hackathon.images;
  
  // Create member photos and LinkedIn URLs mapping
  const memberProfilePhotos = teamMembers.map((member: string) => 
    `/assets/images/member-photos/${member.replace(/\s+/g, '')}.jpg`
  );
  
  const memberLinkedInUrls = teamMembers.map((member: string) => {
    // Map member names to LinkedIn URLs (you can expand this mapping)
    const linkedInMapping: { [key: string]: string } = {
      "K Sree Charan": "https://www.linkedin.com/in/sree9484/",
      "Shivani": "https://www.linkedin.com/in/satapathy-28-shivani/",
      "Sushil": "https://www.linkedin.com/in/sushil-verma-/",
      "Abhishek Kumar": "https://www.linkedin.com/in/abhishekkumar9870/",
      "Shubham": "https://www.linkedin.com/in/shubhampandey777/",
      "Amit Gupta": "https://www.linkedin.com/in/amit-gupta-1011a4253/",
      "Rehan": "https://www.linkedin.com/in/rehanmittal/",
      "Aman": "https://www.linkedin.com/in/aman-kumar-16j/",
      "Hardik": "https://www.linkedin.com/in/hardikarorah/",
      "Ritik": "https://www.linkedin.com/in/ritikkumar34/",
      "Shafe": "https://www.linkedin.com/in/shafe12/"
    };
    return linkedInMapping[member] || "#";
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/50 border-b border-border/50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/#hackathons"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Hackathons
            </Link>
            
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full font-semibold">
                {hackathon.position}
              </span>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{hackathon.name}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {hackathon.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Main Content - 60% */}
          <div className="lg:col-span-3 space-y-8">
            {/* About Event */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-4">About This Event</h2>
              <div className="bg-muted/50 rounded-lg p-6 border border-border/50">
                <pre className="text-muted-foreground leading-relaxed whitespace-pre-wrap font-sans">
                  {hackathon.fullDescription}
                </pre>
              </div>
            </motion.section>

            {/* Technologies Used */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {hackathon.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.05 * index }}
                    className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.section>

            {/* Achievements */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6">Achievements & Recognition</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hackathon.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg border border-border/50"
                  >
                    <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar - 30% Photos */}
          <div className="lg:col-span-2 space-y-6">
            {/* Event Photos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-background border border-border/50 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-lg font-bold mb-4">Event Gallery</h3>
              <div className="space-y-3">
                {eventPhotos.map((image: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="relative aspect-video rounded-lg overflow-hidden border border-border/50 shadow-sm"
                  >
                    <Image
                      src={image}
                      alt={`${hackathon.name} photo ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Event Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background border border-border/50 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                Event Info
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{hackathon.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{hackathon.location}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-4 w-4 text-muted-foreground mt-1" />
                  <div className="flex-1">
                    <div className="text-sm font-medium mb-2">Team Members</div>
                    {teamMembers.length > 0 ? (
                      <div className="grid grid-cols-2 gap-3">
                        {teamMembers.map((member: string, index: number) => (
                          <motion.a
                            key={index}
                            href={memberLinkedInUrls[index]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="relative">
                              <Image
                                src={memberProfilePhotos[index]}
                                alt={`${member} profile photo`}
                                width={32}
                                height={32}
                                className="w-8 h-8 rounded-full object-cover border border-border/50 group-hover:border-primary/50 transition-colors"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = '/assets/images/default-avatar.png';
                                }}
                              />
                              <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary absolute -top-1 -right-1 bg-background rounded-full p-0.5" />
                            </div>
                            <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                              {member}
                            </span>
                          </motion.a>
                        ))}
                      </div>
                    ) : (
                      <span className="text-sm">{hackathon.team}</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
