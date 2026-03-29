import { definePlugin } from '@tryvienna/sdk';
import { ProfileMenuBarIcon } from './ui/MenuBarIcon';
import { ProfileMenuBarContent } from './ui/MenuBarContent';

export const profilePlugin = definePlugin({
  id: 'data-badge',
  name: 'Data Engineer / Scientist',
  description: 'Tools for data pipelines and analysis',
  icon: { text: '📊' },

  integrations: [],
  entities: [],

  canvases: {
    'menu-bar': {
      icon: ProfileMenuBarIcon,
      component: ProfileMenuBarContent,
      label: 'Data Engineer / Scientist',
      priority: 50,
    },
  },
});
