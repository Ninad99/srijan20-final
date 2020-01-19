import DashboardPage from './pages/Dashboard/Dashboard';
import EventsPage from './pages/Events/Events';
import MerchandisePage from './pages/Merchandise/Merchandise';
import TalksPage from './pages/Talks/Talks';
import TeamPage from './pages/Team/Team';
import TechnofriesPage from './pages/Technofries/Technofries';
import WorkshopsPage from './pages/Workshops/Workshops';
import ProfilePage from './pages/Profile/Profile';

export const routes = [
  {
    path: '/dashboard',
    component: DashboardPage,
    layout: '/app',
    routeName: 'Dashboard',
    icon: 'dashboard'
  },
  {
    path: '/events',
    component: EventsPage,
    layout: '/app',
    routeName: 'Events',
    icon: 'schedule'
  },
  {
    path: '/merchandise',
    component: MerchandisePage,
    layout: '/app',
    routeName: 'Merchandise',
    icon: 'shopping'
  },
  {
    path: '/talks',
    component: TalksPage,
    layout: '/app',
    routeName: 'Talks',
    icon: 'audio'
  },
  {
    path: '/team',
    component: TeamPage,
    layout: '/app',
    routeName: 'Team',
    icon: 'team'
  },
  {
    path: '/technofries',
    component: TechnofriesPage,
    layout: '/app',
    routeName: 'Technofries',
    icon: 'read'
  },
  {
    path: '/workshops',
    component: WorkshopsPage,
    layout: '/app',
    routeName: 'Workshops',
    icon: 'crown'
  },
  {
    path: '/profile',
    component: ProfilePage,
    layout: '/app',
    routeName: 'Profile',
    icon: 'database'
  }
];