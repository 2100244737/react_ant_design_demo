import { Settings as LayoutSettings } from '@ant-design/pro-components';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} ={
  "navTheme": "light",
  "primaryColor": "#1890ff",
  "layout": "side",
  "contentWidth": "Fluid",
  "fixedHeader": true,
  "fixSiderbar": true,
  "pwa": false,
  "logo": "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
  "headerHeight": 48,
  "splitMenus": false,
  "footerRender": false
};

export default Settings;
