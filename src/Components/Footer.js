import React from 'react'

function Footer() {
  return (
    <footer className='border border-dark'>
            <div className='p-4 Container'>
                <div className='row'>
                    <div lg="6" md="12" className='col mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>
                        <p>
                            THIS IS THE FOOTER CONTENT WHICH IS ALIGNED LEFT.
                        </p>
                        </h5>
                    </div>
                </div>
            </div>

            <div className='p-3'>
                &copy; 2023 Copyright: Educademy LLP.com
            </div>
        </footer>
  )
}

export default Footer