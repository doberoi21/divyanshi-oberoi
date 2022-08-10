import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container ' >
            <div className='footer-inner'>
                <div className='social-media'>
                    <a href='https://github.com/doberoi21'>Github</a>
                    <div className='bridge' />
                    <a href='https://www.linkedin.com/in/divyanshi-oberoi-a006331aa/'>LinkedIn</a>
                    <div className='bridge' />
                    <a href='https://twitter.com/DivyanshiOberoi'>Twitter</a>
                    <div className='bridge' />
                    <a href='https://www.youtube.com/channel/UCQDymKHbrQaVm6zQkEhJsKg'>Youtube</a>
                </div>

                <div className='social-media'>
                    <a href='/'>Copyright @ 2022 </a>
                    <div className='bridge' />
                    <a href='/'> Made with ❤️ by Divyanshi </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
