import React from 'react'
import { Feature } from '../../components'
import './whatGPT3.css'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title='What is GPT-3' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum luctus velit eu ullamcorper. Nunc sodales, diam eu semper imperdiet, neque libero lobortis nibh, eget condimentum sem eros quis ante.'/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title='Chatbots' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum luctus velit eu ullamcorper. Nunc sodales, diam eu semper imperdiet, neque libero lobortis nibh, eget condimentum sem eros quis ante.'/>
        <Feature title='Knowledgebase' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum luctus velit eu ullamcorper. Nunc sodales, diam eu semper imperdiet, neque libero lobortis nibh, eget condimentum sem eros quis ante.'/>
        <Feature title='Education' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum luctus velit eu ullamcorper. Nunc sodales, diam eu semper imperdiet, neque libero lobortis nibh, eget condimentum sem eros quis ante.'/>
      </div>
    </div>
  )
}

export default WhatGPT3