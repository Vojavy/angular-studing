import { Component, Injector, Type, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModuleService } from '../dynamic-components/module.service';

@Component({
  selector: 'app-feature-module',
  templateUrl: './feature-module.component.html',
  styleUrls: ['./feature-module.component.css']
})
export class FeatureModuleComponent implements OnInit {
  childModule: Type<any> | null = null;
  componentInjector: Injector = Injector.create({
    providers: [{ provide: 'module', useValue: null }]
  });
  
  constructor(
    private moduleServise: ModuleService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const moduleShortNameFromRoute = routeParams.get('moduleShortName');

    if (moduleShortNameFromRoute) {
      const module = this.moduleServise.getModuleByShortName(moduleShortNameFromRoute);

      if (module) {
        this.childModule = module.component;
        this.componentInjector = Injector.create({
          providers: [{ provide: 'module', useValue: module }]
        });
      } else {
        // Здесь ссылка на страницу 404
      }
    } else {
      // Здесь ссылка на список модулей
    }
  }
}
