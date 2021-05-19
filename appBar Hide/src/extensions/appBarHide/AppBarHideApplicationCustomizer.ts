import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'AppBarHideApplicationCustomizerStrings';

const LOG_SOURCE: string = 'AppBarHideApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IAppBarHideApplicationCustomizerProperties {
  // This is an example; replace with your own property
  elementId: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class AppBarHideApplicationCustomizer
  extends BaseApplicationCustomizer<IAppBarHideApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {

	const spElement: any = document.getElementById(this.properties.elementId);

	Log.info(LOG_SOURCE, `Found Element ${spElement}`);

	spElement.style = "display:none";


    return Promise.resolve();
  }
}
