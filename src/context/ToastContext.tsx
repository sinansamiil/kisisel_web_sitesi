'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

interface ToastContextType {
  showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextType>({
  showToast: () => {},
});

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className={`toast mono-text ${toastMessage ? 'show' : ''}`} id="system-toast">
        {toastMessage || ''}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
