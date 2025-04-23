
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model InternalAccount
 * 
 */
export type InternalAccount = $Result.DefaultSelection<Prisma.$InternalAccountPayload>
/**
 * Model RechargeHistory
 * 
 */
export type RechargeHistory = $Result.DefaultSelection<Prisma.$RechargeHistoryPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Cart
 * 
 */
export type Cart = $Result.DefaultSelection<Prisma.$CartPayload>
/**
 * Model CartItem
 * 
 */
export type CartItem = $Result.DefaultSelection<Prisma.$CartItemPayload>
/**
 * Model PurchaseHistory
 * 
 */
export type PurchaseHistory = $Result.DefaultSelection<Prisma.$PurchaseHistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CartStatus: {
  PENDENTE: 'PENDENTE',
  PROCESSANDO: 'PROCESSANDO',
  AGUARDANDO_CONFIRMAÇÃO: 'AGUARDANDO_CONFIRMAÇÃO',
  PAGO: 'PAGO',
  REJEITADO: 'REJEITADO'
};

export type CartStatus = (typeof CartStatus)[keyof typeof CartStatus]


export const PurchaseStatus: {
  PENDENTE: 'PENDENTE',
  PROCESSANDO: 'PROCESSANDO',
  AGUARDANDO_CONFIRMAÇÃO: 'AGUARDANDO_CONFIRMAÇÃO',
  PAGO: 'PAGO',
  REJEITADO: 'REJEITADO'
};

export type PurchaseStatus = (typeof PurchaseStatus)[keyof typeof PurchaseStatus]

}

export type CartStatus = $Enums.CartStatus

export const CartStatus: typeof $Enums.CartStatus

export type PurchaseStatus = $Enums.PurchaseStatus

