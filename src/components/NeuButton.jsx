import React, { useEffect } from 'react';
import * as Tone from 'tone';
import feather from 'feather-icons';
import '../assets/css/Navbar.css';

const NeuButton = ({ icon, rounded }) => {
  useEffect(() => {
    feather.replace();
  }, []);

  const handleButtonClick = (e) => {
    const button = e.currentTarget;
    let buttonState = button.classList.contains('c-neu-button--active');
    button.classList.toggle('c-neu-button--active');
    window.navigator.vibrate(200);
    let synth = new Tone.Synth({
      oscillator: {
        type: 'sine',
        modulationFrequency: 0.2
      },
      envelope: {
        attack: 0,
        decay: 0.05,
        sustain: 0,
        release: 0.2
      }
    }).toDestination();
    synth.triggerAttackRelease(buttonState ? 'G4' : 'C5', '4n');
  };

  return (
    <button
      className={`c-neu-button ${rounded ? 'c-neu-button--rounded' : ''}`}
      onClick={handleButtonClick}
    >
      <i className="c-neu-button__icon" data-feather={icon}></i>
    </button>
  );
};

export default NeuButton;
