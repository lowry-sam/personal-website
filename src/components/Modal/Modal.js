import React, { useState } from "react";
import './Modal.scss'
import portfolioData from '../../data/portfolio.json'
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

export default function Modal ({ changeModalState, index } )  {
    const [modal, setModal] = useState(true);
    document.body.classList.add('active-modal');
  const toggleModal = () => {
    // if(modal) {
    //     document.body.classList.add('active-modal');
    //     console.log("modal" + modal)
    // } else {
    //     document.body.classList.remove('active-modal');
    //     console.log(modal )
    // }
    setModal(!modal);
    //changeModalState(false);
    
  };
  
  const renderImages = (images) => {
    return (
        <div className='images-gallery'>
            {
                images.map((image, idx) => {
                    return (
                        <div className={'image-item ' + idx} alt={'image ' + idx}>
                            <img src={image}/>
                        </div>
                    )
                })
            }
        </div>
    );
  }

   const renderTags = (tags) => {
    return (
        <div className='tags-portfolio'> <h3 className='h3-portfolio'>Skills Learned & Developed: </h3>
            {
                tags.map((tag, idx) => {
                    return (
                        <div className={'tag-item ' + idx}>
                            <span><h5>{tag}</h5></span>
                        </div>
                    )
                })
            }
            
        </div>
        
    );
  }

  

  return (
    <>
      {/* <button onClick={toggleModal} className="btn-modal">
        Open
      </button> */}

      {modal && (
        <div className="modal">
          <div onClick={() => toggleModal()} onClick={() => {changeModalState(false); document.body.classList.remove('active-modal')}} className="overlay"></div>
          <div className="modal-content">
            <h2 className='portfolio-title'>{portfolioData.portfolio[index].title}</h2>
            <p className='portfolio-type'>
                <span>{portfolioData.portfolio[index].type}</span>
            </p>
            <p className='portfolio-description'>
              <span>{portfolioData.portfolio[index].description}</span>
            </p>
            
            {renderTags(portfolioData.portfolio[index].tags)}
            <a href={portfolioData.portfolio[index].url}><button className="flat-button"> Link to Project </button></a>
           {/* <a to="www.google.com" className="flat-button" value="LINK TO PROJECT" /> */}
            {/* <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button> */}
            {/* <img src={portfolioData.portfolio[index].cover}/> */}
            {renderImages(portfolioData.portfolio[index].images)}
            <FontAwesomeIcon
                onClick={() => toggleModal()} onClick={() => {changeModalState(false); document.body.classList.remove('active-modal')}}
                // onClick={() => changeModalState(false)}
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