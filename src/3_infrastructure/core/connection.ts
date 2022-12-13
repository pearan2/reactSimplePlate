import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
const defaultUri = process.env.REACT_APP_BACK_URL + "/graphql";

class Connection {
  private instance: ApolloClient<any> | null = null;
  private localStorageTokenKey = "KlabWebLocalToken";

  getToken = () => {
    return localStorage.getItem(this.localStorageTokenKey);
  };

  setToken = (token: string) => {
    localStorage.setItem(this.localStorageTokenKey, token);
    this.instance = null;
  };

  getClient = (uri: string = defaultUri) => {
    if (this.instance === null) {
      const httpLink = new HttpLink({ uri: defaultUri });
      const token = this.getToken();
      const client = new ApolloClient({
        cache: new InMemoryCache(),
        link:
          token == null ? httpLink : this.getAuthLink(token).concat(httpLink),
      });
      this.instance = client;
    }
    return this.instance;
  };

  private getAuthLink(token: string) {
    return setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
        },
      };
    });
  }
}

export default Connection;
