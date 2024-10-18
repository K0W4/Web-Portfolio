import React, { Suspense, useRef, useState } from 'react'
import emailjS from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';

import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

import Alien from '../models/Alien';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('Armature|ArmatureAction');

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name] : e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('Armature|ArmatureAction')
    
    emailjS.send(
      process.env.VITE_APP_EMAILJS_SERVICE_ID,
      process.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Kowa",
        from_email: form.email,
        to_email: 'kowaleskigabriel@gmail.com',
        message: form.message
      },
      process.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setIsLoading(false);
      showAlert({ show: true, text: 'Message sent successfuly!', type: 'success' })

      setTimeout(() => {
        hideAlert
        setCurrentAnimation('Armature|ArmatureAction')
        setForm({ name: '', email: '', message: '' })
      }), [3000]
    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('Armature|ArmatureAction')
      console.log(error);
      showAlert({ show: true, text: 'I didnt receive your message!', type: 'danger' })
    })
  };

  const handleFocus = () => setCurrentAnimation('Armature|ArmatureAction');
  const handleBlur = () => setCurrentAnimation('Armature|ArmatureAction');

  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>
      {alert.show && <Alert {...alert} />}

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text text-white'>Get in Touch</h1>

        <form
          className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
        >
          <label className='text-white font-semibold'>
            Name
            <input 
              type="text"
              name="name"
              className="input"
              placeholder="..."
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className='text-white font-semibold'>
            Email
            <input 
              type="email"
              name="email"
              className="input"
              placeholder="..."
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className='text-white font-semibold'>
            Your Message
            <textarea 
              name="message"
              rows={4}
              className="textarea"
              placeholder="Let me know how I can help you!"
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[500px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Alien
              currentAnimation={currentAnimation}
              position={[0.3, -1.5, 0]}
              rotation={[6.7, -0.5, 0]}
              scale={[1, 1, 1]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact