import {
    Component,
    OnDestroy,
    AfterViewInit,
    EventEmitter,
    Input,
    Output
} from '@angular/core';
import { ModalService } from '../_services/modal.service';

declare var tinymce: any;


//(click)="openModal('custom-modal-3')"
@Component({
    selector: 'tr-text-editor',
    template: ` <div class="text_editor">
       <textarea id="{{elementId}}"></textarea>
        <modal id="custom-modal-2">
            <div class="modal">
                <div class="modal-body">
                    <div class="row">
                    
                    </div>
                    </div>
                </div>
                <div class="modal-background"></div>
        </modal>
         <modal id="custom-modal-3">
            <div class="modal">
                <div class="modal-body">
                    <div class="row">
                       
                    </div>
                    </div>
                </div>
                <div class="modal-background"></div>
        </modal>
        </div>
    `
})
export class TextEditorComponent implements AfterViewInit, OnDestroy {
    @Input() elementId: String;
    @Input() currentValue: string; 
    @Output() onEditorKeyup = new EventEmitter<any>();
    loading: boolean = false;
    currentPage: number = 0;
    attachments: any;
    constructor(private modalService: ModalService) {
           
    }

    img_src: string;
    id: any = [];
    htmlString: string;
    editor;
    showlib: boolean = false;
    attachment: any;
    featured: any; 
    postAttachment: string = "postAttachment";

    insertContent() {
        if(this.currentValue != '') {
            console.log(this.currentValue);
            this.editor.insertContent(this.currentValue); 
         } else {
             console.log('this.currentValue is undefined, yo');
         }
    }

    getAttachments(data: any) {
        console.log(data);
        this.attachments = JSON.parse(data);
        this.img_src = this.attachments.filePath;
        this.id = this.id.concat(this.attachments.id);
        this.htmlString = '<img src="' + this.img_src + '" id="' + this.id + '"/>';
        this.editor.insertContent(this.htmlString);
        this.modalService.close('custom-modal-2');
    }

    getMedia(data: any) {
        console.log(data);
        this.attachments = JSON.parse(data);
        for (let i = 0; i < this.attachments.length; i++) {
            this.attachment = this.attachments[i];
            this.img_src = this.attachment.filePath;
            this.id = this.id.concat(this.attachment.id);
            this.htmlString = '<img src="' + this.img_src + '" id="' + this.id + '"/>';
            this.editor.insertContent(this.htmlString);
        }
        this.modalService.close('custom-modal-3');
    }

    openModal(id: string) {
        if (id == 'custom-modal-3') {
            this.showlib = true;
        }
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }

    ngAfterViewInit() {
        tinymce.init({
            selector: '#' + this.elementId,
            branding: false,
            height: 300,
            menu: [],
            plugins: ['link', 'paste', 'table', 'codesample', 'code'],
            codesample_languages: [
                { text: 'HTML/XML', value: 'markup' },
                { text: 'JavaScript', value: 'javascript' },
                { text: 'CSS', value: 'css' },
                { text: 'PHP', value: 'php' },
                { text: 'Ruby', value: 'ruby' },
                { text: 'Python', value: 'python' },
                { text: 'Java', value: 'java' },
                { text: 'C', value: 'c' },
                { text: 'C#', value: 'csharp' },
                { text: 'C++', value: 'cpp' }
            ],
            toolbar: "image,undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link, table fullscreen code codesample",
            skin_url: '/assets/skins/lightgray',
            setup: editor => {

                this.editor = editor;

                editor.on('keyup', () => {
                    const content = editor.getContent();
                    this.onEditorKeyup.emit(content);
                    //console.log('content');
                });
            },
        });
        this.insertContent();

    }

    ngOnDestroy() {
        tinymce.remove(this.editor);
    }
}