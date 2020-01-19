import DashboardPage from './pages/Dashboard/Dashboard';
import EventsPage from './pages/Events/Events';
import MerchandisePage from './pages/Merchandise/Merchandise';
import TalksPage from './pages/Talks/Talks';
import TeamPage from './pages/Team/Team';
import TechnofriesPage from './pages/Technofries/Technofries';
import WorkshopsPage from './pages/Workshops/Workshops';

export const routes = [
  {
    path: '/dashboard',
    component: DashboardPage,
    layout: '/app',
    routeName: 'Dashboard'
  },
  {
    path: '/events',
    component: EventsPage,
    layout: '/app',
    routeName: 'Event'
  },
  {
    path: '/merchandise',
    component: MerchandisePage,
    layout: '/app',
    routeName: 'Merchandise'
  },
  {
    path: '/talks',
    component: TalksPage,
    layout: '/app',
    routeName: 'Talks'
  },
  {
    path: '/team',
    component: TeamPage,
    layout: '/app',
    routeName: 'Team'
  },
  {
    path: '/technofries',
    component: TechnofriesPage,
    layout: '/app',
    routeName: 'Technofries'
  },
  {
    path: '/workshops',
    component: WorkshopsPage,
    layout: '/app',
    routeName: 'Workshops'
  },
];