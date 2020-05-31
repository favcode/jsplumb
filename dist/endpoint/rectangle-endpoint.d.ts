import { EndpointRepresentation } from "./endpoints";
import { ComputedAnchorPosition, Orientation } from "../factory/anchor-factory";
import { Endpoint } from "./endpoint-impl";
export declare type ComputedRectangleEndpoint = [number, number, number, number];
export declare class RectangleEndpoint<E> extends EndpointRepresentation<E, ComputedRectangleEndpoint> {
    width: number;
    height: number;
    constructor(endpoint: Endpoint<E>, params?: any);
    _compute(anchorPoint: ComputedAnchorPosition, orientation: Orientation, endpointStyle: any): ComputedRectangleEndpoint;
    getType(): string;
}