export const PurchaseStatus: typeof $Enums.PurchaseStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.internalAccount`: Exposes CRUD operations for the **InternalAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InternalAccounts
    * const internalAccounts = await prisma.internalAccount.findMany()
    * ```
    */
  get internalAccount(): Prisma.InternalAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rechargeHistory`: Exposes CRUD operations for the **RechargeHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RechargeHistories
    * const rechargeHistories = await prisma.rechargeHistory.findMany()
    * ```
    */
  get rechargeHistory(): Prisma.RechargeHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **Cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.CartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cartItem`: Exposes CRUD operations for the **CartItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CartItems
    * const cartItems = await prisma.cartItem.findMany()
    * ```
    */
  get cartItem(): Prisma.CartItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchaseHistory`: Exposes CRUD operations for the **PurchaseHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseHistories
    * const purchaseHistories = await prisma.purchaseHistory.findMany()
    * ```
    */
  get purchaseHistory(): Prisma.PurchaseHistoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    InternalAccount: 'InternalAccount',
    RechargeHistory: 'RechargeHistory',
    Product: 'Product',
    Cart: 'Cart',
    CartItem: 'CartItem',
    PurchaseHistory: 'PurchaseHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "internalAccount" | "rechargeHistory" | "product" | "cart" | "cartItem" | "purchaseHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      InternalAccount: {
        payload: Prisma.$InternalAccountPayload<ExtArgs>
        fields: Prisma.InternalAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InternalAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InternalAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalAccountPayload>
          }
          findFirst: {
            args: Prisma.InternalAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InternalAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalAccountPayload>
          }
          findMany: {
            args: Prisma.InternalAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalAccountPayload>[]
          }
          create: {
            args: Prisma.InternalAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalAccountPayload>
          }
          createMany: {
            args: Prisma.InternalAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InternalAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalAccountPayload>[]
          }
          delete: {
            args: Prisma.InternalAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalAccountPayload>
          }
          update: {
            args: Prisma.InternalAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalAccountPayload>
          }
          deleteMany: {
            args: Prisma.InternalAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InternalAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InternalAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalAccountPayload>[]
          }
          upsert: {
            args: Prisma.InternalAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalAccountPayload>
          }
          aggregate: {
            args: Prisma.InternalAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInternalAccount>
          }
          groupBy: {
            args: Prisma.InternalAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<InternalAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.InternalAccountCountArgs<ExtArgs>
            result: $Utils.Optional<InternalAccountCountAggregateOutputType> | number
          }
        }
      }
      RechargeHistory: {
        payload: Prisma.$RechargeHistoryPayload<ExtArgs>
        fields: Prisma.RechargeHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RechargeHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargeHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RechargeHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargeHistoryPayload>
          }
          findFirst: {
            args: Prisma.RechargeHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargeHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RechargeHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargeHistoryPayload>
          }
          findMany: {
            args: Prisma.RechargeHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargeHistoryPayload>[]
          }
          create: {
            args: Prisma.RechargeHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargeHistoryPayload>
          }
          createMany: {
            args: Prisma.RechargeHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RechargeHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargeHistoryPayload>[]
          }
          delete: {
            args: Prisma.RechargeHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargeHistoryPayload>
          }
          update: {
            args: Prisma.RechargeHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargeHistoryPayload>
          }
          deleteMany: {
            args: Prisma.RechargeHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RechargeHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RechargeHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargeHistoryPayload>[]
          }
          upsert: {
            args: Prisma.RechargeHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RechargeHistoryPayload>
          }
          aggregate: {
            args: Prisma.RechargeHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRechargeHistory>
          }
          groupBy: {
            args: Prisma.RechargeHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RechargeHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RechargeHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<RechargeHistoryCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Cart: {
        payload: Prisma.$CartPayload<ExtArgs>
        fields: Prisma.CartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findFirst: {
            args: Prisma.CartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findMany: {
            args: Prisma.CartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          create: {
            args: Prisma.CartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          createMany: {
            args: Prisma.CartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          delete: {
            args: Prisma.CartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          update: {
            args: Prisma.CartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          deleteMany: {
            args: Prisma.CartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          upsert: {
            args: Prisma.CartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.CartGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartCountArgs<ExtArgs>
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      CartItem: {
        payload: Prisma.$CartItemPayload<ExtArgs>
        fields: Prisma.CartItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findFirst: {
            args: Prisma.CartItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findMany: {
            args: Prisma.CartItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          create: {
            args: Prisma.CartItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          createMany: {
            args: Prisma.CartItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          delete: {
            args: Prisma.CartItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          update: {
            args: Prisma.CartItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          deleteMany: {
            args: Prisma.CartItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          upsert: {
            args: Prisma.CartItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          aggregate: {
            args: Prisma.CartItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCartItem>
          }
          groupBy: {
            args: Prisma.CartItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartItemCountArgs<ExtArgs>
            result: $Utils.Optional<CartItemCountAggregateOutputType> | number
          }
        }
      }
      PurchaseHistory: {
        payload: Prisma.$PurchaseHistoryPayload<ExtArgs>
        fields: Prisma.PurchaseHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseHistoryPayload>
          }
          findFirst: {
            args: Prisma.PurchaseHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseHistoryPayload>
          }
          findMany: {
            args: Prisma.PurchaseHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseHistoryPayload>[]
          }
          create: {
            args: Prisma.PurchaseHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseHistoryPayload>
          }
          createMany: {
            args: Prisma.PurchaseHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseHistoryPayload>[]
          }
          delete: {
            args: Prisma.PurchaseHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseHistoryPayload>
          }
          update: {
            args: Prisma.PurchaseHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseHistoryPayload>
          }
          deleteMany: {
            args: Prisma.PurchaseHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseHistoryPayload>[]
          }
          upsert: {
            args: Prisma.PurchaseHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseHistoryPayload>
          }
          aggregate: {
            args: Prisma.PurchaseHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchaseHistory>
          }
          groupBy: {
            args: Prisma.PurchaseHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    internalAccount?: InternalAccountOmit
    rechargeHistory?: RechargeHistoryOmit
    product?: ProductOmit
    cart?: CartOmit
    cartItem?: CartItemOmit
    purchaseHistory?: PurchaseHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    carts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carts?: boolean | UserCountOutputTypeCountCartsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
  }


  /**
   * Count Type InternalAccountCountOutputType
   */

  export type InternalAccountCountOutputType = {
    user: number
    rechargeHistory: number
  }

  export type InternalAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | InternalAccountCountOutputTypeCountUserArgs
    rechargeHistory?: boolean | InternalAccountCountOutputTypeCountRechargeHistoryArgs
  }

  // Custom InputTypes
  /**
   * InternalAccountCountOutputType without action
   */
  export type InternalAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalAccountCountOutputType
     */
    select?: InternalAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InternalAccountCountOutputType without action
   */
  export type InternalAccountCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * InternalAccountCountOutputType without action
   */
  export type InternalAccountCountOutputTypeCountRechargeHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RechargeHistoryWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    cartItems: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cartItems?: boolean | ProductCountOutputTypeCountCartItemsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }


  /**
   * Count Type CartCountOutputType
   */

  export type CartCountOutputType = {
    items: number
  }

  export type CartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CartCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartCountOutputType
     */
    select?: CartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }


  /**
   * Count Type PurchaseHistoryCountOutputType
   */

  export type PurchaseHistoryCountOutputType = {
    cart: number
  }

  export type PurchaseHistoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | PurchaseHistoryCountOutputTypeCountCartArgs
  }

  // Custom InputTypes
  /**
   * PurchaseHistoryCountOutputType without action
   */
  export type PurchaseHistoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseHistoryCountOutputType
     */
    select?: PurchaseHistoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PurchaseHistoryCountOutputType without action
   */
  export type PurchaseHistoryCountOutputTypeCountCartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    internalAccountId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    internalAccountId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    cpf: string | null
    password: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    internalAccountId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    cpf: string | null
    password: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    internalAccountId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    cpf: number
    password: number
    email: number
    createdAt: number
    updatedAt: number
    internalAccountId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    internalAccountId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    internalAccountId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    password?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    internalAccountId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    password?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    internalAccountId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    password?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    internalAccountId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    cpf: string
    password: string
    email: string
    createdAt: Date
    updatedAt: Date
    internalAccountId: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    password?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    internalAccountId?: boolean
    internalAccount?: boolean | User$internalAccountArgs<ExtArgs>
    carts?: boolean | User$cartsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    password?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    internalAccountId?: boolean
    internalAccount?: boolean | User$internalAccountArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    password?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    internalAccountId?: boolean
    internalAccount?: boolean | User$internalAccountArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    cpf?: boolean
    password?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    internalAccountId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "cpf" | "password" | "email" | "createdAt" | "updatedAt" | "internalAccountId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    internalAccount?: boolean | User$internalAccountArgs<ExtArgs>
    carts?: boolean | User$cartsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    internalAccount?: boolean | User$internalAccountArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    internalAccount?: boolean | User$internalAccountArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      internalAccount: Prisma.$InternalAccountPayload<ExtArgs> | null
      carts: Prisma.$CartPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      cpf: string
      password: string
      email: string
      createdAt: Date
      updatedAt: Date
      internalAccountId: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    internalAccount<T extends User$internalAccountArgs<ExtArgs> = {}>(args?: Subset<T, User$internalAccountArgs<ExtArgs>>): Prisma__InternalAccountClient<$Result.GetResult<Prisma.$InternalAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    carts<T extends User$cartsArgs<ExtArgs> = {}>(args?: Subset<T, User$cartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly cpf: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly internalAccountId: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.internalAccount
   */
  export type User$internalAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalAccount
     */
    select?: InternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalAccount
     */
    omit?: InternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalAccountInclude<ExtArgs> | null
    where?: InternalAccountWhereInput
  }

  /**
   * User.carts
   */
  export type User$cartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    where?: CartWhereInput
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    cursor?: CartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model InternalAccount
   */

  export type AggregateInternalAccount = {
    _count: InternalAccountCountAggregateOutputType | null
    _avg: InternalAccountAvgAggregateOutputType | null
    _sum: InternalAccountSumAggregateOutputType | null
    _min: InternalAccountMinAggregateOutputType | null
    _max: InternalAccountMaxAggregateOutputType | null
  }

  export type InternalAccountAvgAggregateOutputType = {
    id: number | null
    balance: Decimal | null
  }

  export type InternalAccountSumAggregateOutputType = {
    id: number | null
    balance: Decimal | null
  }

  export type InternalAccountMinAggregateOutputType = {
    id: number | null
    numberAccount: string | null
    agency: string | null
    balance: Decimal | null
  }

  export type InternalAccountMaxAggregateOutputType = {
    id: number | null
    numberAccount: string | null
    agency: string | null
    balance: Decimal | null
  }

  export type InternalAccountCountAggregateOutputType = {
    id: number
    numberAccount: number
    agency: number
    balance: number
    _all: number
  }


  export type InternalAccountAvgAggregateInputType = {
    id?: true
    balance?: true
  }

  export type InternalAccountSumAggregateInputType = {
    id?: true
    balance?: true
  }

  export type InternalAccountMinAggregateInputType = {
    id?: true
    numberAccount?: true
    agency?: true
    balance?: true
  }

  export type InternalAccountMaxAggregateInputType = {
    id?: true
    numberAccount?: true
    agency?: true
    balance?: true
  }

  export type InternalAccountCountAggregateInputType = {
    id?: true
    numberAccount?: true
    agency?: true
    balance?: true
    _all?: true
  }

  export type InternalAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InternalAccount to aggregate.
     */
    where?: InternalAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InternalAccounts to fetch.
     */
    orderBy?: InternalAccountOrderByWithRelationInput | InternalAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InternalAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InternalAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InternalAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InternalAccounts
    **/
    _count?: true | InternalAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InternalAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InternalAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InternalAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InternalAccountMaxAggregateInputType
  }

  export type GetInternalAccountAggregateType<T extends InternalAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateInternalAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInternalAccount[P]>
      : GetScalarType<T[P], AggregateInternalAccount[P]>
  }




  export type InternalAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InternalAccountWhereInput
    orderBy?: InternalAccountOrderByWithAggregationInput | InternalAccountOrderByWithAggregationInput[]
    by: InternalAccountScalarFieldEnum[] | InternalAccountScalarFieldEnum
    having?: InternalAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InternalAccountCountAggregateInputType | true
    _avg?: InternalAccountAvgAggregateInputType
    _sum?: InternalAccountSumAggregateInputType
    _min?: InternalAccountMinAggregateInputType
    _max?: InternalAccountMaxAggregateInputType
  }

  export type InternalAccountGroupByOutputType = {
    id: number
    numberAccount: string
    agency: string
    balance: Decimal
    _count: InternalAccountCountAggregateOutputType | null
    _avg: InternalAccountAvgAggregateOutputType | null
    _sum: InternalAccountSumAggregateOutputType | null
    _min: InternalAccountMinAggregateOutputType | null
    _max: InternalAccountMaxAggregateOutputType | null
  }

  type GetInternalAccountGroupByPayload<T extends InternalAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InternalAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InternalAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InternalAccountGroupByOutputType[P]>
            : GetScalarType<T[P], InternalAccountGroupByOutputType[P]>
        }
      >
    >


  export type InternalAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numberAccount?: boolean
    agency?: boolean
    balance?: boolean
    user?: boolean | InternalAccount$userArgs<ExtArgs>
    rechargeHistory?: boolean | InternalAccount$rechargeHistoryArgs<ExtArgs>
    _count?: boolean | InternalAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["internalAccount"]>

  export type InternalAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numberAccount?: boolean
    agency?: boolean
    balance?: boolean
  }, ExtArgs["result"]["internalAccount"]>

  export type InternalAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numberAccount?: boolean
    agency?: boolean
    balance?: boolean
  }, ExtArgs["result"]["internalAccount"]>

  export type InternalAccountSelectScalar = {
    id?: boolean
    numberAccount?: boolean
    agency?: boolean
    balance?: boolean
  }

  export type InternalAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numberAccount" | "agency" | "balance", ExtArgs["result"]["internalAccount"]>
  export type InternalAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | InternalAccount$userArgs<ExtArgs>
    rechargeHistory?: boolean | InternalAccount$rechargeHistoryArgs<ExtArgs>
    _count?: boolean | InternalAccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InternalAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InternalAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InternalAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InternalAccount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>[]
      rechargeHistory: Prisma.$RechargeHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numberAccount: string
      agency: string
      balance: Prisma.Decimal
    }, ExtArgs["result"]["internalAccount"]>
    composites: {}
  }

  type InternalAccountGetPayload<S extends boolean | null | undefined | InternalAccountDefaultArgs> = $Result.GetResult<Prisma.$InternalAccountPayload, S>

  type InternalAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InternalAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InternalAccountCountAggregateInputType | true
    }

  export interface InternalAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InternalAccount'], meta: { name: 'InternalAccount' } }
    /**
     * Find zero or one InternalAccount that matches the filter.
     * @param {InternalAccountFindUniqueArgs} args - Arguments to find a InternalAccount
     * @example
     * // Get one InternalAccount
     * const internalAccount = await prisma.internalAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InternalAccountFindUniqueArgs>(args: SelectSubset<T, InternalAccountFindUniqueArgs<ExtArgs>>): Prisma__InternalAccountClient<$Result.GetResult<Prisma.$InternalAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InternalAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InternalAccountFindUniqueOrThrowArgs} args - Arguments to find a InternalAccount
     * @example
     * // Get one InternalAccount
     * const internalAccount = await prisma.internalAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InternalAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, InternalAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InternalAccountClient<$Result.GetResult<Prisma.$InternalAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InternalAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalAccountFindFirstArgs} args - Arguments to find a InternalAccount
     * @example
     * // Get one InternalAccount
     * const internalAccount = await prisma.internalAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InternalAccountFindFirstArgs>(args?: SelectSubset<T, InternalAccountFindFirstArgs<ExtArgs>>): Prisma__InternalAccountClient<$Result.GetResult<Prisma.$InternalAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InternalAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalAccountFindFirstOrThrowArgs} args - Arguments to find a InternalAccount
     * @example
     * // Get one InternalAccount
     * const internalAccount = await prisma.internalAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InternalAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, InternalAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__InternalAccountClient<$Result.GetResult<Prisma.$InternalAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InternalAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InternalAccounts
     * const internalAccounts = await prisma.internalAccount.findMany()
     * 
     * // Get first 10 InternalAccounts
     * const internalAccounts = await prisma.internalAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const internalAccountWithIdOnly = await prisma.internalAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InternalAccountFindManyArgs>(args?: SelectSubset<T, InternalAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternalAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InternalAccount.
     * @param {InternalAccountCreateArgs} args - Arguments to create a InternalAccount.
     * @example
     * // Create one InternalAccount
     * const InternalAccount = await prisma.internalAccount.create({
     *   data: {
     *     // ... data to create a InternalAccount
     *   }
     * })
     * 
     */
    create<T extends InternalAccountCreateArgs>(args: SelectSubset<T, InternalAccountCreateArgs<ExtArgs>>): Prisma__InternalAccountClient<$Result.GetResult<Prisma.$InternalAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InternalAccounts.
     * @param {InternalAccountCreateManyArgs} args - Arguments to create many InternalAccounts.
     * @example
     * // Create many InternalAccounts
     * const internalAccount = await prisma.internalAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InternalAccountCreateManyArgs>(args?: SelectSubset<T, InternalAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InternalAccounts and returns the data saved in the database.
     * @param {InternalAccountCreateManyAndReturnArgs} args - Arguments to create many InternalAccounts.
     * @example
     * // Create many InternalAccounts
     * const internalAccount = await prisma.internalAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InternalAccounts and only return the `id`
     * const internalAccountWithIdOnly = await prisma.internalAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InternalAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, InternalAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternalAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InternalAccount.
     * @param {InternalAccountDeleteArgs} args - Arguments to delete one InternalAccount.
     * @example
     * // Delete one InternalAccount
     * const InternalAccount = await prisma.internalAccount.delete({
     *   where: {
     *     // ... filter to delete one InternalAccount
     *   }
     * })
     * 
     */
    delete<T extends InternalAccountDeleteArgs>(args: SelectSubset<T, InternalAccountDeleteArgs<ExtArgs>>): Prisma__InternalAccountClient<$Result.GetResult<Prisma.$InternalAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InternalAccount.
     * @param {InternalAccountUpdateArgs} args - Arguments to update one InternalAccount.
     * @example
     * // Update one InternalAccount
     * const internalAccount = await prisma.internalAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InternalAccountUpdateArgs>(args: SelectSubset<T, InternalAccountUpdateArgs<ExtArgs>>): Prisma__InternalAccountClient<$Result.GetResult<Prisma.$InternalAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InternalAccounts.
     * @param {InternalAccountDeleteManyArgs} args - Arguments to filter InternalAccounts to delete.
     * @example
     * // Delete a few InternalAccounts
     * const { count } = await prisma.internalAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InternalAccountDeleteManyArgs>(args?: SelectSubset<T, InternalAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InternalAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InternalAccounts
     * const internalAccount = await prisma.internalAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InternalAccountUpdateManyArgs>(args: SelectSubset<T, InternalAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InternalAccounts and returns the data updated in the database.
     * @param {InternalAccountUpdateManyAndReturnArgs} args - Arguments to update many InternalAccounts.
     * @example
     * // Update many InternalAccounts
     * const internalAccount = await prisma.internalAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InternalAccounts and only return the `id`
     * const internalAccountWithIdOnly = await prisma.internalAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InternalAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, InternalAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternalAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InternalAccount.
     * @param {InternalAccountUpsertArgs} args - Arguments to update or create a InternalAccount.
     * @example
     * // Update or create a InternalAccount
     * const internalAccount = await prisma.internalAccount.upsert({
     *   create: {
     *     // ... data to create a InternalAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InternalAccount we want to update
     *   }
     * })
     */
    upsert<T extends InternalAccountUpsertArgs>(args: SelectSubset<T, InternalAccountUpsertArgs<ExtArgs>>): Prisma__InternalAccountClient<$Result.GetResult<Prisma.$InternalAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InternalAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalAccountCountArgs} args - Arguments to filter InternalAccounts to count.
     * @example
     * // Count the number of InternalAccounts
     * const count = await prisma.internalAccount.count({
     *   where: {
     *     // ... the filter for the InternalAccounts we want to count
     *   }
     * })
    **/
    count<T extends InternalAccountCountArgs>(
      args?: Subset<T, InternalAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InternalAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InternalAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InternalAccountAggregateArgs>(args: Subset<T, InternalAccountAggregateArgs>): Prisma.PrismaPromise<GetInternalAccountAggregateType<T>>

    /**
     * Group by InternalAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InternalAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InternalAccountGroupByArgs['orderBy'] }
        : { orderBy?: InternalAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InternalAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInternalAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InternalAccount model
   */
  readonly fields: InternalAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InternalAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InternalAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends InternalAccount$userArgs<ExtArgs> = {}>(args?: Subset<T, InternalAccount$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rechargeHistory<T extends InternalAccount$rechargeHistoryArgs<ExtArgs> = {}>(args?: Subset<T, InternalAccount$rechargeHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RechargeHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InternalAccount model
   */
  interface InternalAccountFieldRefs {
    readonly id: FieldRef<"InternalAccount", 'Int'>
    readonly numberAccount: FieldRef<"InternalAccount", 'String'>
    readonly agency: FieldRef<"InternalAccount", 'String'>
    readonly balance: FieldRef<"InternalAccount", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * InternalAccount findUnique
   */
  export type InternalAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalAccount
     */
    select?: InternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalAccount
     */
    omit?: InternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalAccountInclude<ExtArgs> | null
    /**
     * Filter, which InternalAccount to fetch.
     */
    where: InternalAccountWhereUniqueInput
  }

  /**
   * InternalAccount findUniqueOrThrow
   */
  export type InternalAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalAccount
     */
    select?: InternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalAccount
     */
    omit?: InternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalAccountInclude<ExtArgs> | null
    /**
     * Filter, which InternalAccount to fetch.
     */
    where: InternalAccountWhereUniqueInput
  }

  /**
   * InternalAccount findFirst
   */
  export type InternalAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalAccount
     */
    select?: InternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalAccount
     */
    omit?: InternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalAccountInclude<ExtArgs> | null
    /**
     * Filter, which InternalAccount to fetch.
     */
    where?: InternalAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InternalAccounts to fetch.
     */
    orderBy?: InternalAccountOrderByWithRelationInput | InternalAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InternalAccounts.
     */
    cursor?: InternalAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InternalAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InternalAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InternalAccounts.
     */
    distinct?: InternalAccountScalarFieldEnum | InternalAccountScalarFieldEnum[]
  }

  /**
   * InternalAccount findFirstOrThrow
   */
  export type InternalAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalAccount
     */
    select?: InternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalAccount
     */
    omit?: InternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalAccountInclude<ExtArgs> | null
    /**
     * Filter, which InternalAccount to fetch.
     */
    where?: InternalAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InternalAccounts to fetch.
     */
    orderBy?: InternalAccountOrderByWithRelationInput | InternalAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InternalAccounts.
     */
    cursor?: InternalAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InternalAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InternalAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InternalAccounts.
     */
    distinct?: InternalAccountScalarFieldEnum | InternalAccountScalarFieldEnum[]
  }

  /**
   * InternalAccount findMany
   */
  export type InternalAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalAccount
     */
    select?: InternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalAccount
     */
    omit?: InternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalAccountInclude<ExtArgs> | null
    /**
     * Filter, which InternalAccounts to fetch.
     */
    where?: InternalAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InternalAccounts to fetch.
     */
    orderBy?: InternalAccountOrderByWithRelationInput | InternalAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InternalAccounts.
     */
    cursor?: InternalAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InternalAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InternalAccounts.
     */
    skip?: number
    distinct?: InternalAccountScalarFieldEnum | InternalAccountScalarFieldEnum[]
  }

  /**
   * InternalAccount create
   */
  export type InternalAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalAccount
     */
    select?: InternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalAccount
     */
    omit?: InternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a InternalAccount.
     */
    data: XOR<InternalAccountCreateInput, InternalAccountUncheckedCreateInput>
  }

  /**
   * InternalAccount createMany
   */
  export type InternalAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InternalAccounts.
     */
    data: InternalAccountCreateManyInput | InternalAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InternalAccount createManyAndReturn
   */
  export type InternalAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalAccount
     */
    select?: InternalAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InternalAccount
     */
    omit?: InternalAccountOmit<ExtArgs> | null
    /**
     * The data used to create many InternalAccounts.
     */
    data: InternalAccountCreateManyInput | InternalAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InternalAccount update
   */
  export type InternalAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalAccount
     */
    select?: InternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalAccount
     */
    omit?: InternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a InternalAccount.
     */
    data: XOR<InternalAccountUpdateInput, InternalAccountUncheckedUpdateInput>
    /**
     * Choose, which InternalAccount to update.
     */
    where: InternalAccountWhereUniqueInput
  }

  /**
   * InternalAccount updateMany
   */
  export type InternalAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InternalAccounts.
     */
    data: XOR<InternalAccountUpdateManyMutationInput, InternalAccountUncheckedUpdateManyInput>
    /**
     * Filter which InternalAccounts to update
     */
    where?: InternalAccountWhereInput
    /**
     * Limit how many InternalAccounts to update.
     */
    limit?: number
  }

  /**
   * InternalAccount updateManyAndReturn
   */
  export type InternalAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalAccount
     */
    select?: InternalAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InternalAccount
     */
    omit?: InternalAccountOmit<ExtArgs> | null
    /**
     * The data used to update InternalAccounts.
     */
    data: XOR<InternalAccountUpdateManyMutationInput, InternalAccountUncheckedUpdateManyInput>
    /**
     * Filter which InternalAccounts to update
     */
    where?: InternalAccountWhereInput
    /**
     * Limit how many InternalAccounts to update.
     */
    limit?: number
  }

  /**
   * InternalAccount upsert
   */
  export type InternalAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalAccount
     */
    select?: InternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalAccount
     */
    omit?: InternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the InternalAccount to update in case it exists.
     */
    where: InternalAccountWhereUniqueInput
    /**
     * In case the InternalAccount found by the `where` argument doesn't exist, create a new InternalAccount with this data.
     */
    create: XOR<InternalAccountCreateInput, InternalAccountUncheckedCreateInput>
    /**
     * In case the InternalAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InternalAccountUpdateInput, InternalAccountUncheckedUpdateInput>
  }

  /**
   * InternalAccount delete
   */
  export type InternalAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalAccount
     */
    select?: InternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalAccount
     */
    omit?: InternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalAccountInclude<ExtArgs> | null
    /**
     * Filter which InternalAccount to delete.
     */
    where: InternalAccountWhereUniqueInput
  }

  /**
   * InternalAccount deleteMany
   */
  export type InternalAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InternalAccounts to delete
     */
    where?: InternalAccountWhereInput
    /**
     * Limit how many InternalAccounts to delete.
     */
    limit?: number
  }

  /**
   * InternalAccount.user
   */
  export type InternalAccount$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * InternalAccount.rechargeHistory
   */
  export type InternalAccount$rechargeHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeHistory
     */
    select?: RechargeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeHistory
     */
    omit?: RechargeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeHistoryInclude<ExtArgs> | null
    where?: RechargeHistoryWhereInput
    orderBy?: RechargeHistoryOrderByWithRelationInput | RechargeHistoryOrderByWithRelationInput[]
    cursor?: RechargeHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RechargeHistoryScalarFieldEnum | RechargeHistoryScalarFieldEnum[]
  }

  /**
   * InternalAccount without action
   */
  export type InternalAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalAccount
     */
    select?: InternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalAccount
     */
    omit?: InternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalAccountInclude<ExtArgs> | null
  }


  /**
   * Model RechargeHistory
   */

  export type AggregateRechargeHistory = {
    _count: RechargeHistoryCountAggregateOutputType | null
    _avg: RechargeHistoryAvgAggregateOutputType | null
    _sum: RechargeHistorySumAggregateOutputType | null
    _min: RechargeHistoryMinAggregateOutputType | null
    _max: RechargeHistoryMaxAggregateOutputType | null
  }

  export type RechargeHistoryAvgAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    internalAccountId: number | null
  }

  export type RechargeHistorySumAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    internalAccountId: number | null
  }

  export type RechargeHistoryMinAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    createdAt: Date | null
    internalAccountId: number | null
  }

  export type RechargeHistoryMaxAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    createdAt: Date | null
    internalAccountId: number | null
  }

  export type RechargeHistoryCountAggregateOutputType = {
    id: number
    amount: number
    createdAt: number
    internalAccountId: number
    _all: number
  }


  export type RechargeHistoryAvgAggregateInputType = {
    id?: true
    amount?: true
    internalAccountId?: true
  }

  export type RechargeHistorySumAggregateInputType = {
    id?: true
    amount?: true
    internalAccountId?: true
  }

  export type RechargeHistoryMinAggregateInputType = {
    id?: true
    amount?: true
    createdAt?: true
    internalAccountId?: true
  }

  export type RechargeHistoryMaxAggregateInputType = {
    id?: true
    amount?: true
    createdAt?: true
    internalAccountId?: true
  }

  export type RechargeHistoryCountAggregateInputType = {
    id?: true
    amount?: true
    createdAt?: true
    internalAccountId?: true
    _all?: true
  }

  export type RechargeHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RechargeHistory to aggregate.
     */
    where?: RechargeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RechargeHistories to fetch.
     */
    orderBy?: RechargeHistoryOrderByWithRelationInput | RechargeHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RechargeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RechargeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RechargeHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RechargeHistories
    **/
    _count?: true | RechargeHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RechargeHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RechargeHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RechargeHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RechargeHistoryMaxAggregateInputType
  }

  export type GetRechargeHistoryAggregateType<T extends RechargeHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRechargeHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRechargeHistory[P]>
      : GetScalarType<T[P], AggregateRechargeHistory[P]>
  }




  export type RechargeHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RechargeHistoryWhereInput
    orderBy?: RechargeHistoryOrderByWithAggregationInput | RechargeHistoryOrderByWithAggregationInput[]
    by: RechargeHistoryScalarFieldEnum[] | RechargeHistoryScalarFieldEnum
    having?: RechargeHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RechargeHistoryCountAggregateInputType | true
    _avg?: RechargeHistoryAvgAggregateInputType
    _sum?: RechargeHistorySumAggregateInputType
    _min?: RechargeHistoryMinAggregateInputType
    _max?: RechargeHistoryMaxAggregateInputType
  }

  export type RechargeHistoryGroupByOutputType = {
    id: number
    amount: Decimal
    createdAt: Date
    internalAccountId: number
    _count: RechargeHistoryCountAggregateOutputType | null
    _avg: RechargeHistoryAvgAggregateOutputType | null
    _sum: RechargeHistorySumAggregateOutputType | null
    _min: RechargeHistoryMinAggregateOutputType | null
    _max: RechargeHistoryMaxAggregateOutputType | null
  }

  type GetRechargeHistoryGroupByPayload<T extends RechargeHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RechargeHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RechargeHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RechargeHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], RechargeHistoryGroupByOutputType[P]>
        }
      >
    >


  export type RechargeHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    createdAt?: boolean
    internalAccountId?: boolean
    internalAccount?: boolean | InternalAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rechargeHistory"]>

  export type RechargeHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    createdAt?: boolean
    internalAccountId?: boolean
    internalAccount?: boolean | InternalAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rechargeHistory"]>

  export type RechargeHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    createdAt?: boolean
    internalAccountId?: boolean
    internalAccount?: boolean | InternalAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rechargeHistory"]>

  export type RechargeHistorySelectScalar = {
    id?: boolean
    amount?: boolean
    createdAt?: boolean
    internalAccountId?: boolean
  }

  export type RechargeHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "createdAt" | "internalAccountId", ExtArgs["result"]["rechargeHistory"]>
  export type RechargeHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    internalAccount?: boolean | InternalAccountDefaultArgs<ExtArgs>
  }
  export type RechargeHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    internalAccount?: boolean | InternalAccountDefaultArgs<ExtArgs>
  }
  export type RechargeHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    internalAccount?: boolean | InternalAccountDefaultArgs<ExtArgs>
  }

  export type $RechargeHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RechargeHistory"
    objects: {
      internalAccount: Prisma.$InternalAccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: Prisma.Decimal
      createdAt: Date
      internalAccountId: number
    }, ExtArgs["result"]["rechargeHistory"]>
    composites: {}
  }

  type RechargeHistoryGetPayload<S extends boolean | null | undefined | RechargeHistoryDefaultArgs> = $Result.GetResult<Prisma.$RechargeHistoryPayload, S>

  type RechargeHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RechargeHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RechargeHistoryCountAggregateInputType | true
    }

  export interface RechargeHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RechargeHistory'], meta: { name: 'RechargeHistory' } }
    /**
     * Find zero or one RechargeHistory that matches the filter.
     * @param {RechargeHistoryFindUniqueArgs} args - Arguments to find a RechargeHistory
     * @example
     * // Get one RechargeHistory
     * const rechargeHistory = await prisma.rechargeHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RechargeHistoryFindUniqueArgs>(args: SelectSubset<T, RechargeHistoryFindUniqueArgs<ExtArgs>>): Prisma__RechargeHistoryClient<$Result.GetResult<Prisma.$RechargeHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RechargeHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RechargeHistoryFindUniqueOrThrowArgs} args - Arguments to find a RechargeHistory
     * @example
     * // Get one RechargeHistory
     * const rechargeHistory = await prisma.rechargeHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RechargeHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, RechargeHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RechargeHistoryClient<$Result.GetResult<Prisma.$RechargeHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RechargeHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RechargeHistoryFindFirstArgs} args - Arguments to find a RechargeHistory
     * @example
     * // Get one RechargeHistory
     * const rechargeHistory = await prisma.rechargeHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RechargeHistoryFindFirstArgs>(args?: SelectSubset<T, RechargeHistoryFindFirstArgs<ExtArgs>>): Prisma__RechargeHistoryClient<$Result.GetResult<Prisma.$RechargeHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RechargeHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RechargeHistoryFindFirstOrThrowArgs} args - Arguments to find a RechargeHistory
     * @example
     * // Get one RechargeHistory
     * const rechargeHistory = await prisma.rechargeHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RechargeHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, RechargeHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RechargeHistoryClient<$Result.GetResult<Prisma.$RechargeHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RechargeHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RechargeHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RechargeHistories
     * const rechargeHistories = await prisma.rechargeHistory.findMany()
     * 
     * // Get first 10 RechargeHistories
     * const rechargeHistories = await prisma.rechargeHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rechargeHistoryWithIdOnly = await prisma.rechargeHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RechargeHistoryFindManyArgs>(args?: SelectSubset<T, RechargeHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RechargeHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RechargeHistory.
     * @param {RechargeHistoryCreateArgs} args - Arguments to create a RechargeHistory.
     * @example
     * // Create one RechargeHistory
     * const RechargeHistory = await prisma.rechargeHistory.create({
     *   data: {
     *     // ... data to create a RechargeHistory
     *   }
     * })
     * 
     */
    create<T extends RechargeHistoryCreateArgs>(args: SelectSubset<T, RechargeHistoryCreateArgs<ExtArgs>>): Prisma__RechargeHistoryClient<$Result.GetResult<Prisma.$RechargeHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RechargeHistories.
     * @param {RechargeHistoryCreateManyArgs} args - Arguments to create many RechargeHistories.
     * @example
     * // Create many RechargeHistories
     * const rechargeHistory = await prisma.rechargeHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RechargeHistoryCreateManyArgs>(args?: SelectSubset<T, RechargeHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RechargeHistories and returns the data saved in the database.
     * @param {RechargeHistoryCreateManyAndReturnArgs} args - Arguments to create many RechargeHistories.
     * @example
     * // Create many RechargeHistories
     * const rechargeHistory = await prisma.rechargeHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RechargeHistories and only return the `id`
     * const rechargeHistoryWithIdOnly = await prisma.rechargeHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RechargeHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, RechargeHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RechargeHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RechargeHistory.
     * @param {RechargeHistoryDeleteArgs} args - Arguments to delete one RechargeHistory.
     * @example
     * // Delete one RechargeHistory
     * const RechargeHistory = await prisma.rechargeHistory.delete({
     *   where: {
     *     // ... filter to delete one RechargeHistory
     *   }
     * })
     * 
     */
    delete<T extends RechargeHistoryDeleteArgs>(args: SelectSubset<T, RechargeHistoryDeleteArgs<ExtArgs>>): Prisma__RechargeHistoryClient<$Result.GetResult<Prisma.$RechargeHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RechargeHistory.
     * @param {RechargeHistoryUpdateArgs} args - Arguments to update one RechargeHistory.
     * @example
     * // Update one RechargeHistory
     * const rechargeHistory = await prisma.rechargeHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RechargeHistoryUpdateArgs>(args: SelectSubset<T, RechargeHistoryUpdateArgs<ExtArgs>>): Prisma__RechargeHistoryClient<$Result.GetResult<Prisma.$RechargeHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RechargeHistories.
     * @param {RechargeHistoryDeleteManyArgs} args - Arguments to filter RechargeHistories to delete.
     * @example
     * // Delete a few RechargeHistories
     * const { count } = await prisma.rechargeHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RechargeHistoryDeleteManyArgs>(args?: SelectSubset<T, RechargeHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RechargeHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RechargeHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RechargeHistories
     * const rechargeHistory = await prisma.rechargeHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RechargeHistoryUpdateManyArgs>(args: SelectSubset<T, RechargeHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RechargeHistories and returns the data updated in the database.
     * @param {RechargeHistoryUpdateManyAndReturnArgs} args - Arguments to update many RechargeHistories.
     * @example
     * // Update many RechargeHistories
     * const rechargeHistory = await prisma.rechargeHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RechargeHistories and only return the `id`
     * const rechargeHistoryWithIdOnly = await prisma.rechargeHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RechargeHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, RechargeHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RechargeHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RechargeHistory.
     * @param {RechargeHistoryUpsertArgs} args - Arguments to update or create a RechargeHistory.
     * @example
     * // Update or create a RechargeHistory
     * const rechargeHistory = await prisma.rechargeHistory.upsert({
     *   create: {
     *     // ... data to create a RechargeHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RechargeHistory we want to update
     *   }
     * })
     */
    upsert<T extends RechargeHistoryUpsertArgs>(args: SelectSubset<T, RechargeHistoryUpsertArgs<ExtArgs>>): Prisma__RechargeHistoryClient<$Result.GetResult<Prisma.$RechargeHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RechargeHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RechargeHistoryCountArgs} args - Arguments to filter RechargeHistories to count.
     * @example
     * // Count the number of RechargeHistories
     * const count = await prisma.rechargeHistory.count({
     *   where: {
     *     // ... the filter for the RechargeHistories we want to count
     *   }
     * })
    **/
    count<T extends RechargeHistoryCountArgs>(
      args?: Subset<T, RechargeHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RechargeHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RechargeHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RechargeHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RechargeHistoryAggregateArgs>(args: Subset<T, RechargeHistoryAggregateArgs>): Prisma.PrismaPromise<GetRechargeHistoryAggregateType<T>>

    /**
     * Group by RechargeHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RechargeHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RechargeHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RechargeHistoryGroupByArgs['orderBy'] }
        : { orderBy?: RechargeHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RechargeHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRechargeHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RechargeHistory model
   */
  readonly fields: RechargeHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RechargeHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RechargeHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    internalAccount<T extends InternalAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InternalAccountDefaultArgs<ExtArgs>>): Prisma__InternalAccountClient<$Result.GetResult<Prisma.$InternalAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RechargeHistory model
   */
  interface RechargeHistoryFieldRefs {
    readonly id: FieldRef<"RechargeHistory", 'Int'>
    readonly amount: FieldRef<"RechargeHistory", 'Decimal'>
    readonly createdAt: FieldRef<"RechargeHistory", 'DateTime'>
    readonly internalAccountId: FieldRef<"RechargeHistory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RechargeHistory findUnique
   */
  export type RechargeHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeHistory
     */
    select?: RechargeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeHistory
     */
    omit?: RechargeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RechargeHistory to fetch.
     */
    where: RechargeHistoryWhereUniqueInput
  }

  /**
   * RechargeHistory findUniqueOrThrow
   */
  export type RechargeHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeHistory
     */
    select?: RechargeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeHistory
     */
    omit?: RechargeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RechargeHistory to fetch.
     */
    where: RechargeHistoryWhereUniqueInput
  }

  /**
   * RechargeHistory findFirst
   */
  export type RechargeHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeHistory
     */
    select?: RechargeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeHistory
     */
    omit?: RechargeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RechargeHistory to fetch.
     */
    where?: RechargeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RechargeHistories to fetch.
     */
    orderBy?: RechargeHistoryOrderByWithRelationInput | RechargeHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RechargeHistories.
     */
    cursor?: RechargeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RechargeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RechargeHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RechargeHistories.
     */
    distinct?: RechargeHistoryScalarFieldEnum | RechargeHistoryScalarFieldEnum[]
  }

  /**
   * RechargeHistory findFirstOrThrow
   */
  export type RechargeHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeHistory
     */
    select?: RechargeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeHistory
     */
    omit?: RechargeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RechargeHistory to fetch.
     */
    where?: RechargeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RechargeHistories to fetch.
     */
    orderBy?: RechargeHistoryOrderByWithRelationInput | RechargeHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RechargeHistories.
     */
    cursor?: RechargeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RechargeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RechargeHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RechargeHistories.
     */
    distinct?: RechargeHistoryScalarFieldEnum | RechargeHistoryScalarFieldEnum[]
  }

  /**
   * RechargeHistory findMany
   */
  export type RechargeHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeHistory
     */
    select?: RechargeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeHistory
     */
    omit?: RechargeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RechargeHistories to fetch.
     */
    where?: RechargeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RechargeHistories to fetch.
     */
    orderBy?: RechargeHistoryOrderByWithRelationInput | RechargeHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RechargeHistories.
     */
    cursor?: RechargeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RechargeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RechargeHistories.
     */
    skip?: number
    distinct?: RechargeHistoryScalarFieldEnum | RechargeHistoryScalarFieldEnum[]
  }

  /**
   * RechargeHistory create
   */
  export type RechargeHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeHistory
     */
    select?: RechargeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeHistory
     */
    omit?: RechargeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a RechargeHistory.
     */
    data: XOR<RechargeHistoryCreateInput, RechargeHistoryUncheckedCreateInput>
  }

  /**
   * RechargeHistory createMany
   */
  export type RechargeHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RechargeHistories.
     */
    data: RechargeHistoryCreateManyInput | RechargeHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RechargeHistory createManyAndReturn
   */
  export type RechargeHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeHistory
     */
    select?: RechargeHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeHistory
     */
    omit?: RechargeHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many RechargeHistories.
     */
    data: RechargeHistoryCreateManyInput | RechargeHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RechargeHistory update
   */
  export type RechargeHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeHistory
     */
    select?: RechargeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeHistory
     */
    omit?: RechargeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a RechargeHistory.
     */
    data: XOR<RechargeHistoryUpdateInput, RechargeHistoryUncheckedUpdateInput>
    /**
     * Choose, which RechargeHistory to update.
     */
    where: RechargeHistoryWhereUniqueInput
  }

  /**
   * RechargeHistory updateMany
   */
  export type RechargeHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RechargeHistories.
     */
    data: XOR<RechargeHistoryUpdateManyMutationInput, RechargeHistoryUncheckedUpdateManyInput>
    /**
     * Filter which RechargeHistories to update
     */
    where?: RechargeHistoryWhereInput
    /**
     * Limit how many RechargeHistories to update.
     */
    limit?: number
  }

  /**
   * RechargeHistory updateManyAndReturn
   */
  export type RechargeHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeHistory
     */
    select?: RechargeHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeHistory
     */
    omit?: RechargeHistoryOmit<ExtArgs> | null
    /**
     * The data used to update RechargeHistories.
     */
    data: XOR<RechargeHistoryUpdateManyMutationInput, RechargeHistoryUncheckedUpdateManyInput>
    /**
     * Filter which RechargeHistories to update
     */
    where?: RechargeHistoryWhereInput
    /**
     * Limit how many RechargeHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RechargeHistory upsert
   */
  export type RechargeHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeHistory
     */
    select?: RechargeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeHistory
     */
    omit?: RechargeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the RechargeHistory to update in case it exists.
     */
    where: RechargeHistoryWhereUniqueInput
    /**
     * In case the RechargeHistory found by the `where` argument doesn't exist, create a new RechargeHistory with this data.
     */
    create: XOR<RechargeHistoryCreateInput, RechargeHistoryUncheckedCreateInput>
    /**
     * In case the RechargeHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RechargeHistoryUpdateInput, RechargeHistoryUncheckedUpdateInput>
  }

  /**
   * RechargeHistory delete
   */
  export type RechargeHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeHistory
     */
    select?: RechargeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeHistory
     */
    omit?: RechargeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeHistoryInclude<ExtArgs> | null
    /**
     * Filter which RechargeHistory to delete.
     */
    where: RechargeHistoryWhereUniqueInput
  }

  /**
   * RechargeHistory deleteMany
   */
  export type RechargeHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RechargeHistories to delete
     */
    where?: RechargeHistoryWhereInput
    /**
     * Limit how many RechargeHistories to delete.
     */
    limit?: number
  }

  /**
   * RechargeHistory without action
   */
  export type RechargeHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RechargeHistory
     */
    select?: RechargeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RechargeHistory
     */
    omit?: RechargeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RechargeHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    value: Decimal | null
    quantity: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    value: Decimal | null
    quantity: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    value: Decimal | null
    quantity: number | null
    createdAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    value: Decimal | null
    quantity: number | null
    createdAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    value: number
    quantity: number
    createdAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    value?: true
    quantity?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    value?: true
    quantity?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    value?: true
    quantity?: true
    createdAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    value?: true
    quantity?: true
    createdAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    value?: true
    quantity?: true
    createdAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    value: Decimal
    quantity: number
    createdAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    quantity?: boolean
    createdAt?: boolean
    cartItems?: boolean | Product$cartItemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    quantity?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    quantity?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    value?: boolean
    quantity?: boolean
    createdAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "value" | "quantity" | "createdAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cartItems?: boolean | Product$cartItemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      cartItems: Prisma.$CartItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      value: Prisma.Decimal
      quantity: number
      createdAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cartItems<T extends Product$cartItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$cartItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly value: FieldRef<"Product", 'Decimal'>
    readonly quantity: FieldRef<"Product", 'Int'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.cartItems
   */
  export type Product$cartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartAvgAggregateOutputType = {
    id: number | null
    totalValue: Decimal | null
    userId: number | null
    purchaseId: number | null
  }

  export type CartSumAggregateOutputType = {
    id: number | null
    totalValue: Decimal | null
    userId: number | null
    purchaseId: number | null
  }

  export type CartMinAggregateOutputType = {
    id: number | null
    status: $Enums.CartStatus | null
    description: string | null
    totalValue: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    purchaseId: number | null
  }

  export type CartMaxAggregateOutputType = {
    id: number | null
    status: $Enums.CartStatus | null
    description: string | null
    totalValue: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    purchaseId: number | null
  }

  export type CartCountAggregateOutputType = {
    id: number
    status: number
    description: number
    totalValue: number
    createdAt: number
    updatedAt: number
    userId: number
    purchaseId: number
    _all: number
  }


  export type CartAvgAggregateInputType = {
    id?: true
    totalValue?: true
    userId?: true
    purchaseId?: true
  }

  export type CartSumAggregateInputType = {
    id?: true
    totalValue?: true
    userId?: true
    purchaseId?: true
  }

  export type CartMinAggregateInputType = {
    id?: true
    status?: true
    description?: true
    totalValue?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    purchaseId?: true
  }

  export type CartMaxAggregateInputType = {
    id?: true
    status?: true
    description?: true
    totalValue?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    purchaseId?: true
  }

  export type CartCountAggregateInputType = {
    id?: true
    status?: true
    description?: true
    totalValue?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    purchaseId?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cart to aggregate.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type CartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
    orderBy?: CartOrderByWithAggregationInput | CartOrderByWithAggregationInput[]
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: CartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _avg?: CartAvgAggregateInputType
    _sum?: CartSumAggregateInputType
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    id: number
    status: $Enums.CartStatus
    description: string | null
    totalValue: Decimal
    createdAt: Date
    updatedAt: Date
    userId: number
    purchaseId: number | null
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends CartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type CartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    description?: boolean
    totalValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    purchaseId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Cart$itemsArgs<ExtArgs>
    purchase?: boolean | Cart$purchaseArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type CartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    description?: boolean
    totalValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    purchaseId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    purchase?: boolean | Cart$purchaseArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type CartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    description?: boolean
    totalValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    purchaseId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    purchase?: boolean | Cart$purchaseArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type CartSelectScalar = {
    id?: boolean
    status?: boolean
    description?: boolean
    totalValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    purchaseId?: boolean
  }

  export type CartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "description" | "totalValue" | "createdAt" | "updatedAt" | "userId" | "purchaseId", ExtArgs["result"]["cart"]>
  export type CartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Cart$itemsArgs<ExtArgs>
    purchase?: boolean | Cart$purchaseArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    purchase?: boolean | Cart$purchaseArgs<ExtArgs>
  }
  export type CartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    purchase?: boolean | Cart$purchaseArgs<ExtArgs>
  }

  export type $CartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cart"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$CartItemPayload<ExtArgs>[]
      purchase: Prisma.$PurchaseHistoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: $Enums.CartStatus
      description: string | null
      totalValue: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
      userId: number
      purchaseId: number | null
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }

  type CartGetPayload<S extends boolean | null | undefined | CartDefaultArgs> = $Result.GetResult<Prisma.$CartPayload, S>

  type CartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface CartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cart'], meta: { name: 'Cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {CartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartFindUniqueArgs>(args: SelectSubset<T, CartFindUniqueArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartFindUniqueOrThrowArgs>(args: SelectSubset<T, CartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartFindFirstArgs>(args?: SelectSubset<T, CartFindFirstArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartFindFirstOrThrowArgs>(args?: SelectSubset<T, CartFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartFindManyArgs>(args?: SelectSubset<T, CartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart.
     * @param {CartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
     */
    create<T extends CartCreateArgs>(args: SelectSubset<T, CartCreateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {CartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartCreateManyArgs>(args?: SelectSubset<T, CartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carts and returns the data saved in the database.
     * @param {CartCreateManyAndReturnArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carts and only return the `id`
     * const cartWithIdOnly = await prisma.cart.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartCreateManyAndReturnArgs>(args?: SelectSubset<T, CartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cart.
     * @param {CartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
     */
    delete<T extends CartDeleteArgs>(args: SelectSubset<T, CartDeleteArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart.
     * @param {CartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartUpdateArgs>(args: SelectSubset<T, CartUpdateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {CartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartDeleteManyArgs>(args?: SelectSubset<T, CartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartUpdateManyArgs>(args: SelectSubset<T, CartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts and returns the data updated in the database.
     * @param {CartUpdateManyAndReturnArgs} args - Arguments to update many Carts.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carts and only return the `id`
     * const cartWithIdOnly = await prisma.cart.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CartUpdateManyAndReturnArgs>(args: SelectSubset<T, CartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cart.
     * @param {CartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
     */
    upsert<T extends CartUpsertArgs>(args: SelectSubset<T, CartUpsertArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartCountArgs>(
      args?: Subset<T, CartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartGroupByArgs['orderBy'] }
        : { orderBy?: CartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cart model
   */
  readonly fields: CartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Cart$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Cart$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchase<T extends Cart$purchaseArgs<ExtArgs> = {}>(args?: Subset<T, Cart$purchaseArgs<ExtArgs>>): Prisma__PurchaseHistoryClient<$Result.GetResult<Prisma.$PurchaseHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cart model
   */
  interface CartFieldRefs {
    readonly id: FieldRef<"Cart", 'Int'>
    readonly status: FieldRef<"Cart", 'CartStatus'>
    readonly description: FieldRef<"Cart", 'String'>
    readonly totalValue: FieldRef<"Cart", 'Decimal'>
    readonly createdAt: FieldRef<"Cart", 'DateTime'>
    readonly updatedAt: FieldRef<"Cart", 'DateTime'>
    readonly userId: FieldRef<"Cart", 'Int'>
    readonly purchaseId: FieldRef<"Cart", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Cart findUnique
   */
  export type CartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findUniqueOrThrow
   */
  export type CartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findFirst
   */
  export type CartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findFirstOrThrow
   */
  export type CartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findMany
   */
  export type CartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart create
   */
  export type CartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to create a Cart.
     */
    data: XOR<CartCreateInput, CartUncheckedCreateInput>
  }

  /**
   * Cart createMany
   */
  export type CartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cart createManyAndReturn
   */
  export type CartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cart update
   */
  export type CartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to update a Cart.
     */
    data: XOR<CartUpdateInput, CartUncheckedUpdateInput>
    /**
     * Choose, which Cart to update.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart updateMany
   */
  export type CartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
  }

  /**
   * Cart updateManyAndReturn
   */
  export type CartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cart upsert
   */
  export type CartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The filter to search for the Cart to update in case it exists.
     */
    where: CartWhereUniqueInput
    /**
     * In case the Cart found by the `where` argument doesn't exist, create a new Cart with this data.
     */
    create: XOR<CartCreateInput, CartUncheckedCreateInput>
    /**
     * In case the Cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartUpdateInput, CartUncheckedUpdateInput>
  }

  /**
   * Cart delete
   */
  export type CartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter which Cart to delete.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart deleteMany
   */
  export type CartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to delete
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to delete.
     */
    limit?: number
  }

  /**
   * Cart.items
   */
  export type Cart$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * Cart.purchase
   */
  export type Cart$purchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseHistory
     */
    select?: PurchaseHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseHistory
     */
    omit?: PurchaseHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseHistoryInclude<ExtArgs> | null
    where?: PurchaseHistoryWhereInput
  }

  /**
   * Cart without action
   */
  export type CartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
  }


  /**
   * Model CartItem
   */

  export type AggregateCartItem = {
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  export type CartItemAvgAggregateOutputType = {
    cartId: number | null
    productId: number | null
    quantity: number | null
    unitPrice: Decimal | null
    discount: Decimal | null
  }

  export type CartItemSumAggregateOutputType = {
    cartId: number | null
    productId: number | null
    quantity: number | null
    unitPrice: Decimal | null
    discount: Decimal | null
  }

  export type CartItemMinAggregateOutputType = {
    cartId: number | null
    productId: number | null
    quantity: number | null
    unitPrice: Decimal | null
    discount: Decimal | null
  }

  export type CartItemMaxAggregateOutputType = {
    cartId: number | null
    productId: number | null
    quantity: number | null
    unitPrice: Decimal | null
    discount: Decimal | null
  }

  export type CartItemCountAggregateOutputType = {
    cartId: number
    productId: number
    quantity: number
    unitPrice: number
    discount: number
    _all: number
  }


  export type CartItemAvgAggregateInputType = {
    cartId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    discount?: true
  }

  export type CartItemSumAggregateInputType = {
    cartId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    discount?: true
  }

  export type CartItemMinAggregateInputType = {
    cartId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    discount?: true
  }

  export type CartItemMaxAggregateInputType = {
    cartId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    discount?: true
  }

  export type CartItemCountAggregateInputType = {
    cartId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    discount?: true
    _all?: true
  }

  export type CartItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItem to aggregate.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CartItems
    **/
    _count?: true | CartItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartItemMaxAggregateInputType
  }

  export type GetCartItemAggregateType<T extends CartItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCartItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartItem[P]>
      : GetScalarType<T[P], AggregateCartItem[P]>
  }




  export type CartItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithAggregationInput | CartItemOrderByWithAggregationInput[]
    by: CartItemScalarFieldEnum[] | CartItemScalarFieldEnum
    having?: CartItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartItemCountAggregateInputType | true
    _avg?: CartItemAvgAggregateInputType
    _sum?: CartItemSumAggregateInputType
    _min?: CartItemMinAggregateInputType
    _max?: CartItemMaxAggregateInputType
  }

  export type CartItemGroupByOutputType = {
    cartId: number
    productId: number
    quantity: number
    unitPrice: Decimal
    discount: Decimal
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  type GetCartItemGroupByPayload<T extends CartItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartItemGroupByOutputType[P]>
            : GetScalarType<T[P], CartItemGroupByOutputType[P]>
        }
      >
    >


  export type CartItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cartId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    discount?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cartId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    discount?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cartId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    discount?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectScalar = {
    cartId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    discount?: boolean
  }

  export type CartItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cartId" | "productId" | "quantity" | "unitPrice" | "discount", ExtArgs["result"]["cartItem"]>
  export type CartItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type CartItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type CartItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $CartItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CartItem"
    objects: {
      cart: Prisma.$CartPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      cartId: number
      productId: number
      quantity: number
      unitPrice: Prisma.Decimal
      discount: Prisma.Decimal
    }, ExtArgs["result"]["cartItem"]>
    composites: {}
  }

  type CartItemGetPayload<S extends boolean | null | undefined | CartItemDefaultArgs> = $Result.GetResult<Prisma.$CartItemPayload, S>

  type CartItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartItemCountAggregateInputType | true
    }

  export interface CartItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CartItem'], meta: { name: 'CartItem' } }
    /**
     * Find zero or one CartItem that matches the filter.
     * @param {CartItemFindUniqueArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartItemFindUniqueArgs>(args: SelectSubset<T, CartItemFindUniqueArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CartItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartItemFindUniqueOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CartItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartItemFindFirstArgs>(args?: SelectSubset<T, CartItemFindFirstArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CartItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartItems
     * const cartItems = await prisma.cartItem.findMany()
     * 
     * // Get first 10 CartItems
     * const cartItems = await prisma.cartItem.findMany({ take: 10 })
     * 
     * // Only select the `cartId`
     * const cartItemWithCartIdOnly = await prisma.cartItem.findMany({ select: { cartId: true } })
     * 
     */
    findMany<T extends CartItemFindManyArgs>(args?: SelectSubset<T, CartItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CartItem.
     * @param {CartItemCreateArgs} args - Arguments to create a CartItem.
     * @example
     * // Create one CartItem
     * const CartItem = await prisma.cartItem.create({
     *   data: {
     *     // ... data to create a CartItem
     *   }
     * })
     * 
     */
    create<T extends CartItemCreateArgs>(args: SelectSubset<T, CartItemCreateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CartItems.
     * @param {CartItemCreateManyArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartItemCreateManyArgs>(args?: SelectSubset<T, CartItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CartItems and returns the data saved in the database.
     * @param {CartItemCreateManyAndReturnArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CartItems and only return the `cartId`
     * const cartItemWithCartIdOnly = await prisma.cartItem.createManyAndReturn({
     *   select: { cartId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartItemCreateManyAndReturnArgs>(args?: SelectSubset<T, CartItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CartItem.
     * @param {CartItemDeleteArgs} args - Arguments to delete one CartItem.
     * @example
     * // Delete one CartItem
     * const CartItem = await prisma.cartItem.delete({
     *   where: {
     *     // ... filter to delete one CartItem
     *   }
     * })
     * 
     */
    delete<T extends CartItemDeleteArgs>(args: SelectSubset<T, CartItemDeleteArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CartItem.
     * @param {CartItemUpdateArgs} args - Arguments to update one CartItem.
     * @example
     * // Update one CartItem
     * const cartItem = await prisma.cartItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartItemUpdateArgs>(args: SelectSubset<T, CartItemUpdateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CartItems.
     * @param {CartItemDeleteManyArgs} args - Arguments to filter CartItems to delete.
     * @example
     * // Delete a few CartItems
     * const { count } = await prisma.cartItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartItemDeleteManyArgs>(args?: SelectSubset<T, CartItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartItemUpdateManyArgs>(args: SelectSubset<T, CartItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems and returns the data updated in the database.
     * @param {CartItemUpdateManyAndReturnArgs} args - Arguments to update many CartItems.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CartItems and only return the `cartId`
     * const cartItemWithCartIdOnly = await prisma.cartItem.updateManyAndReturn({
     *   select: { cartId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CartItemUpdateManyAndReturnArgs>(args: SelectSubset<T, CartItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CartItem.
     * @param {CartItemUpsertArgs} args - Arguments to update or create a CartItem.
     * @example
     * // Update or create a CartItem
     * const cartItem = await prisma.cartItem.upsert({
     *   create: {
     *     // ... data to create a CartItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartItem we want to update
     *   }
     * })
     */
    upsert<T extends CartItemUpsertArgs>(args: SelectSubset<T, CartItemUpsertArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemCountArgs} args - Arguments to filter CartItems to count.
     * @example
     * // Count the number of CartItems
     * const count = await prisma.cartItem.count({
     *   where: {
     *     // ... the filter for the CartItems we want to count
     *   }
     * })
    **/
    count<T extends CartItemCountArgs>(
      args?: Subset<T, CartItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartItemAggregateArgs>(args: Subset<T, CartItemAggregateArgs>): Prisma.PrismaPromise<GetCartItemAggregateType<T>>

    /**
     * Group by CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CartItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartItemGroupByArgs['orderBy'] }
        : { orderBy?: CartItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CartItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CartItem model
   */
  readonly fields: CartItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CartItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart<T extends CartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CartDefaultArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CartItem model
   */
  interface CartItemFieldRefs {
    readonly cartId: FieldRef<"CartItem", 'Int'>
    readonly productId: FieldRef<"CartItem", 'Int'>
    readonly quantity: FieldRef<"CartItem", 'Int'>
    readonly unitPrice: FieldRef<"CartItem", 'Decimal'>
    readonly discount: FieldRef<"CartItem", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * CartItem findUnique
   */
  export type CartItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findUniqueOrThrow
   */
  export type CartItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findFirst
   */
  export type CartItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem findFirstOrThrow
   */
  export type CartItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem findMany
   */
  export type CartItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem create
   */
  export type CartItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CartItem.
     */
    data: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
  }

  /**
   * CartItem createMany
   */
  export type CartItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CartItem createManyAndReturn
   */
  export type CartItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItem update
   */
  export type CartItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CartItem.
     */
    data: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
    /**
     * Choose, which CartItem to update.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem updateMany
   */
  export type CartItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
  }

  /**
   * CartItem updateManyAndReturn
   */
  export type CartItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItem upsert
   */
  export type CartItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CartItem to update in case it exists.
     */
    where: CartItemWhereUniqueInput
    /**
     * In case the CartItem found by the `where` argument doesn't exist, create a new CartItem with this data.
     */
    create: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
    /**
     * In case the CartItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
  }

  /**
   * CartItem delete
   */
  export type CartItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter which CartItem to delete.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem deleteMany
   */
  export type CartItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItems to delete
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to delete.
     */
    limit?: number
  }

  /**
   * CartItem without action
   */
  export type CartItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
  }


  /**
   * Model PurchaseHistory
   */

  export type AggregatePurchaseHistory = {
    _count: PurchaseHistoryCountAggregateOutputType | null
    _avg: PurchaseHistoryAvgAggregateOutputType | null
    _sum: PurchaseHistorySumAggregateOutputType | null
    _min: PurchaseHistoryMinAggregateOutputType | null
    _max: PurchaseHistoryMaxAggregateOutputType | null
  }

  export type PurchaseHistoryAvgAggregateOutputType = {
    id: number | null
    amount: Decimal | null
  }

  export type PurchaseHistorySumAggregateOutputType = {
    id: number | null
    amount: Decimal | null
  }

  export type PurchaseHistoryMinAggregateOutputType = {
    id: number | null
    status: $Enums.PurchaseStatus | null
    amount: Decimal | null
    createdAt: Date | null
  }

  export type PurchaseHistoryMaxAggregateOutputType = {
    id: number | null
    status: $Enums.PurchaseStatus | null
    amount: Decimal | null
    createdAt: Date | null
  }

  export type PurchaseHistoryCountAggregateOutputType = {
    id: number
    status: number
    amount: number
    createdAt: number
    _all: number
  }


  export type PurchaseHistoryAvgAggregateInputType = {
    id?: true
    amount?: true
  }

  export type PurchaseHistorySumAggregateInputType = {
    id?: true
    amount?: true
  }

  export type PurchaseHistoryMinAggregateInputType = {
    id?: true
    status?: true
    amount?: true
    createdAt?: true
  }

  export type PurchaseHistoryMaxAggregateInputType = {
    id?: true
    status?: true
    amount?: true
    createdAt?: true
  }

  export type PurchaseHistoryCountAggregateInputType = {
    id?: true
    status?: true
    amount?: true
    createdAt?: true
    _all?: true
  }

  export type PurchaseHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseHistory to aggregate.
     */
    where?: PurchaseHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseHistories to fetch.
     */
    orderBy?: PurchaseHistoryOrderByWithRelationInput | PurchaseHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseHistories
    **/
    _count?: true | PurchaseHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseHistoryMaxAggregateInputType
  }

  export type GetPurchaseHistoryAggregateType<T extends PurchaseHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseHistory[P]>
      : GetScalarType<T[P], AggregatePurchaseHistory[P]>
  }




  export type PurchaseHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseHistoryWhereInput
    orderBy?: PurchaseHistoryOrderByWithAggregationInput | PurchaseHistoryOrderByWithAggregationInput[]
    by: PurchaseHistoryScalarFieldEnum[] | PurchaseHistoryScalarFieldEnum
    having?: PurchaseHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseHistoryCountAggregateInputType | true
    _avg?: PurchaseHistoryAvgAggregateInputType
    _sum?: PurchaseHistorySumAggregateInputType
    _min?: PurchaseHistoryMinAggregateInputType
    _max?: PurchaseHistoryMaxAggregateInputType
  }

  export type PurchaseHistoryGroupByOutputType = {
    id: number
    status: $Enums.PurchaseStatus
    amount: Decimal
    createdAt: Date
    _count: PurchaseHistoryCountAggregateOutputType | null
    _avg: PurchaseHistoryAvgAggregateOutputType | null
    _sum: PurchaseHistorySumAggregateOutputType | null
    _min: PurchaseHistoryMinAggregateOutputType | null
    _max: PurchaseHistoryMaxAggregateOutputType | null
  }

  type GetPurchaseHistoryGroupByPayload<T extends PurchaseHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseHistoryGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    amount?: boolean
    createdAt?: boolean
    cart?: boolean | PurchaseHistory$cartArgs<ExtArgs>
    _count?: boolean | PurchaseHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseHistory"]>

  export type PurchaseHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    amount?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["purchaseHistory"]>

  export type PurchaseHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    amount?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["purchaseHistory"]>

  export type PurchaseHistorySelectScalar = {
    id?: boolean
    status?: boolean
    amount?: boolean
    createdAt?: boolean
  }

  export type PurchaseHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "amount" | "createdAt", ExtArgs["result"]["purchaseHistory"]>
  export type PurchaseHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | PurchaseHistory$cartArgs<ExtArgs>
    _count?: boolean | PurchaseHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PurchaseHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PurchaseHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PurchaseHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseHistory"
    objects: {
      cart: Prisma.$CartPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: $Enums.PurchaseStatus
      amount: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["purchaseHistory"]>
    composites: {}
  }

  type PurchaseHistoryGetPayload<S extends boolean | null | undefined | PurchaseHistoryDefaultArgs> = $Result.GetResult<Prisma.$PurchaseHistoryPayload, S>

  type PurchaseHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseHistoryCountAggregateInputType | true
    }

  export interface PurchaseHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseHistory'], meta: { name: 'PurchaseHistory' } }
    /**
     * Find zero or one PurchaseHistory that matches the filter.
     * @param {PurchaseHistoryFindUniqueArgs} args - Arguments to find a PurchaseHistory
     * @example
     * // Get one PurchaseHistory
     * const purchaseHistory = await prisma.purchaseHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseHistoryFindUniqueArgs>(args: SelectSubset<T, PurchaseHistoryFindUniqueArgs<ExtArgs>>): Prisma__PurchaseHistoryClient<$Result.GetResult<Prisma.$PurchaseHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PurchaseHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseHistoryFindUniqueOrThrowArgs} args - Arguments to find a PurchaseHistory
     * @example
     * // Get one PurchaseHistory
     * const purchaseHistory = await prisma.purchaseHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseHistoryClient<$Result.GetResult<Prisma.$PurchaseHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseHistoryFindFirstArgs} args - Arguments to find a PurchaseHistory
     * @example
     * // Get one PurchaseHistory
     * const purchaseHistory = await prisma.purchaseHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseHistoryFindFirstArgs>(args?: SelectSubset<T, PurchaseHistoryFindFirstArgs<ExtArgs>>): Prisma__PurchaseHistoryClient<$Result.GetResult<Prisma.$PurchaseHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseHistoryFindFirstOrThrowArgs} args - Arguments to find a PurchaseHistory
     * @example
     * // Get one PurchaseHistory
     * const purchaseHistory = await prisma.purchaseHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseHistoryClient<$Result.GetResult<Prisma.$PurchaseHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PurchaseHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseHistories
     * const purchaseHistories = await prisma.purchaseHistory.findMany()
     * 
     * // Get first 10 PurchaseHistories
     * const purchaseHistories = await prisma.purchaseHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseHistoryWithIdOnly = await prisma.purchaseHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseHistoryFindManyArgs>(args?: SelectSubset<T, PurchaseHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PurchaseHistory.
     * @param {PurchaseHistoryCreateArgs} args - Arguments to create a PurchaseHistory.
     * @example
     * // Create one PurchaseHistory
     * const PurchaseHistory = await prisma.purchaseHistory.create({
     *   data: {
     *     // ... data to create a PurchaseHistory
     *   }
     * })
     * 
     */
    create<T extends PurchaseHistoryCreateArgs>(args: SelectSubset<T, PurchaseHistoryCreateArgs<ExtArgs>>): Prisma__PurchaseHistoryClient<$Result.GetResult<Prisma.$PurchaseHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PurchaseHistories.
     * @param {PurchaseHistoryCreateManyArgs} args - Arguments to create many PurchaseHistories.
     * @example
     * // Create many PurchaseHistories
     * const purchaseHistory = await prisma.purchaseHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseHistoryCreateManyArgs>(args?: SelectSubset<T, PurchaseHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchaseHistories and returns the data saved in the database.
     * @param {PurchaseHistoryCreateManyAndReturnArgs} args - Arguments to create many PurchaseHistories.
     * @example
     * // Create many PurchaseHistories
     * const purchaseHistory = await prisma.purchaseHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchaseHistories and only return the `id`
     * const purchaseHistoryWithIdOnly = await prisma.purchaseHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PurchaseHistory.
     * @param {PurchaseHistoryDeleteArgs} args - Arguments to delete one PurchaseHistory.
     * @example
     * // Delete one PurchaseHistory
     * const PurchaseHistory = await prisma.purchaseHistory.delete({
     *   where: {
     *     // ... filter to delete one PurchaseHistory
     *   }
     * })
     * 
     */
    delete<T extends PurchaseHistoryDeleteArgs>(args: SelectSubset<T, PurchaseHistoryDeleteArgs<ExtArgs>>): Prisma__PurchaseHistoryClient<$Result.GetResult<Prisma.$PurchaseHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PurchaseHistory.
     * @param {PurchaseHistoryUpdateArgs} args - Arguments to update one PurchaseHistory.
     * @example
     * // Update one PurchaseHistory
     * const purchaseHistory = await prisma.purchaseHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseHistoryUpdateArgs>(args: SelectSubset<T, PurchaseHistoryUpdateArgs<ExtArgs>>): Prisma__PurchaseHistoryClient<$Result.GetResult<Prisma.$PurchaseHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PurchaseHistories.
     * @param {PurchaseHistoryDeleteManyArgs} args - Arguments to filter PurchaseHistories to delete.
     * @example
     * // Delete a few PurchaseHistories
     * const { count } = await prisma.purchaseHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseHistoryDeleteManyArgs>(args?: SelectSubset<T, PurchaseHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseHistories
     * const purchaseHistory = await prisma.purchaseHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseHistoryUpdateManyArgs>(args: SelectSubset<T, PurchaseHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseHistories and returns the data updated in the database.
     * @param {PurchaseHistoryUpdateManyAndReturnArgs} args - Arguments to update many PurchaseHistories.
     * @example
     * // Update many PurchaseHistories
     * const purchaseHistory = await prisma.purchaseHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PurchaseHistories and only return the `id`
     * const purchaseHistoryWithIdOnly = await prisma.purchaseHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PurchaseHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PurchaseHistory.
     * @param {PurchaseHistoryUpsertArgs} args - Arguments to update or create a PurchaseHistory.
     * @example
     * // Update or create a PurchaseHistory
     * const purchaseHistory = await prisma.purchaseHistory.upsert({
     *   create: {
     *     // ... data to create a PurchaseHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseHistory we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseHistoryUpsertArgs>(args: SelectSubset<T, PurchaseHistoryUpsertArgs<ExtArgs>>): Prisma__PurchaseHistoryClient<$Result.GetResult<Prisma.$PurchaseHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PurchaseHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseHistoryCountArgs} args - Arguments to filter PurchaseHistories to count.
     * @example
     * // Count the number of PurchaseHistories
     * const count = await prisma.purchaseHistory.count({
     *   where: {
     *     // ... the filter for the PurchaseHistories we want to count
     *   }
     * })
    **/
    count<T extends PurchaseHistoryCountArgs>(
      args?: Subset<T, PurchaseHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseHistoryAggregateArgs>(args: Subset<T, PurchaseHistoryAggregateArgs>): Prisma.PrismaPromise<GetPurchaseHistoryAggregateType<T>>

    /**
     * Group by PurchaseHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseHistoryGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchaseHistory model
   */
  readonly fields: PurchaseHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart<T extends PurchaseHistory$cartArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseHistory$cartArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PurchaseHistory model
   */
  interface PurchaseHistoryFieldRefs {
    readonly id: FieldRef<"PurchaseHistory", 'Int'>
    readonly status: FieldRef<"PurchaseHistory", 'PurchaseStatus'>
    readonly amount: FieldRef<"PurchaseHistory", 'Decimal'>
    readonly createdAt: FieldRef<"PurchaseHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PurchaseHistory findUnique
   */
  export type PurchaseHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseHistory
     */
    select?: PurchaseHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseHistory
     */
    omit?: PurchaseHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseHistory to fetch.
     */
    where: PurchaseHistoryWhereUniqueInput
  }

  /**
   * PurchaseHistory findUniqueOrThrow
   */
  export type PurchaseHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseHistory
     */
    select?: PurchaseHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseHistory
     */
    omit?: PurchaseHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseHistory to fetch.
     */
    where: PurchaseHistoryWhereUniqueInput
  }

  /**
   * PurchaseHistory findFirst
   */
  export type PurchaseHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseHistory
     */
    select?: PurchaseHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseHistory
     */
    omit?: PurchaseHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseHistory to fetch.
     */
    where?: PurchaseHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseHistories to fetch.
     */
    orderBy?: PurchaseHistoryOrderByWithRelationInput | PurchaseHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseHistories.
     */
    cursor?: PurchaseHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseHistories.
     */
    distinct?: PurchaseHistoryScalarFieldEnum | PurchaseHistoryScalarFieldEnum[]
  }

  /**
   * PurchaseHistory findFirstOrThrow
   */
  export type PurchaseHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseHistory
     */
    select?: PurchaseHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseHistory
     */
    omit?: PurchaseHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseHistory to fetch.
     */
    where?: PurchaseHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseHistories to fetch.
     */
    orderBy?: PurchaseHistoryOrderByWithRelationInput | PurchaseHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseHistories.
     */
    cursor?: PurchaseHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseHistories.
     */
    distinct?: PurchaseHistoryScalarFieldEnum | PurchaseHistoryScalarFieldEnum[]
  }

  /**
   * PurchaseHistory findMany
   */
  export type PurchaseHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseHistory
     */
    select?: PurchaseHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseHistory
     */
    omit?: PurchaseHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseHistories to fetch.
     */
    where?: PurchaseHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseHistories to fetch.
     */
    orderBy?: PurchaseHistoryOrderByWithRelationInput | PurchaseHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseHistories.
     */
    cursor?: PurchaseHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseHistories.
     */
    skip?: number
    distinct?: PurchaseHistoryScalarFieldEnum | PurchaseHistoryScalarFieldEnum[]
  }

  /**
   * PurchaseHistory create
   */
  export type PurchaseHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseHistory
     */
    select?: PurchaseHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseHistory
     */
    omit?: PurchaseHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchaseHistory.
     */
    data: XOR<PurchaseHistoryCreateInput, PurchaseHistoryUncheckedCreateInput>
  }

  /**
   * PurchaseHistory createMany
   */
  export type PurchaseHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseHistories.
     */
    data: PurchaseHistoryCreateManyInput | PurchaseHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseHistory createManyAndReturn
   */
  export type PurchaseHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseHistory
     */
    select?: PurchaseHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseHistory
     */
    omit?: PurchaseHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many PurchaseHistories.
     */
    data: PurchaseHistoryCreateManyInput | PurchaseHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseHistory update
   */
  export type PurchaseHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseHistory
     */
    select?: PurchaseHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseHistory
     */
    omit?: PurchaseHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchaseHistory.
     */
    data: XOR<PurchaseHistoryUpdateInput, PurchaseHistoryUncheckedUpdateInput>
    /**
     * Choose, which PurchaseHistory to update.
     */
    where: PurchaseHistoryWhereUniqueInput
  }

  /**
   * PurchaseHistory updateMany
   */
  export type PurchaseHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseHistories.
     */
    data: XOR<PurchaseHistoryUpdateManyMutationInput, PurchaseHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseHistories to update
     */
    where?: PurchaseHistoryWhereInput
    /**
     * Limit how many PurchaseHistories to update.
     */
    limit?: number
  }

  /**
   * PurchaseHistory updateManyAndReturn
   */
  export type PurchaseHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseHistory
     */
    select?: PurchaseHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseHistory
     */
    omit?: PurchaseHistoryOmit<ExtArgs> | null
    /**
     * The data used to update PurchaseHistories.
     */
    data: XOR<PurchaseHistoryUpdateManyMutationInput, PurchaseHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseHistories to update
     */
    where?: PurchaseHistoryWhereInput
    /**
     * Limit how many PurchaseHistories to update.
     */
    limit?: number
  }

  /**
   * PurchaseHistory upsert
   */
  export type PurchaseHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseHistory
     */
    select?: PurchaseHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseHistory
     */
    omit?: PurchaseHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchaseHistory to update in case it exists.
     */
    where: PurchaseHistoryWhereUniqueInput
    /**
     * In case the PurchaseHistory found by the `where` argument doesn't exist, create a new PurchaseHistory with this data.
     */
    create: XOR<PurchaseHistoryCreateInput, PurchaseHistoryUncheckedCreateInput>
    /**
     * In case the PurchaseHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseHistoryUpdateInput, PurchaseHistoryUncheckedUpdateInput>
  }

  /**
   * PurchaseHistory delete
   */
  export type PurchaseHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseHistory
     */
    select?: PurchaseHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseHistory
     */
    omit?: PurchaseHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseHistoryInclude<ExtArgs> | null
    /**
     * Filter which PurchaseHistory to delete.
     */
    where: PurchaseHistoryWhereUniqueInput
  }

  /**
   * PurchaseHistory deleteMany
   */
  export type PurchaseHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseHistories to delete
     */
    where?: PurchaseHistoryWhereInput
    /**
     * Limit how many PurchaseHistories to delete.
     */
    limit?: number
  }

  /**
   * PurchaseHistory.cart
   */
  export type PurchaseHistory$cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    where?: CartWhereInput
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    cursor?: CartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * PurchaseHistory without action
   */
  export type PurchaseHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseHistory
     */
    select?: PurchaseHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseHistory
     */
    omit?: PurchaseHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cpf: 'cpf',
    password: 'password',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    internalAccountId: 'internalAccountId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const InternalAccountScalarFieldEnum: {
    id: 'id',
    numberAccount: 'numberAccount',
    agency: 'agency',
    balance: 'balance'
  };

  export type InternalAccountScalarFieldEnum = (typeof InternalAccountScalarFieldEnum)[keyof typeof InternalAccountScalarFieldEnum]


  export const RechargeHistoryScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    createdAt: 'createdAt',
    internalAccountId: 'internalAccountId'
  };

  export type RechargeHistoryScalarFieldEnum = (typeof RechargeHistoryScalarFieldEnum)[keyof typeof RechargeHistoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    value: 'value',
    quantity: 'quantity',
    createdAt: 'createdAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const CartScalarFieldEnum: {
    id: 'id',
    status: 'status',
    description: 'description',
    totalValue: 'totalValue',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    purchaseId: 'purchaseId'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const CartItemScalarFieldEnum: {
    cartId: 'cartId',
    productId: 'productId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    discount: 'discount'
  };

  export type CartItemScalarFieldEnum = (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum]


  export const PurchaseHistoryScalarFieldEnum: {
    id: 'id',
    status: 'status',
    amount: 'amount',
    createdAt: 'createdAt'
  };

  export type PurchaseHistoryScalarFieldEnum = (typeof PurchaseHistoryScalarFieldEnum)[keyof typeof PurchaseHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'CartStatus'
   */
  export type EnumCartStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CartStatus'>
    


  /**
   * Reference to a field of type 'CartStatus[]'
   */
  export type ListEnumCartStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CartStatus[]'>
    


  /**
   * Reference to a field of type 'PurchaseStatus'
   */
  export type EnumPurchaseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PurchaseStatus'>
    


  /**
   * Reference to a field of type 'PurchaseStatus[]'
   */
  export type ListEnumPurchaseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PurchaseStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    cpf?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    internalAccountId?: IntNullableFilter<"User"> | number | null
    internalAccount?: XOR<InternalAccountNullableScalarRelationFilter, InternalAccountWhereInput> | null
    carts?: CartListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    password?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    internalAccountId?: SortOrderInput | SortOrder
    internalAccount?: InternalAccountOrderByWithRelationInput
    carts?: CartOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cpf?: string
    email?: string
    internalAccountId?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    internalAccount?: XOR<InternalAccountNullableScalarRelationFilter, InternalAccountWhereInput> | null
    carts?: CartListRelationFilter
  }, "id" | "cpf" | "email" | "internalAccountId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    password?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    internalAccountId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    cpf?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    internalAccountId?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type InternalAccountWhereInput = {
    AND?: InternalAccountWhereInput | InternalAccountWhereInput[]
    OR?: InternalAccountWhereInput[]
    NOT?: InternalAccountWhereInput | InternalAccountWhereInput[]
    id?: IntFilter<"InternalAccount"> | number
    numberAccount?: StringFilter<"InternalAccount"> | string
    agency?: StringFilter<"InternalAccount"> | string
    balance?: DecimalFilter<"InternalAccount"> | Decimal | DecimalJsLike | number | string
    user?: UserListRelationFilter
    rechargeHistory?: RechargeHistoryListRelationFilter
  }

  export type InternalAccountOrderByWithRelationInput = {
    id?: SortOrder
    numberAccount?: SortOrder
    agency?: SortOrder
    balance?: SortOrder
    user?: UserOrderByRelationAggregateInput
    rechargeHistory?: RechargeHistoryOrderByRelationAggregateInput
  }

  export type InternalAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    numberAccount?: string
    AND?: InternalAccountWhereInput | InternalAccountWhereInput[]
    OR?: InternalAccountWhereInput[]
    NOT?: InternalAccountWhereInput | InternalAccountWhereInput[]
    agency?: StringFilter<"InternalAccount"> | string
    balance?: DecimalFilter<"InternalAccount"> | Decimal | DecimalJsLike | number | string
    user?: UserListRelationFilter
    rechargeHistory?: RechargeHistoryListRelationFilter
  }, "id" | "numberAccount">

  export type InternalAccountOrderByWithAggregationInput = {
    id?: SortOrder
    numberAccount?: SortOrder
    agency?: SortOrder
    balance?: SortOrder
    _count?: InternalAccountCountOrderByAggregateInput
    _avg?: InternalAccountAvgOrderByAggregateInput
    _max?: InternalAccountMaxOrderByAggregateInput
    _min?: InternalAccountMinOrderByAggregateInput
    _sum?: InternalAccountSumOrderByAggregateInput
  }

  export type InternalAccountScalarWhereWithAggregatesInput = {
    AND?: InternalAccountScalarWhereWithAggregatesInput | InternalAccountScalarWhereWithAggregatesInput[]
    OR?: InternalAccountScalarWhereWithAggregatesInput[]
    NOT?: InternalAccountScalarWhereWithAggregatesInput | InternalAccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InternalAccount"> | number
    numberAccount?: StringWithAggregatesFilter<"InternalAccount"> | string
    agency?: StringWithAggregatesFilter<"InternalAccount"> | string
    balance?: DecimalWithAggregatesFilter<"InternalAccount"> | Decimal | DecimalJsLike | number | string
  }

  export type RechargeHistoryWhereInput = {
    AND?: RechargeHistoryWhereInput | RechargeHistoryWhereInput[]
    OR?: RechargeHistoryWhereInput[]
    NOT?: RechargeHistoryWhereInput | RechargeHistoryWhereInput[]
    id?: IntFilter<"RechargeHistory"> | number
    amount?: DecimalFilter<"RechargeHistory"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"RechargeHistory"> | Date | string
    internalAccountId?: IntFilter<"RechargeHistory"> | number
    internalAccount?: XOR<InternalAccountScalarRelationFilter, InternalAccountWhereInput>
  }

  export type RechargeHistoryOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    internalAccountId?: SortOrder
    internalAccount?: InternalAccountOrderByWithRelationInput
  }

  export type RechargeHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RechargeHistoryWhereInput | RechargeHistoryWhereInput[]
    OR?: RechargeHistoryWhereInput[]
    NOT?: RechargeHistoryWhereInput | RechargeHistoryWhereInput[]
    amount?: DecimalFilter<"RechargeHistory"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"RechargeHistory"> | Date | string
    internalAccountId?: IntFilter<"RechargeHistory"> | number
    internalAccount?: XOR<InternalAccountScalarRelationFilter, InternalAccountWhereInput>
  }, "id">

  export type RechargeHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    internalAccountId?: SortOrder
    _count?: RechargeHistoryCountOrderByAggregateInput
    _avg?: RechargeHistoryAvgOrderByAggregateInput
    _max?: RechargeHistoryMaxOrderByAggregateInput
    _min?: RechargeHistoryMinOrderByAggregateInput
    _sum?: RechargeHistorySumOrderByAggregateInput
  }

  export type RechargeHistoryScalarWhereWithAggregatesInput = {
    AND?: RechargeHistoryScalarWhereWithAggregatesInput | RechargeHistoryScalarWhereWithAggregatesInput[]
    OR?: RechargeHistoryScalarWhereWithAggregatesInput[]
    NOT?: RechargeHistoryScalarWhereWithAggregatesInput | RechargeHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RechargeHistory"> | number
    amount?: DecimalWithAggregatesFilter<"RechargeHistory"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"RechargeHistory"> | Date | string
    internalAccountId?: IntWithAggregatesFilter<"RechargeHistory"> | number
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    value?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    cartItems?: CartItemListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    cartItems?: CartItemOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    value?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    cartItems?: CartItemListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    value?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    quantity?: IntWithAggregatesFilter<"Product"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type CartWhereInput = {
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    id?: IntFilter<"Cart"> | number
    status?: EnumCartStatusFilter<"Cart"> | $Enums.CartStatus
    description?: StringNullableFilter<"Cart"> | string | null
    totalValue?: DecimalFilter<"Cart"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Cart"> | Date | string
    updatedAt?: DateTimeFilter<"Cart"> | Date | string
    userId?: IntFilter<"Cart"> | number
    purchaseId?: IntNullableFilter<"Cart"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: CartItemListRelationFilter
    purchase?: XOR<PurchaseHistoryNullableScalarRelationFilter, PurchaseHistoryWhereInput> | null
  }

  export type CartOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    totalValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    purchaseId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    items?: CartItemOrderByRelationAggregateInput
    purchase?: PurchaseHistoryOrderByWithRelationInput
  }

  export type CartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    purchaseId?: number
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    status?: EnumCartStatusFilter<"Cart"> | $Enums.CartStatus
    description?: StringNullableFilter<"Cart"> | string | null
    totalValue?: DecimalFilter<"Cart"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Cart"> | Date | string
    updatedAt?: DateTimeFilter<"Cart"> | Date | string
    userId?: IntFilter<"Cart"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: CartItemListRelationFilter
    purchase?: XOR<PurchaseHistoryNullableScalarRelationFilter, PurchaseHistoryWhereInput> | null
  }, "id" | "purchaseId">

  export type CartOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    totalValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    purchaseId?: SortOrderInput | SortOrder
    _count?: CartCountOrderByAggregateInput
    _avg?: CartAvgOrderByAggregateInput
    _max?: CartMaxOrderByAggregateInput
    _min?: CartMinOrderByAggregateInput
    _sum?: CartSumOrderByAggregateInput
  }

  export type CartScalarWhereWithAggregatesInput = {
    AND?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    OR?: CartScalarWhereWithAggregatesInput[]
    NOT?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cart"> | number
    status?: EnumCartStatusWithAggregatesFilter<"Cart"> | $Enums.CartStatus
    description?: StringNullableWithAggregatesFilter<"Cart"> | string | null
    totalValue?: DecimalWithAggregatesFilter<"Cart"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Cart"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cart"> | Date | string
    userId?: IntWithAggregatesFilter<"Cart"> | number
    purchaseId?: IntNullableWithAggregatesFilter<"Cart"> | number | null
  }

  export type CartItemWhereInput = {
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    cartId?: IntFilter<"CartItem"> | number
    productId?: IntFilter<"CartItem"> | number
    quantity?: IntFilter<"CartItem"> | number
    unitPrice?: DecimalFilter<"CartItem"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalFilter<"CartItem"> | Decimal | DecimalJsLike | number | string
    cart?: XOR<CartScalarRelationFilter, CartWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type CartItemOrderByWithRelationInput = {
    cartId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    discount?: SortOrder
    cart?: CartOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type CartItemWhereUniqueInput = Prisma.AtLeast<{
    cartId_productId?: CartItemCartIdProductIdCompoundUniqueInput
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    cartId?: IntFilter<"CartItem"> | number
    productId?: IntFilter<"CartItem"> | number
    quantity?: IntFilter<"CartItem"> | number
    unitPrice?: DecimalFilter<"CartItem"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalFilter<"CartItem"> | Decimal | DecimalJsLike | number | string
    cart?: XOR<CartScalarRelationFilter, CartWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "cartId_productId">

  export type CartItemOrderByWithAggregationInput = {
    cartId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    discount?: SortOrder
    _count?: CartItemCountOrderByAggregateInput
    _avg?: CartItemAvgOrderByAggregateInput
    _max?: CartItemMaxOrderByAggregateInput
    _min?: CartItemMinOrderByAggregateInput
    _sum?: CartItemSumOrderByAggregateInput
  }

  export type CartItemScalarWhereWithAggregatesInput = {
    AND?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    OR?: CartItemScalarWhereWithAggregatesInput[]
    NOT?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    cartId?: IntWithAggregatesFilter<"CartItem"> | number
    productId?: IntWithAggregatesFilter<"CartItem"> | number
    quantity?: IntWithAggregatesFilter<"CartItem"> | number
    unitPrice?: DecimalWithAggregatesFilter<"CartItem"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalWithAggregatesFilter<"CartItem"> | Decimal | DecimalJsLike | number | string
  }

  export type PurchaseHistoryWhereInput = {
    AND?: PurchaseHistoryWhereInput | PurchaseHistoryWhereInput[]
    OR?: PurchaseHistoryWhereInput[]
    NOT?: PurchaseHistoryWhereInput | PurchaseHistoryWhereInput[]
    id?: IntFilter<"PurchaseHistory"> | number
    status?: EnumPurchaseStatusFilter<"PurchaseHistory"> | $Enums.PurchaseStatus
    amount?: DecimalFilter<"PurchaseHistory"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"PurchaseHistory"> | Date | string
    cart?: CartListRelationFilter
  }

  export type PurchaseHistoryOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    cart?: CartOrderByRelationAggregateInput
  }

  export type PurchaseHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PurchaseHistoryWhereInput | PurchaseHistoryWhereInput[]
    OR?: PurchaseHistoryWhereInput[]
    NOT?: PurchaseHistoryWhereInput | PurchaseHistoryWhereInput[]
    status?: EnumPurchaseStatusFilter<"PurchaseHistory"> | $Enums.PurchaseStatus
    amount?: DecimalFilter<"PurchaseHistory"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"PurchaseHistory"> | Date | string
    cart?: CartListRelationFilter
  }, "id">

  export type PurchaseHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    _count?: PurchaseHistoryCountOrderByAggregateInput
    _avg?: PurchaseHistoryAvgOrderByAggregateInput
    _max?: PurchaseHistoryMaxOrderByAggregateInput
    _min?: PurchaseHistoryMinOrderByAggregateInput
    _sum?: PurchaseHistorySumOrderByAggregateInput
  }

  export type PurchaseHistoryScalarWhereWithAggregatesInput = {
    AND?: PurchaseHistoryScalarWhereWithAggregatesInput | PurchaseHistoryScalarWhereWithAggregatesInput[]
    OR?: PurchaseHistoryScalarWhereWithAggregatesInput[]
    NOT?: PurchaseHistoryScalarWhereWithAggregatesInput | PurchaseHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PurchaseHistory"> | number
    status?: EnumPurchaseStatusWithAggregatesFilter<"PurchaseHistory"> | $Enums.PurchaseStatus
    amount?: DecimalWithAggregatesFilter<"PurchaseHistory"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"PurchaseHistory"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    cpf: string
    password: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    internalAccount?: InternalAccountCreateNestedOneWithoutUserInput
    carts?: CartCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    cpf: string
    password: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    internalAccountId?: number | null
    carts?: CartUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internalAccount?: InternalAccountUpdateOneWithoutUserNestedInput
    carts?: CartUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internalAccountId?: NullableIntFieldUpdateOperationsInput | number | null
    carts?: CartUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    cpf: string
    password: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    internalAccountId?: number | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internalAccountId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InternalAccountCreateInput = {
    numberAccount: string
    agency?: string
    balance?: Decimal | DecimalJsLike | number | string
    user?: UserCreateNestedManyWithoutInternalAccountInput
    rechargeHistory?: RechargeHistoryCreateNestedManyWithoutInternalAccountInput
  }

  export type InternalAccountUncheckedCreateInput = {
    id?: number
    numberAccount: string
    agency?: string
    balance?: Decimal | DecimalJsLike | number | string
    user?: UserUncheckedCreateNestedManyWithoutInternalAccountInput
    rechargeHistory?: RechargeHistoryUncheckedCreateNestedManyWithoutInternalAccountInput
  }

  export type InternalAccountUpdateInput = {
    numberAccount?: StringFieldUpdateOperationsInput | string
    agency?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateManyWithoutInternalAccountNestedInput
    rechargeHistory?: RechargeHistoryUpdateManyWithoutInternalAccountNestedInput
  }

  export type InternalAccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numberAccount?: StringFieldUpdateOperationsInput | string
    agency?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUncheckedUpdateManyWithoutInternalAccountNestedInput
    rechargeHistory?: RechargeHistoryUncheckedUpdateManyWithoutInternalAccountNestedInput
  }

  export type InternalAccountCreateManyInput = {
    id?: number
    numberAccount: string
    agency?: string
    balance?: Decimal | DecimalJsLike | number | string
  }

  export type InternalAccountUpdateManyMutationInput = {
    numberAccount?: StringFieldUpdateOperationsInput | string
    agency?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type InternalAccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numberAccount?: StringFieldUpdateOperationsInput | string
    agency?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type RechargeHistoryCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    internalAccount: InternalAccountCreateNestedOneWithoutRechargeHistoryInput
  }

  export type RechargeHistoryUncheckedCreateInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    internalAccountId: number
  }

  export type RechargeHistoryUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internalAccount?: InternalAccountUpdateOneRequiredWithoutRechargeHistoryNestedInput
  }

  export type RechargeHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internalAccountId?: IntFieldUpdateOperationsInput | number
  }

  export type RechargeHistoryCreateManyInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    internalAccountId: number
  }

  export type RechargeHistoryUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RechargeHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internalAccountId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateInput = {
    name: string
    value: Decimal | DecimalJsLike | number | string
    quantity: number
    createdAt?: Date | string
    cartItems?: CartItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    value: Decimal | DecimalJsLike | number | string
    quantity: number
    createdAt?: Date | string
    cartItems?: CartItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItems?: CartItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItems?: CartItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
    value: Decimal | DecimalJsLike | number | string
    quantity: number
    createdAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartCreateInput = {
    status?: $Enums.CartStatus
    description?: string | null
    totalValue: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCartsInput
    items?: CartItemCreateNestedManyWithoutCartInput
    purchase?: PurchaseHistoryCreateNestedOneWithoutCartInput
  }

  export type CartUncheckedCreateInput = {
    id?: number
    status?: $Enums.CartStatus
    description?: string | null
    totalValue: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    purchaseId?: number | null
    items?: CartItemUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartUpdateInput = {
    status?: EnumCartStatusFieldUpdateOperationsInput | $Enums.CartStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCartsNestedInput
    items?: CartItemUpdateManyWithoutCartNestedInput
    purchase?: PurchaseHistoryUpdateOneWithoutCartNestedInput
  }

  export type CartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumCartStatusFieldUpdateOperationsInput | $Enums.CartStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    purchaseId?: NullableIntFieldUpdateOperationsInput | number | null
    items?: CartItemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartCreateManyInput = {
    id?: number
    status?: $Enums.CartStatus
    description?: string | null
    totalValue: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    purchaseId?: number | null
  }

  export type CartUpdateManyMutationInput = {
    status?: EnumCartStatusFieldUpdateOperationsInput | $Enums.CartStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumCartStatusFieldUpdateOperationsInput | $Enums.CartStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    purchaseId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CartItemCreateInput = {
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    cart: CartCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutCartItemsInput
  }

  export type CartItemUncheckedCreateInput = {
    cartId: number
    productId: number
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
  }

  export type CartItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cart?: CartUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutCartItemsNestedInput
  }

  export type CartItemUncheckedUpdateInput = {
    cartId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CartItemCreateManyInput = {
    cartId: number
    productId: number
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
  }

  export type CartItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CartItemUncheckedUpdateManyInput = {
    cartId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PurchaseHistoryCreateInput = {
    status: $Enums.PurchaseStatus
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    cart?: CartCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseHistoryUncheckedCreateInput = {
    id?: number
    status: $Enums.PurchaseStatus
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    cart?: CartUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseHistoryUpdateInput = {
    status?: EnumPurchaseStatusFieldUpdateOperationsInput | $Enums.PurchaseStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: CartUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumPurchaseStatusFieldUpdateOperationsInput | $Enums.PurchaseStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: CartUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseHistoryCreateManyInput = {
    id?: number
    status: $Enums.PurchaseStatus
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type PurchaseHistoryUpdateManyMutationInput = {
    status?: EnumPurchaseStatusFieldUpdateOperationsInput | $Enums.PurchaseStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumPurchaseStatusFieldUpdateOperationsInput | $Enums.PurchaseStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type InternalAccountNullableScalarRelationFilter = {
    is?: InternalAccountWhereInput | null
    isNot?: InternalAccountWhereInput | null
  }

  export type CartListRelationFilter = {
    every?: CartWhereInput
    some?: CartWhereInput
    none?: CartWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    password?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    internalAccountId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    internalAccountId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    password?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    internalAccountId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    password?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    internalAccountId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    internalAccountId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type RechargeHistoryListRelationFilter = {
    every?: RechargeHistoryWhereInput
    some?: RechargeHistoryWhereInput
    none?: RechargeHistoryWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RechargeHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InternalAccountCountOrderByAggregateInput = {
    id?: SortOrder
    numberAccount?: SortOrder
    agency?: SortOrder
    balance?: SortOrder
  }

  export type InternalAccountAvgOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
  }

  export type InternalAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    numberAccount?: SortOrder
    agency?: SortOrder
    balance?: SortOrder
  }

  export type InternalAccountMinOrderByAggregateInput = {
    id?: SortOrder
    numberAccount?: SortOrder
    agency?: SortOrder
    balance?: SortOrder
  }

  export type InternalAccountSumOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type InternalAccountScalarRelationFilter = {
    is?: InternalAccountWhereInput
    isNot?: InternalAccountWhereInput
  }

  export type RechargeHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    internalAccountId?: SortOrder
  }

  export type RechargeHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    internalAccountId?: SortOrder
  }

  export type RechargeHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    internalAccountId?: SortOrder
  }

  export type RechargeHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    internalAccountId?: SortOrder
  }

  export type RechargeHistorySumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    internalAccountId?: SortOrder
  }

  export type CartItemListRelationFilter = {
    every?: CartItemWhereInput
    some?: CartItemWhereInput
    none?: CartItemWhereInput
  }

  export type CartItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    quantity?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    quantity?: SortOrder
  }

  export type EnumCartStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CartStatus | EnumCartStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CartStatus[] | ListEnumCartStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CartStatus[] | ListEnumCartStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCartStatusFilter<$PrismaModel> | $Enums.CartStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PurchaseHistoryNullableScalarRelationFilter = {
    is?: PurchaseHistoryWhereInput | null
    isNot?: PurchaseHistoryWhereInput | null
  }

  export type CartCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    description?: SortOrder
    totalValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    purchaseId?: SortOrder
  }

  export type CartAvgOrderByAggregateInput = {
    id?: SortOrder
    totalValue?: SortOrder
    userId?: SortOrder
    purchaseId?: SortOrder
  }

  export type CartMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    description?: SortOrder
    totalValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    purchaseId?: SortOrder
  }

  export type CartMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    description?: SortOrder
    totalValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    purchaseId?: SortOrder
  }

  export type CartSumOrderByAggregateInput = {
    id?: SortOrder
    totalValue?: SortOrder
    userId?: SortOrder
    purchaseId?: SortOrder
  }

  export type EnumCartStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CartStatus | EnumCartStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CartStatus[] | ListEnumCartStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CartStatus[] | ListEnumCartStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCartStatusWithAggregatesFilter<$PrismaModel> | $Enums.CartStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCartStatusFilter<$PrismaModel>
    _max?: NestedEnumCartStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CartScalarRelationFilter = {
    is?: CartWhereInput
    isNot?: CartWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type CartItemCartIdProductIdCompoundUniqueInput = {
    cartId: number
    productId: number
  }

  export type CartItemCountOrderByAggregateInput = {
    cartId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    discount?: SortOrder
  }

  export type CartItemAvgOrderByAggregateInput = {
    cartId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    discount?: SortOrder
  }

  export type CartItemMaxOrderByAggregateInput = {
    cartId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    discount?: SortOrder
  }

  export type CartItemMinOrderByAggregateInput = {
    cartId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    discount?: SortOrder
  }

  export type CartItemSumOrderByAggregateInput = {
    cartId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    discount?: SortOrder
  }

  export type EnumPurchaseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseStatus | EnumPurchaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchaseStatus[] | ListEnumPurchaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PurchaseStatus[] | ListEnumPurchaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPurchaseStatusFilter<$PrismaModel> | $Enums.PurchaseStatus
  }

  export type PurchaseHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type PurchaseHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseHistorySumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type EnumPurchaseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseStatus | EnumPurchaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchaseStatus[] | ListEnumPurchaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PurchaseStatus[] | ListEnumPurchaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPurchaseStatusWithAggregatesFilter<$PrismaModel> | $Enums.PurchaseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPurchaseStatusFilter<$PrismaModel>
    _max?: NestedEnumPurchaseStatusFilter<$PrismaModel>
  }

  export type InternalAccountCreateNestedOneWithoutUserInput = {
    create?: XOR<InternalAccountCreateWithoutUserInput, InternalAccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: InternalAccountCreateOrConnectWithoutUserInput
    connect?: InternalAccountWhereUniqueInput
  }

  export type CartCreateNestedManyWithoutUserInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput> | CartCreateWithoutUserInput[] | CartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartCreateOrConnectWithoutUserInput | CartCreateOrConnectWithoutUserInput[]
    createMany?: CartCreateManyUserInputEnvelope
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
  }

  export type CartUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput> | CartCreateWithoutUserInput[] | CartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartCreateOrConnectWithoutUserInput | CartCreateOrConnectWithoutUserInput[]
    createMany?: CartCreateManyUserInputEnvelope
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InternalAccountUpdateOneWithoutUserNestedInput = {
    create?: XOR<InternalAccountCreateWithoutUserInput, InternalAccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: InternalAccountCreateOrConnectWithoutUserInput
    upsert?: InternalAccountUpsertWithoutUserInput
    disconnect?: InternalAccountWhereInput | boolean
    delete?: InternalAccountWhereInput | boolean
    connect?: InternalAccountWhereUniqueInput
    update?: XOR<XOR<InternalAccountUpdateToOneWithWhereWithoutUserInput, InternalAccountUpdateWithoutUserInput>, InternalAccountUncheckedUpdateWithoutUserInput>
  }

  export type CartUpdateManyWithoutUserNestedInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput> | CartCreateWithoutUserInput[] | CartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartCreateOrConnectWithoutUserInput | CartCreateOrConnectWithoutUserInput[]
    upsert?: CartUpsertWithWhereUniqueWithoutUserInput | CartUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CartCreateManyUserInputEnvelope
    set?: CartWhereUniqueInput | CartWhereUniqueInput[]
    disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    delete?: CartWhereUniqueInput | CartWhereUniqueInput[]
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    update?: CartUpdateWithWhereUniqueWithoutUserInput | CartUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CartUpdateManyWithWhereWithoutUserInput | CartUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CartScalarWhereInput | CartScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CartUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput> | CartCreateWithoutUserInput[] | CartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartCreateOrConnectWithoutUserInput | CartCreateOrConnectWithoutUserInput[]
    upsert?: CartUpsertWithWhereUniqueWithoutUserInput | CartUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CartCreateManyUserInputEnvelope
    set?: CartWhereUniqueInput | CartWhereUniqueInput[]
    disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    delete?: CartWhereUniqueInput | CartWhereUniqueInput[]
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    update?: CartUpdateWithWhereUniqueWithoutUserInput | CartUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CartUpdateManyWithWhereWithoutUserInput | CartUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CartScalarWhereInput | CartScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutInternalAccountInput = {
    create?: XOR<UserCreateWithoutInternalAccountInput, UserUncheckedCreateWithoutInternalAccountInput> | UserCreateWithoutInternalAccountInput[] | UserUncheckedCreateWithoutInternalAccountInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInternalAccountInput | UserCreateOrConnectWithoutInternalAccountInput[]
    createMany?: UserCreateManyInternalAccountInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RechargeHistoryCreateNestedManyWithoutInternalAccountInput = {
    create?: XOR<RechargeHistoryCreateWithoutInternalAccountInput, RechargeHistoryUncheckedCreateWithoutInternalAccountInput> | RechargeHistoryCreateWithoutInternalAccountInput[] | RechargeHistoryUncheckedCreateWithoutInternalAccountInput[]
    connectOrCreate?: RechargeHistoryCreateOrConnectWithoutInternalAccountInput | RechargeHistoryCreateOrConnectWithoutInternalAccountInput[]
    createMany?: RechargeHistoryCreateManyInternalAccountInputEnvelope
    connect?: RechargeHistoryWhereUniqueInput | RechargeHistoryWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutInternalAccountInput = {
    create?: XOR<UserCreateWithoutInternalAccountInput, UserUncheckedCreateWithoutInternalAccountInput> | UserCreateWithoutInternalAccountInput[] | UserUncheckedCreateWithoutInternalAccountInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInternalAccountInput | UserCreateOrConnectWithoutInternalAccountInput[]
    createMany?: UserCreateManyInternalAccountInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RechargeHistoryUncheckedCreateNestedManyWithoutInternalAccountInput = {
    create?: XOR<RechargeHistoryCreateWithoutInternalAccountInput, RechargeHistoryUncheckedCreateWithoutInternalAccountInput> | RechargeHistoryCreateWithoutInternalAccountInput[] | RechargeHistoryUncheckedCreateWithoutInternalAccountInput[]
    connectOrCreate?: RechargeHistoryCreateOrConnectWithoutInternalAccountInput | RechargeHistoryCreateOrConnectWithoutInternalAccountInput[]
    createMany?: RechargeHistoryCreateManyInternalAccountInputEnvelope
    connect?: RechargeHistoryWhereUniqueInput | RechargeHistoryWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateManyWithoutInternalAccountNestedInput = {
    create?: XOR<UserCreateWithoutInternalAccountInput, UserUncheckedCreateWithoutInternalAccountInput> | UserCreateWithoutInternalAccountInput[] | UserUncheckedCreateWithoutInternalAccountInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInternalAccountInput | UserCreateOrConnectWithoutInternalAccountInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutInternalAccountInput | UserUpsertWithWhereUniqueWithoutInternalAccountInput[]
    createMany?: UserCreateManyInternalAccountInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutInternalAccountInput | UserUpdateWithWhereUniqueWithoutInternalAccountInput[]
    updateMany?: UserUpdateManyWithWhereWithoutInternalAccountInput | UserUpdateManyWithWhereWithoutInternalAccountInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RechargeHistoryUpdateManyWithoutInternalAccountNestedInput = {
    create?: XOR<RechargeHistoryCreateWithoutInternalAccountInput, RechargeHistoryUncheckedCreateWithoutInternalAccountInput> | RechargeHistoryCreateWithoutInternalAccountInput[] | RechargeHistoryUncheckedCreateWithoutInternalAccountInput[]
    connectOrCreate?: RechargeHistoryCreateOrConnectWithoutInternalAccountInput | RechargeHistoryCreateOrConnectWithoutInternalAccountInput[]
    upsert?: RechargeHistoryUpsertWithWhereUniqueWithoutInternalAccountInput | RechargeHistoryUpsertWithWhereUniqueWithoutInternalAccountInput[]
    createMany?: RechargeHistoryCreateManyInternalAccountInputEnvelope
    set?: RechargeHistoryWhereUniqueInput | RechargeHistoryWhereUniqueInput[]
    disconnect?: RechargeHistoryWhereUniqueInput | RechargeHistoryWhereUniqueInput[]
    delete?: RechargeHistoryWhereUniqueInput | RechargeHistoryWhereUniqueInput[]
    connect?: RechargeHistoryWhereUniqueInput | RechargeHistoryWhereUniqueInput[]
    update?: RechargeHistoryUpdateWithWhereUniqueWithoutInternalAccountInput | RechargeHistoryUpdateWithWhereUniqueWithoutInternalAccountInput[]
    updateMany?: RechargeHistoryUpdateManyWithWhereWithoutInternalAccountInput | RechargeHistoryUpdateManyWithWhereWithoutInternalAccountInput[]
    deleteMany?: RechargeHistoryScalarWhereInput | RechargeHistoryScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutInternalAccountNestedInput = {
    create?: XOR<UserCreateWithoutInternalAccountInput, UserUncheckedCreateWithoutInternalAccountInput> | UserCreateWithoutInternalAccountInput[] | UserUncheckedCreateWithoutInternalAccountInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInternalAccountInput | UserCreateOrConnectWithoutInternalAccountInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutInternalAccountInput | UserUpsertWithWhereUniqueWithoutInternalAccountInput[]
    createMany?: UserCreateManyInternalAccountInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutInternalAccountInput | UserUpdateWithWhereUniqueWithoutInternalAccountInput[]
    updateMany?: UserUpdateManyWithWhereWithoutInternalAccountInput | UserUpdateManyWithWhereWithoutInternalAccountInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RechargeHistoryUncheckedUpdateManyWithoutInternalAccountNestedInput = {
    create?: XOR<RechargeHistoryCreateWithoutInternalAccountInput, RechargeHistoryUncheckedCreateWithoutInternalAccountInput> | RechargeHistoryCreateWithoutInternalAccountInput[] | RechargeHistoryUncheckedCreateWithoutInternalAccountInput[]
    connectOrCreate?: RechargeHistoryCreateOrConnectWithoutInternalAccountInput | RechargeHistoryCreateOrConnectWithoutInternalAccountInput[]
    upsert?: RechargeHistoryUpsertWithWhereUniqueWithoutInternalAccountInput | RechargeHistoryUpsertWithWhereUniqueWithoutInternalAccountInput[]
    createMany?: RechargeHistoryCreateManyInternalAccountInputEnvelope
    set?: RechargeHistoryWhereUniqueInput | RechargeHistoryWhereUniqueInput[]
    disconnect?: RechargeHistoryWhereUniqueInput | RechargeHistoryWhereUniqueInput[]
    delete?: RechargeHistoryWhereUniqueInput | RechargeHistoryWhereUniqueInput[]
    connect?: RechargeHistoryWhereUniqueInput | RechargeHistoryWhereUniqueInput[]
    update?: RechargeHistoryUpdateWithWhereUniqueWithoutInternalAccountInput | RechargeHistoryUpdateWithWhereUniqueWithoutInternalAccountInput[]
    updateMany?: RechargeHistoryUpdateManyWithWhereWithoutInternalAccountInput | RechargeHistoryUpdateManyWithWhereWithoutInternalAccountInput[]
    deleteMany?: RechargeHistoryScalarWhereInput | RechargeHistoryScalarWhereInput[]
  }

  export type InternalAccountCreateNestedOneWithoutRechargeHistoryInput = {
    create?: XOR<InternalAccountCreateWithoutRechargeHistoryInput, InternalAccountUncheckedCreateWithoutRechargeHistoryInput>
    connectOrCreate?: InternalAccountCreateOrConnectWithoutRechargeHistoryInput
    connect?: InternalAccountWhereUniqueInput
  }

  export type InternalAccountUpdateOneRequiredWithoutRechargeHistoryNestedInput = {
    create?: XOR<InternalAccountCreateWithoutRechargeHistoryInput, InternalAccountUncheckedCreateWithoutRechargeHistoryInput>
    connectOrCreate?: InternalAccountCreateOrConnectWithoutRechargeHistoryInput
    upsert?: InternalAccountUpsertWithoutRechargeHistoryInput
    connect?: InternalAccountWhereUniqueInput
    update?: XOR<XOR<InternalAccountUpdateToOneWithWhereWithoutRechargeHistoryInput, InternalAccountUpdateWithoutRechargeHistoryInput>, InternalAccountUncheckedUpdateWithoutRechargeHistoryInput>
  }

  export type CartItemCreateNestedManyWithoutProductInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type CartItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutProductInput | CartItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutProductInput | CartItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutProductInput | CartItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type CartItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutProductInput | CartItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutProductInput | CartItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutProductInput | CartItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCartsInput = {
    create?: XOR<UserCreateWithoutCartsInput, UserUncheckedCreateWithoutCartsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartsInput
    connect?: UserWhereUniqueInput
  }

  export type CartItemCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type PurchaseHistoryCreateNestedOneWithoutCartInput = {
    create?: XOR<PurchaseHistoryCreateWithoutCartInput, PurchaseHistoryUncheckedCreateWithoutCartInput>
    connectOrCreate?: PurchaseHistoryCreateOrConnectWithoutCartInput
    connect?: PurchaseHistoryWhereUniqueInput
  }

  export type CartItemUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type EnumCartStatusFieldUpdateOperationsInput = {
    set?: $Enums.CartStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutCartsNestedInput = {
    create?: XOR<UserCreateWithoutCartsInput, UserUncheckedCreateWithoutCartsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartsInput
    upsert?: UserUpsertWithoutCartsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCartsInput, UserUpdateWithoutCartsInput>, UserUncheckedUpdateWithoutCartsInput>
  }

  export type CartItemUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutCartInput | CartItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutCartInput | CartItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutCartInput | CartItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type PurchaseHistoryUpdateOneWithoutCartNestedInput = {
    create?: XOR<PurchaseHistoryCreateWithoutCartInput, PurchaseHistoryUncheckedCreateWithoutCartInput>
    connectOrCreate?: PurchaseHistoryCreateOrConnectWithoutCartInput
    upsert?: PurchaseHistoryUpsertWithoutCartInput
    disconnect?: PurchaseHistoryWhereInput | boolean
    delete?: PurchaseHistoryWhereInput | boolean
    connect?: PurchaseHistoryWhereUniqueInput
    update?: XOR<XOR<PurchaseHistoryUpdateToOneWithWhereWithoutCartInput, PurchaseHistoryUpdateWithoutCartInput>, PurchaseHistoryUncheckedUpdateWithoutCartInput>
  }

  export type CartItemUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutCartInput | CartItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutCartInput | CartItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutCartInput | CartItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type CartCreateNestedOneWithoutItemsInput = {
    create?: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CartCreateOrConnectWithoutItemsInput
    connect?: CartWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutCartItemsInput = {
    create?: XOR<ProductCreateWithoutCartItemsInput, ProductUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCartItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type CartUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CartCreateOrConnectWithoutItemsInput
    upsert?: CartUpsertWithoutItemsInput
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutItemsInput, CartUpdateWithoutItemsInput>, CartUncheckedUpdateWithoutItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutCartItemsNestedInput = {
    create?: XOR<ProductCreateWithoutCartItemsInput, ProductUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCartItemsInput
    upsert?: ProductUpsertWithoutCartItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutCartItemsInput, ProductUpdateWithoutCartItemsInput>, ProductUncheckedUpdateWithoutCartItemsInput>
  }

  export type CartCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<CartCreateWithoutPurchaseInput, CartUncheckedCreateWithoutPurchaseInput> | CartCreateWithoutPurchaseInput[] | CartUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: CartCreateOrConnectWithoutPurchaseInput | CartCreateOrConnectWithoutPurchaseInput[]
    createMany?: CartCreateManyPurchaseInputEnvelope
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
  }

  export type CartUncheckedCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<CartCreateWithoutPurchaseInput, CartUncheckedCreateWithoutPurchaseInput> | CartCreateWithoutPurchaseInput[] | CartUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: CartCreateOrConnectWithoutPurchaseInput | CartCreateOrConnectWithoutPurchaseInput[]
    createMany?: CartCreateManyPurchaseInputEnvelope
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
  }

  export type EnumPurchaseStatusFieldUpdateOperationsInput = {
    set?: $Enums.PurchaseStatus
  }

  export type CartUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<CartCreateWithoutPurchaseInput, CartUncheckedCreateWithoutPurchaseInput> | CartCreateWithoutPurchaseInput[] | CartUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: CartCreateOrConnectWithoutPurchaseInput | CartCreateOrConnectWithoutPurchaseInput[]
    upsert?: CartUpsertWithWhereUniqueWithoutPurchaseInput | CartUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: CartCreateManyPurchaseInputEnvelope
    set?: CartWhereUniqueInput | CartWhereUniqueInput[]
    disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    delete?: CartWhereUniqueInput | CartWhereUniqueInput[]
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    update?: CartUpdateWithWhereUniqueWithoutPurchaseInput | CartUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: CartUpdateManyWithWhereWithoutPurchaseInput | CartUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: CartScalarWhereInput | CartScalarWhereInput[]
  }

  export type CartUncheckedUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<CartCreateWithoutPurchaseInput, CartUncheckedCreateWithoutPurchaseInput> | CartCreateWithoutPurchaseInput[] | CartUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: CartCreateOrConnectWithoutPurchaseInput | CartCreateOrConnectWithoutPurchaseInput[]
    upsert?: CartUpsertWithWhereUniqueWithoutPurchaseInput | CartUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: CartCreateManyPurchaseInputEnvelope
    set?: CartWhereUniqueInput | CartWhereUniqueInput[]
    disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    delete?: CartWhereUniqueInput | CartWhereUniqueInput[]
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    update?: CartUpdateWithWhereUniqueWithoutPurchaseInput | CartUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: CartUpdateManyWithWhereWithoutPurchaseInput | CartUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: CartScalarWhereInput | CartScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumCartStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CartStatus | EnumCartStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CartStatus[] | ListEnumCartStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CartStatus[] | ListEnumCartStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCartStatusFilter<$PrismaModel> | $Enums.CartStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumCartStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CartStatus | EnumCartStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CartStatus[] | ListEnumCartStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CartStatus[] | ListEnumCartStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCartStatusWithAggregatesFilter<$PrismaModel> | $Enums.CartStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCartStatusFilter<$PrismaModel>
    _max?: NestedEnumCartStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumPurchaseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseStatus | EnumPurchaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchaseStatus[] | ListEnumPurchaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PurchaseStatus[] | ListEnumPurchaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPurchaseStatusFilter<$PrismaModel> | $Enums.PurchaseStatus
  }

  export type NestedEnumPurchaseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseStatus | EnumPurchaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchaseStatus[] | ListEnumPurchaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PurchaseStatus[] | ListEnumPurchaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPurchaseStatusWithAggregatesFilter<$PrismaModel> | $Enums.PurchaseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPurchaseStatusFilter<$PrismaModel>
    _max?: NestedEnumPurchaseStatusFilter<$PrismaModel>
  }

  export type InternalAccountCreateWithoutUserInput = {
    numberAccount: string
    agency?: string
    balance?: Decimal | DecimalJsLike | number | string
    rechargeHistory?: RechargeHistoryCreateNestedManyWithoutInternalAccountInput
  }

  export type InternalAccountUncheckedCreateWithoutUserInput = {
    id?: number
    numberAccount: string
    agency?: string
    balance?: Decimal | DecimalJsLike | number | string
    rechargeHistory?: RechargeHistoryUncheckedCreateNestedManyWithoutInternalAccountInput
  }

  export type InternalAccountCreateOrConnectWithoutUserInput = {
    where: InternalAccountWhereUniqueInput
    create: XOR<InternalAccountCreateWithoutUserInput, InternalAccountUncheckedCreateWithoutUserInput>
  }

  export type CartCreateWithoutUserInput = {
    status?: $Enums.CartStatus
    description?: string | null
    totalValue: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: CartItemCreateNestedManyWithoutCartInput
    purchase?: PurchaseHistoryCreateNestedOneWithoutCartInput
  }

  export type CartUncheckedCreateWithoutUserInput = {
    id?: number
    status?: $Enums.CartStatus
    description?: string | null
    totalValue: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    purchaseId?: number | null
    items?: CartItemUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartCreateOrConnectWithoutUserInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
  }

  export type CartCreateManyUserInputEnvelope = {
    data: CartCreateManyUserInput | CartCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InternalAccountUpsertWithoutUserInput = {
    update: XOR<InternalAccountUpdateWithoutUserInput, InternalAccountUncheckedUpdateWithoutUserInput>
    create: XOR<InternalAccountCreateWithoutUserInput, InternalAccountUncheckedCreateWithoutUserInput>
    where?: InternalAccountWhereInput
  }

  export type InternalAccountUpdateToOneWithWhereWithoutUserInput = {
    where?: InternalAccountWhereInput
    data: XOR<InternalAccountUpdateWithoutUserInput, InternalAccountUncheckedUpdateWithoutUserInput>
  }

  export type InternalAccountUpdateWithoutUserInput = {
    numberAccount?: StringFieldUpdateOperationsInput | string
    agency?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rechargeHistory?: RechargeHistoryUpdateManyWithoutInternalAccountNestedInput
  }

  export type InternalAccountUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    numberAccount?: StringFieldUpdateOperationsInput | string
    agency?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rechargeHistory?: RechargeHistoryUncheckedUpdateManyWithoutInternalAccountNestedInput
  }

  export type CartUpsertWithWhereUniqueWithoutUserInput = {
    where: CartWhereUniqueInput
    update: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
  }

  export type CartUpdateWithWhereUniqueWithoutUserInput = {
    where: CartWhereUniqueInput
    data: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>
  }

  export type CartUpdateManyWithWhereWithoutUserInput = {
    where: CartScalarWhereInput
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyWithoutUserInput>
  }

  export type CartScalarWhereInput = {
    AND?: CartScalarWhereInput | CartScalarWhereInput[]
    OR?: CartScalarWhereInput[]
    NOT?: CartScalarWhereInput | CartScalarWhereInput[]
    id?: IntFilter<"Cart"> | number
    status?: EnumCartStatusFilter<"Cart"> | $Enums.CartStatus
    description?: StringNullableFilter<"Cart"> | string | null
    totalValue?: DecimalFilter<"Cart"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Cart"> | Date | string
    updatedAt?: DateTimeFilter<"Cart"> | Date | string
    userId?: IntFilter<"Cart"> | number
    purchaseId?: IntNullableFilter<"Cart"> | number | null
  }

  export type UserCreateWithoutInternalAccountInput = {
    name: string
    cpf: string
    password: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    carts?: CartCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInternalAccountInput = {
    id?: number
    name: string
    cpf: string
    password: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    carts?: CartUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInternalAccountInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInternalAccountInput, UserUncheckedCreateWithoutInternalAccountInput>
  }

  export type UserCreateManyInternalAccountInputEnvelope = {
    data: UserCreateManyInternalAccountInput | UserCreateManyInternalAccountInput[]
    skipDuplicates?: boolean
  }

  export type RechargeHistoryCreateWithoutInternalAccountInput = {
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type RechargeHistoryUncheckedCreateWithoutInternalAccountInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type RechargeHistoryCreateOrConnectWithoutInternalAccountInput = {
    where: RechargeHistoryWhereUniqueInput
    create: XOR<RechargeHistoryCreateWithoutInternalAccountInput, RechargeHistoryUncheckedCreateWithoutInternalAccountInput>
  }

  export type RechargeHistoryCreateManyInternalAccountInputEnvelope = {
    data: RechargeHistoryCreateManyInternalAccountInput | RechargeHistoryCreateManyInternalAccountInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutInternalAccountInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutInternalAccountInput, UserUncheckedUpdateWithoutInternalAccountInput>
    create: XOR<UserCreateWithoutInternalAccountInput, UserUncheckedCreateWithoutInternalAccountInput>
  }

  export type UserUpdateWithWhereUniqueWithoutInternalAccountInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutInternalAccountInput, UserUncheckedUpdateWithoutInternalAccountInput>
  }

  export type UserUpdateManyWithWhereWithoutInternalAccountInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutInternalAccountInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    cpf?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    internalAccountId?: IntNullableFilter<"User"> | number | null
  }

  export type RechargeHistoryUpsertWithWhereUniqueWithoutInternalAccountInput = {
    where: RechargeHistoryWhereUniqueInput
    update: XOR<RechargeHistoryUpdateWithoutInternalAccountInput, RechargeHistoryUncheckedUpdateWithoutInternalAccountInput>
    create: XOR<RechargeHistoryCreateWithoutInternalAccountInput, RechargeHistoryUncheckedCreateWithoutInternalAccountInput>
  }

  export type RechargeHistoryUpdateWithWhereUniqueWithoutInternalAccountInput = {
    where: RechargeHistoryWhereUniqueInput
    data: XOR<RechargeHistoryUpdateWithoutInternalAccountInput, RechargeHistoryUncheckedUpdateWithoutInternalAccountInput>
  }

  export type RechargeHistoryUpdateManyWithWhereWithoutInternalAccountInput = {
    where: RechargeHistoryScalarWhereInput
    data: XOR<RechargeHistoryUpdateManyMutationInput, RechargeHistoryUncheckedUpdateManyWithoutInternalAccountInput>
  }

  export type RechargeHistoryScalarWhereInput = {
    AND?: RechargeHistoryScalarWhereInput | RechargeHistoryScalarWhereInput[]
    OR?: RechargeHistoryScalarWhereInput[]
    NOT?: RechargeHistoryScalarWhereInput | RechargeHistoryScalarWhereInput[]
    id?: IntFilter<"RechargeHistory"> | number
    amount?: DecimalFilter<"RechargeHistory"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"RechargeHistory"> | Date | string
    internalAccountId?: IntFilter<"RechargeHistory"> | number
  }

  export type InternalAccountCreateWithoutRechargeHistoryInput = {
    numberAccount: string
    agency?: string
    balance?: Decimal | DecimalJsLike | number | string
    user?: UserCreateNestedManyWithoutInternalAccountInput
  }

  export type InternalAccountUncheckedCreateWithoutRechargeHistoryInput = {
    id?: number
    numberAccount: string
    agency?: string
    balance?: Decimal | DecimalJsLike | number | string
    user?: UserUncheckedCreateNestedManyWithoutInternalAccountInput
  }

  export type InternalAccountCreateOrConnectWithoutRechargeHistoryInput = {
    where: InternalAccountWhereUniqueInput
    create: XOR<InternalAccountCreateWithoutRechargeHistoryInput, InternalAccountUncheckedCreateWithoutRechargeHistoryInput>
  }

  export type InternalAccountUpsertWithoutRechargeHistoryInput = {
    update: XOR<InternalAccountUpdateWithoutRechargeHistoryInput, InternalAccountUncheckedUpdateWithoutRechargeHistoryInput>
    create: XOR<InternalAccountCreateWithoutRechargeHistoryInput, InternalAccountUncheckedCreateWithoutRechargeHistoryInput>
    where?: InternalAccountWhereInput
  }

  export type InternalAccountUpdateToOneWithWhereWithoutRechargeHistoryInput = {
    where?: InternalAccountWhereInput
    data: XOR<InternalAccountUpdateWithoutRechargeHistoryInput, InternalAccountUncheckedUpdateWithoutRechargeHistoryInput>
  }

  export type InternalAccountUpdateWithoutRechargeHistoryInput = {
    numberAccount?: StringFieldUpdateOperationsInput | string
    agency?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateManyWithoutInternalAccountNestedInput
  }

  export type InternalAccountUncheckedUpdateWithoutRechargeHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    numberAccount?: StringFieldUpdateOperationsInput | string
    agency?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUncheckedUpdateManyWithoutInternalAccountNestedInput
  }

  export type CartItemCreateWithoutProductInput = {
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    cart: CartCreateNestedOneWithoutItemsInput
  }

  export type CartItemUncheckedCreateWithoutProductInput = {
    cartId: number
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
  }

  export type CartItemCreateOrConnectWithoutProductInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput>
  }

  export type CartItemCreateManyProductInputEnvelope = {
    data: CartItemCreateManyProductInput | CartItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CartItemUpsertWithWhereUniqueWithoutProductInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutProductInput, CartItemUncheckedUpdateWithoutProductInput>
    create: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutProductInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutProductInput, CartItemUncheckedUpdateWithoutProductInput>
  }

  export type CartItemUpdateManyWithWhereWithoutProductInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutProductInput>
  }

  export type CartItemScalarWhereInput = {
    AND?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    OR?: CartItemScalarWhereInput[]
    NOT?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    cartId?: IntFilter<"CartItem"> | number
    productId?: IntFilter<"CartItem"> | number
    quantity?: IntFilter<"CartItem"> | number
    unitPrice?: DecimalFilter<"CartItem"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalFilter<"CartItem"> | Decimal | DecimalJsLike | number | string
  }

  export type UserCreateWithoutCartsInput = {
    name: string
    cpf: string
    password: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    internalAccount?: InternalAccountCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCartsInput = {
    id?: number
    name: string
    cpf: string
    password: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    internalAccountId?: number | null
  }

  export type UserCreateOrConnectWithoutCartsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCartsInput, UserUncheckedCreateWithoutCartsInput>
  }

  export type CartItemCreateWithoutCartInput = {
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    product: ProductCreateNestedOneWithoutCartItemsInput
  }

  export type CartItemUncheckedCreateWithoutCartInput = {
    productId: number
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
  }

  export type CartItemCreateOrConnectWithoutCartInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
  }

  export type CartItemCreateManyCartInputEnvelope = {
    data: CartItemCreateManyCartInput | CartItemCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseHistoryCreateWithoutCartInput = {
    status: $Enums.PurchaseStatus
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type PurchaseHistoryUncheckedCreateWithoutCartInput = {
    id?: number
    status: $Enums.PurchaseStatus
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type PurchaseHistoryCreateOrConnectWithoutCartInput = {
    where: PurchaseHistoryWhereUniqueInput
    create: XOR<PurchaseHistoryCreateWithoutCartInput, PurchaseHistoryUncheckedCreateWithoutCartInput>
  }

  export type UserUpsertWithoutCartsInput = {
    update: XOR<UserUpdateWithoutCartsInput, UserUncheckedUpdateWithoutCartsInput>
    create: XOR<UserCreateWithoutCartsInput, UserUncheckedCreateWithoutCartsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCartsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCartsInput, UserUncheckedUpdateWithoutCartsInput>
  }

  export type UserUpdateWithoutCartsInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internalAccount?: InternalAccountUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internalAccountId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CartItemUpsertWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>
  }

  export type CartItemUpdateManyWithWhereWithoutCartInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutCartInput>
  }

  export type PurchaseHistoryUpsertWithoutCartInput = {
    update: XOR<PurchaseHistoryUpdateWithoutCartInput, PurchaseHistoryUncheckedUpdateWithoutCartInput>
    create: XOR<PurchaseHistoryCreateWithoutCartInput, PurchaseHistoryUncheckedCreateWithoutCartInput>
    where?: PurchaseHistoryWhereInput
  }

  export type PurchaseHistoryUpdateToOneWithWhereWithoutCartInput = {
    where?: PurchaseHistoryWhereInput
    data: XOR<PurchaseHistoryUpdateWithoutCartInput, PurchaseHistoryUncheckedUpdateWithoutCartInput>
  }

  export type PurchaseHistoryUpdateWithoutCartInput = {
    status?: EnumPurchaseStatusFieldUpdateOperationsInput | $Enums.PurchaseStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseHistoryUncheckedUpdateWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumPurchaseStatusFieldUpdateOperationsInput | $Enums.PurchaseStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartCreateWithoutItemsInput = {
    status?: $Enums.CartStatus
    description?: string | null
    totalValue: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCartsInput
    purchase?: PurchaseHistoryCreateNestedOneWithoutCartInput
  }

  export type CartUncheckedCreateWithoutItemsInput = {
    id?: number
    status?: $Enums.CartStatus
    description?: string | null
    totalValue: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    purchaseId?: number | null
  }

  export type CartCreateOrConnectWithoutItemsInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
  }

  export type ProductCreateWithoutCartItemsInput = {
    name: string
    value: Decimal | DecimalJsLike | number | string
    quantity: number
    createdAt?: Date | string
  }

  export type ProductUncheckedCreateWithoutCartItemsInput = {
    id?: number
    name: string
    value: Decimal | DecimalJsLike | number | string
    quantity: number
    createdAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutCartItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCartItemsInput, ProductUncheckedCreateWithoutCartItemsInput>
  }

  export type CartUpsertWithoutItemsInput = {
    update: XOR<CartUpdateWithoutItemsInput, CartUncheckedUpdateWithoutItemsInput>
    create: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
    where?: CartWhereInput
  }

  export type CartUpdateToOneWithWhereWithoutItemsInput = {
    where?: CartWhereInput
    data: XOR<CartUpdateWithoutItemsInput, CartUncheckedUpdateWithoutItemsInput>
  }

  export type CartUpdateWithoutItemsInput = {
    status?: EnumCartStatusFieldUpdateOperationsInput | $Enums.CartStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCartsNestedInput
    purchase?: PurchaseHistoryUpdateOneWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumCartStatusFieldUpdateOperationsInput | $Enums.CartStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    purchaseId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductUpsertWithoutCartItemsInput = {
    update: XOR<ProductUpdateWithoutCartItemsInput, ProductUncheckedUpdateWithoutCartItemsInput>
    create: XOR<ProductCreateWithoutCartItemsInput, ProductUncheckedCreateWithoutCartItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutCartItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutCartItemsInput, ProductUncheckedUpdateWithoutCartItemsInput>
  }

  export type ProductUpdateWithoutCartItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateWithoutCartItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartCreateWithoutPurchaseInput = {
    status?: $Enums.CartStatus
    description?: string | null
    totalValue: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCartsInput
    items?: CartItemCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateWithoutPurchaseInput = {
    id?: number
    status?: $Enums.CartStatus
    description?: string | null
    totalValue: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    items?: CartItemUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartCreateOrConnectWithoutPurchaseInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutPurchaseInput, CartUncheckedCreateWithoutPurchaseInput>
  }

  export type CartCreateManyPurchaseInputEnvelope = {
    data: CartCreateManyPurchaseInput | CartCreateManyPurchaseInput[]
    skipDuplicates?: boolean
  }

  export type CartUpsertWithWhereUniqueWithoutPurchaseInput = {
    where: CartWhereUniqueInput
    update: XOR<CartUpdateWithoutPurchaseInput, CartUncheckedUpdateWithoutPurchaseInput>
    create: XOR<CartCreateWithoutPurchaseInput, CartUncheckedCreateWithoutPurchaseInput>
  }

  export type CartUpdateWithWhereUniqueWithoutPurchaseInput = {
    where: CartWhereUniqueInput
    data: XOR<CartUpdateWithoutPurchaseInput, CartUncheckedUpdateWithoutPurchaseInput>
  }

  export type CartUpdateManyWithWhereWithoutPurchaseInput = {
    where: CartScalarWhereInput
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyWithoutPurchaseInput>
  }

  export type CartCreateManyUserInput = {
    id?: number
    status?: $Enums.CartStatus
    description?: string | null
    totalValue: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    purchaseId?: number | null
  }

  export type CartUpdateWithoutUserInput = {
    status?: EnumCartStatusFieldUpdateOperationsInput | $Enums.CartStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CartItemUpdateManyWithoutCartNestedInput
    purchase?: PurchaseHistoryUpdateOneWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumCartStatusFieldUpdateOperationsInput | $Enums.CartStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseId?: NullableIntFieldUpdateOperationsInput | number | null
    items?: CartItemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumCartStatusFieldUpdateOperationsInput | $Enums.CartStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateManyInternalAccountInput = {
    id?: number
    name: string
    cpf: string
    password: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RechargeHistoryCreateManyInternalAccountInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type UserUpdateWithoutInternalAccountInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carts?: CartUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInternalAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carts?: CartUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutInternalAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RechargeHistoryUpdateWithoutInternalAccountInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RechargeHistoryUncheckedUpdateWithoutInternalAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RechargeHistoryUncheckedUpdateManyWithoutInternalAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemCreateManyProductInput = {
    cartId: number
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
  }

  export type CartItemUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cart?: CartUpdateOneRequiredWithoutItemsNestedInput
  }

  export type CartItemUncheckedUpdateWithoutProductInput = {
    cartId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CartItemUncheckedUpdateManyWithoutProductInput = {
    cartId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CartItemCreateManyCartInput = {
    productId: number
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
  }

  export type CartItemUpdateWithoutCartInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product?: ProductUpdateOneRequiredWithoutCartItemsNestedInput
  }

  export type CartItemUncheckedUpdateWithoutCartInput = {
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CartItemUncheckedUpdateManyWithoutCartInput = {
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CartCreateManyPurchaseInput = {
    id?: number
    status?: $Enums.CartStatus
    description?: string | null
    totalValue: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type CartUpdateWithoutPurchaseInput = {
    status?: EnumCartStatusFieldUpdateOperationsInput | $Enums.CartStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCartsNestedInput
    items?: CartItemUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutPurchaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumCartStatusFieldUpdateOperationsInput | $Enums.CartStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    items?: CartItemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateManyWithoutPurchaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumCartStatusFieldUpdateOperationsInput | $Enums.CartStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}