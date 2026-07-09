import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiInterceptor } from './core/interceptors/interceptor';
import { MaskNumberDirective } from './shared/mask-number.directive';
import { ProductComponent } from "./features/product/product.component";
import { NZ_I18N, vi_VN } from 'ng-zorro-antd/i18n';
import { NzMenuModule } from 'ng-zorro-antd/menu';

// Import all icons from ng-zorro-antd
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
// Register all icons globally
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

@NgModule({
  declarations: [
    AppComponent,
    MaskNumberDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NzIconModule.forRoot(icons),
    NzMenuModule,
    ProductComponent,
    // Register icons globally
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptor, // Use your custom interceptor
    multi: true,

  },
  { provide: NZ_I18N, useValue: vi_VN },

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
