---
previousText: 'Running on Android'
previousUrl: '/docs/building/android'
nextText: 'Contributing'
nextUrl: '/docs/building/contributing'
contributors:
  - kensodemann
---

# テスト

Ionic CLI を使用して `@ionic/angular` アプリケーションを生成すると、アプリケーションのユニットテストとエンドツーエンドのテスト用に自動的に準備されます。これは Angular CLI で使われる設定と同じものです。Angular で作られたアプリケーションのテストについての詳細は <a href="https://angular.io/guide/testing" target="_blank">Angular Testing Guide</a> ご参照ください。

## テストの原則
アプリケーションをテストするときは、テストによってシステムに欠陥があるかどうかを確認できる、ということを覚えておくことが一番です。しかし、どんなささいなシステムも完全に欠陥のないことを証明することは不可能です。このため、テストの目的はコードが正しいことを確認することではなく、コードの中の問題を見つけることです。これは微妙ですが、重要な違いです。

もし私たちがコードが正しいことを証明しようとするのであれば、私たちはコードを通じて幸せな道を歩み続けようとするでしょう。もし私が問題の発見しようとするのであれば、コードをより完全に実行し、そこに潜むバグを発見する可能性が高くなります。

最初からアプリケーションのテストを開始することも最良です。これにより、修正が容易な段階で早期に欠陥を発見できます。またこれにより、システムに新しい機能が追加されたときに、コードを確実にリファクタリングすることもできます。


## ユニットテスト

ユニットテストでは、システムの他の部分から分離して、単一のコードユニット（Component、Page、Service、Pipeなど）を実行します。分離は、コードの依存関係の代わりにモック・オブジェクトを注入することによって実現されます。モックオブジェクトによって、テストは依存関係の切り出しをきめ細かく制御することができます。モックによって、どの依存関係が呼び出され、何が渡されたかをテストで判断することもできます。

適切に記述されたユニットテストは、コードの単位とそれに含まれる機能が `describe()` コールバックによって記述されるように構成されています。コード単位とその機能の要件は、`it()` コールバックによってテストされます。`describe()` コールバックと `it()` コールバックの説明を読むと、フレーズとして意味がわかります。ネストされた `describe()` と最後の `it()` の記述をつなげると、テストケースを完全に記述する文が形成されます。

ユニットテストはコードを分離して実行するため、高速で堅牢であり、高度なコードカバレッジが可能です。

### モックの利用

