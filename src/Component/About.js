import React from 'react';

const About = ({ bckgnd, fnts, content }) => {
  return (
    <div className='about pt-2 pb-2'>
      <div className={`contain-template ${bckgnd} abt-t1`}>
        <div className='container'>
          <div className='row'>
            <div className={`abt-cmn ${fnts}`}>
              <div className={`abt-head pb-3 ${fnts}`}>
                <h2 className={`${fnts}`}>About Us</h2>
              </div>
              <div className={`abt-det ${fnts}`}>
                <p className='label'>Company Name</p>
                <p className='value'>{content.company}</p>
              </div>
              <div className={`abt-det ${fnts}`}>
                <p className='label'>Category</p>
                <p className='value'>{content.category}</p>
              </div>
              <div className={`abt-det ${fnts}`}>
                <p className='label'>Year of Est</p>
                <p className='value'>{content.year}</p>
              </div>
              <div className={`abt-det ${fnts}`}>
                <p className='label'>Nature of business</p>
                <p className='value'>{content.nature}</p>
              </div>
              <div className={`spl abt ${fnts}`}>
                <h6 className={`${fnts}`}>Our Specialties</h6>
                <ul>
                  {content.specialties.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;