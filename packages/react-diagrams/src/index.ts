import {
	DefaultDiagramState,
	DiagramEngine,
	LinkLayerFactory,
	NodeLayerFactory
} from '@bananacloud/react-diagrams-core';
import {
	DefaultLabelFactory,
	DefaultLinkFactory,
	DefaultNodeFactory,
	DefaultPortFactory
} from '@bananacloud/react-diagrams-defaults';
import { PathFindingLinkFactory } from '@bananacloud/react-diagrams-routing';
import { SelectionBoxLayerFactory, CanvasEngineOptions } from '@bananacloud/react-canvas-core';

export * from '@bananacloud/react-canvas-core';
export * from '@bananacloud/react-diagrams-core';
export * from '@bananacloud/react-diagrams-defaults';
export * from '@bananacloud/react-diagrams-routing';

/**
 * Construct an engine with the defaults installed
 */
export default (options: CanvasEngineOptions = {}): DiagramEngine => {
	const engine = new DiagramEngine(options);

	// register model factories
	engine.getLayerFactories().registerFactory(new NodeLayerFactory());
	engine.getLayerFactories().registerFactory(new LinkLayerFactory());
	engine.getLayerFactories().registerFactory(new SelectionBoxLayerFactory());

	engine.getLabelFactories().registerFactory(new DefaultLabelFactory());
	engine.getNodeFactories().registerFactory(new DefaultNodeFactory()); // i cant figure out why
	engine.getLinkFactories().registerFactory(new DefaultLinkFactory());
	engine.getLinkFactories().registerFactory(new PathFindingLinkFactory());
	engine.getPortFactories().registerFactory(new DefaultPortFactory());

	// register the default interaction behaviours
	engine.getStateMachine().pushState(new DefaultDiagramState());
	return engine;
};
