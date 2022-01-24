import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
//MUI ICONS
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ContentSection = ({ title , type}) => {

  let results = useSelector(state => state.content[type].results);
  let promiseLoading = useSelector(state => state.content[type].isLoading);
  let promiseRejected = useSelector(state => state.content[type].isRejected);

  const bottomContainer = useRef();

  const clickHandler = (direction) => {
    return () => {
      const container = bottomContainer.current;
      let scrollNumber = container.clientWidth;
      direction === 'right'? container.scrollLeft += scrollNumber : container.scrollLeft -= scrollNumber;
    };
  };

  return (
    <section id='content-section-container'>

      <div id='top-container'>
        <h3>{title.toUpperCase()}</h3>
        <hr />
        <div id='arrow-buttons'>
          <svg onClick={clickHandler('left')}><ArrowBackIosIcon /></svg>
          <svg onClick={clickHandler('right')}><ArrowForwardIosIcon /></svg>
        </div>
      </div>

      <div id='bottom-container' ref={bottomContainer}>

        {/* PENDING */}
        {promiseLoading && <div className='promise-container'><p>Loading...</p></div>}

        {/* FULFILLED */}
        {results && results.map((result) => {
          if(results.indexOf(result) === results.length - 1) {
            return (
              <div className='last-result' key={results.length -1}>
                <img src={result.cover} alt='' />
                <p>{result.name}</p>
              </div>
            )
          };

          return (
            <div className='result' key={results.indexOf(result)}>
              <img src={result.cover} alt='' />
              <p>{result.name}</p>
            </div>
          );
        })}

        {/* REJECTED */}
        {promiseRejected && <div className='promise-container'><p>No results found</p></div>}

      </div>

    </section>
  );
};

export default ContentSection;