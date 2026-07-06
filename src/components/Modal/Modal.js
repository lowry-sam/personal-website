import React, { useState } from "react";
import './Modal.scss'
import portfolioData from '../../data/portfolio.json'
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Modal ({ changeModalState, index } )  {
    const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
    
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      {/* <button onClick={toggleModal} className="btn-modal">
        Open
      </button> */}

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} onClick={() => changeModalState(false)} className="overlay"></div>
          <div className="modal-content">
            <h2>{portfolioData.portfolio[index].title}</h2>
            <p>
              {portfolioData.portfolio[index].description}
            </p>
            {/* <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button> */}
            <img src={portfolioData.portfolio[index].cover}/>
            <FontAwesomeIcon
                onClick={toggleModal}
                onClick={() => changeModalState(false)}
                // onClick={() => }
                icon={faClose}
                color='yellow'
                size = "3x"
                className={modal ? 'close-icon' : 'close-icon-no-show'}
            />
          </div>
        </div>
      )}
      
    </>
  );
}