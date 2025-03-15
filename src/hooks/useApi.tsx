import { useAuth } from '@clerk/nextjs';
import { createContext, useContext, useMemo, useState } from 'react';

interface ApiContext {
  api: {
    getCardsOwned(): Promise<Record<string, boolean> | void>;
    updateCardsOwned(cards: Record<string, boolean>): Promise<void>;
  };
  isPending: boolean;
  error?: string;
}

const Context = createContext<ApiContext | null>(null);

export function useApi() {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useApi must be used within an ApiProvider');
  }
  return context;
}

export type ApiProviderProps = {
  children: React.ReactNode;
};

export function ApiProvider({ children }: ApiProviderProps) {
  const [requestsPending, setRequestsPending] = useState(0);
  const [error, setError] = useState<string | undefined>();
  const { isSignedIn } = useAuth();

  const api = useMemo(() => {
    function request<T = void>(method: string, url: string, body?: unknown) {
      setRequestsPending((prev) => prev + 1);
      return fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: body !== undefined ? JSON.stringify(body) : undefined,
      })
        .then((response) => response.json() as Promise<T>)
        .catch((error) => {
          setError(error.message);
          return Promise.reject(error);
        })
        .finally(() => {
          setRequestsPending((prev) => prev - 1);
        });
    }

    return {
      getCardsOwned() {
        if (!isSignedIn) {
          return Promise.resolve();
        }

        return request<Record<string, boolean>>('GET', '/api/user-cards');
      },
      updateCardsOwned(api: Record<string, boolean>) {
        if (!isSignedIn) {
          return Promise.resolve();
        }

        return request('POST', '/api/user-cards', api);
      },
    };
  }, [isSignedIn]);

  return (
    <Context.Provider value={{ api, isPending: requestsPending > 0, error }}>
      {children}
    </Context.Provider>
  );
}
