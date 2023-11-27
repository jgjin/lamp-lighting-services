import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { Lamp } from '../models/Lamp';
import { ModelError } from '../models/ModelError';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * Creates a lamp
     * @param lamp A lamp to create
     */
    public createLampWithHttpInfo(lamp: Lamp, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createLamp(lamp, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createLampWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a lamp
     * @param lamp A lamp to create
     */
    public createLamp(lamp: Lamp, _options?: Configuration): Observable<void> {
        return this.createLampWithHttpInfo(lamp, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Gets info for an identified lamp
     * @param lampId An ID of a lamp
     */
    public getLampWithHttpInfo(lampId: number, _options?: Configuration): Observable<HttpInfo<Lamp>> {
        const requestContextPromise = this.requestFactory.getLamp(lampId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLampWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets info for an identified lamp
     * @param lampId An ID of a lamp
     */
    public getLamp(lampId: number, _options?: Configuration): Observable<Lamp> {
        return this.getLampWithHttpInfo(lampId, _options).pipe(map((apiResponse: HttpInfo<Lamp>) => apiResponse.data));
    }

    /**
     * Lists all lamps
     */
    public listAllLampsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Lamp>>> {
        const requestContextPromise = this.requestFactory.listAllLamps(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAllLampsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Lists all lamps
     */
    public listAllLamps(_options?: Configuration): Observable<Array<Lamp>> {
        return this.listAllLampsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Lamp>>) => apiResponse.data));
    }

}
