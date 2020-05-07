import BaseService from "../Base";

class Log {
  getLogData(queries) {
    var customConfig = BaseService.getOptions();
    customConfig.params = queries;
    return BaseService.get("/logs", customConfig);
  }
  getRawLogData(queries) {
    var customConfig = BaseService.getOptions();
    customConfig.params = queries;
    return BaseService.get("/raw-logs", customConfig);
  }
  getFilteredLogData(queries) {
    var customConfig = BaseService.getOptions();
    customConfig.params = queries;
    return BaseService.get("/filtered-logs", customConfig);
  }
  getPrediction(queries) {
    var customConfig = BaseService.getOptions();
    customConfig.params = queries;
    return BaseService.get("/predict", customConfig);
  }
}

export default new Log();