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
export class Source {
	private parameters: SourceParameters;

	constructor(parameters: Partial<SourceParameters>) {
		if (!parameters.renderer) {
			throw Error("ThreeJS Renderer is required");
		}

		if (!parameters.camera) {
			throw Error("ThreeJS Camera is required");
		}

		// handle default parameters
		this.parameters = {
			renderer: null,
			camera: null,
			sourceType: "imageData",
			width: 480,
			height: 853
		};

		this.setParameters(parameters);
	}

	public setParameters(parameters: any) {
		if (!parameters) {
			return;
		}

		for (const key in parameters) {
			if (key) {
				const newValue = parameters[key];

				if (newValue === undefined) {
					console.warn(key + "' parameter is undefined.");
					continue;
				}

				const currentValue = (this.parameters as any)[key];

				if (currentValue === undefined) {
					console.warn(key + "' is not a property of this Source.");
					continue;
				}

				(this.parameters as any)[key] = newValue;
			}
		}
	}

	get renderer() {
		return this.parameters.renderer;
	}

	get camera() {
		return this.parameters.camera;
	}

	public dispose() {}

	public initialize() {
		return new Promise((resolve, reject) => {
			const onReady = () => {
				resolve();
			};

			const onError = (message: Error | string) => {
				reject(message);
			};

			this._initSourceImageData(onReady, onError);
			return this;
		});
	}

	private _initSourceImageData(
		onReady: () => any,
		onError: (message: string) => any
	) {
		onReady();
	}
}

export default Source;
