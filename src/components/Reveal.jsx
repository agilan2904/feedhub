import { useInView } from '../hooks/useMotion.js';

// Fades + lifts children in the first time they scroll into view.
export default function Reveal({ as: Tag = 'div', delay = 0, variant = 'up', className = '', children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal ${variant} ${inView ? 'in' : ''} ${className}`}
      style={{ '--d': delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
