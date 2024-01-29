/**
 * The folder @/components/admin/sub-components contains sub component of all the pages,
 * so here you will find folder names which are listed in root pages.
 */

// sub components for /pages/dashboard
import ActiveProjects from '@/components/admin/sub-components/dashboard/ActiveProjects';
import TasksPerformance from '@/components/admin/sub-components/dashboard/TasksPerformance';
import Teams from '@/components/admin/sub-components/dashboard/Teams';

// sub components for /pages/profile
import AboutMe from '@/components/admin/sub-components/profile/AboutMe';
import ActivityFeed from '@/components/admin/sub-components/profile/ActivityFeed';
import MyTeam from '@/components/admin/sub-components/profile/MyTeam';
import ProfileHeader from '@/components/admin/sub-components/profile/ProfileHeader';
import ProjectsContributions from '@/components/admin/sub-components/profile/ProjectsContributions';
import RecentFromBlog from '@/components/admin/sub-components/profile/RecentFromBlog';

// sub components for /pages/billing
import CurrentPlan from '@/components/admin/sub-components/billing/CurrentPlan';
import BillingAddress from '@/components/admin/sub-components/billing/BillingAddress';

// sub components for /pages/settings
import DeleteAccount from '@/components/admin/sub-components/settings/DeleteAccount';
import EmailSetting from '@/components/admin/sub-components/settings/EmailSetting';
import GeneralSetting from '@/components/admin/sub-components/settings/GeneralSetting';
import Notifications from '@/components/admin/sub-components/settings/Notifications';
import Preferences from '@/components/admin/sub-components/settings/Preferences';


export {
   ActiveProjects,
   TasksPerformance,
   Teams,
   
   AboutMe,
   ActivityFeed,
   MyTeam,
   ProfileHeader,
   ProjectsContributions,
   RecentFromBlog,

   CurrentPlan,
   BillingAddress,

   DeleteAccount, 
   EmailSetting,  
   GeneralSetting, 
   Notifications, 
   Preferences
};
