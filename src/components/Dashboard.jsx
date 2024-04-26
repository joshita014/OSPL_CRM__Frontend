import React, { useState} from 'react';
import ContentEditable from 'react-contenteditable';
import useWindowResize from '../hooks/useWindowResize';
import Side from './Side';


const Dashboard = () => {

  const{width,height} = useWindowResize(); 
  const [latestUpdate, setLatestUpdate] = useState('No updates yet');
  const [teamMembers, setTeamMembers] = useState('Team members content');
  const [latestUpdatesContent, setLatestUpdatesContent] = useState('Latest updates content');

  const handleUpdate = () =>  {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    setLatestUpdate(`Latest update on ${date} at ${time}`);
  };

  return (
    
    <div className="fullcontainer min-h-screen bg-primaryBgColor grid grid-cols-1 md:grid-cols-10">
      {
        width < 1024 ? null : <Side />
      }
      
      <div className= { width < 1024 ? "maincontainer bg-white col-span-12" : "maincontainer col-span-1 md:col-span-8 bg-white rounded-l-3xl"}>
        <div className="grid">
          <div className="navbar flex items-center ml-4 md:ml-9 mt-4 md:mt-10">
            <img src="/ospl logo.png" alt="OSPL Logo" className="w-10 h-10 md:w-12 h-12 mr-2" />
            <h1 className="text-gray-900 text-lg md:text-2xl font-bold">Optimanage Software Pvt. Ltd.</h1>
          </div>
          <hr className="border-gray-300 my-2" />
          <div className="projectlayout flex items-center ml-4 md:ml-9 mt-4 md:mt-10 bg-secondaryBgColor p-2 md:p-4 w-11/12 text-sm md:text-xl font-bold">
            Project Name
          </div>
          <div className="update flex items-center ml-4 md:ml-9 w-11/12 p-2 md:p-4 bg-secondaryBgColor">
            <p className="mt-1 text-gray-600 text-xs md:text-sm lg:text-base">{latestUpdate}</p>
            <button onClick={handleUpdate} className="bg-blue-500 text-white px-2 md:px-3 py-1 rounded-md mt-2">Update</button>
          </div>
          <div className="Row1 flex flex-col md:flex-row ml-4 md:ml-9 w-11/12 p-2 md:p-4 bg-secondaryBgColor">
            <div className="team text-sm md:text-lg col-12 md:col-6 p-2 md:p-4 font-bold">
              Team Members
              <ContentEditable
                className="content-editable break-words p-2 font-normal md:text-sm whitespace-normal md:max-w-full" contentEditable={true} style={{ maxWidth: '100%', width: '250px' }}
                html={teamMembers}
                disabled={false}
                onChange={(e) => setTeamMembers(e.target.value)}
                tagName='p'
              />
            </div>
            <div className="projectupdate text-sm md:text-lg col-12 md:col-6 p-2 md:p-4 md:border-l md:border-gray-300 font-bold">
              Latest Updates
              <ContentEditable
                className="content-editable break-words p-2 font-normal md:text-sm whitespace-normal md:max-w-full" contentEditable={true} style={{ maxWidth: '100%', width: '750px' }}
                html={latestUpdatesContent}
                disabled={false}
                onChange={(e) => setLatestUpdatesContent(e.target.value)}
                tagName='p'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
