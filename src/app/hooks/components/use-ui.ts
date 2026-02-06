import { useContext } from 'react';
import AccordionContext from '@/app/components/ui/accordion/AccordionContext';

// AccordionContext를 사용하는 커스텀 Hook.=====================================================
export const useAccordionContext = () => {
	const context = useContext(AccordionContext);
	return context;
};
// =========================================================================================
