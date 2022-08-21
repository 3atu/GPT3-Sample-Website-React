import React from 'react'
import { Feature } from '../../components'
import './features.css'

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras a lectus orci. Praesent dictum sem in varius volutpat.'
  },
  {
    title: 'Become the intended person',
    text: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras a lectus orci. Praesent dictum sem in varius volutpat.'
  },
  {
    title: 'Message unhindered',
    text: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras a lectus orci. Praesent dictum sem in varius volutpat.'
  },
  {
    title: 'Reality imagined',
    text: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras a lectus orci. Praesent dictum sem in varius volutpat.'
  },
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The future is now and you just need to realize it. Step into the future today & make it happen.</h1>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features