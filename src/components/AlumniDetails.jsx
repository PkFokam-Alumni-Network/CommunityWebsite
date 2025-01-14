import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Avatar,
  Card,
  CardContent,
  Divider,
} from '@mui/material';

const AlumniDetails = () => {
  const location = useLocation();
  const { name, role, imageUrl, details } = location.state || {};

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
                    <Avatar alt={name} src={imageUrl} />
                  </div>
                  <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">{name}</h1>
                    <p className="text-xl text-slate-400">{role}</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Biography</h2>
                  <p>PlaceHolderBio</p>
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
                    {details && Object.entries(details).map(([key, value]) => (
                      <div key={key} className="flex flex-col">
                        <dt className="text-sm font-medium text-slate-400 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </dt>
                        <dd className="text-sm">
                          {key === 'socialMedia' ? 
                            // Render each social media link separately
                            Object.entries(value).map(([platform, url]) => (
                              <div key={platform}>
                                <a href={url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                                </a>
                              </div>
                            )) 
                            : value
                          }
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Horizontal Divider */}
                <Divider orientation="horizontal" flexItem />

                {/* Social Media */}
                {details.socialMedia && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Social Media</h2>
                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                      {Object.entries(details.socialMedia).map(([platform, url]) => (
                        <div key={platform} className="flex flex-col">
                          <dt className="text-sm font-medium text-slate-400 capitalize">{platform}</dt>
                          <dd className="text-sm">
                            <a href={url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                              {platform.charAt(0).toUpperCase() + platform.slice(1)}
                            </a>
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AlumniDetails;
