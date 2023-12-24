import React from 'react';

function Home() {
  return (
    <div className='row m-0' style={{ height: '60vh' }}>
      <div className='col-md-6 border border-dark d-flex align-items-center text-center'>
        <p className='p-3'>THIS IS SOME CONTENT ALIGNED IN THE CENTER VERTICALLY AND HORIZONTALLY.</p>
      </div>
      <div className='col-md-6 border border-dark'></div>
    </div>
  )
}

export default Home