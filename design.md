# FeedHub Design System (3.0)

## Brand Identity
- **Name:** FeedHub (formerly FeedbackHub)
- **Tagline:** Your voice shapes what comes next.
- **Supporting line:** Simple feedback. Better decisions.
- **Personality:** clear, human, smart, trustworthy, modern.
- **Voice:** short sentences, second person, no jargon. Success copy is warm and brief ("Thanks for sharing.").

## Logo
A 34px rounded square (11px radius) filled with the brand gradient. It holds three white feedback bars of different heights, with a small speech-bubble tail at the bottom-left corner. The wordmark "FeedHub" is set in Inter 800 with −0.03em tracking.
- **Hover:** the mark scales to 1.06 and the bars dip and rebound in sequence (700ms, 80ms stagger).
- **Sizes:** 34px in the navbar, 26px in the footer, and a 32px SVG favicon.

## Color Palette
| Token | HEX | Use |
| --- | --- | --- |
| Primary | #4F46E5 | CTA, active states, focus, bars |
| Primary dark | #3730A3 | Text on tints |
| Primary light | #EEF2FF | Selected fills, badges |
| Secondary | #6366F1 | Chart stroke start, glows |
| Accent | #8B5CF6 | Steps connector, gradient end tone |
| Success | #16A34A | Check, Completed, positive trend |
| Warning | #F59E0B | Demo stars |
| Error | #DC2626 | Notification dot |
| Background | #F8FAFC | Page |
| Surface | #FFFFFF | Cards |
| Text | #0F172A | Primary text |
| Secondary text | #64748B | Supporting text |
| Border | #E2E8F0 | Hairlines |

**Brand gradient** `linear-gradient(135deg, #4F46E5, #7C3AED)` is used in only four places: the logo, the hero word "voice", the main "Give Feedback" CTA, and accent details (the insight figure and the trend line). Ordinary buttons stay solid.

## Typography
Inter, falling back to system-ui.
- **Display (hero):** 72px desktop, about 56px tablet, 38–44px mobile; weight 800; line height 1.0; tracking −0.04em.
- **Section headings:** 28–42px / 750.
- **Page headings:** 30–40px / 750.
- **Card titles:** 18–19px / 600–650.
- **Body:** 16–18px (lead) and 15px (UI).
- **Navigation:** 15px, 500 normally and 600 when active.
- **Buttons:** 15–16px / 600.
- **Statistics:** 32px / 750, tabular figures.

## Spacing
4px base: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, plus 96 for home section rhythm. Home sections sit 96px apart (64px on mobile).

## Radius
8 (chips) · 12 (buttons, options) · 14 (large buttons, tiles) · 16 (cards) · 20–22 (poll and demo cards) · 28 (preview panel) · pill.

## Shadows
`--sh-xs`, `--sh-sm` (resting), `--sh-md` (poll card, preview panel), `--sh-lg` (hover), `--sh-float` (demo cards, `0 24px 60px rgba(49,46,129,.14)`), `--sh-primary` (CTA hover), `--ring` (focus).

## Components
- **Logo / LogoMark:** brand mark and wordmark.
- **Navbar:** 3-column grid.
- **Reveal:** wrapper that animates its content in when scrolled into view.
- **Hero + HeroDemo:** landing hero with the looping product demo.
- **HowItWorks:** three numbered steps joined by a connector line.
- **FeatureCard:** tile icon, title and body.
- **FeedbackPreview:** a second, smaller looping poll demo.
- **PollCard / PollOption / SubmitButton / SuccessState / ResultsCard / ProgressBar:** the core poll flow.
- **ResultsChart:** SVG participation line chart with hover readout.
- **KpiCard:** metric card with count-up value and trend.
- **RecentPollCard + StatusBadge:** poll listing card and its status label.
- **Segmented:** filter control with a sliding pill.
- **States:** skeletons and the empty state.
- **Footer.**

