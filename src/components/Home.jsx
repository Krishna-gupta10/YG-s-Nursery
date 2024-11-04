import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="landing-container">
            <div className="redirect">
                <p>Welcome!</p>
                <p>Where Green meets serenity</p>
                <Link to="/store"><button style={{ backgroundColor: 'green' }}>Get Started!</button></Link>
            </div>

            <p className="introduction">
                Welcome to YG's Nursery!
                Your destination for vibrant plants and greener spaces! 🌿🌻<br /><br />
                At YG's, we’re passionate about bringing the beauty of nature to your home and garden. With a wide variety of healthy, thriving plants, from lush indoor greenery to seasonal blooms and hardy outdoor plants, we have everything you need to create your perfect green oasis. <br /><br />
                Our team of plant experts is here to guide you every step of the way, offering advice on plant care, gardening tips, and inspiration.
                Visit us and let’s grow something beautiful together!
            </p>
        </div>
    )
}
