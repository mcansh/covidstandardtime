class HTTPError extends Error {
  public response: Response;
  public status: number;

  public constructor(response: Response) {
    // Set the message to the status text, such as Unauthorized,
    // with some fallbacks. This message should never be undefined.
    super(
      response.statusText ||
        String(
          response.status === 0 || response.status
            ? response.status
            : 'Unknown response error'
        )
    );
    this.name = 'HTTPError';
    this.response = response;
    this.status = response.status;
  }
}

function checkStatus(response: Response) {
  if (!response.ok) {
    const error = new HTTPError(response);
    return Promise.reject(error);
  }

  return response;
}

const fetcher = async <T>(
  input: RequestInfo,
  init: RequestInit | undefined = {}
): Promise<T> => {
  const promise = await fetch(input, {
    ...init,
    credentials: 'same-origin',
  });

  const response = await checkStatus(promise);

  return response.json();
};

export { fetcher, checkStatus, HTTPError };
