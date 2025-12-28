export const FORM_STEPS = [
  {
    key: 'businessType',
    type: 'single',
    title: 'YOUR BUSINESS',
    subtitle: 'Help us understand who we\'re working with',
    options: [
      { label: 'Agency / Consultancy', value: 'agency', icon: 'Building2', description: 'Design, dev, or marketing agencies' },
      { label: 'SaaS / Tech Company', value: 'saas', icon: 'Laptop', description: 'Software-driven product companies' },
      { label: 'E-commerce / Retail', value: 'ecommerce', icon: 'ShoppingCart', description: 'Selling physical or digital goods' },
      { label: 'Real Estate', value: 'real_estate', icon: 'Building2', description: 'Property management and sales' },
      { label: 'Professional Services', value: 'services', icon: 'Briefcase', description: 'Legal, accounting, medical, etc.' },
      { label: 'Other', value: 'other', icon: 'CircleEllipsis', description: 'Anything else' }
    ]
  },
  {
    key: 'needs',
    type: 'multi',
    title: 'THE CHALLENGE',
    subtitle: 'What do you need help with? (Select all that apply)',
    options: [
      { label: 'Workflow Automation', value: 'automation', icon: 'Zap', description: 'Streamlining manual internal processes' },
      { label: 'AI Agents / Chatbots', value: 'ai', icon: 'Bot', description: 'Intelligent customer or internal assistants' },
      { label: 'System Integrations', value: 'integrations', icon: 'LinkIcon', description: 'Connecting disparate software stacks' },
      { label: 'Full-Stack Development', value: 'dev', icon: 'Code2', description: 'Custom web or mobile applications' },
      { label: 'Lead Generation Systems', value: 'leads', icon: 'BarChart3', description: 'Automating sales and marketing funnels' },
      { label: 'Other', value: 'other_needs', icon: 'CircleEllipsis', description: 'Something unique' }
    ]
  },
  {
    key: 'revenue',
    type: 'single',
    title: 'SCALE',
    subtitle: 'What is your approximate annual revenue?',
    options: [
      { label: '< $100K', value: 'under_100k', icon: 'BarChart3' },
      { label: '$100K - $500K', value: '100k_500k', icon: 'BarChart3' },
      { label: '$500K - $1M', value: '500k_1m', icon: 'BarChart3' },
      { label: '$1M - $5M', value: '1m_5m', icon: 'BarChart3' },
      { label: '$5M+', value: 'over_5m', icon: 'BarChart3' }
    ]
  },
  {
    key: 'timeline',
    type: 'single',
    title: 'TIMING',
    subtitle: 'When are you looking to start?',
    options: [
      { label: 'Immediately', value: 'asap', icon: 'Zap' },
      { label: '1 - 3 Months', value: '1_3_months', icon: 'Calendar' },
      { label: '3 - 6 Months', value: '3_6_months', icon: 'Calendar' },
      { label: 'Exploring for later', value: 'later', icon: 'CircleEllipsis' }
    ]
  },
  {
    key: 'budget',
    type: 'single',
    title: 'BUDGET',
    subtitle: 'What is your approximate budget for this project?',
    options: [
      { label: '< $10K', value: 'under_10k', icon: 'Briefcase' },
      { label: '$10K - $25K', value: '10k_25k', icon: 'Briefcase' },
      { label: '$25K - $50K', value: '25k_50k', icon: 'Briefcase' },
      { label: '$50K - $100K', value: '50k_100k', icon: 'Briefcase' },
      { label: '$100K+', value: 'over_100k', icon: 'Briefcase' }
    ]
  },
  {
    key: 'contact',
    type: 'contact',
    title: 'LET\'S CONNECT',
    subtitle: 'How can we reach you to share the audit results?'
  }
];