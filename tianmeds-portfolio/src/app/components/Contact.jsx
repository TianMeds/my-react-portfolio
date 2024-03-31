import Link from 'next/link'
import Image from 'next/image'


const Contact = () => {
  return (
<div className="w-full mt-4 flex flex-col sm:flex-row">
    {/* Left side: Contact information */}
    <div className="w-full sm:w-1/2">
        <h1 className="text-5xl font-black sm:text-8xl sm:m-0 md:m-4">Contacts</h1>
        <div className='sm:m-4 md:m-12'>
            <div>
            <h1 className='font-bold text-3xl'>Get in touch, let&rsquo;s talk.</h1>
                <h4 className='text-xl my-4'>Feel free to send me an <a href="mailto:medalladachris100@gmail.com" className="underline">email</a> or schedule a&nbsp;
                <a href="https://calendly.com/tianmeds" className="underline">free consultation</a> with me</h4>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>General</h2>
                <p className='text-lg mx-5 my-5'>Email: medalladachris100@gmail.com</p>
                <p className='text-lg mx-5 my-5'>Contact: +63 945 2395 356</p>
                <p className='text-lg mx-5 my-5'>Available Time: Mon-Fri, 9:00 AM - 5:00 PM</p>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Address</h2>
                <p className='text-lg mx-5 my-5'>515 Hizon St. Bangkal Makati City, PH</p>
            </div>
        </div>
    </div>

    {/* Right side: Google Maps embed iframe */}
    <div className="w-full sm:w-1/2 flex justify-center items-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.984151830697!2d121.00865380983517!3d14.542898985878017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c93ff2b1b5fb%3A0x23c1c2ad91596d87!2s515%20Gen.%20M.%20Hizon%2C%20Makati%2C%201233%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1711783095123!5m2!1sen!2sph" width="100%" height="450" style={{ border: '0', filter: 'grayscale(100%)' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
</div>




  )
}

export default Contact