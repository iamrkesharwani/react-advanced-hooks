import { useTheme } from './context/useTheme';
import Card from './components/Card';
import { Sun, Moon, Palette } from 'lucide-react';

const App = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="app-container">
      <div className="app-content">
        <h1 className="app-title">Multi Theme Changer</h1>

        <div className="theme-display">
          <span>Current Theme:</span>
          <span className="theme-badge">{theme}</span>
        </div>

        <div className="button-group">
          <button onClick={() => setTheme('light')}>
            <Sun
              size={18}
              style={{ marginRight: '8px', verticalAlign: 'middle' }}
            />
            Light
          </button>
          <button onClick={() => setTheme('dark')}>
            <Moon
              size={18}
              style={{ marginRight: '8px', verticalAlign: 'middle' }}
            />
            Dark
          </button>
          <button onClick={() => setTheme('custom')}>
            <Palette
              size={18}
              style={{ marginRight: '8px', verticalAlign: 'middle' }}
            />
            Custom
          </button>
        </div>

        <div className="cards-grid">
          <Card
            icon="Rocket"
            title="Fast Performance"
            description="Lightning-fast theme switching with smooth transitions and optimized rendering."
          />
          <Card
            icon="Sparkles"
            title="Beautiful Design"
            description="Carefully crafted color schemes that look great in any theme you choose."
          />
          <Card
            icon="Zap"
            title="Easy to Use"
            description="Simple API and intuitive controls make theme management effortless."
          />
        </div>
      </div>
    </div>
  );
};

export default App;