ユニットテストでは、コードをコードをモジュールで分離して実行します。これを簡単にするには、Jasmine(https://jasmine.github.io/) を使用することをお勧めします。Jasmine は、テスト実行中に依存関係の代わりにモックオブジェクト(Jasmine は "スパイ" と呼んでいます)を作成します。モックオブジェクトを使用すると、テストはその依存関係への呼び出しによって返される値を制御できるため、依存関係に加えられた変更から現在のテストを独立させることができます。これにより、テストのセットアップも簡単になり、テスト対象のモジュール内のコードだけをテストすることができます。

モックを使用すると、モックが呼び出されたかどうか、および `toHaveBeenCalled*` セットの関数を介してどのように呼び出されたかを判断するために、テストでモックを確認することもできます。これらの関数では、メソッドが呼び出されたことをテストするときに、`toHaveBeenCalled` メソッドの呼び出しよりも `toHaveBeenCalledTimes` の呼び出しを優先して、テストをできるだけ具体的に行う必要があります。つまり、`expect(mock.foo).toHaveBeenCalledTimes(1)` は `expect(mock.foo).toHaveBeenCalled()` よりも優れています。何かが呼ばれていないこと（`expect(mock.foo).not.toHaveBeenCalled()`）をテストする際は、逆のアドバイスに従うべきです。

Jasmine でモックオブジェクトを作成する一般的な方法は2つあります。モックオブジェクトは、`jasmine.createSpy` と`jasmine.createSpyObj` を使ってスクラッチで作成することも、`spyOn()` と `spyOnProperty()` を使って既存のオブジェクトにスパイをインストールすることもできます。

### `jasmine.createSpy` と `jasmine.createSpyObj` の利用

`jasmine.createSpyObj` は、作成時に定義された一連のモックメソッドを使用して、完全なモックオブジェクトをスクラッチで作成します。これはとてもシンプルで便利です。テストのために何かを組み立てたり注入したりする必要はありません。この関数の使用する欠点は、実際のオブジェクトと一致しないオブジェクトを生成できることです。

`jasmine.createSpy` も似ていますが、スタンドアロンのモック関数を作成します。

#### `spyOn()` と `spyOnProperty()` の利用

`spyOn()` は、既存のオブジェクトにスパイをインストールします。この手法を使用する利点は、オブジェクト上に存在しないメソッドをスパイしようとすると、例外が発生することです。これにより、テストが存在しないメソッドをモックすることを防ぎます。欠点は、テストが最初から完全に整形されたオブジェクトを必要とすることであり、これはテストに必要なセットアップの量を増加させるかと思います。

`spyOnProperty()` は似ていますが、メソッドではなくプロパティに対してスパイするという点で異なります。

### 一般的なテストの構成

ユニットテストは、エンティティ（Component、Page、Service、Pipe など）ごとに1つの `spec` ファイルを持つ `spec` ファイルに含まれています。`spec` ファイルは、テスト中のソースと一緒に存在し、かつその名前が付けられます。たとえば、プロジェクトに WeatherService という Service がある場合、そのコードは`weather.service.ts` という名前のファイルにあり、テストは `weather.service.spec.ts` という名前のファイルにあります。これらのファイルは両方とも同じフォルダにあります。

`spec` ファイル自体には、そのテスト全体を定義するただ一つの `describe` コールが含まれています。その中には、主要な機能領域を定義する他の `describe` コールがネストされています。各 `describe` コールには、setup コードと teardown コード（一般的に `beforeEach` と `afterEach` コールによって処理される）、機能を階層的に分解した `describe` コール、また個々のテストケースを定義する `it` コールが含まれます。

`describe` と `it` コールには、説明のテキストラベルも含まれます。適切な形式のテストでは、`describe` と `it` をコールすると、ラベルと組み合わせた適切なフレーズが実行され、各テストケースのすべてのラベルが `describe` と `it` ラベルを組み合わせて構成され、完全な文が作成されます。

例:

```TypeScript
describe('Calculation', () => {
  describe('divide', () => {
    it('calculates 4 / 2 properly' () => {});
    it('cowardly refuses to divide by zero' () => {});
    ...
  });

  describe('multiply', () => {
    ...
  });
});
```

外側の `describe` コールは  `Calculation` Service がテストされていることを示し、内側の `describe` コールはテストされている機能を正確に示し、そして `it` コールはテストケースが何であるかを示しています。各テストケースの完全なラベルを実行すると、意味のある文になります(卑劣な 0 での除算という計算を拒否しました)。

### ページとコンポーネント

Pages は単なる Angular コンポーネントです。そのため、ページとコンポーネントは両方とも <a href="https://angular.jp/guide/testing#コンポーネントテストの基本">Angular のコンポーネントテストガイドライン</a> を使ってテストされます。

ページとコンポーネントには TypeScript コードと HTML テンプレートマークアップの両方が含まれているため、コンポーネントクラスのテストとコンポーネント DOM のテストの両方を実行できます。ページが作成されると、生成されるテンプレートテストは次のようになります:

```TypeScript
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsPage } from './tabs.page';

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TabsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

コンポーネントクラスのテストを行う場合、コンポーネントオブジェクトは `component=fixture.componentInstance;` によって定義されたコンポーネントオブジェクトを使用してアクセスされます。これはコンポーネントクラスのインスタンスです。DOM テストを行う際には、`fixture.nativeElement` プロパティが使用されます。これはコンポーネントの実際の `HTMLElement`であり、テストで DOM を調べるために `HTMLElement.querySelector` などの標準の HTML API メソッドを使うことを可能にします。

## Service

Service は、多くの場合、計算やその他の操作を実行するユーティリティの service と、主にHTTP操作やデータ操作を実行するデータの service の2つの大まかなカテゴリーのいずれかに分類されます。

### 基本的な Service のテスト

ほとんどの service をテストするために推奨する方法は、service をインスタンス化し、service が持つ依存関係のモックを手動で注入することです。こうすることで、コードを分離してテストすることができます。

たとえば、タイムカードの配列を取得して差引支給額を計算するメソッドを持つ service があるとします。また税金計算は、現在の service が依存しているもう一つの service を介して処理されるとします。この給与計算の service は、このようにテストすることができます:

```TypeScript
import { PayrollService } from './payroll.service';

describe('PayrollService', () => {
  let service: PayrollService;
  let taxServiceSpy;

   beforeEach(() => {
     taxServiceSpy = jasmine.createSpyObj('TaxService', {
       federalIncomeTax: 0,
       stateIncomeTax: 0,
       socialSecurity: 0,
       medicare: 0
     });
     service = new PayrollService(taxServiceSpy);
   });

   describe('net pay calculations', () => {
     ...
   });
});
```

これにより、テストでは `taxServiceSpy.federalIncomeTax.and.returnValue(73.24)` などのモックの設定を介して様々な税金計算から戻される値を制御できます。これにより、「差引支給額」のテストを税金計算ロジックから独立させることができます。税金のコードが変更された場合、修正する必要があるのは税金 service 関連のコードとテストのみです。差引支給額のテストは、税金がどのように計算されるかを考慮せず、値が適切に適用されるのみであるため、そのまま機能し続けることができます。

`ionic g service name` で service を生成するときに使われる scaffold は Angular のテストユーティリティを使ってテストモジュールをセットアップします。必ずしもそうする必要はありません。ただし、このコードを残しておくことで、手動でサービスを構築したり、次のように注入したりすることができます:

```TypeScript
import { TestBed, inject } from '@angular/core/testing';

import { PayrollService } from './payroll.service';
import { TaxService } from './tax.service';

describe('PayrolService', () => {
  let taxServiceSpy;

  beforeEach(() => {
    taxServiceSpy = jasmine.createSpyObj('TaxService', {
       federalIncomeTax: 0,
       stateIncomeTax: 0,
       socialSecurity: 0,
       medicare: 0
     });
    TestBed.configureTestingModule({
      providers: [
        PayrollService,
        { provide: TaxService, useValue: taxServiceSpy }
      ]
    });
  });

  it('does some test where it is injected',
    inject([PayrollService], (service: PayrollService) => {
      expect(service).toBeTruthy();
    })
  );

  it('does some test where it is manually built', () => {
    const service = new PayrollService(taxServiceSpy);
    expect(service).toBeTruthy();
  });
});
```

#### Testing HTTP Data Services

Most services that perform HTTP operations will use Angular's HttpClient service in order to perform those operations. For such tests, it is suggested to use Angular's `HttpClientTestingModule`. For detailed documentation of this module, please see Angular's <a href="https://angular.io/guide/http#testing-http-requests" target="_blank">Angular's Testing HTTP requests</a> guide.

This basic setup for such a test looks like this:

```TypeScript
import {
  HttpBackend,
  HttpClient
} from '@angular/common/http';
import {
  HttpTestingController,
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { IssTrackingDataService } from './iss-tracking-data.service';

describe('IssTrackingDataService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let issTrackingDataService: IssTrackingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        IssTrackingDataService
      ]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    issTrackingDataService = new IssTrackingDataService(httpClient);
  });

  it('exists', inject([IssTrackingDataService], (service: IssTrackingDataService) => {
      expect(service).toBeTruthy();
  }));

  describe('location', () => {
    it('gets the location of the ISS now', () => {
      issTrackingDataService.location().subscribe(x => {
        expect(x).toEqual({ longitude: -138.1719, latitude: 44.4423 });
      });
      const req = httpTestingController.expectOne(
        'http://api.open-notify.org/iss-now.json'
      );
      expect(req.request.method).toEqual('GET');
      req.flush({
        iss_position: { longitude: '-138.1719', latitude: '44.4423' },
        timestamp: 1525950644,
        message: 'success'
      });
      httpTestingController.verify();
    });
  });
});
```

### Pipes

A pipe is like a service with a specifically defined interface. It is a class that contains one public method, `transform`, which manipulates the input value (and other optional arguments) in order to create the output that is rendered on the page. To test a pipe: instantiate the pipe, call the transform method, and verify the results.

As a simple example, let's look at a pipe that takes a `Person` object and formats the name. For the sake of simplicity, let's say a `Person` consists of an `id`, `firstName`, `lastName`, and `middleInitial`. The requirements for the pipe are to print the name as "Last, First M." handling situations where a first name, last name, or middle initial do not exist. Such a test might look like this:

```TypeScript
import { NamePipe } from './name.pipe';

