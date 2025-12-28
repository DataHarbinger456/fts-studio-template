import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { FORM_STEPS } from './constants.jsx';
import DottedGlowBackground from './components/DottedGlowBackground.jsx';
import {
    ChevronRight,
    ChevronLeft,
    Check,
    Building2,
    Laptop,
    ShoppingCart,
    Briefcase,
    Users,
    Zap,
    Bot,
    Link as LinkIcon,
    Code2,
    BarChart3,
    CircleEllipsis,
    Calendar,
    ArrowRight,
    Copy,
    CheckCircle2
} from 'lucide-react';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    businessType: '',
    needs: [],
    revenue: '',
    timeline: '',
    budget: '',
    contact: { firstName: '', lastName: '', email: '', company: '' }
  });

  const totalSteps = FORM_STEPS.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;
  const currentStepData = FORM_STEPS[currentStep];

  const handleSelectOption = (value) => {
    const key = currentStepData.key;

    if (currentStepData.type === 'multi') {
      const currentNeeds = [...(formState.needs || [])];
      if (currentNeeds.includes(value)) {
        setFormState({ ...formState, needs: currentNeeds.filter(v => v !== value) });
      } else {
        setFormState({ ...formState, needs: [...currentNeeds, value] });
      }
    } else {
      setFormState({ ...formState, [key]: value });
    }
  };

  const handleInputChange = (field, value) => {
    setFormState({
      ...formState,
      contact: { ...formState.contact, [field]: value }
    });
  };

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const isNextDisabled = useMemo(() => {
    const key = currentStepData.key;
    if (currentStepData.type === 'single') {
        return !formState[key];
    }
    if (currentStepData.type === 'multi') {
        return formState.needs.length === 0;
    }
    if (currentStepData.type === 'contact') {
        const { firstName, lastName, email } = formState.contact;
        return !firstName || !lastName || !email;
    }
    return false;
  }, [formState, currentStep, currentStepData]);

  const copySummary = () => {
    const summary = `
FTS Studios Tech Audit Summary
------------------------------
Name: ${formState.contact.firstName} ${formState.contact.lastName}
Email: ${formState.contact.email}
Company: ${formState.contact.company || 'N/A'}
Business Type: ${formState.businessType}
Needs: ${formState.needs.join(', ')}
Timeline: ${formState.timeline}
Budget: ${formState.budget}
    `.trim();

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderIcon = (iconName) => {
    const props = { size: 20, strokeWidth: 1.5 };
    switch (iconName) {
      case 'Building2': return <Building2 {...props} />;
      case 'Laptop': return <Laptop {...props} />;
      case 'ShoppingCart': return <ShoppingCart {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      case 'Users': return <Users {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Bot': return <Bot {...props} />;
      case 'LinkIcon': return <LinkIcon {...props} />;
      case 'Code2': return <Code2 {...props} />;
      case 'BarChart3': return <BarChart3 {...props} />;
      case 'CircleEllipsis': return <CircleEllipsis {...props} />;
      default: return <CircleEllipsis {...props} />;
    }
  };

  if (isSubmitted) {
    return (
      <div className="landing-page">
        <DottedGlowBackground color="rgba(59, 130, 246, 0.05)" glowColor="rgba(59, 130, 246, 0.2)" />
        <header className="header">
           <div className="logo">
             <div className="logo-box">
                <Code2 size={18} color="white" />
             </div>
             FTS Studios
           </div>
        </header>

        <main className="main-content center-fade-in">
          <div className="success-container">
            <div className="success-check">
              <Check size={40} />
            </div>
            <h1>Awesome, {formState.contact.firstName}!</h1>
            <p>Your tech audit application has been received. Let's find a time to chat.</p>

            <div className="summary-card">
              <div className="summary-header">
                <h3>Your Audit Summary</h3>
                <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={copySummary}>
                  {copied ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                  {copied ? 'Copied!' : 'Copy Results'}
                </button>
              </div>
              <div className="summary-grid">
                <div className="summary-item">
                  <span className="label">Business Type</span>
                  <span className="value">{formState.businessType}</span>
                </div>
                <div className="summary-item">
                  <span className="label">Focus Areas</span>
                  <span className="value">{formState.needs.join(', ')}</span>
                </div>
                <div className="summary-item">
                  <span className="label">Budget Range</span>
                  <span className="value">{formState.budget}</span>
                </div>
                <div className="summary-item">
                  <span className="label">Target Timeline</span>
                  <span className="value">{formState.timeline}</span>
                </div>
              </div>
            </div>

            <div className="calendar-placeholder">
               <div className="cal-header">
                 <Calendar size={20} />
                 <span>Schedule your 30-min Audit</span>
               </div>
               <div className="cal-embed-mock">
                  <p>Cal.com Booking Widget</p>
                  <small>Please select a date and time from the available slots below.</small>
               </div>
            </div>

            <div className="next-steps">
               <h3>What happens next?</h3>
               <ol>
                 <li>We review your business profile</li>
                 <li>Our team prepares custom insights for our call</li>
                 <li>We meet to discuss your workflow automation potential</li>
               </ol>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="landing-page">
      <DottedGlowBackground color="rgba(59, 130, 246, 0.03)" glowColor="rgba(59, 130, 246, 0.15)" />

      <header className="header">
        <div className="logo">
          <div className="logo-box">
             <Code2 size={18} color="white" />
          </div>
          FTS Studios
        </div>
        <button className="header-cta">Book a Call</button>
      </header>

      <main className="main-content">
        <section className="hero">
          <h1>LET'S BUILD SOMETHING <span className="gradient-text">AMAZING</span></h1>
          <p>Answer a few quick questions so we can understand your needs and prepare for our conversation.</p>
        </section>

        <div className="form-card">
          <div className="progress-container">
            <div className="progress-info">
              <span>Step {currentStep + 1} of {totalSteps}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
          </div>

          <div className="step-content">
            <h2 className="step-title">{currentStepData.title}</h2>
            <p className="step-subtitle">{currentStepData.subtitle}</p>

            {currentStepData.type === 'contact' ? (
              <div className="contact-grid">
                <div className="input-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="Jane"
                    value={formState.contact.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    value={formState.contact.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                  />
                </div>
                <div className="input-group full">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="jane@company.com"
                    value={formState.contact.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>
                <div className="input-group full">
                  <label>Company Name (Optional)</label>
                  <input
                    type="text"
                    placeholder="Acme Inc."
                    value={formState.contact.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                  />
                </div>
              </div>
            ) : (
              <div className={`options-grid ${currentStepData.options?.length > 4 ? 'grid-2' : 'grid-1'}`}>
                {currentStepData.options?.map((option) => {
                  const isSelected = currentStepData.type === 'multi'
                    ? formState.needs.includes(option.value)
                    : formState[currentStepData.key] === option.value;

                  return (
                    <div
                      key={option.value}
                      className={`option-card ${isSelected ? 'selected' : ''}`}
                      onClick={() => handleSelectOption(option.value)}
                    >
                      <div className="option-icon">
                        {renderIcon(option.icon)}
                      </div>
                      <div className="option-text">
                        <h3>{option.label}</h3>
                        {option.description && <p>{option.description}</p>}
                      </div>
                      <div className="option-check">
                         <div className={`check-circle ${isSelected ? 'checked' : ''}`}>
                           {isSelected && <Check size={12} strokeWidth={3} />}
                         </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <footer className="form-footer">
            <button
              className="btn-back"
              onClick={prevStep}
              disabled={currentStep === 0}
            >
              <ChevronLeft size={18} /> Back
            </button>
            <button
              className="btn-continue"
              onClick={nextStep}
              disabled={isNextDisabled}
            >
              {currentStep === totalSteps - 1 ? 'Finish' : 'Continue'} <ArrowRight size={18} />
            </button>
          </footer>
        </div>
      </main>

      <footer className="footer">
        <p>© 2025 FTS Studios. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<React.StrictMode><App /></React.StrictMode>);
}