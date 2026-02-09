import { Link } from 'react-router-dom';

function Datasets() {
  return (
    <section id="datasets">
      <h1>Explore EXPERBRAIN datasets</h1>

      {/* 1. Climate Finance & Carbon Markets — Active */}
      <div className="models-section">
        <h2>Climate Finance & Carbon Markets – Nairobi</h2>
        <ul className="models-list">
          <li className="active">
            <Link to="/research">
              Nairobi Carbon Project MRV Data – Monitoring, Reporting, and Verification of carbon projects in Kenya
            </Link>
          </li>
          <li className="inactives">
            East Africa Carbon Market Participants & Dynamics – Buyers, sellers, investors, and market flows
          </li>
          <li className="inactives">
            Kenya Climate Finance & Policy Risk Layer – Regulatory, policy, and investment risk intelligence
          </li>
          <li className="inactives">
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
    </section>
  );
}

export default Datasets;
