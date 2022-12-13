interface PromiseResolverParam<T> {
  promise: Promise<T>;
  isLoadingCallback?: (isLoading: boolean) => void;
  successCallback?: (data: T) => void;
  errorCallback?: (error: string) => void;
}

const promiseResolver = async <T>(param: PromiseResolverParam<T>) => {
  param.isLoadingCallback?.(true);
  return param.promise
    .then((data) => {
      param.isLoadingCallback?.(false);
      param.successCallback?.(data);
      return data;
    })
    .catch((error) => {
      const errorMsg =
        error.message ?? "Unknown Error. Please refresh page and try again.";
      console.error(errorMsg);
      param.isLoadingCallback?.(false);
      if (param.errorCallback != null) {
        param.errorCallback(errorMsg);
      } else {
        ///  todo ...
        // showError(errorMsg);
      }
      return null;
    });
};

export default promiseResolver;
