import React from 'react';


function Side() {
    return ( <>
        <div className="Side col-span-2 bg-gray-300 bg-opacity-0">
          <div className="p-6">
            
            <h3
                className="text-white"
                style={{
                  width: '114px',
                  height: '61px',
                  top: '8px',
                  left: '10px',
                  gap: '0px',
                  opacity: '0px',
                  fontSize: '24px',
                  fontWeight: '500',
                  lineHeight: '60.11px',
                  letterSpacing: '0.02em',
                  textAlign: 'left'
                }}
              >
                Username
              </h3>
              <hr />
              {/* <div className="w-287 h-0 border-t border-white opacity-0" style={{ top: '69px' }}></div> */}
              
              <ul className="mt-6">
                <li className="my-px">
                  <a href="#" className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-100 hover:bg-gray-700">
                    <span className="flex items-center justify-center text-lg">
                      <svg
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-3">Dashboard</span>
                  </a>
                </li>
                <li className="my-px">
                  <a href="#" className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-100 hover:bg-gray-700">
                    <span className="flex items-center justify-center text-lg">
                      <svg
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-3">Logout</span>
                  </a>
                </li>
              
              </ul>
            
          </div>
          </div>
        </>)
    
    }
    
    export default Side
    