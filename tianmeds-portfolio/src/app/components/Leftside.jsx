import React from 'react'

const Leftside = () => {

    const socialLinks = [
        {
          name: 'Facebook',
          url: 'https://facebook.com/tianmeds'
        },
        {
          name: 'Instagram',
          url: 'https://instagram.com/tianmeds'
        },
        {
          name: 'LinkedIn',
          url: 'https://linkedin.com/in/tianmeds'
        },
        {
          name: 'GitHub',
          url:  'https://github.com/tianmeds'
        },
        {
          name: 'Dribble',
          url: 'https://dribbble.com/TianMeds'
        }
      ]

      
      
  return (
    <div class="flex flex-col sm:w-full md:w-1/2 lg:w-72 mt-4 sm:mt-4 md:mt-10 mb-10 mr-10 ">
            <div className="w-full">
              <h1 className="font-semibold text-lg mb-4">Contact</h1>

              <p> 
                Feel free to contact me an&nbsp;   
                <a href="mailto:medalladachris100@gmail.com" className="underline">email</a> 
                &nbsp;if you require any assistance or have any questions, and I will respond as quickly as possible.
              </p>
            </div>

            <div className="w-full mt-4">
              <h1 className="font-semibold text-lg mb-4">Interested in having me speak at an event?</h1>

              <p> 
                I specialize in topics related to software development, emerging technologies, financial management, leadership, and project management.
              </p>
            </div>

            <div className="w-full mt-4">
              <h1 className="font-semibold text-lg mb-4">Want to hire me as freelancer?</h1>

              <p> 
              Make an appointment with me for a&nbsp;  
                <a href="https://calendly.com/tianmeds" className=" underline">free consultation</a> 
                &nbsp;so we can talk about your project.
              </p>
              
            </div>

            <div className="w-full mt-4">
              <h1 className="font-semibold text-lg mb-4">Social links</h1>

              {socialLinks.map((link, index) => ( // Add index as the second argument
                <div key={index} className="flex items-center mb-5"> 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                  <p> 
                    <a href={link.url} className="un dark: dark ">{link.name}</a> 
                  </p>
                </div>
              ))}
                          
            </div>

          </div>
  )
}

export default Leftside