import { Person } from '../../models/person';

describe('NamePipe', () => {
  let pipe: NamePipe;
  let testPerson: Person;

  beforeEach(() => {
    pipe = new NamePipe();
    testPerson = {
      id: 42,
      firstName: 'Douglas',
      lastName: 'Adams',
      middleInitial: 'N'
    };
  });

  it('exists', () => {
    expect(pipe).toBeTruthy();
  });

  it('formats a full name properly', () => {
    expect(pipe.transform(testPerson)).toBeEqual('Adams, Douglas N.');
  });

  it('handles having no middle initial', () => {
    delete testPerson.middleInitial;
    expect(pipe.transform(testPerson)).toBeEqual('Adams, Douglas');
  });

  it('handles having no first name', () => {
    delete testPerson.firstName;
    expect(pipe.transform(testPerson)).toBeEqual('Adams N.');
  });

  it('handles having no last name', () => {
    delete testPerson.lastName;
    expect(pipe.transform(testPerson)).toBeEqual('Douglas N.');
  });
});
```

It is also beneficial to exercise the pipe via DOM testing in the components and pages that utilize the pipe.

## End-to-end Testing

End-to-end testing is used to verify that an application works as a whole and often includes a connection to live data. Whereas unit tests focus on code units in isolation and thus allow for low-level testing of the application logic, end-to-end tests focus on various user stories or usage scenarios, providing high-level testing of the overall flow of data through the application. Whereas unit tests try to uncover problems with an application's logic, end-to-end tests try to uncover problems that occur when those individual units are used together. End-to-end tests uncover problems with the overall architecture of the application.

Since end-to-end tests exercise user stories and cover the application as a whole rather than individual code modules, end-to-end tests exist in their own application in the project apart from the code for the main application itself. Most end-to-end tests operate by automating common user interactions with the application and examining the DOM to determine the results of those interactions.

### Test Structure

When an `@ionic/angular` application is generated, a default end-to-end test application is generated in the `e2e` folder. This application uses <a href="">Protractor</a> to control the browser and <a href="">Jasmine</a> to structure and execute the tests. The application initially consists of four files:

- `protractor.conf.js` - the Protractor configuration file
- `tsconfig.e2e.json` - specific TypeScript configuration for the testing application
- `src/app.po.ts` - a page object containing methods that navigate the application, query elements in the DOM, and maninpulate elements on the page
- `src/app.e2e-spec.ts` - a testing script

#### Page Objects

End-to-end tests operate by automating common user interactions with the application, waiting for the application to respond, and examining the DOM to determine the results of the interaction. This involves a lot of DOM manipulation and examination. If this were all done manually, the tests would be very brittle and difficult to read and maintain.

Page objects encapsulate the HTML for a single page in a TypeScript class, providing an API that the test scripts use to interact with the application. The encapsulation of the DOM manipulation logic in page objects makes the tests more readable and far easier to reason about, lowering the maintenance costs of the test. Creating well-crafted page objects is the key to creating high quality and maintainable end-to-end tests.

##### Base Page Object

A lot of tests rely on actions such as waiting for a page to be visible, entering text into an input, and clicking a button. The methods used to do this remain consistent with only the CSS selectors used to get the appropriate DOM element changing. Therefore it makes sense to abstract this logic into a base class that can be used by the other page objects.

Here is an example that implements a few basic methods that all page objects will need to support.

```TypeScript
import { browser, by, element, ExpectedConditions } from 'protractor';

