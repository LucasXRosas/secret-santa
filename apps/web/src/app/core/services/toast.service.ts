import { Injectable, signal } from '@angular/core';

export type ToastType = 'success' | 'error' | 'info';

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

const STORAGE_KEY = 'pendingToast';

@Injectable({ providedIn: 'root' })
export class ToastService {
  readonly toasts = signal<Toast[]>([]);

  constructor() {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      sessionStorage.removeItem(STORAGE_KEY);
      try {
        const { message, type } = JSON.parse(stored) as { message: string; type: ToastType };
        setTimeout(() => this.show(message, type), 100);
      } catch {}
    }
  }

  show(message: string, type: ToastType = 'info', duration = 4000): void {
    const id = crypto.randomUUID();
    this.toasts.update((t) => [...t, { id, message, type }]);
    setTimeout(() => this.dismiss(id), duration);
  }

  success(message: string): void {
    this.show(message, 'success');
  }

  error(message: string): void {
    this.show(message, 'error');
  }

  info(message: string): void {
    this.show(message, 'info');
  }

  showAfterReload(message: string, type: ToastType = 'info'): void {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ message, type }));
  }

  dismiss(id: string): void {
    this.toasts.update((t) => t.filter((toast) => toast.id !== id));
  }
}
