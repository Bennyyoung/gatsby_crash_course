import React from 'react'
import SEO from '../components/seo'
import Link from 'gatsby-link'

export default function Menu() {
  return (
    <div>
        <SEO title="Menu"/>
        <div style={{background: '#f4f4f4', paddingTop: '10px'}}>

        <ul style={{listStyle: 'none', display: 'flex', justifyContent: 'space-evenly'}}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>

        </ul>

        </div>
    </div>
  )
}
