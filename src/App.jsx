import { useTheme } from './hooks/useTheme';
import { ThemeOption } from './components/ThemeOption';
import { ThemeIcon } from './components/ThemeIcon';

function App() {
  const { theme, toggleTheme, accent, changeAccent } = useTheme();

  return (
    <div className="min-h-screen bg-background font-sans text-foreground transition-colors duration-300">
      <div className="container mx-auto max-w-3xl p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Appearance
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Customize the look and feel of your interface.
          </p>
        </div>

        {/* Main Settings Card */}
        <div className="space-y-8 rounded-lg border border-border bg-card p-6 sm:p-8">
          {/* ----- Theme Mode Setting ----- */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-card-foreground">Theme</h3>
            <p className="text-sm text-muted-foreground">
              Select the interface style.
            </p>
            <div className="flex items-center justify-between rounded-lg border border-border bg-muted p-4">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-card p-2 text-card-foreground">
                  <ThemeIcon theme={theme} />
                </div>
                <span className="font-semibold text-card-foreground capitalize">{theme} Mode</span>
              </div>
              <button
                onClick={toggleTheme}
                className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                Toggle
              </button>
            </div>
          </div>

          {/* ----- Accent Color Setting ----- */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-card-foreground">Accent Color</h3>
            <p className="text-sm text-muted-foreground">
              Apply a primary color to components.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <ThemeOption
                themeName="Blue"
                accentColor="#60A5FA"
                isSelected={accent === 'theme-blue'}
                onSelect={() => changeAccent('theme-blue')}
              />
              <ThemeOption
                themeName="Green"
                accentColor="#22C55E"
                isSelected={accent === 'theme-green'}
                onSelect={() => changeAccent('theme-green')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;