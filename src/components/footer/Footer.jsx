import React from 'react'
import { Whatsapp, Envelope, Linkedin, Telegram, Github, Twitter } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <div className='footer'>
        <h1 className='s-title'>Contact</h1>
        <div className="row">
            <div className="col-sm">
              <p className='p-author p-author-left'>Erik Hub</p>
              <p className='p-author p-author-left'></p>
            </div>
            <div className="col-sm text-center">
                <a href="https://api.whatsapp.com/send?phone=17206804982&amp;text=Hi%20Erik" target="_blank" rel="noopener noreferrer"><Whatsapp className='icon' /></a>
                
                <a href="https://t.me/Ehub96" target="_blank" rel="noopener noreferrer"><Telegram className='icon' /></a>

                <a href="mailto:ehub96.dev@gmail.com?Subject=Hi%20Erik" target="_blank" rel="noopener noreferrer"><Envelope className='icon' /></a>

                <a href="https://github.com/ehub-96" target="_blank" rel="noopener noreferrer"><Github className='icon' /></a>
                
                <a href="https://www.linkedin.com/in/ehub/" target="_blank" rel="noopener noreferrer"><Linkedin className='icon' /></a>

                {/* <a href="https://twitter.com/ehub96" target="_blank" rel="noopener noreferrer"><Twitter className='icon' /></a> */}
                
            </div>
            <div className="col-sm">
              <p className='p-author p-author-rigth'>Powered by EHUB</p>
            </div>
        </div>
    </div>
  )
}

export default Footer