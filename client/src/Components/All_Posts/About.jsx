import React from 'react';

const About = () => {
  return (
    <>
      <div className="w-[350px] ml-8 mt-7">
        <ul className="flex flex-wrap text-xs text-gray-400 gap-2">
        <li>
          <a href="https://about.instagram.com/" target="_blank" rel="noopener noreferrer">About</a>
        </li>
        <li>
          <a href="https://help.instagram.com/" target="_blank" rel="noopener noreferrer">Help</a>
        </li>
        <li>
          <a href="https://about.instagram.com/blog/" target="_blank" rel="noopener noreferrer">Press</a>
        </li>
        <li>
          <a href="https://about.instagram.com/" target="_blank" rel="noopener noreferrer">API</a>
        </li>
        <li>
          <a href="https://about.instagram.com/" target="_blank" rel="noopener noreferrer">Jobs</a>
        </li>
        <li>
          <a href="https://about.instagram.com/" target="_blank" rel="noopener noreferrer">Privacy</a>
        </li>
        <li>
          <a href="https://about.instagram.com/" target="_blank" rel="noopener noreferrer"> 
            Terms
          </a>
        </li>
        <li>
          <a href="/explore/locations/" target="_blank" rel="noopener noreferrer">Locations</a>
        </li>
        <li>
          <a href="https://about.instagram.com/" target="_blank" rel="noopener noreferrer">Language</a>
        </li>
      </ul>
      </div>
      <div className="w-[350px] ml-8 mt-4">
      <p className="text-xs text-gray-400">© 2022 Instagram from Meta</p>
      </div>
    </>
  )
}

export default About
