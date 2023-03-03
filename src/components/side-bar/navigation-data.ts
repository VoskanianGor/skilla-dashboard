import BriefcaseIcon from 'assets/icons/briefcase.svg'
import CallIcon from 'assets/icons/calls.svg'
import ChartIcon from 'assets/icons/chart.svg'
import DocumentsIcon from 'assets/icons/documents.svg'
import LocalLibraryIcon from 'assets/icons/local_library.svg'
import MailIcon from 'assets/icons/mail.svg'
import OrdersIcon from 'assets/icons/orders.svg'
import PeopleIcon from 'assets/icons/people.svg'
import PermIdentityIcon from 'assets/icons/perm_identity.svg'
import SettingsIcon from 'assets/icons/settings.svg'

export const navigationData = [
	{
		title: 'Итоги',
		Icon: ChartIcon,
		path: '/results',
	},
	{
		title: 'Заказы',
		Icon: OrdersIcon,
		path: '/orders',
	},
	{
		title: 'Сообщения',
		Icon: MailIcon,
		path: '/messages',
	},
	{
		title: 'Звонки',
		Icon: CallIcon,
		path: '/calls',
	},
	{
		title: 'Контрагенты',
		Icon: PeopleIcon,
		path: '/contragents',
	},
	{
		title: 'Документы',
		Icon: DocumentsIcon,
		path: '/documents',
	},
	{
		title: 'Исполнители',
		Icon: PermIdentityIcon,
		path: '/executors',
	},
	{
		title: 'Отчеты',
		Icon: BriefcaseIcon,
		path: '/reports',
	},
	{
		title: 'База знаний',
		Icon: LocalLibraryIcon,
		path: '/knowledge',
	},
	{
		title: 'Настройки',
		Icon: SettingsIcon,
		path: '/settings',
	},
] as const
