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
    layout: '/app'
  },
  {
    path: '/events',
    component: EventsPage,
    layout: '/app'
  },
  {
    path: '/merchandise',
    component: MerchandisePage,
    layout: '/app'
  },
  {
    path: '/talks',
    component: TalksPage,
    layout: '/app'
  },
  {
    path: '/team',
    component: TeamPage,
    layout: '/app'
  },
  {
    path: '/technofries',
    component: TechnofriesPage,
    layout: '/app'
  },
  {
    path: '/workshops',
    component: WorkshopsPage,
    layout: '/app'
  },
];