export class PageObjectBase {
  private path: string;
  protected tag: string;

  constructor(tag: string, path: string) {
    this.tag = tag;
    this.path = path;
  }

  load() {
    return browser.get(this.path);
  }

  rootElement() {
    return element(by.css(this.tag));
  }

  waitUntilInvisible() {
    browser.wait(ExpectedConditions.invisibilityOf(this.rootElement()), 3000);
  }

  waitUntilPresent() {
    browser.wait(ExpectedConditions.presenceOf(this.rootElement()), 3000);
  }

  waitUntilNotPresent() {
    browser.wait(
      ExpectedConditions.not(ExpectedConditions.presenceOf(this.rootElement())),
      3000
    );
  }

  waitUntilVisible() {
    browser.wait(ExpectedConditions.visibilityOf(this.rootElement()), 3000);
  }

  getTitle() {
    return element(by.css(`${this.tag} ion-title`)).getText();
  }

  protected enterInputText(sel: string, text: string) {
    const el = element(by.css(`${this.tag} ${sel}`));
    const inp = el.element(by.css('input'));
    inp.sendKeys(text);
  }

  protected enterTextareaText(sel: string, text: string) {
    const el = element(by.css(`${this.tag} ${sel}`));
    const inp = el.element(by.css('textarea'));
    inp.sendKeys(text);
  }

