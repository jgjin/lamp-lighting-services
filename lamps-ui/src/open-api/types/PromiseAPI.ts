import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Lamp } from '../models/Lamp';
import { ModelError } from '../models/ModelError';
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a lamp
     * @param lamp A lamp to create
     */
    public createLampWithHttpInfo(lamp: Lamp, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createLampWithHttpInfo(lamp, _options);
        return result.toPromise();
    }

    /**
     * Creates a lamp
     * @param lamp A lamp to create
     */
    public createLamp(lamp: Lamp, _options?: Configuration): Promise<void> {
        const result = this.api.createLamp(lamp, _options);
        return result.toPromise();
    }

    /**
     * Gets info for an identified lamp
     * @param lampId An ID of a lamp
     */
    public getLampWithHttpInfo(lampId: number, _options?: Configuration): Promise<HttpInfo<Lamp>> {
        const result = this.api.getLampWithHttpInfo(lampId, _options);
        return result.toPromise();
    }

    /**
     * Gets info for an identified lamp
     * @param lampId An ID of a lamp
     */
    public getLamp(lampId: number, _options?: Configuration): Promise<Lamp> {
        const result = this.api.getLamp(lampId, _options);
        return result.toPromise();
    }

    /**
     * Lists all lamps
     */
    public listAllLampsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Lamp>>> {
        const result = this.api.listAllLampsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Lists all lamps
     */
    public listAllLamps(_options?: Configuration): Promise<Array<Lamp>> {
        const result = this.api.listAllLamps(_options);
        return result.toPromise();
    }


}



