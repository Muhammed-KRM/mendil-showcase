import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kvkk-request',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './kvkk-request.component.html',
  styleUrls: ['../legal.shared.scss', './kvkk-request.component.scss']
})
export class KvkkRequestComponent {
  formData = {
    requestType: '', firstName: '', lastName: '',
    tcNo: '', email: '', phone: '', address: '', description: ''
  };
  acceptTerms = false;
  isSubmitting = signal(false);
  showSuccess  = signal(false);

  requestTypes = [
    'Kişisel verilerimin işlenip işlenmediğini öğrenmek',
    'İşlenmişse buna ilişkin bilgi talep etmek',
    'Verilerin işlenme amacını öğrenmek',
    'Yurt içi/dışı aktarılan üçüncü kişileri bilmek',
    'Eksik/yanlış verilerin düzeltilmesini istemek',
    'Verilerin silinmesini veya yok edilmesini istemek',
    'Düzeltme/silme işlemlerinin üçüncü kişilere bildirilmesini istemek',
    'Otomatik sistemler vasıtasıyla aleyhime sonuç çıkmasına itiraz etmek',
    'Kanuna aykırı işleme nedeniyle zararın giderilmesini talep etmek',
  ];

  submitForm(): void {
    this.isSubmitting.set(true);
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.showSuccess.set(true);
      this.formData = { requestType: '', firstName: '', lastName: '', tcNo: '', email: '', phone: '', address: '', description: '' };
      this.acceptTerms = false;
      setTimeout(() => this.showSuccess.set(false), 6000);
    }, 1500);
  }
}
