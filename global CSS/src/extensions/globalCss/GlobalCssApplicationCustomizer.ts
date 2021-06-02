import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'GlobalCssApplicationCustomizerStrings';

const LOG_SOURCE: string = 'GlobalCssApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IGlobalCssApplicationCustomizerProperties {
  // This is an example; replace with your own property
  cssurl: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class GlobalCssApplicationCustomizer
  extends BaseApplicationCustomizer<IGlobalCssApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    
	const cssUrl: string = this.properties.cssurl;

	console.log('CSS URL',cssUrl)

	if(cssUrl) {
		const head: HTMLElement = document.getElementsByTagName("head")[0] || document.documentElement;
		
		let customStyle: HTMLLinkElement = document.createElement("link");
		customStyle.href = cssUrl;
		customStyle.rel = "stylesheet";
		customStyle.type = "text/css";
		head.insertAdjacentElement("beforeend", customStyle);
		console.log('HEAD', head)

	}

    return Promise.resolve();
  }
}
