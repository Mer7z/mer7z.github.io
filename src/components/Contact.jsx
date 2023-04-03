import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const breakBody = body.replace(/\r\n|\r|\n/g, "%0D%0A");
    const mailtoLink = `mailto:mer7zy@hotmail.com?subject=${subject}&body=${name}%0A%0A${breakBody}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className='Contact px-3'>
      <h1 className='text-3xl font-bold text-center my-5'>Contact Me!</h1>
      <div className='form-wraper flex justify-center mb-96'>
        <form onSubmit={handleSubmit} className=' w-full md:w-3/4 lg:w-2/4'>
          <label className='text-xl'>
            Your Name:
            <br />
            <input
              className='border border-gray-600/60 px-2 w-full outline-none focus:border-sky-500 transition-colors mb-5 font-sans text-lg py-1'
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <br />
          <label className='text-xl'>
            Subject:
            <br />
            <input
              className='border border-gray-600/60 px-2 w-full outline-none focus:border-sky-500 transition-colors mb-5 font-sans text-lg py-1'
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </label>
          <br />
          <label className='text-xl'>
            Body:
            <br />
            <textarea
              className='border border-gray-600/60 px-2 w-full outline-none focus:border-sky-500 transition-colors mb-5 font-sans text-lg py-1 h-40 resize-none'
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </label>
          <br />
          <button className='px-3 py-2 bg-sky-500 hover:bg-sky-400 transition text-white' type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;