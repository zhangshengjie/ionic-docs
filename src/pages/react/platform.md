---
previousText: 'Config'
previousUrl: '/docs/react/config'
nextText: 'Progressive Web Apps in React'
nextUrl: '/docs/react/pwa'
---

# Platformユーティリティ

## isPlatform

`isPlatform` メソッドを使用して、アプリが特定のプラットフォームで実行されているかどうかを確認できます:

```typescript
import { isPlatform } from '@ionic/react';

isPlatform('ios'); // iOSデバイスで実行されてる時は true を返します
```

ユーザー実行しているプラットフォームに応じて、isPlatform（platformName）は true または false を返します。 同じアプリが複数のプラットフォーム名に対して true を返す場合があることに注意してください。 たとえば、iPadから実行するアプリは、mobile、ios、ipad、およびtabletのプラットフォーム名に対して true を返します。 さらに、アプリが Cordova から実行されている場合、cordovaもtrueになります。

## getPlatforms

`getPlatforms` メソッドを使用して、アプリが現在実行されているプラットフォームを判別できます。

```typescript
import { getPlatforms } from '@ionic/react';

getPlatforms(); // iPhoneの場合 ["iphone", "ios", "mobile", "mobileweb"] を返します
```

使用しているデバイスに応じて、 `getPlatforms` は複数の値を返すことができます。 それぞれの値はプラットフォームに応じて配列で返却されます。たとえば、iPhoneでは、mobile、ios、およびiphoneが返されます。