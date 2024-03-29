import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'pek-qc-instruction',
  templateUrl: './qc-instruction.component.html',
  styleUrls: ['./qc-instruction.component.scss']
})
export class QcInstructionComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const guide = document.querySelector('.guide');
    const images = guide.querySelectorAll('img');

    const imageBlock = guide.querySelector('.guide__image-box');

    images.forEach(image => {
      const idx = image.src.indexOf('/assets/');

      image.addEventListener('click', () => {
        imageBlock.innerHTML = '';
        imageBlock.classList.add('guide__image-box_open')

        const newImage = document.createElement('img');
        newImage.src = image.src.slice(idx + 1);
        imageBlock.appendChild(newImage);

        imageBlock.querySelector('img').addEventListener('click', evt => {
          evt.stopPropagation();
        })
      });
    });
  }

}
