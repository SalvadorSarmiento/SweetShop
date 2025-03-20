import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from '../services/loader.service';
import { Observable } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-loader-global',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader-global.component.html',
  styleUrls: ['./loader-global.component.scss']
})
export class LoaderGlobalComponent {
  isLoading$: Observable<boolean>;

  constructor(private loaderService: LoaderService) {
    this.isLoading$ = this.loaderService.isLoading$;
  }
}