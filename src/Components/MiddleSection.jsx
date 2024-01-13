import React from 'react'

const MiddleSection = () => {
  return (
    <div className='w-[900px] h-[400px] bg-[#3B3E42] mx-auto flex flex-col gap-5 justify-center text-center'>
        <h1 className='text-[50px] text font-semibold mt-10 text-white'>Title</h1>
        <p className='text-white text-[16px] leading-loose'>Parallax scrolling in React offers a visually engaging web design approach. Leveraging React's component-based structure, developers can seamlessly integrate parallax effects, enhancing user interaction. By synchronizing background layers' movement at different speeds using React's state management and lifecycle methods, a sense of depth is created as users scroll. Components like div elements with background images can dynamically animate based on scroll positions, providing an immersive experience. React's declarative approach aligns well with parallax, allowing efficient control over visual elements in response to user actions. Whether for a single-page or multi-page application, React's flexibility simplifies the implementation of parallax scrolling, elevating the aesthetics and interactivity of web projects.</p>
    </div>
  )
}

export default MiddleSection