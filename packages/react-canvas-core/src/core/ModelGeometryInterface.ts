import { Rectangle } from '@bananacloud/geometry';

export interface ModelGeometryInterface {
	getBoundingBox(): Rectangle;
}
