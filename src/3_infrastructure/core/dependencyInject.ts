import Get from "../../lib/di/get";
import Connection from "./connection";

const dependencyInject = () => {
  ///
  Get.put<Connection>("Connection", new Connection());
};

export default dependencyInject;
