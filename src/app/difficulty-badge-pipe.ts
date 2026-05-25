import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'difficultyBadge',
  standalone: true
})
export class DifficultyBadgePipe implements PipeTransform {
  transform(value: string | undefined): string {
    if (!value) return '';

    switch (value.toLowerCase()) {
      case 'facil':
        return '🟢 Fácil';
      case 'medio':
        return '🟡 Médio';
      case 'dificil':
        return '🔴 Difícil';
      default:
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
}
