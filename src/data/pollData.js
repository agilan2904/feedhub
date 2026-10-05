export const brand = {
  name: 'FeedHub',
  tagline: 'Your voice shapes what comes next.',
  support: 'Simple feedback. Better decisions.',
};

export const user = { name: 'Rohan', initials: 'R', unread: 2 };

export const navItems = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'active', label: 'Active', path: '/active' },
  { id: 'results', label: 'Results', path: '/results' },
];

export const activePoll = {
  id: 'p-1248',
  question: 'How satisfied are you with our online learning platform?',
  hint: 'Select the option that best represents your experience.',
  totalResponses: 1248,
  closes: 'Closes Oct 12, 2026',
  duration: 'Less than a minute',
  options: [
    { id: 'very-satisfied', label: 'Very Satisfied', description: 'Exceeded my expectations', votes: 599 },
    { id: 'satisfied', label: 'Satisfied', description: 'Met my expectations', votes: 387 },
    { id: 'neutral', label: 'Neutral', description: 'It was okay', votes: 150 },
    { id: 'dissatisfied', label: 'Dissatisfied', description: 'Needs improvement', votes: 75 },
    { id: 'very-dissatisfied', label: 'Very Dissatisfied', description: 'Did not meet my expectations', votes: 37 },
  ],
};

// Home hero product demo
export const demoPoll = {
  question: 'How was your experience?',
  meta: 'Product survey · 4 options',
  options: [
    { label: 'Very Satisfied', pct: 44 },
    { label: 'Satisfied', pct: 28 },
    { label: 'Neutral', pct: 18 },
    { label: 'Dissatisfied', pct: 10 },
  ],
  quotes: [
    { text: 'Great experience!', tone: '#C7D2FE' },
    { text: 'Very useful', tone: '#BBF7D0' },
    { text: 'Could be improved', tone: '#FDE68A' },
  ],
  insight: { value: 72, label: 'Positive', split: [72, 18, 10] },
};

export const steps = [
  { n: '01', title: 'Ask', body: 'Create a question people care about.' },
  { n: '02', title: 'Collect', body: 'Let people share their opinion.' },
  { n: '03', title: 'Understand', body: 'Turn responses into clear insights.' },
];

export const features = [
  { id: 'fast', icon: 'zap', title: 'Fast Feedback', body: 'Collect responses in seconds.' },
  {
    id: 'anon',
    icon: 'shield',
    title: 'Anonymous Responses',
    body: 'Give people a comfortable space to share honest opinions.',
  },
  {
    id: 'insight',
    icon: 'chart',
    title: 'Actionable Results',
    body: 'Turn feedback into clear, understandable insights.',
  },
];

export const kpis = [
  {
    id: 'polls',
    label: 'Total Polls',
    value: 24,
    format: 'number',
    icon: 'poll',
    trend: '+3',
    trendLabel: 'this month',
  },
  {
    id: 'active',
    label: 'Active Polls',
    value: 3,
    format: 'number',
    icon: 'pulse',
    trend: '+1',
    trendLabel: 'this week',
  },
  {
    id: 'responses',
    label: 'Total Responses',
    value: 12482,
    format: 'number',
    icon: 'users',
    trend: '+12.4%',
    trendLabel: 'from last month',
  },
  {
    id: 'participation',
    label: 'Average Participation',
    value: 76,
    format: 'percent',
    icon: 'trend',
    trend: '+2.8%',
    trendLabel: 'from last month',
  },
];

export const participationTrend = [
  { label: 'Mar', value: 58 },
  { label: 'Apr', value: 61 },
  { label: 'May', value: 60 },
  { label: 'Jun', value: 66 },
  { label: 'Jul', value: 69 },
  { label: 'Aug', value: 72 },
  { label: 'Sep', value: 74 },
  { label: 'Oct', value: 76 },
];

export const recentPolls = [
  {
    id: 'r1',
    title: 'Rate your overall experience',
    status: 'Completed',
    responses: 982,
    date: 'Sep 18, 2026',
    category: 'Experience',
    participation: 74,
  },
  {
    id: 'r2',
    title: 'How useful are our new features?',
    status: 'Completed',
    responses: 756,
    date: 'Sep 29, 2026',
    category: 'Product',
    participation: 69,
  },
  {
    id: 'r3',
    title: 'What should we improve next?',
    status: 'Active',
    responses: 1248,
    date: 'Oct 3, 2026',
    category: 'Roadmap',
    participation: 78,
  },
];

export const otherActivePolls = [
  {
    id: 'a2',
    title: 'How clear are the assignment instructions?',
    status: 'Active',
    responses: 412,
    date: 'Oct 1, 2026',
    category: 'Courses',
    participation: 61,
  },
  {
    id: 'a3',
    title: 'Rate the new video course player',
    status: 'Active',
    responses: 318,
    date: 'Oct 4, 2026',
    category: 'Product',
    participation: 47,
  },
];

export const dateRanges = ['Last 7 days', 'Last 30 days', 'Last 90 days'];
export const statusFilters = ['All', 'Active', 'Completed', 'Drafts'];
export const drafts = [];
