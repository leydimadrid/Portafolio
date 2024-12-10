import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-download',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './download.component.html',
  styleUrl: './download.component.css',
})
export class DownloadComponent {
  isChecked = false;
  startDownload() {
    this.isChecked = true;

    setTimeout(() => {
      this.DescargarCV();
    }, 4000); 
  }

  DescargarCV() {
    const link = document.createElement('a');
    link.href = '../../../../assets/CV-Leydi_Madrid.pdf';
    link.download = 'CV_LeydiMadrid.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    this.isChecked = false;
  }
}
