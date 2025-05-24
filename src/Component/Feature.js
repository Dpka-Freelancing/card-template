import React from "react";

const Feature = ({ bckgnd, fnts, content }) => {
  return (
    <div className="feature pt-2 pb-2">
      <div className={`contain-template ${bckgnd} featu-t1`}>
        <div className="container">
          <div className="row">
            <div className="fea-cmn pb-4">
              <h6 className={fnts}>
                {content.heading} <img src={content.icon} alt="" />
              </h6>
            </div>

            <div className="fea-det">
              {content.features.map((item, idx) => (
                <div className="fea1" key={idx}>
                  <p className="strong">
                    <img src={item.icon} alt="" /> {item.title}
                  </p>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="prod-img">
              <img src={content.image} alt="" className="img-fluid" />
              <div className="enq-sec mt-5">
                <h5 className={fnts}>{content.ctaHeading}</h5>
                <a href={content.ctaLink} className="enq-btn" type="submit">
                  {content.ctaButtonText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;