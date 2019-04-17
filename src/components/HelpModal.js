import React from 'react'
import Modal from 'react-modal'

const HelpModal = ({ modalVisible, setVisibility }) => {
  return (
    <Modal
      isOpen={modalVisible}
      contentLabel="Help"
      closeTimeoutMS={200}
      className="help-modal"
      onRequestClose={() => setVisibility(false)}
    >
      <header className="help-modal__header">
        <h1 className="help-modal__title">Court Vision</h1>
      </header>
      <main className="help-modal__content">
        <p class="important">Never have players with games on your bench again.</p>
        <div className="text-container">
          <h2 className="help-modal__text-header">What is It?</h2>
          <p>Court Vision is a web app for assessing fantasy basketball schedules.
          This app uses the <a href="https://www.balldontlie.io">balldontlie API</a> for its data. Check the <a href="https://github.com/bopet20/court-vision#background">GitHub README</a> for background information.</p>
          <h2 className="help-modal__text-header">Features</h2>
          <ul>
            <li>Alerts you when you have players with games forced to sit on your bench</li>
            <li>Automatically sorts your players with games into the correct starter slots</li>
            <li>View weekly schedules, including when it matters most -- playoffs</li>
            <li>Test out lineups with easy player adds and drops</li>
          </ul>
          <h2 className="help-modal__text-header">Usage</h2>
          <ul>
            <li>Add players using the search bar and set their positions or use the demo data.</li>
            <li>Change the dates with the datepicker and surrounding buttons. The playoff week buttons take you to the standard Yahoo! Fantasy playoff weeks.</li>
            <li>Dates with red font mean that you have players with games on the bench. With the demo data, playoff week three should have an example.</li>
          </ul>
        </div>
        <button
          className="button"
          onClick={() => setVisibility(false)}
        >
          Close
        </button>
      </main>
    </Modal>
  )
}

export default HelpModal