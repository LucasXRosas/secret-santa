import { Pipe, PipeTransform } from '@angular/core';

/**
 * [ID8] Pipe puro que formata um número como moeda brasileira (BRL).
 * Usa a API nativa Intl.NumberFormat para garantir localização correta.
 *
 * Uso no template:
 *   {{ event.budget | brlCurrency }}         → "R$ 50,00"
 *   {{ event.budget | brlCurrency : false }}  → "50,00" (sem símbolo)
 */
@Pipe({
  name: 'brlCurrency',
  pure: true,
})
export class BrlCurrencyPipe implements PipeTransform {
  private formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  transform(value: number | null | undefined, showSymbol = true): string {
    if (value == null) return '—';
    const formatted = this.formatter.format(value);
    // Intl já inclui "R$"; se showSymbol=false, remove o símbolo + espaço.
    return showSymbol ? formatted : formatted.replace('R$\u00a0', '').trim();
  }
}
