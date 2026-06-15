# Internationalization (i18n) Usage Guide

This project uses `react-i18next` for internationalization support, with English and Chinese language switching.

## Architecture Benefits

✅ **English keys only in code** — no if-else needed, clean code
✅ **Centralized translations** — all translations in JSON files
✅ **Type safety** — TypeScript support
✅ **Automatic language detection** — auto-selects based on browser language
✅ **Persistence** — language choice saved to localStorage

## Basic Usage

### 1. Using translations in components

```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('welcome.title')}</h1>
      <button>{t('common.save')}</button>
    </div>
  );
}
```

### 2. Translations with variables

```tsx
// en.json
{
  "welcome": {
    "greeting": "Hello, {{name}}!"
  }
}

// Usage
{t('welcome.greeting', { name: 'John' })}
```

### 3. Plural forms

```tsx
// en.json
{
  "mcp": {
    "toolsAvailable": "{{count}} tool available",
    "toolsAvailable_plural": "{{count}} tools available"
  }
}

// Usage
{t('mcp.toolsAvailable', { count: 1 })} // "1 tool available"
{t('mcp.toolsAvailable', { count: 5 })} // "5 tools available"
```

### 4. Switching languages

```tsx
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: 'en' | 'zh') => {
    i18n.changeLanguage(lang);
  };

  return (
    <button onClick={() => changeLanguage('zh')}>Chinese</button>
  );
}
```

## Adding New Translations

1. Add the English translation in `src/renderer/i18n/locales/en.json`
2. Add the Chinese translation in `src/renderer/i18n/locales/zh.json`
3. Reference it in code using `t('key.path')`

## Translation File Structure

Organize by feature module:

```json
{
  "common": { ... },      // Common terms
  "welcome": { ... },     // Welcome page
  "settings": { ... },    // Settings page
  "mcp": { ... },         // MCP related
  "credentials": { ... }  // Credentials related
}
```

## Language Switcher Component

A `LanguageSwitcher` component has been created and can be used anywhere:

```tsx
import { LanguageSwitcher } from './components/LanguageSwitcher';

<LanguageSwitcher />
```

## Best Practices

1. **Use meaningful keys** — `welcome.title` instead of `text1`
2. **Keep consistent hierarchy** — English and Chinese JSON structures must be identical
3. **Avoid hardcoding** — all user-visible text should go through the `t()` function
4. **Namespaces** — use dot-separated hierarchical structure to organize translations
