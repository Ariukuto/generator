import { Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild, inject } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
	selector: 'file-upload',
	templateUrl: './file-upload.component.html',
	styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit
{

	protected readonly settingsService = inject(SettingsService);
	protected elementRef = inject(ElementRef)
	protected renderer2 = inject(Renderer2);



	protected file:Blob = new Blob();


	@ViewChild("fileInput", {static: true}) 
	fileInputEl?: ElementRef;

	
	public ngOnInit() {
		const fileInputEl = this.fileInputEl?.nativeElement;
		this.renderer2.listen(fileInputEl, "change", (e) => {
			const fileReader: FileReader = new FileReader();
			this.file = e.target.files[0];
			fileReader.onloadend = () => {
				console.log(this.file);
				this.settingsService.uploadSettings(<string>fileReader.result);
			};
			fileReader.readAsText(this.file);
		});
	}

}

