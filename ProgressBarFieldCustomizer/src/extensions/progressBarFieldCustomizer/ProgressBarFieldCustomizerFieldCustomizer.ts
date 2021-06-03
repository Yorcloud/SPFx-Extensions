import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import {
  BaseFieldCustomizer,
  IFieldCustomizerCellEventParameters
} from '@microsoft/sp-listview-extensibility';

import * as strings from 'ProgressBarFieldCustomizerFieldCustomizerStrings';
import styles from './ProgressBarFieldCustomizerFieldCustomizer.module.scss';

/**
 * If your field customizer uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IProgressBarFieldCustomizerFieldCustomizerProperties {
  // This is an example; replace with your own property
  sampleText?: string;
}

const LOG_SOURCE: string = 'ProgressBarFieldCustomizerFieldCustomizer';

export default class ProgressBarFieldCustomizerFieldCustomizer
  extends BaseFieldCustomizer<IProgressBarFieldCustomizerFieldCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    // Add your custom initialization to this method.  The framework will wait
    // for the returned promise to resolve before firing any BaseFieldCustomizer events.
    Log.info(LOG_SOURCE, 'Activated ProgressBarFieldCustomizerFieldCustomizer with properties:');
    Log.info(LOG_SOURCE, JSON.stringify(this.properties, undefined, 2));
    Log.info(LOG_SOURCE, `The following string should be equal: "ProgressBarFieldCustomizerFieldCustomizer" and "${strings.Title}"`);
    return Promise.resolve();
  }

  @override
  public onRenderCell(event: IFieldCustomizerCellEventParameters): void {
    // Use this method to perform your custom cell rendering.

    const text: string = `${this.properties.sampleText}: ${event.fieldValue}`;

    //event.domElement.innerText = text;

    event.domElement.classList.add(styles.cell);

	event.domElement.innerHTML = `
	<div class='${styles.ProgressBarFieldCustomizer}'>
	<div class='${styles.full}'>
	<div style='width: ${event.fieldValue}px; background:#0094ff; color:#ffffff'>&nbsp; ${event.fieldValue}
	</div>
	</div>
	</div>`
  }

  @override
  public onDisposeCell(event: IFieldCustomizerCellEventParameters): void {
    // This method should be used to free any resources that were allocated during rendering.
    // For example, if your onRenderCell() called ReactDOM.render(), then you should
    // call ReactDOM.unmountComponentAtNode() here.
    super.onDisposeCell(event);
  }
}
