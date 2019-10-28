interface SourceParameters {
    camera: THREE.Camera | null;
    renderer: THREE.WebGLRenderer | null;
    sourceType: "imageData";
    width: number;
    height: number;
}
/**
 * Source describes how and where THREE AR should accept imagery to
 * track markers for. Images, Video and the Webcam can be used as sources.
 * @param parameters parameters for determining if it should come from a webcam or a video
 */
export declare class Source {
    private parameters;
    constructor(parameters: Partial<SourceParameters>);
    setParameters(parameters: any): void;
    readonly renderer: import("three").WebGLRenderer | null;
    readonly camera: import("three").Camera | null;
    dispose(): void;
    initialize(): Promise<{}>;
    private _initSourceImageData;
}
export default Source;
