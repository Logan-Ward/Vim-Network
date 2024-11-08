import { useEffect } from 'react';
import Breathe from './views/Breathe/Breathe.tsx';
import platform from './assets/platform.svg';
import medicine from './assets/medicine.svg';
import database from './assets/database.svg';
import herbalism from './assets/herbalism.svg';
import lessons from './assets/lessons.svg';
import courses from './assets/courses.svg';
import { gsap } from 'gsap';
import './App.css';

function App() {
  useEffect(() => {
    let tl = gsap.timeline();
    tl.to('.breathe-container', {
      duration: 1.5,
      opacity: 1,
    })
      .to('.dot1', {
        duration: 1,
        opacity: 1,
      })
      .to('.dot2', {
        duration: 1,
        opacity: 1,
      })
      .to('.dot3', {
        duration: 1,
        opacity: 1,
      })
      .to('.dot4', {
        duration: 1,
        opacity: 1,
      })
      .to('.dot5', {
        duration: 1,
        opacity: 1,
      })
      .to('.breathe-container', {
        duration: 1.5,
      })
      // .to('.dot4', {
      //   duration: .75,
      //   opacity: 0,
      // })
      // .to('.dot3', {
      //   duration: .75,
      //   opacity: 0,
      // })
      // .to('.dot2', {
      //   duration: .75,
      //   opacity: 0,
      // })
      // .to('.dot1', {
      //   duration: .75,
      //   opacity: 0,
      // })
      .to('.breathe-container', {
        duration: 1.5,
        opacity: 0,
      })
      .to('.breathe-container', {
        display: 'none',
      })
      .to('.container', {
        display: 'inline',
      })
      .to('.welcome-section', {
        duration: 1,
        opacity: 1,
      })
      .to('.title-section', {
        duration: 0.75,
        opacity: 1,
      })
      .to('.mission-section', {
        duration: 0.75,
        opacity: 1,
      })
      .to('.expect-section', {
        duration: 0.75,
        opacity: 1,
      })
      .to('.description-section', {
        duration: 0.75,
        opacity: 1,
      })
      .to('.signup-section', {
        duration: 0.75,
        opacity: 1,
      })
      .to('.definition-section', {
        duration: 0.75,
        opacity: 1,
      });
  }, []);

  // TODO: Make each section fade in as it is scrolled into view
  // const fadeIn = (e: MouseEvent) => {
  //   gsap.to(`#${(e.target as HTMLElement).id}`, {
  //     duration: 1.5,
  //     opacity: 1,
  //   })
  // }

  return (
    <>
      <Breathe />
      <main className='container' style={{ display: 'none' }}>
        <div className='welcome-section' style={{ opacity: 0 }}>
          <p className='welcome'>
            Welcome to your soon-to-be wellness platform
          </p>
        </div>
        <div className='title-section' style={{ opacity: 0 }}>
          <h1 className='title'>Vim Network</h1>
          <p className='subtitle'>A community built on energy</p>
        </div>
        <div className='mission-section' style={{ opacity: 0 }}>
          <p className='mission'>
            Rooted in the mission of empowering families who have children with
            disabilities through meaningful connections and a diverse range of
            wellness resources
          </p>
        </div>
        <div className='expect-section' style={{ opacity: 0 }}>
          <h2 className='expect-title'>What to expect</h2>
          <div className='expect-categories'>
            <div className='expect-item platform-item'>
              <img src={platform} className='platform icon' />
              <p className='expect-item-text'>
                an individualized, family-focused social platform
              </p>
            </div>
            <div className='expect-item medicine-item'>
              <img src={medicine} className='medicine icon' />
              <p className='expect-item-text'>
                a blend of resources rooted in Eastern & Western medicine
              </p>
            </div>
            <div className='expect-item database-item'>
              <img src={database} className='database icon' />
              <p className='expect-item-text'>
                a database of medical experts and caregivers
              </p>
            </div>
            <div className='expect-item herbalism-item'>
              <img src={herbalism} className='herbalism icon' />
              <p className='expect-item-text'>
                a guide to holistic healing & herbalism
              </p>
            </div>
            <div className='expect-item lessons-item'>
              <img src={lessons} className='lessons icon' />
              <p className='expect-item-text'>
                lessons on sound therapy, mindfulness, and meditation
              </p>
            </div>
            <div className='expect-item courses-item'>
              <img src={courses} className='courses icon' />
              <p className='expect-item-text'>
                premium courses aimed to improve quality of life
              </p>
            </div>
          </div>
        </div>
        <div className='description-section' style={{ opacity: 0 }}>
          <p className='description'>
            Vim Network is set to be an online space that not only taps into the
            power of community, but reminds its users that what we put energy
            towards shapes our reality.
          </p>
        </div>
        <div className='signup-section' style={{ opacity: 0 }}>
          <p className='signup'>
            If these intentions resonate with you, stay in touch!
          </p>
          <form className='signup-form'>
            <div className='form-inputs'>
              <input className='name' type='text' placeholder='Name' />
              <input className='email' type='email' placeholder='Email' />
            </div>
            <button
              className='submit'
              type='submit'
              onClick={(e) => e.preventDefault()}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className='definition-section' style={{ opacity: 0 }}>
          <h3 className='definition-title'>Vim /vim/</h3>
          <p className='definition'>
            Noun as in life
            <br />
            &nbsp;&nbsp;1. Lively or energetic spirit; enthusiasm; vitality
            <br />
            &nbsp;&nbsp;Synonyms: energy, strength, power, drive, zeal
          </p>
        </div>
        <div className='contact-section'>
          <div className='divider' style={{ backgroundColor: '#4B6B44', height: '1px', width: '100%' }}>
          </div>
          <p className='contact'>For business inquiries contact: info@vimnetwork.org</p>
        </div>
      </main>
    </>
  );
}

export default App;
