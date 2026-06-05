import { Pipe, PipeTransform } from '@angular/core';

/**
 * [ID8] Pipe puro que converte uma data no formato ISO (yyyy-MM-dd) em
 * texto relativo legível, usando a API nativa Intl.RelativeTimeFormat.
 *
 * Uso no template:
 *   {{ event.draw_date | relativeDate }}
 *   → "em 3 dias" | "hoje" | "há 2 dias" | "15/03/2025"
 */
@Pipe({
  name: 'relativeDate',
  pure: true,
})
export class RelativeDatePipe implements PipeTransform {
  private rtf = new Intl.RelativeTimeFormat('pt-BR', { numeric: 'auto' });

  transform(value: string | null | undefined): string {
    if (!value) return '—';

    const date = new Date(value + 'T00:00:00'); // força hora local, evita off-by-one UTC
    if (isNaN(date.getTime())) return value;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diffMs = date.getTime() - today.getTime();
    const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

    if (Math.abs(diffDays) < 30) {
      return this.rtf.format(diffDays, 'day');
    }

    // Para datas mais distantes, exibe no formato brasileiro dd/mm/yyyy
    return date.toLocaleDateString('pt-BR');
  }
}
