import Image from 'next/image'
import React from 'react'

const MemoSlide = ({ src, title, alt, children }) => {

  return (
    <div className='flex flex-col justify-center'>
      <Image className='rounded-lg' src={src} width={680} height={768} alt={alt} priority={false} blurDataURL='random' />
    </div>
  )
}

export default MemoSlide