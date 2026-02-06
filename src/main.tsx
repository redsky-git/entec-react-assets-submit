import { createRoot } from 'react-dom/client';
import AppProvider from './AppProvider';
import App from './App.tsx';
import '@/assets/styles/app.css';

createRoot(document.getElementById('root')!).render(
	<AppProvider>
		<App />
	</AppProvider>,
);
