import React from 'react'
import Posts from './Posts'
import SideProfile from './SideProfile'
import Suggestions from './Suggestions'
import About from './About';



const Feed = () => {



  return (
    <div className="grid grid-cols-1 md:grid-cols-[470px_330px] max-w-5xl mx-auto gap-5 px-24">
      <section>
        {/* stories */}

        {/* posts */}
        <Posts />
      </section>

      <section className=" invisible md:visible">
        {/* Side-profile */}
        <SideProfile/>
        {/* Suggestions */}
        <Suggestions/>
        <About/>
      </section>
    </div>
  )
}

export default Feed
