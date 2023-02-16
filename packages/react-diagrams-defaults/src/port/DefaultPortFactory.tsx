import { DefaultPortModel } from './DefaultPortModel';
import { AbstractModelFactory } from '@bananacloud/react-canvas-core';
import { DiagramEngine } from '@bananacloud/react-diagrams-core';

export class DefaultPortFactory extends AbstractModelFactory<DefaultPortModel, DiagramEngine> {
	constructor() {
		super('default');
	}

	generateModel(): DefaultPortModel {
		return new DefaultPortModel({
			name: 'unknown'
		});
	}
}
