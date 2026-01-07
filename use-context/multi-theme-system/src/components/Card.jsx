import { Rocket, Sparkles, Zap } from 'lucide-react';

const iconMap = {
  Rocket: Rocket,
  Sparkles: Sparkles,
  Zap: Zap,
};

const Card = ({ title, description, icon }) => {
  const IconComponent = iconMap[icon];

  return (
    <div className="card">
      <div className="card-icon">
        {IconComponent && <IconComponent size={48} />}
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
