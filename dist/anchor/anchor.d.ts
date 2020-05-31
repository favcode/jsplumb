import { jsPlumbInstance, Offset, PointArray } from "../core";
import { EventGenerator } from "../event-generator";
import { Endpoint } from "../endpoint/endpoint-impl";
import { AnchorComputeParams, AnchorId, AnchorOptions, AnchorOrientationHint, ComputedAnchorPosition, Orientation } from "../factory/anchor-factory";
export declare class Anchor extends EventGenerator {
    instance: jsPlumbInstance<any>;
    type: AnchorId;
    isDynamic: boolean;
    isContinuous: boolean;
    isFloating: boolean;
    cssClass: string;
    elementId: string;
    id: string;
    locked: boolean;
    offsets: [number, number];
    orientation: Orientation;
    x: number;
    y: number;
    timestamp: string;
    lastReturnValue: ComputedAnchorPosition;
    positionFinder: (dropPosition: Offset, elPosition: Offset, elSize: PointArray, constructorParams: any) => any;
    clone: () => Anchor;
    constructor(instance: jsPlumbInstance<any>, params?: AnchorOptions);
    shouldFireEvent(event: string, value: any, originalEvent?: Event): boolean;
    getOrientation(endpoint?: Endpoint<any>): Orientation;
    getCurrentLocation(params: AnchorComputeParams): ComputedAnchorPosition;
    setPosition(x: number, y: number, ox: AnchorOrientationHint, oy: AnchorOrientationHint, overrideLock?: boolean): void;
    compute(params: AnchorComputeParams): ComputedAnchorPosition;
    equals(anchor: Anchor): boolean;
    getCssClass(): string;
    lock(): void;
    unlock(): void;
    isLocked(): boolean;
    over(anchor: Anchor, endpoint: Endpoint<any>): void;
    out(): void;
}
