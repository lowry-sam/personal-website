import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker,Popup } from 'react-leaflet'
import Footer from '../Footer'

const Contact = () => {
    const [ letterClass, setLetterClass ] = useState('text-animate')
    const form = useRef()

    const doSomething = async() =>{
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 1000)
    }
        
    useEffect(() =>{
         doSomething();
    },[])

    const sendEmail = (e) => {
        e.preventDefault()

        
        emailjs.sendForm(
            'service_kjd0mkv', 
            'template_tskqhz9', 
            form.current, {
            publicKey: 'nmUQmSsFwZETJ6GX9',
          }).then (
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again.')
            }
        )
    }
//    useEffect (() => {
//     return setTimeout(() => {
//         setLetterClass('text-animate-hover')
//     }, 4000)
//    }, []) 

return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15} className="page-title"
            />
          </h1>
          <div className="explaination-zone">
            <p>
              I am interested in bettering my skills as a Data Analyst, Software Developer, and Technical Trainer. 
              I am open to remote and in-person opportunities in the Chicagoland area.
            </p>
            <p className="bold">
              Please reach out to me either by email, phone, or by filling out the form below!
            </p>
          </div>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <div className="messanger-container">
                    <textarea
                      className="messanger-box"
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </div>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND!" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="map-section">
          <div className="info-map">
            Sam Lowry
            <br />
            Chicago, IL 60612
            <br />
            USA <br />
            <br />
            <span>slowry44@me.com</span>
          </div>
          <div className="map-wrap">
            <MapContainer center={[41.882629, -87.623474]} zoom={30}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[41.882629, -87.623474]}>
                <Popup>A recent Chicago resident!</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
       
      </div>
      <Footer/>
      <Loader type='ball-scale-ripple-multiple'/>
    </>
  )
}

export default Contact;