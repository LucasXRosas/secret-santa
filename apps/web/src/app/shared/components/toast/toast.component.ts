import { Component, inject } from '@angular/core';
import { ToastService, ToastType } from '../../../core/services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  templateUrl: './toast.component.html',
})
export class ToastComponent {
  readonly toastService = inject(ToastService);
  readonly toasts = this.toastService.toasts;

  colorClass(type: ToastType): string {
    if (type === 'success') return 'bg-accent';
    if (type === 'error') return 'bg-destructive';
    return 'bg-primary';
  }

  icon(type: ToastType): string {
    if (type === 'success') return '🎁';
    if (type === 'error') return '✕';
    return '📬';
  }
}
