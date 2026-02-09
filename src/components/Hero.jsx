import { useState } from "react";
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

function Hero() {
  const steps = [
    {
      id: 1,
      icon: '/Submit.png',
      title: "submit data",
      description: "Submit proprietary data or select from expert-encoded datasets",
    },
    {
      id: 2,
      icon: '/Encode.png',
      title: "Expert encoding",
      description: "Vetted professionals encode constraints, failures, and local realities",
    },
    {
      id: 3,
      icon: '/Intergrate.png',
      title: "rag_integration",
      description: "Integrate with your RAG system for constraint-aware querying.",
    },
    {
      id: 4,
      icon: '/Decision.png',
      title: "decision_ready",
      description: "Receive AI outputs grounded in professional reality",
    }
  ];

  const [expandedStep, setExpandedStep] = useState(null);
  const toggleExpandStep = (id) => {
    setExpandedStep(expandedStep === id ? null : id);
  };

  const testimonials = [
    {
      id: 1,
      icon: "/Nairobi.png",
      header: "Nairobi County Government",
      testimonial: "”ExperBrain’s Nairobi dataset captures regulatory realities that generic climate models completely miss.” — Climate Director",
      name:'Francisca Ahmed',
    },
    {
      id: 2,
      icon: "/UNDP2.jpg",
      header: "UNDP Kenya",
      testimonial: "”The constraint-aware intelligence has transformed our project viability assessments.” — Program Lead",
      name: "Eric james",
    },
    {
      id: 3,
      icon: "/kepsa.png",
      header: "KEPSA",
      testimonial: "”Finally, AI that understands local business realities instead of textbook answers.” — Head of Sustainability",
      name: "jannet Okiya",
    },
    {
      id: 4,
      icon: "/Africa.jpg",
      header: "African Climate Foundation",
      testimonial: "”Expert-encoded failure patterns prevent costly mistakes.” — Portfolio Manager",
      name: "franklin Han"
    }
  ];

  const questions = [
    {
      id: "1",
      question: "What is expert-encoded intelligence?",
      answer: "Professional judgment, constraints, failure patterns, and tacit knowledge encoded by industry experts into structured datasets",
    },
    {
      id: "2",
      question: " How is this different from fine-tuning?",
      answer: "Fine-tuning teaches AI to talk like experts. We encode how experts actually think — including tacit knowledge that doesn’t exist in documents",
    },
    {
      id: "3",
      question: "Can we encode our proprietary data?",
      answer: "Yes. Our enterprise service allows private encoding of your data with expert validation while maintaining full confidentiality",
    },
    {
      id: "4",
      question: "What industries do you cover?",
      answer: "Currently: Climate Change & Carbon Markets (Nairobi focus). Coming soon: Healthcare, Finance, Energy, Agriculture",
    },
    {
      id: "5",
      question: "How do I integrate this with my AI systems?",
      answer: "Through standard RAG systems. We provide comprehensive documentation for integration without changing your core AI infrastructure",
    },
    {
      id: "6",
      question: " Who are your experts?",
      answer: "Industry professionals with 10+ years hands-on experience: project developers, regulators, auditors, operations leads",
    }
  ];

  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const toggleExpandQuestion = (id) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };

  return (
    <>
      <section id="img-hero">
        <div className="img-hero">
          <img src="/WhatsApp_Image_2026-02-07_at_04.21.26-removebg-preview.png" alt="Hero"/>
        </div>
      </section>

      <section id="heros">
        <div className="exper">
          <h2>Expert-Encoded Nairobi Climate Dataset</h2>
          <p>Curated by Nairobi-based climate professionals</p>
        </div>
        <div className="hero1">
          <h3>ExperBrain encodes expert decision intelligence</h3>
          <p>We work with industry-specific professional experts to encode real 
            decision intelligence into enterprise datasets — capturing constraints
            and realities AI systems routinely miss.</p>
        </div>

        <div className="buttons1"> 
          <button className="experiment"><HashLink to="/#datasets">Explore Datasets</HashLink></button> 
          <button className="experiment4"><Link to="/RequestAccess">{"Sign up  > "}</Link></button> 
          <button className="experiment5"><Link to="/RequestAccess">{"Sign in  >"}</Link></button>
          <button className="experiment6"><Link to="/RequestAccess">Docs</Link></button>
        </div>
      </section>

      <section className="core-product">
        <div className="how">
          <h1>Your Intelligence in Four Steps</h1>
        </div>
        <div className="work">
          {steps.map((step) => (
        <div key={step.id} className="work-card">
        <img src={step.icon} className="step-icon" alt={step.title}/>
        <h2>{step.title}</h2>
        <p>{step.description}</p>   {/* always visible now */}
    
      </div>

          ))}
        </div>
      </section>
       <section id="datasets">
      <h2>Explore EXPERBRAIN datasets</h2>

<div className="models">
      {/* 1. Climate Finance & Carbon Markets — Active */}
      <div className="models-section">
        <h2>Climate Finance & Carbon Markets – Nairobi</h2>
        <ul className="models-list">
          <li className="active">
            <Link to="/research">
              Nairobi Carbon Project MRV Data – Monitoring, Reporting, and Verification of carbon projects in Kenya
            </Link>
          </li>
          <li className="active">
            East Africa Carbon Market Participants & Dynamics – Buyers, sellers, investors, and market flows
          </li>
          <li className="active">
            Kenya Climate Finance & Policy Risk Layer – Regulatory, policy, and investment risk intelligence
          </li>
          <li className="active">
            African Carbon Ecosystem Behavioral Signals – Trends, adoption patterns, and bottlenecks
          </li>
        </ul>
      </div>

      {/* 2. Healthcare & Pharma */}
      <div className="models-section">
        <h2>Healthcare & Pharma</h2>
        <ul className="models-list">
          <li className="inactive">
            Kenya Malaria Trials & Research Data – Clinical trials, efficacy, and population health signals
          </li>
          <li className="inactive">
            East Africa Patient Population Health Records – Aggregated anonymized health outcomes and trends
          </li>
          <li className="inactive">
            Pharma Supply Chain & Manufacturing Risk Layer – Production, distribution, and quality control signals
          </li>
          <li className="inactive">
            Behavioral & Adoption Patterns in Healthcare Interventions – Treatment uptake, vaccination rates, compliance
          </li>
        </ul>
      </div>

      {/* 3. Finance */}
      <div className="models-section">
        <h2>Finance</h2>
        <ul className="models-list">
          <li className="inactive">
            Nairobi Corporate & SME Performance Metrics – Revenue, growth, risk, and credit behavior
          </li>
          <li className="inactive">
            Kenya Market & Asset Intelligence – Stocks, commodities, and investment signals
          </li>
          <li className="inactive">
            Regulatory Compliance Landscape (Kenya & East Africa) – Central bank, tax, and operational regulations
          </li>
          <li className="inactive">
            Behavioral Finance & Social Signals – Investor sentiment, herd behavior, and decision triggers
          </li>
        </ul>
      </div>

      {/* 4. Agriculture */}
      <div className="models-section">
        <h2>Agriculture</h2>
        <ul className="models-list">
          <li className="inactive">
            Kenya Smallholder & Commercial Crop & Soil Data – Yield, soil quality, and farm performance
          </li>
          <li className="inactive">
            East Africa Agricultural Market & Supply Chain Intelligence – Input/output flows, pricing, and demand trends
          </li>
          <li className="inactive">
            Climate & Environmental Risk Layer (Kenya Agriculture) – Drought, rainfall, pest, and disease patterns
          </li>
          <li className="inactive">
            Farmer Behavioral & Adoption Signals – Fertilizer use, crop selection, and technology adoption
          </li>
        </ul>
      </div>

      {/* 5. Legal & Compliance */}
      <div className="models-section">
        <h2>Legal & Compliance</h2>
        <ul className="models-list">
          <li className="inactive">
            Kenya & East Africa Regulatory Landscape Mapping – Laws, regulations, updates, and compliance requirements
          </li>
          <li className="inactive">
            Regional Case Law & Precedents Dataset – Past rulings, trends, and judicial behavior patterns
          </li>
          <li className="inactive">
            Operational & Contractual Risk Intelligence – Contracts, liabilities, and enforcement data
          </li>
          <li className="inactive">
            Behavioral & Ecosystem Signals in Legal Compliance – How firms and regulators act, respond, and enforce
          </li>
        </ul>
      </div>
      </div>
    </section>


     

      <section id="integration">
        <h1>ExperBrain is enabled with RAG systems</h1>
        <p>RAG systems ground AI outputs in expert-encoded constraints and realities.</p>
        <div className="integrations-btn">
          <button className="integration-btn">
            <Link to="https://docs.experbrain.com/rag-setup">RAG Integration Documentation</Link>
          </button>
        </div>
      </section>

      <section id="testimonials">
        <h1>Testimonials</h1>
        <div className="textmonials">
          {testimonials.map((item) => (
            <div key={item.id} className="div-test">
              <img src={item.icon} className="test-logo" alt={item.header}/>
              <h4>{item.header}</h4>
              <p>{item.testimonial}</p>
              <p className="name">{item.name}</p>
            </div>
          ))}
        </div>
      </section>   

      <section id="questions">
  <div className="faqs">
    <h1>FAQs</h1>
  
  </div>
 <div className="quiz">
  <div className="asked-questions">
    {questions.map((item) => (
      <div key={item.id} className="questions2">
        {/* Wrap question + toggle together */}
        <div className="question-header" onClick={() => toggleExpandQuestion(item.id)}>
          <h2>{item.question}</h2>
          <span className="toggle-icon">
            {expandedQuestion === item.id ? "-" : "+"}
          </span>
        </div>
        {expandedQuestion === item.id && <p>{item.answer}</p>}
      </div>
    ))}
  </div>
</div>

</section>


    </>
  );
}

export default Hero;
