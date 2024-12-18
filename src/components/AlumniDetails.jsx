import React from "react";
import {
  Container,
  Typography,
  Grid,
  Avatar,
  Box,
  Link,
  Card,
  CardContent,
  Divider,
} from "@mui/material";

const AlumniDetails = () => {
  const person = {
    name: "Jane Doe",
    image: "/placeholder.svg?height=400&width=400",
    role: "Software Engineer",
    bio: "Jane Doe is a passionate software engineer with a proven track record in developing cutting-edge web applications. She excels in React and Node.js, and has a keen interest in AI and machine learning. Throughout her career, Jane has led multiple successful projects, consistently delivering high-quality solutions that meet and exceed client expectations. Her innovative approach to problem-solving and her ability to adapt to new technologies quickly have made her a valuable asset in the ever-evolving field of software development.",
    details: {
      currentState: "California",
      currentCompany: "TechInnovate Inc.",
      education: "M.S. in Computer Science",
      graduationYear: "2018",
      email: "jane.doe@example.com",
    },
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/janedoe",
      instagram: "https://www.instagram.com/janedoe",
      github: "https://github.com/janedoe",
    },
  };

  return (
    <div className="min-h-screen bg-[#F3EFF5] py-12">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left column: Picture and Biography */}
              <div className="lg:w-1/2 space-y-6">
                <div className="flex flex-col items-center lg:items-start gap-4">
                  <div className="relative rounded-full overflow-hidden">
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </div>
                  <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">{person.name}</h1>
                    <p className="text-xl text-slate-400">{person.role}</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Biography</h2>
                  <p className="">{person.bio}</p>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="hidden lg:block w-px bg-border"></div>

              {/* Right column: Details and Social Media */}
              <div className="lg:w-1/2 space-y-6">
                {/* Details */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Details</h2>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                    {Object.entries(person.details).map(([key, value]) => (
                      <div key={key} className="flex flex-col">
                        <dt className="text-sm font-medium text-slate-400 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </dt>
                        <dd className="text-sm">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Horizontal Divider */}
                {/* <Separator className="my-4" /> */}
                <Divider orientation="horizontal" flexItem />

                {/* Social Media */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Social Media</h2>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                    {Object.entries(person.socialMedia).map(([key, value]) => (
                      <div key={key} className="flex flex-col">
                        <dt className="text-sm font-medium text-slate-400 capitalize">
                          {key}
                        </dt>
                        <dd className="text-sm">
                          <a
                            href={value}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                          </a>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AlumniDetails;
