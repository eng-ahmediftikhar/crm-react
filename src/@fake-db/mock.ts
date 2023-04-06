import MockAdapter from "axios-mock-adapter";
import axiosAdaptor from "./axios";

const mock = new MockAdapter(axiosAdaptor);

export default mock;
