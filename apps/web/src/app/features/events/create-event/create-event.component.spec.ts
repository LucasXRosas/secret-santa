import { FormControl } from '@angular/forms';
import { futureDateValidator } from './create-event.component';

describe('futureDateValidator', () => {
  const validate = futureDateValidator();

  it('deve retornar null quando o campo está vazio (não é papel do validador exigir valor)', () => {
    const control = new FormControl('');
    expect(validate(control)).toBeNull();
  });

  it('deve retornar null para uma data futura', () => {
    const control = new FormControl('2099-12-31');
    expect(validate(control)).toBeNull();
  });

  it('deve retornar null para a data de hoje (hoje não é passado)', () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const control = new FormControl(`${yyyy}-${mm}-${dd}`);
    expect(validate(control)).toBeNull();
  });

  it('deve retornar { pastDate: true } para uma data no passado', () => {
    const control = new FormControl('2000-01-01');
    expect(validate(control)).toEqual({ pastDate: true });
  });

  it('deve retornar { pastDate: true } para ontem', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yyyy = yesterday.getFullYear();
    const mm = String(yesterday.getMonth() + 1).padStart(2, '0');
    const dd = String(yesterday.getDate()).padStart(2, '0');
    const control = new FormControl(`${yyyy}-${mm}-${dd}`);
    expect(validate(control)).toEqual({ pastDate: true });
  });
});
