import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Lamp } from '../models/Lamp';
import { ModelError } from '../models/ModelError';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiCreateLampRequest {
    /**
     * A lamp to create
     * @type Lamp
     * @memberof DefaultApicreateLamp
     */
    lamp: Lamp
}

export interface DefaultApiGetLampRequest {
    /**
     * An ID of a lamp
     * @type number
     * @memberof DefaultApigetLamp
     */
    lampId: number
}

export interface DefaultApiListAllLampsRequest {
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a lamp
     * @param param the request object
     */
    public createLampWithHttpInfo(param: DefaultApiCreateLampRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createLampWithHttpInfo(param.lamp,  options).toPromise();
    }

    /**
     * Creates a lamp
     * @param param the request object
     */
    public createLamp(param: DefaultApiCreateLampRequest, options?: Configuration): Promise<void> {
        return this.api.createLamp(param.lamp,  options).toPromise();
    }

    /**
     * Gets info for an identified lamp
     * @param param the request object
     */
    public getLampWithHttpInfo(param: DefaultApiGetLampRequest, options?: Configuration): Promise<HttpInfo<Lamp>> {
        return this.api.getLampWithHttpInfo(param.lampId,  options).toPromise();
    }

    /**
     * Gets info for an identified lamp
     * @param param the request object
     */
    public getLamp(param: DefaultApiGetLampRequest, options?: Configuration): Promise<Lamp> {
        return this.api.getLamp(param.lampId,  options).toPromise();
    }

    /**
     * Lists all lamps
     * @param param the request object
     */
    public listAllLampsWithHttpInfo(param: DefaultApiListAllLampsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Lamp>>> {
        return this.api.listAllLampsWithHttpInfo( options).toPromise();
    }

    /**
     * Lists all lamps
     * @param param the request object
     */
    public listAllLamps(param: DefaultApiListAllLampsRequest = {}, options?: Configuration): Promise<Array<Lamp>> {
        return this.api.listAllLamps( options).toPromise();
    }

}
