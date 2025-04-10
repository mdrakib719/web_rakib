import { PageLayout } from "@/components/PageLayout";
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  ArrowUpRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Sample academic data
const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "BRAC University",
    location: "Dhaka, Bangladesh",
    duration: "February 2021 - Present",
    description: "Specialized in MERN and Blockchain with a CGPA of 3.2/4.0.",
    achievements: [
      "Completed multiple projects in web development and blockchain",
    ],
  },
  {
    id: 2,
    degree: "HSC in Science",
    institution: "Afaz Uddin School and College",
    location: "Dhaka, Bangladesh",
    duration: "2018 - 2020",
    achievements: ["Graduated with 4.83/5.0 GPA"],
  },
  {
    id: 3,
    degree: "SSC in Science",
    institution: "Kushura Abbas Ali High School",
    location: "Dhaka, Bangladesh",
    duration: "2013 - 2018",
    achievements: [
      "Graduated with 4.83/5.0 GPA",
      "Science Olympiad Participant",
    ],
  },
];

const certifications = [
  {
    id: 1,
    name: "Web Development",
    issuer: "Coursera",
    date: "April 2, 2025",
    Certificate:
      "https://www.coursera.org/account/accomplishments/verify/38J2CJWV78BS",
    skills: ["WordPress", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    name: "Python Certificate",
    issuer: "HACKERRANK",
    date: "27 JULY, 2024",
    Certificate: "https://www.hackerrank.com/certificates/84193ee97be8",
    skills: ["Python", "Data Structures", "Algorithms"],
  },
  {
    id: 3,
    name: "Office Application",
    issuer: "NEXT IT & COMPUTER TRAINING CENTER",
    date: "JUNE 2018",
    Certificate:
      "https://drive.google.com/drive/folders/1tafH_sYUoRdYv2eZrMpxKtbtoUVxwzU9?usp=sharing",
    skills: ["MS Word", "MS Excel", "MS PowerPoint"],
  },
];
const Awards = [
  {
    id: 1,
    name: " The Duke of Edinburgh's Award",
    issuer: "Duke of Edinburgh",
    date: "January 2023",
    Certificate: "https://www.dofe.org/",
    skills: ["Leadership", "Teamwork", "Community Service"],
  },
  {
    id: 2,
    name: "IGNITION",
    issuer: "Khulna University of Engineering & Technology",
    date: "October 2023",
    Certificate:
      "https://drive.google.com/file/d/1oXSCZHYI70y4rEmGf1-KHtqK0qDVMcME/view?usp=sharing",
    skills: ["Robotics", "project showcase"],
  },
  {
    id: 3,
    name: "TECH SPECTRA 2.O",
    issuer: "BRAC University Robotics Club",
    date: "February 2024 ",
    Certificate:
      "https://www.facebook.com/MONON.BRACU/posts/techspectra-20-ignite-the-campus-cosmos-organized-by-the-robotics-club-of-brac-u/800169132149121/",
    skills: ["Robotics", "Soccerbot"],
  },
];
const publications = [];

const Academic = () => {
  return (
    <PageLayout>
      <div className="page-container">
        <h1 className="page-title">Academic Background</h1>
        <p className="text-lg text-muted-foreground mb-8">
          My educational journey, certifications, and research publications that
          have shaped my knowledge and expertise.
        </p>
        {/* Education Section */}
        <section className="mb-12">
          <h2 className="section-title flex items-center">
            <GraduationCap className="mr-2" />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <Card key={edu.id} className="border">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{edu.degree}</CardTitle>
                      <CardDescription>
                        {edu.institution} - {edu.location}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {edu.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{edu.description}</p>
                  <div>
                    <h4 className="font-medium mb-2">Achievements:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {edu.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* Certifications Section */}
        <section className="mb-12">
          <h2 className="section-title flex items-center">
            <Award className="mr-2" />
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.id} className="border">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{cert.name}</CardTitle>
                      <CardDescription>
                        {cert.issuer} - {cert.date}
                      </CardDescription>
                    </div>
                    {cert.Certificate && (
                      <a
                        href={cert.Certificate}
                        className="text-sm text-primary hover:underline flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Certificate{" "}
                        <ArrowUpRight className="h-3 w-3 ml-1" />
                      </a>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="section-title flex items-center">
            <Award className="mr-2" />
            Awards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Awards.map((award) => (
              <Card key={award.id} className="border">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{award.name}</CardTitle>
                      <CardDescription>
                        {award.issuer} - {award.date}
                      </CardDescription>
                    </div>
                    {award.Certificate && (
                      <a
                        href={award.Certificate}
                        className="text-sm text-primary hover:underline flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Certificate{" "}
                        <ArrowUpRight className="h-3 w-3 ml-1" />
                      </a>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {award.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* Publications Section */}
        <section>
          <h2 className="section-title flex items-center">
            <BookOpen className="mr-2" />
            Publications
          </h2>
          <div className="space-y-6">
            {publications.length === 0 ? (
              <p className="text-muted-foreground">No publications yet.</p>
            ) : (
              publications.map((pub) => (
                <Card key={pub.id} className="border">
                  <CardHeader>
                    <CardTitle>{pub.title}</CardTitle>
                    <CardDescription>
                      {pub.journal} - {pub.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{pub.description}</p>
                    <a
                      href={pub.link}
                      className="text-primary hover:underline mt-4 inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Publication
                    </a>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Academic;
