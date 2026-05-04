import { Component } from '@angular/core';

@Component({
  selector: 'app-map-section',
  standalone: true,
  template: `
    <div class="map-wrap">
      <!-- Google Maps embed - gerçek koordinatlarla değiştir -->
      <div class="map-placeholder" role="img" aria-label="Mendil Markası konum haritası">
        <div class="map-content">
          <span class="map-pin" aria-hidden="true">📍</span>
          <div>
            <strong>Mendil Markası</strong>
            <p>Örnek Mahallesi, Örnek Sokak No:1<br>Bağcılar, İstanbul</p>
            <a
              href="https://maps.google.com/?q=Bağcılar,İstanbul"
              target="_blank"
              rel="noopener noreferrer"
              class="map-link">
              Google Maps'te Aç
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Gerçek Google Maps embed için aşağıdaki kodu kullan:
      <iframe
        src="https://www.google.com/maps/embed?pb=..."
        width="100%"
        height="300"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Mendil Markası Konum">
      </iframe>
      -->
    </div>
  `,
  styles: [`
    .map-wrap {
      margin-top: 1.5rem;
    }

    .map-placeholder {
      background: linear-gradient(135deg, #E8F4F8, #D4F1E8);
      border-radius: 1.5rem;
      height: 220px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #e2e8f0;
      overflow: hidden;
    }

    .map-content {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.5rem;

      strong {
        display: block;
        font-size: 1rem;
        font-weight: 700;
        color: var(--color-dark);
        margin-bottom: 0.25rem;
      }

      p {
        font-size: 0.875rem;
        color: #64748b;
        margin: 0 0 0.75rem;
        line-height: 1.5;
      }
    }

    .map-pin {
      font-size: 3rem;
      flex-shrink: 0;
    }

    .map-link {
      display: inline-flex;
      align-items: center;
      gap: 0.375rem;
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--color-primary);
      text-decoration: none;
      transition: gap 150ms;

      &:hover { gap: 0.625rem; }
    }
  `]
})
export class MapSectionComponent {}
