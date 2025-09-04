function Contact() {
  return (
    <section className="py-16 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-bold mb-8 text-blue-600 dark:text-blue-400">Contact Me</h2>

      <form className="max-w-lg mx-auto space-y-4">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full p-3 border rounded-lg dark:bg-gray-800"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="w-full p-3 border rounded-lg dark:bg-gray-800"
        />
        <textarea 
          placeholder="Your Message" 
          rows="4" 
          className="w-full p-3 border rounded-lg dark:bg-gray-800"
        ></textarea>
        <button 
          type="submit" 
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
