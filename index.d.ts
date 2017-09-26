declare module 'download' {

	import * as http from 'http';
	import * as stream from 'stream';

	export interface IDownloadOptions extends http.RequestOptions {
		body?: object;
		form?: boolean;
		json: true;
		encoding?: string;
		query?: string | object;
		timeout?: number ;
		retries?: number ;
		followRedirect?: boolean;
		decompress?: boolean;
		useElectronNet?: boolean;

		filter?: (value: File, index: number) => boolean
		map?: (value: File, index: number) => any
		plugins?: Array<any>
		strip: number;

		extract?: boolean;
		filename: string;
		proxy?: string;
	}

	export function download(url: string, destination: string, options: IDownloadOptions): Promise<Buffer> & stream.Duplex

}
