import React from 'react'

const Map = () => {
  return (
    <div className='container'>
      {/* google map  */}
      <div className='map '>
      <h1>google map</h1>
      <iframe className='w-full h-[750px] map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.914150742188!2d104.86961427481596!3d11.486117888709089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095b97a5cd5e47%3A0x11c7c39515448089!2sdreamsLAB%20blockchain%20community!5e0!3m2!1sen!2skh!4v1698899709763!5m2!1sen!2skh" style={{border: "0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
  )
}

export default Map