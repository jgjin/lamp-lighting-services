import { DefaultApi as LampApi, ServerConfiguration, createConfiguration } from "../open-api"

const lampApi = new LampApi(createConfiguration({
    baseServer: new ServerConfiguration(
        "http://127.0.0.1:5000", {}
    ),
}))

export default lampApi
