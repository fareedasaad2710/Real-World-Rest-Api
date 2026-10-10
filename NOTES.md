# NestJS Crash Course — Notes

Course: **NestJS Crash Course | Build Real-World REST API with TypeScript, PostgreSQL & Node.js** (Literate Code, YouTube)
Project: `blog-nest/`


---

## 1. Big picture: الـ request بيمشي إزاي

```
Client (browser / Postman)
   │  GET /
   ▼
Controller   ← بيستقبل الـ request وبيحدد الـ route
   │  بينادي
   ▼
Service      ← فيه الـ logic (الشغل الحقيقي)
   │  (بعدين هيكلم الـ database عن طريق Repository / TypeORM)
   ▼
Response راجع للـ client
```

كل ده متوصّل ببعض جوه **Module**.

---

## 2. الـ 4 decorators الأساسية

### Decorators

> **decorators:** tell nestjs what is fn /class/parameter hold

**for ex:**

- `@Controller()` → tell nestjs that this is controller
- `@Injectable()` → يسمح لـ NestJS يدير الـ class ويحقنه في classes تانية
- `@Get()` → يربط method بـ HTTP GET request.

---

### 2. يعني إيه `@Injectable()`؟

الـ `@Injectable()` هو **Decorator** بنحطه فوق الـ class عشان NestJS يقدر يدير الـ dependencies بتاعتها ويستخدمها مع نظام **Dependency Injection (DI)**.

**مثال:**

```ts
@Injectable()
export class UsersService {
  getUsers() {
    return ['Ahmed', 'Mona'];
  }
}
```

هنا `@Injectable()` بتعرّف الـ `UsersService` كـ class ممكن NestJS يوفّره ويحقنه في class تانية محتاجاه.

**مثلاً الـ Controller محتاج الـ Service:**

```ts
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
}
```

NestJS بيعمل `UsersService` **instance** وبيوفرها للـ Controller عن طريق الـ Dependency Injection، 

> ⚠️ **بشرط** إن الـ Service تكون **متسجلة صح في الـ Module**.

---

### ملخص الـ decorators في المشروع

| Decorator      | معناه                                       | مثال في المشروع                  |
| -------------- | ------------------------------------------- | -------------------------------- |
| `@Controller()` | "الباب ده للـ incoming traffic"             | `app.controller.ts`              |
| `@Get()`        | handler لـ GET request                      | `getHello()` في الـ controller    |
| `@Injectable()` | "ينفع أعمل inject للـ class ده وأعيد استخدامه" | `AppService`                     |
| `@Module()`     | "البيت اللي فيه كل حاجة"                    | `AppModule`                      |

---

## 3. الـ files في `src/`

| File                      | وظيفته                                                          |
| ------------------------- | --------------------------------------------------------------- |
| `main.ts`                 | نقطة البداية. بيعمل `NestFactory.create(AppModule)` و `app.listen(3000)` |
| `app.module.ts`           | الـ root module. بيجمّع الـ controllers والـ providers           |
| `app.controller.ts`       | بيعرّف الـ routes                                               |
| `app.service.ts`          | بيعرّف الـ methods (الـ logic)                                  |
| `app.controller.spec.ts`  | الـ unit test للـ controller                                    |

---

## 4. Controller

- بيستقبل الـ HTTP request ويرجّع response.
- مش المفروض يكون فيه logic كتير، دوره يستدعي الـ service.
- في المشروع:

```ts
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
```

---

## 5. Service

- بيحط فيه الـ methods اللي بتعمل الشغل.
- بيتعلّم بـ `@Injectable()` عشان Nest يقدر يعمل له **inject** في أي مكان.
- بنسجّله في `providers` جوه الـ module.

```ts
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello from services!';
  }
}
```

---

## 6. Module

- بيربط الـ controllers بالـ services.

```ts
@Module({
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

- `controllers`: الـ controllers اللي في الـ module.
- `providers`: الـ services (وأي حاجة Injectable) اللي في الـ module.
- `imports`: modules تانية محتاجاها.
- `exports`: اللي عايزة modules تانية تقدر تستخدمه.

---

## 7. Dependency Injection (DI)

السطر ده في الـ constructor:

```ts
constructor(private readonly appService: AppService) {}
```

أنا مش بعمل `new AppService()` بنفسي. Nest هو اللي بيعمل الـ instance ويديهولي (**inject**). فوايده:
- أقدر أعيد استخدام نفس الـ service في أكتر من مكان.
- أقدر أعمل mock للـ service في الـ tests.

---

## 8. Commands

```bash
npm run start:dev    # شغّل الـ app مع watch mode
npm run test         # شغّل الـ unit tests
npm run build        # compile لـ dist/
```

الـ app بيشتغل على `http://localhost:3000`.

---

## 9. أسئلة لسه مش فاهماها

- [ ]

---

## Next up (هتتضاف مع الفيديو)

- [ ] TypeORM + PostgreSQL connection
- [ ] Entity
- [ ] DTO + validation (`class-validator`)
- [ ] CRUD endpoints (POST / GET / PATCH / DELETE)
- [ ] Docker لـ Postgres
