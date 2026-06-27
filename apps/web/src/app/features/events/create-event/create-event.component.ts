import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { EventService } from '../../../core/services/event.service';

/** Validador customizado para não permitir datas no passado */
export function futureDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const todayStr = `${year}-${month}-${day}`;

    if (control.value < todayStr) {
      return { pastDate: true };
    }
    return null;
  };
}

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-event.component.html',
})
export class CreateEventComponent {
  private fb = inject(FormBuilder);
  private eventService = inject(EventService);
  private router = inject(Router);

  saving = signal(false);
  errorMessage = signal<string | null>(null);

  todayDate = new Date().toISOString().split('T')[0];

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
    budget: [null as number | null, [Validators.min(0)]],
    draw_date: ['', [Validators.required, futureDateValidator()]],
    organizer_name: [''],
    location: [''],
  });

  // [ID25] toSignal: Transforma Observable (valueChanges) em um Signal reativo
  formValues = toSignal(this.form.valueChanges, { initialValue: this.form.value });

  async onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.saving.set(true);
    this.errorMessage.set(null);

    try {
      const { name, budget, draw_date, organizer_name, location } = this.form.getRawValue();
      await this.eventService.createEvent({
        name: name.trim(),
        budget: budget ?? null,
        draw_date: draw_date || null,
        organizer_name: organizer_name || null,
        location: location || null,
      });
      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      console.error('Erro ao criar evento:', error);
      // Mostra a mensagem real do Supabase para facilitar o diagnóstico.
      const detalhe = error?.message || error?.error_description || 'Erro desconhecido';
      this.errorMessage.set(`Não foi possível criar o evento: ${detalhe}`);
    } finally {
      this.saving.set(false);
    }
  }
}
