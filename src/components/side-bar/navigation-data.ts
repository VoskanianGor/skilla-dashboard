import BriefcaseIcon from 'assets/icons/side-bar/briefcase.svg'
import CallIcon from 'assets/icons/side-bar/calls.svg'
import ChartIcon from 'assets/icons/side-bar/chart.svg'
import DocumentsIcon from 'assets/icons/side-bar/documents.svg'
import LocalLibraryIcon from 'assets/icons/side-bar/local_library.svg'
import MailIcon from 'assets/icons/side-bar/mail.svg'
import OrdersIcon from 'assets/icons/side-bar/orders.svg'
import PeopleIcon from 'assets/icons/side-bar/people.svg'
import PermIdentityIcon from 'assets/icons/side-bar/perm_identity.svg'
import SettingsIcon from 'assets/icons/side-bar/settings.svg'

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