## Navigation
The navbar is a CSS grid, `1fr auto 1fr`: logo left, nav centred on the viewport, actions right. The nav sits in a soft track (#F1F5F9 at 75%). The active item gets a white pill with an indigo hairline and glow, which slides between tabs (`translateX` + `width`, 280ms). Routes: `/` Home, `/active` Active, `/results` Results; unknown paths redirect to `/`. On mobile the bar shows the logo and a menu button; the dropdown panel's links stagger in 40ms apart.

## Home Page
The Home page explains the product; it is not a dashboard.
1. **Hero (two columns):** "FEEDBACK PLATFORM" badge, the headline "Make every **voice** count.", the lead line, Give Feedback → `/active`, Explore Results → `/results`, and trust notes. On the right is HeroDemo.
2. **How FeedHub works:** Ask, Collect, Understand.
3. **Why FeedHub:** Fast Feedback, Anonymous Responses, Actionable Results.
4. **Live preview:** "See feedback in action." with the mini poll demo.

**HeroDemo loop (8.5s):**
1. Idle (0.9s).
2. Options highlight bottom to top (3 × 0.65s).
3. "Very Satisfied" is selected, with a spring on the radio and the stars filling (1.1s).
4. Result bars and percentages grow (1.5s).
5. Floating quotes and the "72% Positive" insight card appear (2.3s).
6. Gentle reset (0.7s).

Background: #F8FAFC with a masked dot grid, three blurred indigo/violet blobs drifting over 20s, and a glow behind the demo, all at low opacity.

## Active Poll
The header is centred: Active badge, "Tell us what you think.", duration and anonymity notes. The poll card keeps the established interaction:
- Options stagger in 50ms apart.
- Hover lifts 1px and tints the option.
- Selecting turns the border indigo, fills the radio with a check, and highlights the key hint.
- Number keys 1–5 select an option.
- Submit is disabled until a selection, compresses on press, shows "Submitting…", then fades out.

The success state ("Thanks for sharing." / "Your response has been recorded.") draws its check mark and offers View Results →.

## Results
Header: "Feedback results" / "See what people are saying.", plus a date-range select. Then:
- 4 KPI cards that count up from zero.
- A split row: Response Distribution (ResultsCard: bars grow 0 → value over 900ms, percentages count up, "Your response" badge) and Participation Trend (the line draws over 1.4s, the area fades in, dots pop, hovering shows the month's value).
- Recent Polls with an All / Active / Completed / Drafts filter; Drafts shows the empty state.
- Skeletons for 650ms whenever the range changes.

## Motion System
Easing: `--ease` cubic-bezier(.22,1,.36,1); `--spring` cubic-bezier(.34,1.56,.64,1).
Durations: 150ms (press), 220ms (hover/state), 280–320ms (nav, page), 400–600ms (entrance, reveal), 900–1400ms (data).
Motion is used only to show navigation, selection, progress and arrival.

## Page Transitions
`<main key={pathname}>` remounts on each route and runs `rise` (opacity 0 → 1, translateY 8px → 0, 320ms). Scroll resets to the top. There are no horizontal slides.

## Scroll Animations
`Reveal` uses IntersectionObserver (threshold 0.2) and runs once per element:
- Section intros fade and lift 20px.
- Steps stagger 140ms apart, then the connector line draws across.
- Feature cards stagger 120ms apart.
- The preview panel fades and scales from 0.97.
- The footer fades in.
- The preview demo loop only starts once it is in view.

## Micro-interactions
- **Buttons:** lift 1px on hover with a coloured shadow, the arrow nudges 3px, press scales to 0.97.
- **Cards:** lift 2px, stronger border, `--sh-lg`; icon tiles nudge up.
- **Step numbers:** switch to the gradient on hover.
- **Navbar:** bell wiggles, user chevron rotates, menus pop from their anchor.
- **Recent cards:** arrow slides 4px and the participation bar turns indigo.
- **Trend chart:** hover cursor line and enlarged dot.

## Responsive Design
- **Desktop (>1024px):** two-column hero, 3-column grids, centred nav.
- **Tablet (640–1024px):** hero stacks and centres with the demo below; preview stacks; KPIs in 2 columns; Results split stacks.
- **Mobile (<640px):** 64px header with a menu panel; 38–44px display type; full-width CTAs; simplified demo (one floating quote, no float animation); single-column steps without the connector; 72px poll options; no horizontal scroll.

## Accessibility
- Landmarks, a skip link, and `aria-current` from NavLink.
- Native radios in a `radiogroup`.
- Visible `:focus-visible` rings.
- Decorative demos are `aria-hidden`; the chart has a text `aria-label`; progress bars expose their values.
- Menus close on Escape.
- Contrast of at least 4.5:1 for text; the gradient is never used on body copy.

## Reduced Motion
Under `prefers-reduced-motion: reduce`:
- Decorative motion (blobs, floats, demo loops, sparks) stops.
- The demos freeze on their results frame.
- Reveal content shows immediately.
- Counters jump to their final values.
- Transitions are cut to about 1ms.

## UX Principles
1. Each page has one job: Home explains, Active collects, Results explains the data.
2. One primary action per view.
3. Motion explains change; it isn't decoration.
4. Show the product rather than describe it; the demos use the real poll UI.
5. Indigo means "interactive or yours".
6. Every state is designed: loading, empty, disabled, success.
