import type { TAppRoute } from '@/app/types/router';
import loadable from '@loadable/component';

// main 도메인 업무 페이지 가져오기
const AccordionEx = loadable(() => import('@/domains/example/pages/component-list/AccordionEx'));
const AlertDialogEx = loadable(() => import('@/domains/example/pages/component-list/AlertDialogEx'));
const AlertEx = loadable(() => import('@/domains/example/pages/component-list/AlertEx'));
const BadgeEx = loadable(() => import('@/domains/example/pages/component-list/BadgeEx'));
const ButtonEx = loadable(() => import('@/domains/example/pages/component-list/ButtonEx'));
const CalendarEx = loadable(() => import('@/domains/example/pages/component-list/CalendarEx'));
const CheckboxEx = loadable(() => import('@/domains/example/pages/component-list/CheckboxEx'));
const ConfirmDialogEx = loadable(() => import('@/domains/example/pages/component-list/ConfirmDialogEx'));
const DialogEx = loadable(() => import('@/domains/example/pages/component-list/DialogEx'));
const IconEx = loadable(() => import('@/domains/example/pages/component-list/IconEx'));
const SelectEx = loadable(() => import('@/domains/example/pages/component-list/SelectEx'));
const SpinnerEx = loadable(() => import('@/domains/example/pages/component-list/SpinnerEx'));
const TableEx = loadable(() => import('@/domains/example/pages/component-list/TableEx'));

// 라우터 객체 예제 컴포넌트 ========================================
const RouterPushEx = loadable(() => import('@/domains/example/pages/api-list/routers/RouterPushEx'));
const RouterPushExPage01 = loadable(() => import('@/domains/example/pages/api-list/router-ex/RouterPushExPage01'));
const RouterGoBackEx = loadable(() => import('@/domains/example/pages/api-list/routers/RouterGoBackEx'));

// Hook 함수 예제 컴포넌트 ========================================
const HookUseAPIEx = loadable(() => import('@/domains/example/pages/api-list/hooks/HookUseAPIEx'));
const HookUseReduxAPIEx = loadable(() => import('@/domains/example/pages/api-list/hooks/HookUseReduxAPIEx'));

// $ui 객체 예제 컴포넌트 =========================================
const UIAlertDialogEx = loadable(() => import('@/domains/example/pages/api-list/ui/UIAlertDialogEx'));
const UIConfirmDialogEx = loadable(() => import('@/domains/example/pages/api-list/ui/UIConfirmDialogEx'));


// $util 객체 예제 컴포넌트 =======================================
const StringUtilsEx = loadable(() => import('@/domains/example/pages/api-list/utils/StringUtilsEx'));
const DateUtilsEx = loadable(() => import('@/domains/example/pages/api-list/utils/DateUtilsEx'));
const FormatUtilsEx = loadable(() => import('@/domains/example/pages/api-list/utils/FormatUtilsEx'));

// specific 예제 컴포넌트 ========================================
const FormDetailEx = loadable(() => import('@/domains/example/pages/specific-list/FormDetailEx'));
const DashboardEx = loadable(() => import('@/domains/example/pages/specific-list/DashboardEx'));
const JoinMemberEx = loadable(() => import('@/domains/example/pages/specific-list/JoinMemberEx'));
const TableUtilizationEx = loadable(() => import('@/domains/example/pages/specific-list/TableUtilizationEx'));

const routes: TAppRoute[] = [
	{
		path: 'components/accordion',
		element: <AccordionEx />,
		name: 'AccordionEx',
	},
	{
		path: 'components/alert-dialog',
		element: <AlertDialogEx />,
		name: 'AlertDialogEx',
	},
	{
		path: 'components/alert',
		element: <AlertEx />,
		name: 'AlertEx',
	},
	{
		path: 'components/badge',
		element: <BadgeEx />,
		name: 'BadgeEx',
	},
	{
		path: 'components/button',
		element: <ButtonEx />,
		name: 'ButtonEx',
	},
	{
		path: 'components/calendar',
		element: <CalendarEx />,
		name: 'CalendarEx',
	},
	{
		path: 'components/checkbox',
		element: <CheckboxEx />,
		name: 'CheckboxEx',
	},
	{
		path: 'components/confirm-dialog',
		element: <ConfirmDialogEx />,
		name: 'ConfirmDialogEx',
	},
	{
		path: 'components/dialog',
		element: <DialogEx />,
		name: 'DialogEx',
	},
	{
		path: 'components/icon',
		element: <IconEx />,
		name: 'IconEx',
	},
	{
		path: 'components/select',
		element: <SelectEx />,
		name: 'SelectEx',
	},
	{
		path: 'components/spinner',
		element: <SpinnerEx />,
		name: 'SpinnerEx',
	},
	{
		path: 'components/table',
		element: <TableEx />,
		name: 'TableEx',
	},
	// api 예제 라우터 ==============================
	{
		path: 'api/router-push',
		element: <RouterPushEx />,
		name: 'RouterPushEx',
	},
	{
		path: 'api/router-goback',
		element: <RouterGoBackEx />,
		name: 'RouterGoBackEx',
	},
	{
		path: 'api/router-push-example-page01',
		element: <RouterPushExPage01 />,
		name: 'RouterPushExPage01',
	},
	{
		path: 'api/use-api-ex',
		element: <HookUseAPIEx />,
		name: 'HookUseAPIEx',
	},
	{
		path: 'api/use-redux-api-ex',
		element: <HookUseReduxAPIEx />,
		name: 'HookUseReduxAPIEx',
	},
	// api $ui 관련 라우터 ================================
	{
		path: 'api/ui-alert-dialog-ex',
		element: <UIAlertDialogEx />,
		name: 'UIAlertDialogEx',
	},
	{
		path: 'api/ui-confirm-dialog-ex',
		element: <UIConfirmDialogEx />,
		name: 'UIConfirmDialogEx',
	},
	// api $util 관련 라우터 ==============================
	{
		path: 'api/util-date-ex',
		element: <DateUtilsEx />,
		name: 'DateUtilsEx',
	},
	{
		path: 'api/util-format-ex',
		element: <FormatUtilsEx />,
		name: 'FormatUtilsEx',
	},
	{
		path: 'api/util-string-ex',
		element: <StringUtilsEx />,
		name: 'StringUtilsEx',
	},
	// specific 예제 관련 라우터 ==============================
	{
		path: 'specific/form-detail',
		element: <FormDetailEx />,
		name: 'FormDetailEx',
	},
	{
		path: 'specific/join-member',
		element: <JoinMemberEx />,
		name: 'JoinMemberEx',
	},
	{
		path: 'specific/table-util',
		element: <TableUtilizationEx />,
		name: 'TableUtilizationEx',
	},
	{
		path: 'specific/dashboard',
		element: <DashboardEx />,
		name: 'DashboardEx',
	},
];

export default routes;
