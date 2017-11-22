import { withPluginApi } from 'discourse/lib/plugin-api';
import { onToolbarCreate } from 'discourse/components/d-editor';

function initializePlugin(api)
{
  const siteSettings = api.container.lookup('site-settings:main');

  if (siteSettings.nixietlb_ui) {

      api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "btna_button",
          group: "extras",
          icon: "siteSettings.btna_icon",
          perform: e => e.addText('siteSettings.btna_code')
        });
      });

  }
}

export default
{
  name: 'nixietlb-ui',
  initialize(container)
  {
    withPluginApi('0.1', api => initializePlugin(api), { noApi: () => priorToApi(container) });
  }
};
