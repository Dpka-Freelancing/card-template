import React from 'react';

const About = ({ bckgnd, fnts }) => {
  const content = {
    t1: {
      company: 'Spot Card',
      category: 'Web development',
      year: '2025',
      nature: 'Digital business card platform for easy, eco-friendly, and professional contact sharing.',
      specialties: [
        'Expert team with industry experience',
        'Customer-first approach for maximum',
        'Transparent and ethical business practices',
        'Timely service execution and delivery',
        'Capability to handle bulk requirements',
        'Multiple secure and hassle-free payment',
        'Tailor-made solutions to fit your unique needs',
        'Professional guidance and strategic consulting',
        'Integration of cutting-edge digital technology',
        'We listen, analyze, and deliver the right',
        'Proven track record with happy and satisfied',
        'Empowering businesses with innovative digital',
        'Reliable and 100% trustworthy service provider',
      ],
    },
    t2: {
      company: 'Pets World',
      category: 'Pet Shop',
      year: '2025',
      nature: 'Providing quality pet supplies, food, accessories, and live pets for a happy and healthy pet life.',
      specialties: [
        'Experienced & Passionate Team – Dedicated pet lovers with expert knowledge.',
        'Customer-First Approach – We prioritize your pet’s needs and happiness.',
        'Quality & Ethical Practices – Only the best products, ensuring pet safety and well-being.',
        'Timely Service & Delivery – Fast and reliable access to pet essentials.',
        'Bulk Order Capability – Serving both individual pet owners and businesses.',
        'Secure & Hassle-Free Payments – Multiple easy payment options.',
        'Customized Pet Solutions – Personalized recommendations for your furry friends.',
        'Expert Guidance – Professional advice on pet care, nutrition, and training.',
        'Modern & Innovative Approach – Up-to-date trends in pet care and products.',
        'Trusted by Pet Owners – A growing community of happy pets and satisfied customers.',
        'Commitment to Animal Welfare – Supporting a happy and healthy pet lifestyle.',
      ],
    },
    // Add more variants as needed
  };

  const selected = content[fnts] || content['t1']; // fallback to t1 if not found

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
                <p className='value'>{selected.company}</p>
              </div>
              <div className={`abt-det ${fnts}`}>
                <p className='label'>Category</p>
                <p className='value'>{selected.category}</p>
              </div>
              <div className={`abt-det ${fnts}`}>
                <p className='label'>Year of Est</p>
                <p className='value'>{selected.year}</p>
              </div>
              <div className={`abt-det ${fnts}`}>
                <p className='label'>Nature of business</p>
                <p className='value'>{selected.nature}</p>
              </div>
              <div className={`spl abt ${fnts}`}>
                <h6 className={`${fnts}`}>Our Specialties</h6>
                <ul>
                  {selected.specialties.map((item, index) => (
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
