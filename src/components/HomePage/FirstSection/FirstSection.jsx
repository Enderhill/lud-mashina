import React from 'react'
import './FirstSection.scss'

const FirstSection = () => {
  return (
    <div className='container'>
    <div className='searching'>
        <input className='search'
        type='text'
        placeholder='search'
        />
</div>
<h1 className='tittle'>
Про наш сайт
</h1>
<div className='containertext'>
        <div className='text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel luctus mauris, ac vestibulum eros. Nullam sit amet congue arcu, ut pulvinar dui. Vivamus tempor lorem tellus, sed blandit eros viverra nec. In egestas sapien sed varius volutpat. Curabitur condimentum libero eu nibh tincidunt pretium. Ut ultrices luctus lacus, vestibulum sagittis nisi sollicitudin eu. Fusce nec lacus quis purus porttitor placerat vel ut eros. Ut velit dolor
        </div>
        </div>
    </div>
  )
}

export default FirstSection
