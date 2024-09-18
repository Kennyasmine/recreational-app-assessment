
const ContactSection = () => {
  return (
    <div className="max-w-6xl m-auto">
      <div className="py-14 px-8 sm:px-6 lg:px-10">
        <h2 className="text-2xl font-bold text-navy-blue mb-7">Leave us a message</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl m-auto">
          <div className="space-y-8">
            <input type="text" placeholder="Full Name" 
                className="w-full px-4 py-3 border border-gray-300 
                rounded-md shadow-sm focus:outline-none"
            />
            <input type="text" placeholder="Phone Number" 
                className="w-full px-4 py-3 border border-gray-300 
                rounded-md shadow-sm focus:outline-none"
            />
            <input type="email" placeholder="Email" 
                className="w-full px-4 py-3 border border-gray-300 
                rounded-md shadow-sm focus:outline-none"
            />
          </div>
          <div className="space-y-4">
            <input type="text" placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-300 
                rounded-md shadow-sm focus:outline-none"
            />
            <textarea 
              placeholder="Message" 
              className="w-full px-4 py-3 h-40 border border-gray-300 
              rounded-md shadow-sm focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
