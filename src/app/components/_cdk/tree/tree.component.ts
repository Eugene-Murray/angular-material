import { CdkTreeModule } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ComplexDataStoreService } from './services/complex-data-store.service';
import { TransformedData } from './models/models';

@Component({
  selector: 'app-tree',
  imports: [CdkTreeModule, MatButtonModule, MatIconModule, CommonModule, MatProgressSpinnerModule],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeComponent implements OnInit {
private readonly _dataStore = inject(ComplexDataStoreService);

  areRootsLoading = this._dataStore.areRootsLoading;
  roots = this._dataStore.roots;

  getChildren = (node: TransformedData) => this._dataStore.getChildren(node.raw.id);
  trackBy = (index: number, node: TransformedData) => this.expansionKey(node);
  expansionKey = (node: TransformedData) => node.raw.id;

  ngOnInit() {
    this._dataStore.loadRoots();
  }

  onExpand(node: TransformedData, expanded: boolean) {
    if (expanded) {
      // Only perform a load on expansion.
      this._dataStore.loadChildren(node.raw.id);
    }
  }
}