  protected clickButton(sel: string) {
    const el = element(by.css(`${this.tag} ${sel}`));
    browser.wait(ExpectedConditions.elementToBeClickable(el));
    el.click();
  }
}
```

##### Per-Page Abstractions

Each page in the application will have its own page object class that abstracts the elements on that page. If a base page object class is used, creating the page object involves mostly creating custom methods for elements that are specific to that page. Often, these custom elements take advantage of methods in the base class in order to perform the work that is required.

Here is an example page object for a simple but typical login page. Notice that many of the methods, such as `enterEMail()`, call methods in the base class that perform the bulk of the work.

```TypeScript
import { browser, by, element, ExpectedConditions } from 'protractor';
import { PageObjectBase } from './base.po';

export class LoginPage extends PageObjectBase {
  constructor() {
    super('app-login', '/login');
  }

  waitForError() {
    browser.wait(
      ExpectedConditions.presenceOf(element(by.css('.error'))),
      3000
    );
  }

  getErrorMessage() {
    return element(by.css('.error')).getText();
  }

  enterEMail(email: string) {
    this.enterInputText('#email-input', email);
  }

  enterPassword(password: string) {
    this.enterInputText('#password-input', password);
  }

  clickSignIn() {
    this.clickButton('#signin-button');
  }
}
```

#### Testing Scripts

Similar to unit tests, end-to-end test scripts consist of nested `describe()` and `it()` functions. In the case of end-to-end tests, the `describe()` functions generally denote specific scenarios with the `it()` functions denoting specific behaviors that should be exhibited by the application as actions are performed within that scenario.

Also similar to unit tests, the labels used in the `describe()` and `it()` functions should make sense both with the "describe" or "it" and when concatenated together to form the complete test case.

Here is a sample end-to-end test script that exercises some typical login scenarios.

```TypeScript
import { AppPage } from '../page-objects/pages/app.po';
import { AboutPage } from '../page-objects/pages/about.po';
import { CustomersPage } from '../page-objects/pages/customers.po';
import { LoginPage } from '../page-objects/pages/login.po';
import { MenuPage } from '../page-objects/pages/menu.po';
import { TasksPage } from '../page-objects/pages/tasks.po';

