import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="container">
              <!-- Header section -->
              <section className="header">
                  <div>
                      <span className="name">Bunthet<span className="red">.</span></span>
                      <a href="https://www.linkedin.com/in/say-bunthet-518318154/"><img src="images/linkedin.png"
                                                                                        alt="Linkedin"
                                                                                        className="linkedin"/></a>
                      <img src="images/profile.png" alt="Profile Photo" className="profile-image"/>
                      <a href="https://github.com/s-bunthet/"><img src="images/github.webp" alt="Github"
                                                                   className="github"/></a>
                      <h2>Software Engineer/Project Manager</h2>
                      <p>Engineering Degree from <span className="blue">EN</span><span className="white">STA</span>
                          <span className="red">Paris</span></p>
                  </div>
              </section>


              <!-- Experience and Skills section -->
              <section className="experience-containter">
                  <div className="box1_1"></div>
                  <div className="experience">
                      <p className="rainbow-color">3 Years +</p>
                      <p className="bold">of experiences</p>
                  </div>
                  <div className="experience-desc">
                      <p>Upon completing my Software Engineering Degree at ENSTA Paris in 2020, I had an opportunity to
                          join Paris
                          Partners Software, a specialized company in software development for more than 20 years.</p>
                  </div>
                  <div className="box1_3"></div>

              </section>

              <section className="skills">
                  <div className="box2_1"></div>
                  <div className="technologies">
                      <span className="rainbow-color">Multiple</span>
                      <p className="bold">programming languages & technologies</p>
                      <span className="tech-list">
                <span>Java</span>
                <span>Php</span>
                <span>JavaScript</span>
                <span>Python</span>
                <span>C#</span>
                <span>Spring</span>
                <span>Zend</span>
                <span>Microsoft .Net</span>
                <span>Symfony</span>
                <span>Apache</span>
                <span>Linux</span>
                <span>MySQL</span>
                <span>PostgreSQL</span>
                <span>AI & Machine Learning</span>
            </span>
                  </div>
                  <div className="languages">
                      <span className="rainbow-color">3 human</span>
                      <p className="bold">languages</p>
                      <span className="lang">Khmer</span>
                      <span className="lang">French</span>
                      <span className="lang">English</span>
                  </div>
                  <div className="box2_4"></div>
              </section>

              <!-- Quote section -->
              <section className="quote">
                  <p>“Rien n'est à craindre, tout est à comprendre!”</p>
              </section>

              <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                  <defs>
                      <pattern id="b" patternUnits="userSpaceOnUse" width="25" height="25" viewBox="0 0 100 100"
                               fill="coral">
                          <circle cx="50" cy="50" r="12.5"></circle>
                      </pattern>
                  </defs>
                  <path fill="url(#b)">
                      <animate attributeName="d" dur="10s" repeatCount="indefinite"
                               values="
                     M839,665.5Q691,831,473,878T160.5,712.5Q66,500,178,318.5t297.5-139Q661,222,824,361t15,304.5Z;
                     M815,668Q694,836,472.5,883.5t-287-168Q120,500,233.5,367t279-154Q678,192,807,346t8,322Z;
                     M838,662Q687,824,515.5,797t-290-162Q107,500,190,303.5t273.5-133Q654,234,821.5,367T838,662Z;
                     M826.5,688.5Q717,877,514,852.5T177.5,664Q44,500,156,299.5T494,109q226,10,334,200.5t-1.5,379Z;
                     M839,665.5Q691,831,473,878T160.5,712.5Q66,500,178,318.5t297.5-139Q661,222,824,361t15,304.5Z;
                     M838,662Q687,824,515.5,797t-290-162Q107,500,190,303.5t273.5-133Q654,234,821.5,367T838,662Z;
                     M856,707.5Q739,915,531.5,860t-363-207.5Q13,500,155,324t329-147.5q187,28.5,338,176t34,355Z;
                     M839,665.5Q691,831,473,878T160.5,712.5Q66,500,178,318.5t297.5-139Q661,222,824,361t15,304.5Z;
                     M839,665.5Q691,831,473,878T160.5,712.5Q66,500,178,318.5t297.5-139Q661,222,824,361t15,304.5Z;
                     ">

                      </animate>

                  </path>
              </svg>


              <!-- Contact section -->
              <!--    <section class="contact">-->
              <!--        <h3>Let's get in touch.</h3>-->
              <!--        <form>-->
              <!--            <input type="text" name="name" placeholder="Name" required>-->
              <!--            <input type="email" name="email" placeholder="Email" required>-->
              <!--            <textarea name="message" placeholder="Your message here" required></textarea>-->
              <!--            <button type="submit">Go</button>-->
              <!--        </form>-->
              <!--    </section>-->
          </div>
      </header>
    </div>
  );
}

export default App;
