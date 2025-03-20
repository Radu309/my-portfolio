import '../styles/AboutMe.css'

function AboutMe(){
    return (
        <section id="about-me">
            <div className="container">
                <h1 className="background-title">ABOUT</h1>
                <h2 className="section-title">ABOUT ME</h2>

                <div className="about-content">
                    <div className="about-image">
                        <img src="/my-portfolio/profile-2.jpg" alt="Profile"/>
                    </div>

                    <div className="about-text">
                        <h3></h3>
                        <p>
                            I am a curious and adaptable Computer Science graduate, currently pursuing a Master’s in Economic Information Technology.
                            I enjoy problem-solving, learning new technologies, and working in collaborative environments where I can grow alongside experienced professionals.
                            With a strong foundation in software development and analytical thinking, I approach challenges with a proactive and solution-oriented mindset.
                        </p>

                        <div className="about-details">
                            <div className="left">
                                <p><strong>Name:</strong> Neacă Radu-Sabin</p>
                                <p><strong>Degree:</strong> Computer Science</p>
                                <p><strong>Phone:</strong> (+40) 773335292</p>
                                <p><strong>Email:</strong> neaca.radu309@gmail.com</p>
                            </div>
                            <div className="right">
                                <p><strong>Country:</strong> Romania</p>
                                <p><strong>City:</strong> Cluj-Napoca</p>
                                <p><strong>Experience:</strong> 5 months</p>
                                <p><strong>Birthday:</strong> 30 september 2001</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;