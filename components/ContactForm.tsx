import React, { useState } from 'react';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    // Here, you can implement the code to send the form data to your backend or perform any desired actions.
    console.log(formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formData.email)){
      // SendEmail(email)
      console.log('email correct: ' ,formData.email, formData,'formData')
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if(!response.ok){
        console.log('error')
      }
      console.log(response)
    }
    else console.log('error')
  };

  return (
    <div className=" mx-20 p-4 ">
      <h2 className="text-2xl font-semibold mb-4">Entre em Contato</h2>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            rows={4}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="z-10 bg-blue-500  text-white py-2 px-10 rounded-md hover:bg-blue-600"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;