describe('Login', () => {
  const about = new AboutPage();
  const app = new AppPage();
  const customers = new CustomersPage();
  const login = new LoginPage();
  const menu = new MenuPage();
  const tasks = new TasksPage();

  beforeEach(() => {
    app.load();
  });

  describe('before logged in', () => {
    it('displays the login screen', () => {
      expect(login.rootElement().isDisplayed()).toEqual(true);
    });

    it('allows in-app navigation to about', () => {
      menu.clickAbout();
      about.waitUntilVisible();
      login.waitUntilInvisible();
    });

    it('does not allow in-app navigation to tasks', () => {
      menu.clickTasks();
      app.waitForPageNavigation();
      expect(login.rootElement().isDisplayed()).toEqual(true);
    });

    it('does not allow in-app navigation to customers', () => {
      menu.clickCustomers();
      app.waitForPageNavigation();
      expect(login.rootElement().isDisplayed()).toEqual(true);
    });

    it('displays an error message if the login fails', () => {
      login.enterEMail('test@test.com');
      login.enterPassword('bogus');
      login.clickSignIn();
      login.waitForError();
      expect(login.getErrorMessage()).toEqual(
        'The password is invalid or the user does not have a password.'
      );
    });

    it('navigates to the tasks page if the login succeeds', () => {
      login.enterEMail('test@test.com');
      login.enterPassword('testtest');
      login.clickSignIn();
      tasks.waitUntilVisible();
    });
  });

  describe('once logged in', () => {
    beforeEach(() => {
      tasks.waitUntilVisible();
    });

    it('allows navigation to the customers page', () => {
      menu.clickCustomers();
      customers.waitUntilVisible();
      tasks.waitUntilInvisible();
    });

    it('allows navigation to the about page', () => {
      menu.clickAbout();
      about.waitUntilVisible();
      tasks.waitUntilInvisible();
    });

    it('allows navigation back to the tasks page', () => {
      menu.clickAbout();
      tasks.waitUntilInvisible();
      menu.clickTasks();
      tasks.waitUntilVisible();
    });
  });
});
```

### Configuration

The default configuration uses the same `environment.ts` file that is used for development. In order to provide better control over the data used by the end-to-end tests, it is often useful to create a specific environment for testing and use that environment for the tests. This section shows one possible way to create this configuration.

#### Testing Environment

Setting up a testing environment involves creating a new environment file that uses a dedicated testing backend, updating the `angular.json` file to use that environment, and modifying the `e2e` script in the `package.json` to specify the `test` environment.

##### Create the `environment.e2e.ts` File

The Angular `environment.ts` and `environment.prod.ts` files are often used to store information such as the base URL for the application's backend data services. Create an `environment.e2e.ts` that provides the same information, only connecting to backend services that are dedicated to testing rather than the development or production backend services. Here is an example:

```TypeScript
export const environment = {
  production: false,
  databaseURL: 'https://e2e-test-api.my-great-app.com',
  projectId: 'my-great-app-e2e'
};

```

##### Modify the `angular.json` File

The `angular.json` file needs to be modified to use this file. This is a layered process. Follow the XPaths listed below to add the configuration that is required.

Add a configuration at `/projects/app/architect/build/configurations` called `test` that does the file replacement:

```JSON
            "test": {
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.e2e.ts"
                }
              ]
            }
```

Add a configuration at `/projects/app/architect/serve/configurations` called `test` that points the browser target at the `test` build configuration that was defined above.

```JSON
            "test": {
              "browserTarget": "app:build:test"
            }
```

Add a configuration at `/projects/app-e2e/architect/e2e/configurations` called `test` that does points the dev server target at the `test` serve configuration defined above.

```JSON
            "test": {
              "devServerTarget": "app:serve:test"
            }
```

##### Modify the `package.json` File

Modify the `package.json` file so that `npm run e2e` uses the `test` configuration.

```JSON
  "scripts": {
    "e2e": "ng e2e --configuration=test",
    "lint": "ng lint",
    "ng": "ng",
    "start": "ng serve",
    "test": "ng test",
    "test:dev": "ng test --browsers=ChromeHeadlessCI",
    "test:ci": "ng test --no-watch --browsers=ChromeHeadlessCI"
  },
```

#### Test Cleanup

If the end-to-end tests modify data in any way it is helpful to reset the data to a known state once the test completes. One way to do that is to:

1. Create an endpoint that performs the cleanup.
1. Add a `onCleanUp()` function to the `config` object exported by the `protractor.conf.js` file.

Here is an example:

```JavaScript
  onCleanUp() {
    const axios = require('axios');
    return axios
      .post(
        'https://e2e-test-api.my-great-app.com/purgeDatabase',
        {}
      )
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }
```
