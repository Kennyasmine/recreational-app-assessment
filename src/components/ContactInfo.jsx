import { contacts } from "../constants"

const ContactInfo = () => {
  return (
    <div className="hidden md:block max-w-6xl m-auto mb-32">
      <div className="px-8 sm:px-6 lg:px-10">
        <h2 className="text-2xl font-bold text-navy-blue mb-7">Contact</h2>
        <div className="max-w-4xl m-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {contacts.map((contact) => (
                    <div key={contact.text} className="flex flex-col items-center space-y-2">
                        <img src={contact.icon} alt={contact.text} className="w-6 h-6" />
                        <p className="text-navy-blue text-lg font-semibold">{contact.text}</p>
                    </div>
                ))}
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
